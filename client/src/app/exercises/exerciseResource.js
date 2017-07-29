import Resource from 'r3-library'
import API from '../api/api'

var res = Resource;
const url = API.base + '/exercises'

const Exercise = new Resource('exercise', url, API.headers)
  .registerDefaults()
  .registerNewAction(url + '/:id', 'getExercise', 'GET', function(state, action){
    return state;
  });

Exercise.resourceActions.exercise_update_exercise = (data) => {
  var promise = new Promise((resolve, reject) => {
    resolve(data);
  });
  return promise; 
}

Exercise.addReducerAction('update_exercise', function(state, action){
  console.log(`%c EXERCIse update SUCCESSFUL`, 'color: blue')
  return action.data
})

var exercise = Exercise

export default Exercise;

