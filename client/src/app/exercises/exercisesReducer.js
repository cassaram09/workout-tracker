import initialState from '../_store/initialState'
import {browserHistory} from 'react-router';
import Exercise from './exerciseResource'

const types = Exercise.actionTypes;

const name = Exercise.name.toUpperCase()

export default function exercisesReducer(state = initialState.exercises, action) {
  switch(action.type){
    case types.query:
      console.log(`%c ${name} QUERY SUCCESSFUL`, 'color: blue')
      return action.data;
    case types.get:
      console.log(`%c ${name} GET SUCCESSFUL`, 'color: blue')
      browserHistory.push(`/exercises/${action.data.id}`);
      return addExercise(state, action);
    case types.update:
      console.log(`%c ${name} UPDATE SUCCESSFUL`, 'color: blue')
      return addExercise(state, action);
    case types.create:
      console.log(`%c ${name} CREATE SUCCESSFUL`, 'color: blue')
      browserHistory.push(`/exercises/${action.data.id}`);
      return addExercise(state, action);
    case types.delete:
      console.log(`%c ${name} DELETE SUCCESSFUL`, 'color: blue')
      const newState = Object.assign([], state);
      const indexToDelete = state.findIndex(exercise => {
        return exercise.id == action.data.id
      })
      newState.splice(indexToDelete, 1);
      browserHistory.push('/exercises');
      return newState;
    case types.myCustomAction:
      console.log("it worked!")
      return state;
    default:
      return state;
  }
}

function addExercise(state, action) {
  return [
        ...state.filter(exercise => exercise.id !== action.data.id),
        Object.assign({}, action.data)
      ]
}