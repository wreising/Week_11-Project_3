import React from 'react';
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container  justify-space-between-lg justify-center align-center text-center">
        {/* Use Link component to create a link that returns to the homepage on click */}
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '2rem' }}>
            Current Posts
          </h1>
        </Link>
        <Link className="text-dark" to="/MyPosts">
          <h1 className="m-0" style={{ fontSize: '2rem' }}>
            MyPosts
          </h1>
        </Link>
        <Link className="text-dark" to="/Catagories">
          <h1 className="m-0" style={{ fontSize: '2rem' }}>
            Catagories
          </h1>
        </Link>
        <Link className="text-dark" to="/Single">
          <h1 className="m-0" style={{ fontSize: '2rem' }}>
            Single
          </h1>
        </Link>
        <Link className="text-dark" to="/Signup">
          <h1 className="m-0" style={{ fontSize: '2rem' }}>
            Signup
          </h1>
        </Link>
        <Link className="text-dark" to="/Login">
          <h1 className="m-0" style={{ fontSize: '2rem' }}>
            Login
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
