class Resource {
  constructor(name, url){
    this.name = name.toUpperCase(); // for strong params
    this.url = url;

    this.actionTypes = {
      query: `QUERY_${this.name}_SUCCESS`,
      get: `GET_${this.name}_SUCCESS`,
      create: `CREATE_${this.name}_SUCCESS`,
      update: `UPDATE_${this.name}_SUCCESS`,
      delete: `DELETE_${this.name}_SUCCESS`
    }
  }

  static createRequest(url, method, body) {
    if (body){
      body = JSON.stringify(body);
    }
    var request = new Request(url, {
      method: method,
      headers: Resource.createHeaders(),
      body: body
    });
    return request;
  }

  // define our headers to be sent with every request
  static createHeaders() {
    return new Headers({
      'Content-Type': 'application/json',
      'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
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

  addAction(name, callback){
    this.actionTypes[name] = `${this.name.toUpperCase()}_SUCCESS`;
    this[name] = callback;
  }

  // CRUD Resource actions
  query() {
    var request = Resource.createRequest(this.url, 'GET', null)
    return Resource.fetchRequest(request)
  }

  get(id) {
    var url = this.url + '/' + id
    var request = Resource.createRequest(url , 'GET', null);
    return Resource.fetchRequest(request);
  }

  create(resource){
    var request = Resource.createRequest(this.url, 'POST', resource);
    return Resource.fetchRequest(request)
  }

  update(resource) {
    var url = this.url + '/' + resource.id
    var request = Resource.createRequest(url, 'PATCH', resource);
    return Resource.fetchRequest(request);
  }

  delete(id){
    var url = this.url + '/' + id
    var request = Resource.createRequest(url, 'DELETE', null);
    return Resource.fetchRequest(request)
  }

}

export default Resource;