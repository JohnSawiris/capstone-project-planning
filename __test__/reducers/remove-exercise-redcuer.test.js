import removeExerciseReducer from './../../src/reducers/remove-exercise-reducer';

describe('removeExerciseReducer', () => {

  test('It should return default state if no action is recognized', () => {
    expect(removeExerciseReducer({}, { type: null })).toEqual({});
  }); // default state if no action recognized

  test('It should add a new entry', () => {
    
  });
});
