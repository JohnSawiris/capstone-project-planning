import Firebase from 'firebase';
import constants from './../constants'
const { firebaseConfig, types } = constants;
console.log(types);
export const firebaseApp = firebase.initializeApp(firebaseConfig);

const users = firebase.database().ref('users');

// Actions creators
export const isUserLoggedIn = (user) => {
  return {
    type: types.USER_LOGGEDIN,
    user
  }
}

export const isUserLoggedOut = (user) => {
  return {
    type: types.USER_LOGGEDOUT,
    user
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
