import Resource from 'r3-library'
import API from '../api/api'

const url = API.base + '/routines'

const headers = {
  'Content-Type': 'application/json',
  'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
}

const Routine = new Resource('routine', url, headers);

export default Routine;

