import Resource from '../api/resource'
import API from '../api/api'

const url = '/users'

const headers = {
  'Content-Type': 'application/json',
  'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
}

const User = new Resource('user', url, headers);

// register our custom actions

User.addAction("changePassword", function(data) {
  var request = Resource.createRequest('/password-reset', 'POST', data, User.createHeaders())
  return Resource.fetchRequest(request)
})

User.addAction("uploadImage", function(data) {
  var request = Resource.createRequest(url, 'POST', data, User.createHeaders())
  return Resource.fetchRequest(request)
})

User.addAction("getCurrentUser", function(data) {
  var request = Resource.createRequest('/current-user', 'GET', data, User.createHeaders())
  return Resource.fetchRequest(request)
})

export default User;
