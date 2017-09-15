import Resource from 'r3-library';
import {API} from '../../utils/constants';

const url = API.base + '/exercises'

const Exercise = new Resource('exercise', url, API.headers)
  .registerDefaults()
  .registerNewAction(url + '/:id', 'getExercise', 'GET', (state, action) => state );

Exercise.resourceActions.exercise_update_exercise = (data) => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

Exercise.addReducerAction('update_exercise', (state, action) => {
  console.log(`%c EXERCIse update SUCCESSFUL`, 'color: blue')
  return action.data
})

export default Exercise;