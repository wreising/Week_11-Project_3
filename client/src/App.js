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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'

function App() {
  return (
    <>
    <Navbar />
   
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route exact path="/">
            <CurrentPosts />
          </Route>
          <Route path="/myposts">
            <MyPosts />
          </Route>
        </Routes>
      {/* </Layout> */}
    </Router>
    </>
  );
}

export default App;


// import { createMuiTheme, ThemeProvider } from '@material-ui/core'
// import { purple } from '@material-ui/core/colors'

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#fefefe'
//     },
//     secondary: purple
//   },
//   typography: {
//     fontFamily: 'Quicksand',
//     fontWeightLight: 400,
//     fontWeightRegular: 500,
//     fontWeightMedium: 600,
//     fontWeightBold: 700,
//   }
// })


// function App() {

//   const [pageState, setPageState] = useState({
//     Catagories: false,
//     MyPosts: false,
//     CurrentPosts: true,
//     Signup: false,
//     Login: false
//   })

//   return (
//     <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <Navbar pageState={pageState} setPageState={setPageState} />
//     {pageState.CurrentPosts ? <CurrentPosts /> : ''}
//     {pageState.Catagories ? <Catagories /> : ''}
//     {pageState.MyPosts ? <MyPosts /> : ''}
//     {pageState.Signup ? <Signup /> : ''}
//     {pageState.Login ? <Login /> : ''}
//     <Footer />
//     </ThemeProvider>
//   )
// }

// export default App;

