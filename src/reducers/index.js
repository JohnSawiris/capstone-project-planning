import displayingUserReducer from './displayingUserReducer';
import displayingExercisesReducer from './displayingExercisesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: displayingUserReducer,
  apiExercises: displayingExercisesReducer
});

export default rootReducer;
