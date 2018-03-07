import constants  from './../constants';
const { types } = constants;

const displayingExercisesReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case REQUESTING_EXERCISES:
      newState = Object.assign({}, state, {
        fetchExercises: true
      });
      return newState;
    default:
      return state;
  }
}
