import {combineReducers} from 'redux';
import exercises from '../exercises/exercisesReducer';
import workouts from '../workouts/workoutsReducer';
import session from '../_auth/authReducer';
import routines from '../routines/routinesReducer';



const rootReducer = combineReducers({
  exercises, 
  workouts,
  routines,
  session
})

export default rootReducer;