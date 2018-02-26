import removeExerciseReducer from './../../src/reducers/remove-exercise-reducer';
import exercises from './../../src/constants/InitialState';

describe('removeExerciseReducer', () => {
  let action;
  test('It should return default state if no action is recognized', () => {
    expect(removeExerciseReducer({}, { type: null })).toEqual({});
  }); // default state if no action recognized

});
