import Resource from '../api/resource'
import API from '../api/api'

const url = '/users'

const User = new Resource('user', url, API.headers)
  .registerNewAction('/password-reset', 'changePassword', 'POST')
  .registerNewAction(url, 'uploadImage', 'GET')
  .registerNewAction('/current-user', 'getCurrentUser', 'GET', (state, action) => {return action.data})
  .addReducerAction('update', (state, action) => {return action.data})
  .addResourceAction('/users', 'update', 'PATCH')

export default User;
