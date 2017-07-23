import HTTP from './http'
import Defaults from './defaults'

class Resource extends HTTP {
  constructor(name, url, headers){
    super();

    //  set the name, base url, and headers for this instance
    this.name = name
    this.url = url;
    this.headers = headers;
    this.prefix = name + '_'

    //  declare our reducer and resource action holders
    this.reducerActions = {};
    this.resourceActions = {};

    /*  
        Generic dispatch action that accepts the name of the action we want
        to exectute, plus any data, passed as an object. Find the action, 
        prefixed by the resource name (to prevent conflicts), then execute
        the request to the server. If the request is successful, return a 
        dispatch function with the type set to the prefixed action name, plus 
        the response data.
    */
    this.dispatchAction = (action, data) => {
      const name = this.prefix + action
      return (dispatch) => {
        return this.resourceActions[name](data).then( response => {
          dispatch({type: name, data: response})
        }).catch(error =>{
          throw(error);
        })
      }
    }

    /* 
        Generic reducer action that accepts our initial state and the action
        object. The function checks to see if the action type is one of the 
        current Resource's listed reducer actions - if so, execute that
        reducer action (etiher a default or custom action).
    */
    this.reducer = (state = [], action) => {
      var resource = this;
      if (resource.reducerActions[action.type]) {
        return resource.reducerActions[action.type](state, action)  
      }
      return state;
    }

    //  Register a custom resource action and reducer action. 
    this.registerNewAction = (url, name, method, reducerFn) => {
      this.addResourceAction(url, name, method)
      this.addReducerAction(name, reducerFn);
      return this;
    }

    //  create a new reducer action (more flexible)
    this.addResourceAction = (url, name, method) => {
      var actionName = this.prefix + name
      this.resourceActions[actionName] = (data) => {
        var request = HTTP.createRequest(url, method, data, this.headers)
        return HTTP.fetchRequest(request)
      };
      return this;
    }

    //  create a new reducer action (more flexible)
    this.addReducerAction = (name, callback) => {
      var actionName = this.prefix + name
      this.reducerActions[actionName] = this.reducerActions[actionName] || callback;
      return this;
    }

    //  Upadate/overwrrite a reducer action (such as a default action. 
    this.updateReducerAction = (name, callback) => {
      var actionName = this.prefix + name
      this.reducerActions[actionName] = callback;
      return this;
    }

    //  Upadate/overwrrite a resource action (such as a default action. 
    this.updateResourceAction = (name, callback) => {
      var actionName = this.prefix + name
      this.reducerActions[actionName] = callback;
      return this;
    }

    /*  
        Registers the default action/reducers for CRUD operations: query(index),
        get(individual resource), create, update, and delete.
    */
    this.registerDefaults = () => {
      const obj =  Defaults
      for ( let name in obj) {
        var url = this.url + obj[name].url;
        var method = obj[name].method
        this.addResourceAction(url, name, method)
        this.addReducerAction(name, obj[name].reducerFn)
      }
      return this;
    }

  }

}

export default Resource;