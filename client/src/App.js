import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
import CurrentPosts from './pages/CurrentPost';
import Catagories from './pages/Catagories';
import Login from './pages/Login';
import MyPosts from './pages/MyPosts';
import Signup from './pages/Signup';
import Single from './pages/Single';
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Route exact path="/">
              <CurrentPosts />
            </Route>
            <Route exact path="/Catagories">
              <Catagories />
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
            <Route exact path="/Single">
              <Single />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
