import constants  from './../constants';
const { types } = constants;

const displayingExercisesReducer = (state = {}, action) => {
  let newState;
  let newExercise;

  switch (action.type) {
    case types.REQUESTING_EXERCISES:
      newState = Object.assign({}, state, {
        fetchExercises: true
      });
      return newState;
    case types.RECEIVING_EXERCISES:
      const { name, category, description, id } = action;
      newExercise = {
        name: name,
        category: category,
        description: description,
        id: id
      };
      newState = Object.assign({}, state, {
        [id]: newExercise,
        fetchExercises: false
      });
      return newState;
    default:
      return state;
  }
}

export default displayingExercisesReducer;
