import Firebase from 'firebase';
import constants from './../constants';
const { firebaseConfig, types } = constants;

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const users = firebase.database().ref('users');
const userKey = users.on('child_added', data => {
  console.log(data);
})
console.log(userKey );
// Firebase actions
export default function addNewUser(_name, _email, _password) {
	return () => users.push({
		displayName: _name,
		email: _email,
		password: _password,
		exercises: {
			0: {
				muscle: 'Abs',
				workoutRoutine: [
					'Plank',
					'Cruches',
					'Plank Again'
				]
			},
			1: {
				muscle: 'Shoulders',
				workoutRoutine: [
					'Upright',
					'Front barbell'
				]
			},
			2: {
				muscle: 'Arm',
				workoutRoutine: [
					'Barbell Curl',
					'Standing Biceps Cable Curl'
				]
			},
			3: {
				muscle: 'Chest',
				workoutRoutine: [
					'Barbell Bench Press',
					'Dips For Chest'
				]
			},
			4: {
				muscle: 'Back',
				workoutRoutine: [
					'Barbell Deadlift',
					'Wide-Grip Pull-Up'
				]
			}
		}
	});
}
