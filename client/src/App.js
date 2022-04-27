import './App.css'
import { useState } from 'react'
import { pageState } from 'react'
import { setPageState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Catagories from './components/Catagories'
import MyPosts from './components/MyPosts'
import CurrentPosts from './components/CurrentPosts'
import Signup from './components/Signup'
import Login from './components/Login'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {

  const [pageState, setPageState] = useState({
    Catagories: false,
    MyPosts: false,
    CurrentPosts: true,
    Signup: false,
    Login: false
  })

  return (
    <>
      <CssBaseline />
      <Navbar pageState={pageState} setPageState={setPageState} />
      {pageState.CurrentPosts ? <CurrentPosts /> : ''}
      {pageState.Catagories ? <Catagories /> : ''}
      {pageState.MyPosts ? <MyPosts /> : ''}
      {pageState.Signup ? <Signup /> : ''}
      {pageState.Login ? <Login /> : ''}
      <Footer />
    </>
  )
}

export default App;

