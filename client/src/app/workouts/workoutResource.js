import Resource from '../api/resource'
import API from '../api/api'

const url = API.base + '/workouts'

const Workout = new Resource('workout', url);

export default Workout;
