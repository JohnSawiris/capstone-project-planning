import Firebase from 'firebase';
import constants from './../constants'
const { firebaseConfig, types } = constants;

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const users = firebase.database().ref('users');

// Firebase actions
export default function addNewUser(_name, _email, _password) {
  return () => users.push({
    name: _name,
    location: _email,
    password: _password
  })
}
