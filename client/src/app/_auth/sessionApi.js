import API from './api'

class SessionApi {
  static login(credentials){
    const request = new Request('/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });

    return API.fetchRequest(request)
  }

  static signUp(credentials){
    const request = new Request('/signup', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({user: credentials})
    });

    return API.fetchRequest(request)
  }
}

export default SessionApi;