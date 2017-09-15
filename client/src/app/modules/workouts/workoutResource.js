import Resource from 'r3-library'
import API from '../api/api'

const url = API.base + '/workouts'

const Workout = new Resource('workout', url, API.headers).registerDefaults();

export default Workout;