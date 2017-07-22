import {combineReducers} from 'redux';
import Exercise from '../exercises/exerciseResource';
import workouts from '../workouts/workoutsReducer';
import session from '../_auth/authReducer';
import routines from '../routines/routinesReducer';
import user from '../users/userReducer';

const rootReducer = combineReducers({
  exercises: Exercise.reducer, 
  // workouts,
  // routines,
  // user,
  session
})

export default rootReducer;