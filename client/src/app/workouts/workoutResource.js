import Resource from '../api/resource'
import API from '../api/api'

const url = API.base + '/workouts'

const headers = {
  'Content-Type': 'application/json',
  'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
}

const Workout = new Resource('workout', url, headers);

export default Workout;