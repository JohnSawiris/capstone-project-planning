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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  handleSigningOut() {
    firebaseApp.auth().signOut().then(() => {
    });
  }

  componentWillMount() {
    console.log('CURRENT USER ', this.state.currentUser);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log('current user', user);
        this.setState({ currentUser: user });
      } else {
        // No user is signed in.
        console.log('is not sign in', user);
        this.setState({ currentUser: null });
      }
    });
  }

  render() {
    return(
      <header className="head">
        <div className="logo">
          <img src={malePushUp} />
          <img src={femalePushUp} />
        </div>
          {
            (this.state.currentUser != null)?
              <nav className="navbar">
                <SearchBar />
                <Link to="/" onClick={this.handleSigningOut}>Sign Out</Link>
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
}

export default Header;
