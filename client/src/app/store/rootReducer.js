import {combineReducers} from 'redux';
import exercises from '../exercises/exercisesReducer';

const rootReducer = combineReducers({
  exercises
})

export default rootReducer;