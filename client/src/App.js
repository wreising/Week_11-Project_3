import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CurrentPosts from './pages/CurrentPost';
import Categories from './pages/Categories';
import Login from './pages/Login';
import MyPosts from './pages/MyPosts';
import Signup from './pages/Signup';
import Single from './pages/Single';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

// import './App.scss';
// import Dropdown from './components/Header/Dropdown.js';

// const items = [
//   {
//     id: 1,
//     value: 'Pulp Fiction',
//   },
//   {
//     id: 2,
//     value: 'The Prestige',
//   },
//   {
//     id: 3,
//     value: 'Blade Runner 2049',
//   },
// ];

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}
    >
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
          
            <Route exact path="/">
              <CurrentPosts />
            </Route>
            <Route exact path="/Categories">
              <Categories />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Signup">
              <Signup />
            </Route>
            <Route exact path="/MyPosts">
              <MyPosts />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
