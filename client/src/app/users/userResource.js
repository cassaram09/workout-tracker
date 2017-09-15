import Resource from 'r3-library'
import API from '../api/api'
import Store from '../store/store'
import request from 'superagent';

const url = '/users'

const User = new Resource('user', url, API.headers)
  .registerNewAction('/password-reset', 'changePassword', 'POST')
  .registerNewAction('/current-user', 'getCurrentUser', 'GET', (state, action) => {return action.data})
  .addReducerAction('update', (state, action) => {
    return action.data;
  })
  .addResourceAction('/users', 'update', 'PATCH')
  .updateReducerAction('uploadImage', (state, action) => {
    return action.data
  })
  
User.resourceActions.user_uploadImage = (file) => {
  var promise = new Promise((resolve, reject) => {
    const req = request.post('/user-image').set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`)
      req.attach('user[avatar]', file);
      req.end(function(error, response){
        resolve(response.body);
      });
  });
  return promise; 
}

export default User;
