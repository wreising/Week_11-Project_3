import React from 'react'

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


// import React from 'react';
// // Import hooks from React Router
// import { useLocation, useHistory } from 'react-router-dom';

// const Footer = () => {
//   // We retrieve the current `location` object data from React Router
//   const location = useLocation();
//   // We get React Router's history object so we can access and adjust browser history
//   const history = useHistory();
//   return (
//     <footer className="w-100 mt-auto text-dark p-4">
//       <div className="container text-center mb-5">
//         {location.pathname !== '/' && (
//           <button
//             className="btn btn-dark mb-3"
//             // Go back to the previous page in our browser's history
//             onClick={() => history.goBack()}
//           >
//             &larr; Go Back
//           </button>
//         )}
//         <h4>&copy; {new Date().getFullYear()} - Tech Friends</h4>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
