import * as types from './exercisesTypes'
import initialState from '../store/initialState'
import {browserHistory} from 'react-router';

export default function exercisesReducer(state = initialState.exercises, action) {
  switch(action.type){
    default:
      return state;
  }
}