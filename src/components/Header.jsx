import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';

//images
import malePushUp from './../assets/images/push-up-male.png';
import femalePushUp from './../assets/images/push-up-female.png';
//firebase
import { firebaseApp, isUserLoggedIn, isUserLoggedOut } from './../actions';

function Header(props) {

  let content;

  if(props.user) {
    console.log('logged');
    content = <nav className="navbar">
      <SearchBar />
      <a onClick={handleSignOut}>Sign Out</a>
    </nav>
  } else {
    console.log('logged out');
    content = <nav className="navbar">
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  }

  return(
    <header className="head">
      <div className="logo">
        <img src={malePushUp} />
        <img src={femalePushUp} />
      </div>
        {content}
    </header>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Header);
