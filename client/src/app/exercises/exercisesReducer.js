import initialState from '../store/initialState'
import {browserHistory} from 'react-router';
import Exercise from './exerciseResource'

export default function exercisesReducer(state = initialState.exercises, action) {
  switch(action.type){
    case Exercise.actionTypes.create:
      browserHistory.push(`/exercises/${action.data.id}`);
      return addExercise(state, action);
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