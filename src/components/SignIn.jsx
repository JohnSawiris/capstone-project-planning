import React from 'react';
import { connect } from 'react-redux';
// Icons
import TiUserOutline from 'react-icons/lib/ti/user-outline';
import FaUnlockAlt from 'react-icons/lib/fa/unlock-alt';
// Images
import signinBg from './../assets/images/signin.jpg';
//Firebase
import { firebaseApp, isUserLoggedIn, isUserLoggedOut } from './../actions';

const icons  = {
  color: 'rgba(0, 188, 212, 0.8)',
  display: 'inline-block',
  margin: '1rem',
  fontSize: '2.4rem'
}


function SignIn(props) {
  console.log(props);
  let _email = null;
  let _password = null;

  function handleSignIn(email, password) {
    const { history, dispatch } = props;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(isUserLoggedIn(true));
      history.push('/profile');
    })
    .catch(error => {
      console.log(error);
      dispatch(isUserLoggedOut(false));
      history.push('/signin');
    })
  }
  return(
    <div className="form-wrap">
    <form className="form">
      <h1>Sing In</h1>
        <div className="input-group">
          <div className="input-wrap">
            <TiUserOutline style={icons} />
            <input
              type="text"
              placeholder="email"
              ref={(input) => {_email = input}} />
          </div>
          <div className="input-wrap">
            <FaUnlockAlt style={icons} />
            <input
              type="password"
              placeholder="Password"
              ref={(input) => {_password = input}} />
          </div>
        </div>
        <button
          type="submit"
          className="signin"
          onClick={() => handleSignIn(_email.value, _password.value)}>Sign In</button>
      </form>
    </div>
  );
}

export default connect()(SignIn);
