import Resource from '../api/resource'
// for strong params in Rails
const Exercise =  new Resource('exercise', '/exercises')

const actions = {
  queryExercises: queryExercises,
  getExercise: getExercise,
  createExercise: createExercise,
  updateExercise: updateExercise,
  deleteExercise: deleteExercise
}

function queryExercises(){
  return Exercise.$query()
}

function getExercise(exercise){
  return Exercise.$get(exercise.id)
}

function createExercise(exercise){
  return Exercise.$post(exercise)
}

function updateExercise(exercise){
  return Exercise.$patch(exercise)
}

function deleteExercise(exercise){
  return Exercise.$delete(exercise.id)
}