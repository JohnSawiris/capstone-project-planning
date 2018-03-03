import displayingUserReducer from './../../src/reducers/displayingUserReducer';
import constants from './../../src/constants';
const { types } = constants;


describe('displayingUserReducer', () => {
  let user;
  test('It should return an empty object', ()=> {
    expect(displayingUserReducer({}, {type: null})).toEqual({});
  });//test one

});//describe
