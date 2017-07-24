import Resource from 'r3-library'
import API from '../api/api'

var res = Resource;
const url = API.base + '/exercises'

const Exercise = new Resource('exercise', url, API.headers)
  .registerDefaults()
  .registerNewAction(url + '/:id', 'getExercise', 'GET', function(state, action){
    return state;
  });

export default Exercise;

