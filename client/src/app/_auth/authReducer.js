import initialState from '../_store/initialState'
import {browserHistory} from 'react-router'
import Auth from './auth'

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type){
    case Auth.actionTypes.signup:
      sessionStorage.setItem('jwt', action.jwt)
      browserHistory.push('/');
      console.log(`%c SIGNUP SUCCESSFUL`, 'color: blue')
      return !!sessionStorage.jwt
    case Auth.actionTypes.login:
      sessionStorage.setItem('jwt', action.jwt)
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