class API {

  // define the base URL for our appliresourceion
  static base(){
    return '/api/v1';
  }

  static createRequest(url, method, body) {
    const request = new Request(url, {
      method: method,
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

  // CRUD API actions

  static $query(url) {
    const request = API.createRequest(url, 'GET', null)
    return API.fetchRequest(request)
  }

  static $get(url, resource) {
    const request = API.createRequest(url, 'GET', null);
    return API.fetchRequest(request);
  }

  static $post(url, resource){
    const body = JSON.stringify({resource: resource});
    const request = API.createRequest(url, 'POST', body);
    return API.fetchRequest(request)
  }

  static $patch(url, resource) {
    const body = JSON.stringify({resource: resource});
    const request = API.createRequest(url, 'PATCH', body);
    return API.fetchRequest(request);
  }

  static $delete(url, resource){
    const request = API.createRequest(url, 'DELETE', null);
    return API.fetchRequest(request)
  }

}

export default API;