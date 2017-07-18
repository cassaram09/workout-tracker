import * as types from './exercisesTypes'
import initialState from '../store/initialState'
import {browserHistory} from 'react-router';

export default function exercisesReducer(state = initialState.exercises, action) {
  switch(action.type){
    case types.createExercise:
      console.log(types.createExercise)
      // expect one Cat object
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