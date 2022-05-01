import React from 'react'
import "../../Main.css"

const style = {
  backgroundColor: "rgb(242 94 101)",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  bottom: "0",
  height: "40px",
  width: "100%",
  color: "black",
  marginLeft: "auto",
  marginRight: "auto",
};

export default function App() {
  return (
    <div>
      <div style={style}>© 2022 - Reising, Sandfer, Nguy, Hsu</div>
    </div>
  );
}



