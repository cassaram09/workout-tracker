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

// for strong params in Rails
const resourceName = 'exercise'

const actions = {
  queryExercises: queryExercises,
  getExercise: getExercise
  createExercise: createExercise
  updateExercise: updateExercise,
  deleteExercise: deleteExericse
}

function queryExercises(){
  return API.$query('/exercises')
}

function getExercise(exercise){
  var resource = {name: 'exercise', data: exercise}
  return API.$post('/exercises', resource)
}

function createExercise(exercise){
  var resource = {name: 'exercise', data: exercise}
  return API.$post('/exercises', resource)
}

function updateExercise(exercise){
  var resource = {name: 'exercise', data: exercise}
  return API.$patch('/exercises', resource)
}

function deleteExercise(exercise){
  var resource = {name: 'exercise', data: exercise}
  return API.$delete('/exercises', resource)
}