import * as types from './exercisesTypes'; 
import API from '../api/api'

// pass the API we're using, the action, and success callback
export function dispatchAction(action, data) {
  return function(dispatch){
    return actions[action](data).then( response => {
   
      console.log(`%c ${action} SUCCESS`, 'color: green', response)

      dispatch(reducerAction(action, response))

    }).catch(error =>{
      throw(error);
    })
  }
}

// generic action we'll pass to our reducer
export function reducerAction(action, data) { 
  return {type: types[action], data};
}

const actions = {
  createExercise: createExercise
}

function createExercise(exercise){
  var resource = {name: 'exercise', data: exercise}
  return API.$post('/exercises', resource)
}