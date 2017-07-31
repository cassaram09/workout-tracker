import Resource from 'r3-library'
import API from '../api/api'
import Store from '../_store/store'

const url = '/users'

const User = new Resource('user', url, API.headers)
  .registerNewAction('/password-reset', 'changePassword', 'POST')
  .registerNewAction(url, 'uploadImage', 'GET')
  .registerNewAction('/current-user', 'getCurrentUser', 'GET', (state, action) => {return action.data})
  .addReducerAction('update', (state, action) => {return action.data})
  .addResourceAction('/users', 'update', 'PATCH')
  
// User.resourceActions.user_getCurrentUser = (data) => {
//     var api = API
//     var store = Store
//     var request = Resource.createRequest('/current-user', 'GET', data, api.headers);
//     return Resource.fetchRequest(request);
// }

export default User;
