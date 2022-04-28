const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

const mongodb = require('mongodb').MongoClient

const connectionStringURI = `mongodb://localhost:27017/brickdb`

mongodb.connect(
  connectionStringURI,
  {useNewIrlParser: true, useUnifiedTopology: true},
  (err, client) => {
    db = client.db()
    app.listen(port, () => {
      console.log(`BrickBlog listening at http://localhost:${port}`)
    })
  }
)

app.post('/create', (req, res) => {
  db.collection('brickdb').insertOne(
    { title: req.body.title, 
      keyWords: req.body.keyWords,
      creator: req.body.creator,
      date: Date().toLocaleDateString,
      description: req.body.description,
     },
    (err, results) => {
      if (err) throw err
      res.json(results)
    }
  );
});

app.get('/read', (req, res) => {
  db.collection('brickdb'
    .find({})
    .toArray((err, results) => {
      if (err) throw err
      res.send(results)
    })
  )
})