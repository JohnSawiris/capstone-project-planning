import types from './../constants';

export default (state = {}, action) => {
  let newState;
  let user;

  switch (action.type) {
    case types.USER_LOGGEDOUT:
    user = Object.assign({}, state[action.user], {
      user: action.user
    })
    newState = Object.assign({}, state, {
      user: user
    });
    return newState;

    case types.USER_LOGGEDIN:
      user = Object.assign({}, state[action.user], {
        user: action.user
      })
      newState = Object.assign({}, state, {
        user: user
      });
      return newState;
    default:
      return state;
  }
}
