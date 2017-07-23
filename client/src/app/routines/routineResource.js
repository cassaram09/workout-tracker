import Resource from 'r3-library'
import API from '../api/api'

const url = API.base + '/routines'

const Routine = new Resource('routine', url, API.headers).registerDefaults();

export default Routine;

