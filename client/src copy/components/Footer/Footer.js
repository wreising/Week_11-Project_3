import React from 'react'
import Grid from '@mui/material/Grid'
import { color } from '@mui/system';

const style = {
  backgroundColor: "#2196f3",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "40px",
  width: "100%",
  color: "white"
};

export default function App() {
  return (
    <div>
      <div style={style}>© 2022 - Reising, Sandfer, Nguy, Hsu</div>
    </div>
  );
}