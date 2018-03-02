import userLoggedInReducer from './../../src/reducers/userLoggedInReducer';
import types from './../../src/constants';

describe('userLoggedInReducer', () => {
  let action;
  test('It should return the default state if action type is null or not rexonfnized', () => {
    expect(userLoggedInReducer({}, { type: null })).toEqual({});
  });

  test('It should return a user', () => {
    action = {
      type: types.USER_LOGGEDIN,
      user: true
    }
    expect(userLoggedInReducer({}, action)).toEqual({
      user: true
    });
  });

  test('It should return user: false', () => {
    action = {
      type: types.USER_LOGGEDOUT,
      user: false
    }
    expect(userLoggedInReducer({}, action)).toEqual({
      user: false
    });
  });
})
