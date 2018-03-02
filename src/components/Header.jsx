import React from 'react';
import { Link } from 'react-router-dom';
//components
import SearchBar from './SearchBar';
//images
import malePushUp from './../assets/images/push-up-male.png';
import femalePushUp from './../assets/images/push-up-female.png';
//firebase
import { firebaseApp } from './../actions';
import Firebase from 'firebase';

function Header(props) {
    let content;
    let currentUser = firebaseApp.auth().currentUser;
    function handleSigningOut() {
      firebaseApp.auth().signOut();
      currentUser = null;
    }


    console.log('CURRENT USER ', currentUser);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log('current user', user);
        currentUser = user;
      } else {
        // No user is signed in.
        console.log('is not sign in', user);
        currentUser = user;
      }
  });

  return(
    <header className="head">
      <div className="logo">
        <img src={malePushUp} />
        <img src={femalePushUp} />
      </div>
        {

          (currentUser) ?
          <nav className="navbar">
            <SearchBar />
            <Link to="/" onClick={handleSigningOut}>Sign Out</Link>
          </nav>
          :
          <nav className="navbar">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
        }
    </header>
  );
}

export default Header;
