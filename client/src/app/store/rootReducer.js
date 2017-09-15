import {combineReducers} from 'redux';

import Exercise from '../modules/exercises/exerciseResource';
import Workout from '../modules/workouts/workoutResource';
import User from '../modules/user/userResource';
import Auth from '../modules/auth/authResource';

const rootReducer = combineReducers({
  exercises: Exercise.reducer, 
  workouts: Workout.reducer,
  user: User.reducer,
  session: Auth.reducer
})

export default rootReducer;