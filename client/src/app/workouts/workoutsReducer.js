import initialState from '../store/initialState'
import {browserHistory} from 'react-router';
import Workout from './workoutResource'

const types = Workout.actionTypes;

export default function workoutsReducer(state = initialState.workouts, action) {
  switch(action.type){
    case types.query:
      console.log('query succesful')
      return action.data;
    case types.get:
      browserHistory.push(`/workouts/${action.data.id}`);
      return addWorkout(state, action);
    case types.update:
      return addWorkout(state, action);
    case types.create:
      browserHistory.push(`/workouts/${action.data.id}`);
      return addWorkout(state, action);
    case types.delete:
      // expect one Cat object
      const newState = Object.assign([], state);
      const indexToDelete = state.findIndex(workout => {
        return workout.id == action.data.id
      })
      newState.splice(indexToDelete, 1);
      browserHistory.push('/workouts');
      return newState;
    default:
      return state;
  }
}

function addWorkout(state, action) {
  return [
        ...state.filter(workout => workout.id !== action.data.id),
        Object.assign({}, action.data)
      ]
}