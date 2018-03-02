import constants from './../constants';
const { firebaseConfig } = constants;
import Firebase from 'firebase';

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const users = firebase.database().ref('users');


export default function addNewUser(_name, _email, _password) {
  return () => users.push({
    name: _name,
    location: _email,
    password: _password
  })
}
