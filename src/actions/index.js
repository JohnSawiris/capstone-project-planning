import Firebase from 'firebase';
import constants from './../constants'
const { firebaseConfig, types } = constants;

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const users = firebase.database().ref('users');

// Actions creators
export const isUserLoggedIn = (user) => {
  console.log(user);
  return {
    type: types.USER_LOGGEDIN,
    user: user
  }
}

export const isUserLoggedOut = (user) => {
  console.log(user);
  return {
    type: types.USER_LOGGEDOUT,
    user: user
  }
}

// Firebase actions
export default function addNewUser(_name, _email, _password) {
  return () => users.push({
    name: _name,
    location: _email,
    password: _password
  })
}
