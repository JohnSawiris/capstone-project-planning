import React from 'react';

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
          .navbar {
            display: flex;
            justify-content: center;
            margin-right: 1rem;
          }
          .navbar a {
            font-family: 'Raleway', sans-serif;
            text-decoration: none;
            padding: 1rem;
            color: #666;
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
        <a href="#">Sign In</a>
        <a href="#">Sign Up</a>
      </nav>
    </header>
  );
}

export default Header;
