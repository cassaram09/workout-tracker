import Resource from 'r3-library';
import {API} from '../../utils/constants';

const url = API.dev + '/workouts'

const Workout = new Resource('workout', url, API.headers).registerDefaults();

export default Workout;