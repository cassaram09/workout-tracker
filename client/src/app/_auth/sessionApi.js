import API from '../api/api'
import HTTP from '../api/http'


class Auth {

  static headers(){
    new Headers({
      'Content-Type': 'application/json'
    })
  }

  static login(credentials){
    return HTTP.post('/login',{auth: credentials}, Auth.headers() )
  }

  static signUp(credentials){
    return HTTP.post('/signup', {user: credentials}, Auth.headers() )
  }
}

export default Auth;