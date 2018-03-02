import { combineReducers } from 'redux';
import removeExerciseReducer from './removeExerciseReducer';
import userLoggedInReducer from './userLoggedInReducer';

const rootReducer = combineReducers({
  user: userLoggedInReducer
})

export default rootReducer;
