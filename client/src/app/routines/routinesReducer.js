import initialState from '../_store/initialState'
import {browserHistory} from 'react-router';
import Routine from './routineResource'

const types = Routine.actionTypes;

const name = Routine.name.toUpperCase()

export default function routinesReducer(state = initialState.routines, action) {
  switch(action.type){
    case types.query:
      console.log(`%c ${name} QUERY SUCCESSFUL`, 'color: blue')
      return action.data;
    case types.get:
      console.log(`%c ${name} GET SUCCESSFUL`, 'color: blue')
      browserHistory.push(`/routines/${action.data.id}`);
      return addRoutine(state, action);
    case types.update:
      console.log(`%c ${name} UPDATE SUCCESSFUL`, 'color: blue')
      return addRoutine(state, action);
    case types.create:
      console.log(`%c ${name} CREATE SUCCESSFUL`, 'color: blue')
      browserHistory.push(`/routines/${action.data.id}`);
      return addRoutine(state, action);
    case types.delete:
      console.log(`%c ${name} DELETE SUCCESSFUL`, 'color: blue')
      const newState = Object.assign([], state);
      const indexToDelete = state.findIndex(routine => {
        return routine.id == action.data.id
      })
      newState.splice(indexToDelete, 1);
      browserHistory.push('/routines');
      return newState;
    case types.myCustomAction:
      console.log("it worked!")
      return state;
    default:
      return state;
  }
}

function addRoutine(state, action) {
  return [
        ...state.filter(routine => routine.id !== action.data.id),
        Object.assign({}, action.data)
      ]
}