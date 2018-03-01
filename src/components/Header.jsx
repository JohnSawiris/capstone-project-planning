import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

//images
import malePushUp from './../assets/images/push-up-male.png';
import femalePushUp from './../assets/images/push-up-female.png';

function Header() {
    return(
      <header className="head">
        <style jsx>{`
            .head {
              display: flex;
              justify-content: space-between;
              width: 100;
              background-color: #000;
            }
            .logo {
              display: flex;
              width: 50px;
              height: 50px;
              margin-left: 1rem;
            }
            .logo img {
              filter: brightness(400%);
            }
            .navbar {
              display: flex;
              justify-content: center;
              margin-right: 1rem;
            }

            `}</style>
          <style jsx global>{`
            .navbar a {
              font-family: 'Raleway', sans-serif;
              text-decoration: none;
              padding: 1rem;
              color: #eee;
              font-weight: 500;
              transition: background-color 0.3s ease-in-out;
            }
            .navbar a:hover {
              background-color: #222;
            }
            `}</style>
        <div className="logo">
          <img src={malePushUp} />
          <img src={femalePushUp} />
        </div>
        <nav className="navbar">
          <SearchBar />
          <Link to="/signin">Sign In</Link>
          <a href="#">Sign Up</a>
        </nav>
      </header>
    );
}

export default Header;
