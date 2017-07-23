import {combineReducers} from 'redux';
import Exercise from '../exercises/exerciseResource';
import Workout from '../workouts/workoutResource';
import Auth from '../auth/authResource';
import Routine from '../routines/routineResource';
import User from '../users/userResource';

console.log(Auth)

const rootReducer = combineReducers({
  exercises: Exercise.reducer, 
  workouts: Workout.reducer,
  routines: Routine.reducer,
  user: User.reducer,
  session: Auth.reducer
})

export default rootReducer;