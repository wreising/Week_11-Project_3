import React from 'react'
import Grid from '@mui/material/Grid'
import './Footer.css'

// const Footer = () => {
//   return (
//     <Grid container spacing={3}>
//       <Grid item xs={12}>
//         <p class="footer">
//           © 2022 Brick Blog
//         </p>
//       </Grid>
//     </Grid>
//   )
// }

// export default Footer

// import React from "react";

const style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

export default function App() {
  return (
    <div>
      <div style={style}>© 2022 - Reising, Sandfer, </div>
    </div>
  );
}