import Resource from 'r3-library'
import API from '../api/api'

const url = API.base + '/exercises'

const headers = {
  'Content-Type': 'application/json',
  'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
}

const Exercise = new Resource('exercise', url, headers);

Exercise.registerAction(url + '/:id', 'getExercise', 'GET', function(state, action){
  console.log('GET EXERCISE it worked')
  return state;
})

export default Exercise;

