import React from 'react'
import Grid from '@mui/material/Grid'

const Window = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Brick Blog</h1>
        <h3>All content goes in this window</h3>
        <h3>This window is controlled by the Navbar items</h3>
      </Grid>
    </Grid>
  )
}

export default Window