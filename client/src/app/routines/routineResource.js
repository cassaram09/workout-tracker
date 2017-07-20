import Resource from '../api/resource'
import API from '../api/api'

const url = API.base + '/routines'

const Routine = new Resource('routine', url);

export default Routine;

