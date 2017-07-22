import Resource from '../api/resource'
import API from '../api/api'

const url = API.base + '/exercises'

const Exercise = new Resource('exercise', url, API.headers).registerDefaults();

Exercise.registerNewAction(url + '/:id', 'getExercise', 'GET', function(state, action){
  console.log('GET EXERCISE it worked')
  return state;
})

export default Exercise;

