import {combineReducers} from 'redux';
import exercises from '../exercises/exercisesReducer';
import workouts from '../workouts/workoutsReducer';
import session from '../_auth/authReducer';


const rootReducer = combineReducers({
  exercises, 
  workouts,
  session
})

export default rootReducer;