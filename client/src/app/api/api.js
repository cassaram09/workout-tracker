class API {

  // define the base URL for our appliresourceion
  static base(){
    return '/api/v1';
  }

  static createRequest(url, method, body) {
    var request = new Request(API.base() + url, {
      method: method,
      headers: API.createHeaders(),
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

  // CRUD API actions

  static $query(url) {
    var request = API.createRequest(url, 'GET', null)
    return API.fetchRequest(request)
  }

  static $get(url, resource) {
    var request = API.createRequest(url, 'GET', null);
    return API.fetchRequest(request);
  }

  static $post(url, resource){
    var body = {}
    body[resource.name] = resource.data;
    var request = API.createRequest(url, 'POST', body);
    return API.fetchRequest(request)
  }

  static $patch(url, resource) {
    var body = JSON.stringify({resource: resource});
    var request = API.createRequest(url, 'PATCH', body);
    return API.fetchRequest(request);
  }

  static $delete(url, resource){
    var request = API.createRequest(url, 'DELETE', null);
    return API.fetchRequest(request)
  }

}

export default API;