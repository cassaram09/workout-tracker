import {combineReducers} from 'redux';
import Exercise from '../exercises/exerciseResource';
import Workout from '../workouts/workoutResource';
import session from '../_auth/authReducer';
import Routine from '../routines/routineResource';
import User from '../users/userResource';

const rootReducer = combineReducers({
  exercises: Exercise.reducer, 
  workouts: Workout.reducer,
  routines: Routine.reducer,
  user: User.Reducer,
  session
})

export default rootReducer;