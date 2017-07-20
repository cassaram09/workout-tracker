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