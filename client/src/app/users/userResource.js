import Resource from 'r3-library'
import API from '../api/api'

const url = '/users'

const User = new Resource('user', url, API.headers);

User.registerAction('/password-reset', 'changePassword', 'POST')

User.registerAction(url, 'uploadImage', 'GET')

User.registerAction('/current-user', 'getCurrentUser', 'GET', function(state, action){
  return action.data;
})

User.updateReducerAction('user_update', function(state, action){
  return action.data;
})

export default User;
