import API from '../api/api'

class SessionApi {
  static login(credentials){
    const request = new Request('/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });

    return SessionApi.fetchRequest(request)
  }

  static signUp(credentials){
    const request = new Request('/signup', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({user: credentials})
    });

    return SessionApi.fetchRequest(request)
  }

  static createRequest(url, method, body) {
    if (body){
      body = JSON.stringify(body);
    }
    var request = new Request(url, {
      method: method,
      headers: SessionApi.createHeaders(),
      body: body
    });
    return request;
  }

  // define our headers to be sent with every request
  static createHeaders() {
    return new Headers({
      'Content-Type': 'application/json'
      // 'AUTHORIZATION': `Bearer {sessionStorage.jwt}`
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
}

export default SessionApi;