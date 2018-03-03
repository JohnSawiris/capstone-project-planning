import Firebase from 'firebase';
import constants from './../constants';
const { firebaseConfig, types } = constants;

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const users = firebase.database().ref('users');

export function setUserToDisplay(firebaseUser) {
	return {
		type: types.SET_USER,
		firebaseUser,
		id: firebaseUser.id
	}
}

export function fetchingData() {
	return {
		type: types.IS_FETCHING,
		isFetching: true
	}
}

// Firebase actions
export function fetchUserData(userId) {
	return (dispatch) => {
		dispatch(fetchingData());
		return users.on('value', (snapshot) => {
			const snapshotValues = snapshot.val();
			Object.values(snapshotValues).map(user => {
				let databaseUId = user.id;
				if(userId === databaseUId) {
					dispatch(setUserToDisplay(user));
				} else {
					console.log(userId, 'Is NOT equal ', databaseUId);
				}
			});
		});
	}
}

export function addNewUser(_name, _email, _password, id) {
	return () => users.push({
		displayName: _name,
		email: _email,
		password: _password,
    id: id,
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
