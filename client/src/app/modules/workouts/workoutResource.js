import Resource from 'r3-library';
import {API} from 'app/utils/constants';

const url = API.base + '/workouts'

const Workout = new Resource('workout', url, API.headers).registerDefaults();

export default Workout;