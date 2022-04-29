import React from 'react';
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-info text-dark mb-4 py-3 align-center">
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
        <Link className="text-dark" to="/Categories">
          <h1 className="m-0" style={{ fontSize: '2rem' }}>
            Categories
          </h1>
        </Link>
        <div>
          {Auth.loggedIn() ? (
            <>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/Login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

