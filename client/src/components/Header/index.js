import React from 'react';
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';
import '../../Main.css';

import Auth from '../../utils/auth';

const Header = () => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center" >
      <div className="container justify-space-between-lg" justify-center align-center text-center>
        <container class="topContainer">
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
        {/* <Link className="text-dark" to="/Single">
          <h1 className="m-0" style={{ fontSize: '2rem' }}>
            Single
          </h1>
        </Link> */}
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
        {/* <Link className="text-dark" to="/Signup">
          <h1 className="m-0" style={{ fontSize: '2rem' }}>
            Signup
          </h1>
        </Link>
        <Link className="text-dark" to="/Login">
        <Link className="text-dark" to="/Categories">
          <h1 className="m-0" style={{ fontSize: '2rem' }}>
            Categories
          </h1>
        </Link> */}
        </container>
      </div>
    </header>
  );
};

export default Header;

