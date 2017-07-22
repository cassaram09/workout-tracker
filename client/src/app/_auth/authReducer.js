import {browserHistory} from 'react-router'
import Auth from './auth'

export default function sessionReducer(state = !!sessionStorage.jwt, action) {
  switch(action.type){
    case Auth.actionTypes.signup:
      
      return !!sessionStorage.jwt
    case Auth.actionTypes.login:
      sessionStorage.setItem('jwt', action.data.jwt)
      browserHistory.push('/');
      console.log(`%c LOGIN SUCCESSFUL`, 'color: blue')
      return !!sessionStorage.jwt
    case Auth.actionTypes.logout:
      browserHistory.push('/')
      console.log(`%c LOGOUT SUCCESSFUL`, 'color: blue')
      return !!sessionStorage.jwt
    default:
      return state;
  }
}