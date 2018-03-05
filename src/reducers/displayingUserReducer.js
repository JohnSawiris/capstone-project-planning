import constants  from './../constants';
const { types } = constants;

const displayingUserReducer = (state = {}, action) => {
  let newState;
  let newExercises;

  switch (action.type) {
    case types.SET_USER:
      console.log(action);
      newState = Object.assign({}, state, {
        isFetching: false,
        user: action.firebaseUser,
        exercises: action.exercises
      });
      return newState;
    case types.REQUESTING_DATA:
      newState = Object.assign({}, state, {
        isFetching: true
      });
      return newState;
    case types.USER_LOGGEDOUT:
      newState = Object.assign({}, state, {
        user: action.user
      });
      return newState;
    default:
      return state;
  }
}

export default displayingUserReducer;
