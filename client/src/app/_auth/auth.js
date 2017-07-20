import HTTP from '../api/http'

class Authorization {
  constructor(headers){

    this.actionTypes = {
      login: "LOGIN_SUCCESS",
      signup: "SIGNUP_SUCCESS",
      logout: "LOGOUT_SUCCESS",
    }

    this.headers = new Headers(headers);
  }
  
  login(credentials){
    return HTTP.$post('/login',{auth: credentials}, this.headers )
  }

  signup(credentials){
    return HTTP.$post('/signup', {user: credentials}, this.headers )
  }

  logout(){
    var promise = new Promise((resolve, reject) => {
      sessionStorage.removeItem('jwt');
      !sessionStorage.jwt ? resolve({jwt: 'deleted'}) : reject(Error("Error"));
    });
    return promise; 
  }

  changePassword(credentials) {
    var headers = new Headers({
      'Content-Type': 'application/json',
      'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
    })
    return HTTP.$post('/password-reset', {user: credentials}, headers );
  }

}

const Auth = new Authorization({'Content-Type': "application/json"})

export default Auth;


