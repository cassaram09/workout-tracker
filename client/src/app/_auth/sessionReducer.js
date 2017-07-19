import initialState from '../store/initialState'
import {browserHistory} from 'react-router'

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type){
    case 'SIGN_UP_SUCCESS':
      browserHistory.push('/');
      return !!sessionStorage.jwt
    case 'LOG_IN_SUCCESS':
    console.log("login")
      browserHistory.push('/');
      return !!sessionStorage.jwt
    case 'LOG_OUT_SUCCESS':
      sessionStorage.removeItem('jwt');
      browserHistory.push('/')
      console.log("LOGGED OUT")
      return !!sessionStorage.jwt
    default:
      return state;
  }
}