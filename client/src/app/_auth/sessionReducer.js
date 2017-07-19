import initialState from '../store/initialState'
import {browserHistory} from 'react-router'

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type){
    case 'SIGNUP_SUCCESS':
      sessionStorage.setItem('jwt', action.jwt)
      browserHistory.push('/');
      return !!sessionStorage.jwt
    case 'LOGIN_SUCCESS':
      sessionStorage.setItem('jwt', action.jwt)
      browserHistory.push('/');
      return !!sessionStorage.jwt
    case 'LOGOUT_SUCCESS':
      browserHistory.push('/')
      return !!sessionStorage.jwt
    default:
      return state;
  }
}