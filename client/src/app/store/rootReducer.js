import {combineReducers} from 'redux';
import exercises from '../exercises/exercisesReducer';
import workouts from '../workouts/workoutsReducer';
import sessions from '../_auth/sessionReducer';


const rootReducer = combineReducers({
  exercises, 
  workouts,
  sessions
})

export default rootReducer;