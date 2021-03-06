import constants  from './../constants';
const { types } = constants;

const displayingUserReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case types.SET_USER:
      console.log(action);
      newState = Object.assign({}, state, {
          user: action.firebaseUser,
          isFetching: false,
          exercises: action.exercises,
          displayName: action.displayName
      });
      return newState;
    case types.REQUESTING_DATA:
      newState = Object.assign({}, state, {
          isFetching: true
      });
      return newState;
    default:
      return state;
  }
}

export default displayingUserReducer;
