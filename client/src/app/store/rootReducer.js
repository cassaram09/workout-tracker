import {combineReducers} from 'redux';
import exercises from '../exercises/exercisesReducer';
import workouts from '../workouts/workoutsReducer';

const rootReducer = combineReducers({
  exercises, 
  workouts
})

export default rootReducer;