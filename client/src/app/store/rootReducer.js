import {combineReducers} from 'redux';
import {Exercise, Workout, Routine, User, Auth} from './index'

const rootReducer = combineReducers({
  exercises: Exercise.reducer, 
  workouts: Workout.reducer,
  routines: Routine.reducer,
  user: User.reducer,
  session: Auth.reducer
})

export default rootReducer;