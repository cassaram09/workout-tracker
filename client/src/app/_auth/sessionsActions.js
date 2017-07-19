import sessionApi from './sessionApi';

var types = {}

export function loginSuccess(){
  return {type: 'LOG_IN_SUCCESS'};
}

export function logInUser(credentials){
  return function(dispatch) {
    return sessionApi.login(credentials).then(response =>{
      console.log('JWT', response)
      if ( response.jwt ) {
        sessionStorage.setItem('jwt', response.jwt)
        dispatch(loginSuccess())
      } else {
        console.log("ERROR")
      }
    }).catch(error => {
      throw(error);
    })
  }
}

export function signUpUser(credentials){
  return function(dispatch) {
    return sessionApi.signUp(credentials).then(response =>{
      if ( response.jwt ) {
        sessionStorage.setItem('jwt', response.jwt)
        dispatch(signUpSuccess())
      } else {
        console.log("ERROR")
      }
    }).catch(error => {
      console.log(error)
      throw(error);
    })
  }
}

export function signUpSuccess(){
  return {type: 'SIGN_UP_SUCCESS'};
}

export function logOutUser(){
  sessionStorage.removeItem('jwt');
  return {type: 'LOG_OUT_SUCCESS'}
}