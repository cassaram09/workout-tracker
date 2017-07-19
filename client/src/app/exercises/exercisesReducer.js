import initialState from '../store/initialState'
import {browserHistory} from 'react-router';
import Exercise from './exerciseResource'

const types = Exercise.actionTypes;

export default function exercisesReducer(state = initialState.exercises, action) {
  switch(action.type){
    case types.query:
      return action.data;
    case types.get:
      browserHistory.push(`/exercises/${action.data.id}`);
      return addExercise(state, action);
    case types.update:
      return state;
    case types.create:
      browserHistory.push(`/exercises/${action.data.id}`);
      return addExercise(state, action);
    case types.delete:
      // expect one Cat object
      const newState = Object.assign([], state);
      const indexToDelete = state.findIndex(exercise => {
        return exercise.id == action.data.id
      })
      newState.splice(indexToDelete, 1);
      browserHistory.push('/exercises');
      return newState;
    default:
      return state;
  }
}

function addExercise(state, action) {
  return [
        ...state.filter(cat => cat.id !== action.data.id),
        Object.assign({}, action.data)
      ]
}