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

function App() {

  const [pageState, setPageState] = useState({
    Catagories: true,
    MyPosts: false,
    CurrentPosts: false,
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

