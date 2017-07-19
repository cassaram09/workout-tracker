import Resource from '../api/resource'
import API from '../api/api'

const url = API.base + '/exercises'

const headers = new Headers({
    'Content-Type': 'application/json',
    'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
  })

const Exercise = new Resource('exercise', url, headers);

Exercise.addAction("myCustomAction", function() {
  var request = Resource.createRequest(url, 'GET', null)
  return Resource.fetchRequest(request)
})

export default Exercise;

