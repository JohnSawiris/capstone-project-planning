import types from './../constants';

export default (state = {}, action) => {
  let newState;

  switch (action.type) {
    case types.USER_LOGGEDOUT:
    newState = Object.assign({}, state, {
      user: action.user
    });
    return newState;

    case types.USER_LOGGEDIN:
      newState = Object.assign({}, state, {
        user: action.user
      });
      return newState;
    default:
      return state;
  }
}
