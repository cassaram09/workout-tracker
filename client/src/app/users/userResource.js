import Resource from '../api/resource'
import API from '../api/api'

const url = '/users'

const User = new Resource('user', url, API.headers).registerDefaults();

User.registerNewAction('/password-reset', 'changePassword', 'POST')

User.registerNewAction(url, 'uploadImage', 'GET')

User.registerNewAction('/current-user', 'getCurrentUser', 'GET', (state, action) => {return action.data})

User.updateReducerAction('update', (state, action) => {return action.data})

User.updateResourceAction('update', (data) => {
  var request = Resource.createRequest('/users', 'PATCH', data, User.createHeaders())
  return Resource.fetchRequest(request)
})

export default User;
