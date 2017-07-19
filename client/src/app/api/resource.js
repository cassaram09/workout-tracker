import HTTP from './http'

class Resource extends HTTP {
  constructor(name, url, headers){
    super();

    this.name = name.toUpperCase(); // for strong params
    this.url = url;

    this.actionTypes = {
      query: `QUERY_${this.name}_SUCCESS`,
      get: `GET_${this.name}_SUCCESS`,
      create: `CREATE_${this.name}_SUCCESS`,
      update: `UPDATE_${this.name}_SUCCESS`,
      delete: `DELETE_${this.name}_SUCCESS`
    }

    this.headers = new Headers({
      'Content-Type': 'application/json',
      'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
    })
  }

  addAction(name, callback){
    this.actionTypes[name] = `${this.name.toUpperCase()}_SUCCESS`;
    this[name] = callback;
  }

  // CRUD HTTP actions
  query() {
    var request = HTTP.createRequest(this.url, 'GET', null, this.headers)
    return HTTP.fetchRequest(request)
  }

  get(id) {
    var url = this.url + '/' + id
    var request = HTTP.createRequest(url , 'GET', null, this.headers);
    return HTTP.fetchRequest(request);
  }

  create(data){
    var request = HTTP.createRequest(this.url, 'POST', data, this.headers);
    return HTTP.fetchRequest(request)
  }

  update(data) {
    var url = this.url + '/' + data.id
    var request = HTTP.createRequest(url, 'PATCH', data, this.headers);
    return HTTP.fetchRequest(request);
  }

  delete(id){
    var url = this.url + '/' + id
    var request = HTTP.createRequest(url, 'DELETE', null, this.headers);
    return HTTP.fetchRequest(request)
  }

}

export default Resource;