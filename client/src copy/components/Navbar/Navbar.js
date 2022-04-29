import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { pageState } from 'react'
import { setPageState } from 'react'



const ButtonAppBar = ({ pageState, setPageState }) => {

  const handleOpenCurrentPosts = () => {
    setPageState({ ...pageState, CurrentPosts: true, Catagories: false, MyPosts: false, Login: false, Signup: false })
  }

  const handleOpenCatagories = () => {
    setPageState({ ...pageState, CurrentPosts: false, Catagories: true, MyPosts: false, Login: false, Signup: false })
  }

  const handleOpenMyPosts = () => {
    setPageState({ ...pageState, CurrentPosts: false, Catagories: false, MyPosts: true, Login: false, Signup: false })
  }

  const handleOpenLogin = () => {
    setPageState({ ...pageState, CurrentPosts: false, Catagories: false, MyPosts: false, Login: true, Signup: false })
  }

  // const handleOpenSignup = () => {
  //   setPageState({ ...pageState, CurrentPosts: false, Catagories: false, MyPosts: false, Login: false, Signup: true })
  // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            Brick Blog
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            <Button color="inherit" onClick={handleOpenCurrentPosts}>Current Posts</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            <Button color="inherit" onClick={handleOpenMyPosts}>My Posts</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" onClick={handleOpenCatagories}>Categories</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            <Button color="inherit" onClick={handleOpenLogin}>Login</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            <Button color="inherit" onClick={handleOpenSignup}>Signup</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;