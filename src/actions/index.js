import Firebase from 'firebase';
import constants from './../constants';
const { firebaseConfig, types } = constants;

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const users = firebase.database().ref('users');

users.on('value', (snapshot)=> {
	let values = snapshot.val();
	Object.values(values).map((value) => {
		console.log(value.id);

	});
});

export function removeExercise(userId) {
	users.on('value', (snapshot)=> {
		let values = snapshot.val();
		Object.values(values).map((value) => {
			console.log(value.id);
			if (userId === value.id) {
				console.log(value.id, ' IS EQUAL TO ', userId);
			}

		});
	});
};

export function requestingData() {
	return {
		type: types.REQUESTING_DATA
	};
};

export function setUserToDisplay(firebaseUser) {
	return {
		type: types.SET_USER,
		firebaseUser,
		id: firebaseUser.id,
		exercises: firebaseUser.exercises,
		displayName: firebaseUser.displayName
	};
};

export function requestingExercises() {
	return {
		type: types.REQUESTING_EXERCISES
	};
};

export function receivingExercises(name, category, description) {
	return {
		type: types.RECEIVING_EXERCISES,
		name,
		category,
		description
	};
};


//API Action
export function fetchExercises(searchTerm) {
	return function(dispatch) {
		dispatch(requestingExercises());
		return fetch('https://wger.de/api/v2/exerciseinfo/?language=2&status=2&limit=200').then(
			response => response.json(),
			err => console.log(err)
		).then(json => {
			if(json.results.length > 0) {
				console.log(json.results);
				json.results.map((result) => {
					let name = '';
					let category = '';
					let description = '';
					if(result.category.name == searchTerm) {
					  name = result.name;
					  category = result.category.name;
					  description = result.description.replace(/<[^>]*>/g, '');
						console.log('NAME', name, 'CATEGORY', category, 'DESC', description);
					} else {
						name = result.name;
					  category = result.category.name;
					  description = result.description.replace(/<[^>]*>/g, '');
						console.log(name, category, description);
					}
				});
			}
		});
	}
}

// Firebase actions
export function fetchUserData(userId) {
	return (dispatch) => {
		dispatch(requestingData());
		return users.on('value', (snapshot) => {
			const snapshotValues = snapshot.val();
			Object.values(snapshotValues).map(user => {
				let databaseUId = user.id;
				if(userId === user.id) {
					dispatch(setUserToDisplay(user));
				}
				// else {
				// 	console.log(userId, 'Is NOT equal ', databaseUId);
				// }
			});
		});
	};
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
