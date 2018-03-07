import displayingUserReducer from './displayingUserReducer';
import displayingExercisesReducer from './displayingExercisesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: displayingUserReducer,
  fetchExercises: displayingExercisesReducer
});

export default rootReducer;
