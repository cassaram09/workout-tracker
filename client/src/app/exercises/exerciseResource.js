import Resource from '../api/resource'
import API from '../api/api'

const url = API.base + '/exercises'

const headers = {
  'Content-Type': 'application/json',
  'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
}

const Exercise = new Resource('exercise', url, headers);

Exercise.registerAction(url + '/:id', 'getExercise', 'GET')

export default Exercise;

