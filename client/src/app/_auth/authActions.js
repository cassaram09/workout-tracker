import Auth from './auth';

export function dispatchAuthorization(type, credentials){
  return function(dispatch) {
    return Auth[type](credentials).then(response =>{
      if (response.jwt) {
        dispatch({type: Auth.actionTypes[type], jwt: response.jwt})
      } else {
        console.log('error')
      }
    }).catch(error => {
      throw(error);
    })
  }
}


export function dispatchPasswordChange(credentials){
   return function(dispatch) {
    return Auth.changePassword(credentials).then(response =>{
      dispatch({type: "CHANGE_PASSWORD"})
    }).catch(error => {
      throw(error);
    })
  }
}


