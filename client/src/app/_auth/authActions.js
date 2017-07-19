import Auth from './auth';

export function dispatchAuthorization(type, credentials){
  return function(dispatch) {
    return Auth[type](credentials).then(response =>{
      dispatch({type: Auth.actionTypes[type], action: response})
    }).catch(error => {
      throw(error);
    })
  }
}