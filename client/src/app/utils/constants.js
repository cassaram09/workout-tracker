const API = {
  dev: '/api/v1',
  headers:{
    'Content-Type': 'application/json',
    'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
  } 
}

export {
  API
}
