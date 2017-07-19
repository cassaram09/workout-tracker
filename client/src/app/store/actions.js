export function dispatchAction(resource, action, data) {
  return function(dispatch){
    return resource[action](data).then( response => {
      console.log(`%c ${resource.name} ${action.toUpperCase()} RESPONSE`, 'color: green', response)
      dispatch(reducerAction(resource, action, response))
    }).catch(error =>{
      throw(error);
    })
  }
}

  // generic action we'll pass to our reducer
function reducerAction(resource, action, data) { 
  return {
    type: resource.actionTypes[action], data};
}