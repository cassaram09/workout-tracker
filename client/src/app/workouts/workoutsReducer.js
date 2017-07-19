import initialState from '../store/initialState'
import {browserHistory} from 'react-router';
import Workout from './workoutResource'

const types = Workout.actionTypes;

const name = Workout.name.toUpperCase()

export default function workoutsReducer(state = initialState.workouts, action) {
  switch(action.type){
    case types.query:
       console.log(`%c ${name} QUERY SUCCESSFUL`, 'color: blue')
      return action.data;
    case types.get:
      console.log(`%c ${name} GET SUCCESSFUL`, 'color: blue')
      browserHistory.push(`/workouts/${action.data.id}`);
      return addWorkout(state, action);
    case types.update:
       console.log(`%c ${name} UPDATE SUCCESSFUL`, 'color: blue')
      return addWorkout(state, action);
    case types.create:
       console.log(`%c ${name} CREATE SUCCESSFUL`, 'color: blue')
      browserHistory.push(`/workouts/${action.data.id}`);
      return addWorkout(state, action);
    case types.delete:
      console.log(`%c ${name} DELETE SUCCESSFUL`, 'color: blue')
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