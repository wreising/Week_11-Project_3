import React from 'react'
import Grid from '@mui/material/Grid'
import './Footer.css'

const Footer = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <p class="footer">
          © 2022 Brick Blog
        </p>
      </Grid>
    </Grid>
  )
}

export default Footer