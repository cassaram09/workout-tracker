import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';

export function loginSuccess(){
  return {type: types.LOGIN_SUCCESS};
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
  return {type: types.SIGN_UP_SUCCESS};
}

export function logOutUser(){
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT_SUCCESS}
}