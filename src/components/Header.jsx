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
  console.log(props);
  let content;

  function handleSignOut() {
    firebaseApp.auth().signOut();
    const { dispatch } = props;
    dispatch(isUserLoggedOut(false));
  };
  firebaseApp.auth().onAuthStateChanged(user => {
    const { dispatch } = props;
    if(user) {
      dispatch(isUserLoggedIn(true));
    } else {
      dispatch(isUserLoggedOut(false));
    }
  });

  if(props.user === true) {
    console.log('logged');
    console.log(props);
    content = <nav className="navbar">
      <SearchBar />
      <Link to="/" onClick={handleSignOut()}>Sign Out</Link>
    </nav>
  } else {
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
