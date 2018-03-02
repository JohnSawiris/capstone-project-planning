import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

//images
import malePushUp from './../assets/images/push-up-male.png';
import femalePushUp from './../assets/images/push-up-female.png';
import { firebaseApp } from './../actions';

function Header() {

  function handleSignOut() {
    firebaseApp.auth().signOut();
  };
  return(
    <header className="head">
      <div className="logo">
        <img src={malePushUp} />
        <img src={femalePushUp} />
      </div>
      <nav className="navbar">
        <SearchBar />
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/" onClick={handleSignOut()}>Sign Out</Link>
      </nav>
    </header>
  );
}

export default Header;
