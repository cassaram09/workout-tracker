import HTTP from './http'

export function query() {
  var request = HTTP.createRequest(this.url, 'GET', null, this.createHeaders())
  return HTTP.fetchRequest(request)
}

export function get(id) {
  var url = this.url + '/' + id
  var request = HTTP.createRequest(url , 'GET', null, this.createHeaders());
  return HTTP.fetchRequest(request);
}

export function create(data){
  var request = HTTP.createRequest(this.url, 'POST', data, this.createHeaders());
  return HTTP.fetchRequest(request)
}

export function update(data) {
  var url = this.url + '/' + data.id
  var request = HTTP.createRequest(url, 'PATCH', data, this.createHeaders());
  return HTTP.fetchRequest(request);
}

export function _delete(id){
  var url = this.url + '/' + id
  var request = HTTP.createRequest(url, 'DELETE', null, this.createHeaders());
  return HTTP.fetchRequest(request)
}

export function buildDefaultActions(name){
  var newActions = {}
  for( var key in actions ) {
    var newKey = name + '_' + key
    newActions[newKey] = actions[key];
  }
  return newActions;
}

// function buildDefaultReducerActions(name){
//   var newActions = {}
//   for( var key in actions ) {
//     var newKey = name + '_' + key
//     newActions[newKey] = actions[key];
//   }
//   return newActions;
// }

export function removeData(state, action){
  const newState = Object.assign([], state);
  const indexToDelete = state.findIndex(exercise => {
    return exercise.id == action.data.id
  })
  newState.splice(indexToDelete, 1);
  return newState;
}

export function addData(state, action){
  return [ ...state.filter(element => element.id !== action.data.id), Object.assign({}, action.data)]
}

export const actions = {
  query: {
    reducerFn: (state, action) => { return action.data },
    actionFn: query,
  },
  get: {
    reducerFn: (state, action) => { return addData(state, action) },
    actionFn: get,
  },
  create: {
    reduerFn: (state, action) => { return addData(state, action) },
    actionFn: create,
  },
  update: {
    reducerFn: (state, action) => { return addData(state, action) },
    actionFn: update,
  },
  delete: {
    reducerFn: (state, action) => { return removeData(state, action) },
    actionFn: _delete
  }
}
