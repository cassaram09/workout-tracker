import Resource from '../api/resource'
import API from '../api/api'

const url = '/users'

const headers = {
  'Content-Type': 'application/json',
  'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
}

const User = new Resource('user', url, headers);

User.registerAction('/password-reset', 'changePassword', 'POST')

User.registerAction(url, 'uploadImage', 'GET')

User.registerAction('/current-user', 'getCurrentUser', 'GET')

export default User;
