import Resource from '../api/resource'
import API from '../api/api'

const url = API.base + '/exercises'

export default new Resource('exercise', url);

