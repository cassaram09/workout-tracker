import HTTP from './http'

class Resource extends HTTP {
  constructor(name, url, headers){
    super();

    this.name = name
    this.url = url;
    this.headers = headers;
  
    this.reducerActions = {
      query: (state, action) =>{
        console.log('query successful worked')
        return state;
      },
      get: (state, action) =>{
        console.log('getsuccessful worked')
        return state;
      },
      create: (state, action) =>{
        console.log('create successful worked')
        return state;
      },
      update: (state, action) =>{
        console.log('update successful worked')
        return state;
      },
      delete: (state, action) =>{
        console.log('delete successful worked')
        return state;
      },
     
    }

    this.dispatchAction = (action, data) => {
      const resource = this;
      return (dispatch) => {
        return resource[action](data).then( response => {
          dispatch({type: action, response})
        }).catch(error =>{
          throw(error);
        })
      }
    }

    this.addReducerAction = (name, callback) => {
      this.actionTypes[name] = this.actionTypes[name] || callback;
    }

    this.reducer = (state = [], action) => {
      var resource = this;
      if (resource.reducerActions[action.type]) {
        return resource.reducerActions[action.type](state, action)  
      }
      return state;
    }

    this.registerAction = (url, name, method, reducerFn) => {
      // this.actions[name] = `${name.toUpperCase()}_SUCCESS`;
      this[name] = (data) => {
        var request = HTTP.createRequest(url, method, data, this.createHeaders())
        return HTTP.fetchRequest(request)
      };
      this.reducerActions[name] = reducerFn
    }

  }


  createHeaders(){
    return new Headers(this.headers)
  }

  // CRUD HTTP actions
  query() {
    var request = HTTP.createRequest(this.url, 'GET', null, this.createHeaders())
    return HTTP.fetchRequest(request)
  }

  get(id) {
    var url = this.url + '/' + id
    var request = HTTP.createRequest(url , 'GET', null, this.createHeaders());
    return HTTP.fetchRequest(request);
  }

  create(data){
    var request = HTTP.createRequest(this.url, 'POST', data, this.createHeaders());
    return HTTP.fetchRequest(request)
  }

  update(data) {
    var url = this.url + '/' + data.id
    var request = HTTP.createRequest(url, 'PATCH', data, this.createHeaders());
    return HTTP.fetchRequest(request);
  }

  delete(id){
    var url = this.url + '/' + id
    var request = HTTP.createRequest(url, 'DELETE', null, this.createHeaders());
    return HTTP.fetchRequest(request)
  }

}

export default Resource;