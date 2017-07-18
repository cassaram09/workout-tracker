import API from './api'

class Resource {
  constructor(name, url){
    this.name = name; // for strong params
    this.url = url;

    this.actionTypes = {
      query: `QUERY_${this.name.toUpperCase()}_SUCCESS`,
      get: `GET_${this.name.toUpperCase()}_SUCCESS`,
      create: `CREATE_${this.name.toUpperCase()}_SUCCESS`,
      update: `UPDATE_${this.name.toUpperCase()}_SUCCESS`,
      delete: `DELETE_${this.name.toUpperCase()}_SUCCESS`
    }
    this.actions = {
      query: this.$query,
      get: this.$get,
      create: this.$post,
      update: this.$patch,
      delete: this.$delete
    }
  }

  static createRequest(url, method, body) {
    var request = new Request(API.base + url, {
      method: method,
      headers: Resource.createHeaders(),
      body: JSON.stringify(body)
    });
    return request;
  }

  // define our headers to be sent with every request
  static createHeaders() {
    return new Headers({
      'Content-Type': 'application/json'
      // 'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
    })
  }

  // wrapper for our fetch requests
  static fetchRequest(request){
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }

  static createBody(resource){
    var obj = {}
    obj[this.name] = resource
    return obj;
  }

  // CRUD Resource actions
  $query() {
    var request = Resource.createRequest(this.url, 'GET', null)
    return Resource.fetchRequest(request)
  }

  $get(id) {
    var url = this.url + '/' + id
    var request = Resource.createRequest(url , 'GET', null);
    return Resource.fetchRequest(request);
  }

  $post(resource){
    var request = Resource.createRequest(this.url, 'POST', Resource.createBody(resource));
    return Resource.fetchRequest(request)
  }

  $patch(resource) {
    var url = this.url + '/' + resource.id
    var request = Resource.createRequest(this.url, 'PATCH', Resource.createBody(resource));
    return Resource.fetchRequest(request);
  }

  $delete(id){
    var url = this.url + '/' + id
    var request = Resource.createRequest(this.url, 'DELETE', null);
    return Resource.fetchRequest(request)
  }

  dispatchAction(action, data) {
    debugger
    return function(dispatch){
      return this.actions[action](data).then( response => {
        console.log(`%c ${action} SUCCESS`, 'color: green', response)
        dispatch(this.reducerAction(action, response))
      }).catch(error =>{
        throw(error);
      })
    }
  }

  // generic action we'll pass to our reducer
  reducerAction(action, data) { 
    return {type: this.actionTypes[action], data};
  }

}

export default Resource;