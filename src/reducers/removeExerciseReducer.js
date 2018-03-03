import exercises from './../constants/InitialState';

export default (state = exercises, action) => {
	switch (action.type) {
	case 'REMOVE_EXERCISE':
		let copyOfExercises = state.workoutRoutine[action.id].splice(action.index, 1);
		let copyOfState = Object.assing({}, state, {
			workoutRoutine: copyOfExercises
		});
		return copyOfState;
	default:
		return state;
	}
};
