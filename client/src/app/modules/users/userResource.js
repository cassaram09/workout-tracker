import Resource from 'r3-library';
import request from 'superagent';

import {API} from 'app/utils/constants';
import Store from 'app/store/store';


const url = '/users'

const User = new Resource('user', url, API.headers)
  .registerNewAction('/password-reset', 'changePassword', 'POST')
  .registerNewAction('/current-user', 'getCurrentUser', 'GET', (state, action) => action.data)
  .addReducerAction('update', (state, action) => action.data)
  .addResourceAction('/users', 'update', 'PATCH')
  .updateReducerAction('uploadImage', (state, action) => action.data)
  
User.resourceActions.user_uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    const req = request.post('/user-image').set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`)
      req.attach('user[avatar]', file);
      req.end(function(error, response){
        resolve(response.body);
      });
  });
}

export default User;
