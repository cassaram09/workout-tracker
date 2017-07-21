import initialState from '../_store/initialState'
import {browserHistory} from 'react-router';
import User from './userResource'

const types = User.actionTypes;

const name = User.name.toUpperCase()

export default function userReducer(state = initialState.user, action) {

  var message = name + '_' + action.type

  switch(action.type){
    case types.query:
      console.log(`%c ${message}`, 'color: blue')
      return action.data;
    case types.get:
      console.log(`%c ${message}`, 'color: blue')
      browserHistory.push(`/users/${action.data.id}`);
      return addUser(state, action);
    case types.update:
      console.log(`%c ${message}`, 'color: blue')
      return addUser(state, action);
    case types.create:
      console.log(`%c ${message}`, 'color: blue')
      browserHistory.push(`/users/${action.data.id}`);
      return addUser(state, action);
    case types.delete:
      console.log(`%c ${message}`, 'color: blue')
      const newState = Object.assign([], state);
      const indexToDelete = state.findIndex(user => {
        return user.id == action.data.id
      })
      newState.splice(indexToDelete, 1);
      browserHistory.push('/users');
      return newState;
    case types.uploadImage:
      console.log(`%c ${message}`, 'color: blue')
      return state;
    case types.changePassword:
      console.log(`%c ${message}`, 'color: blue')
      return {user: {credentials: {old_password: 'hello'}}};
    case types.getCurrentUser:
      console.log(`%c ${message}`, 'color: blue')
      return action.data;
    default:
      return state;
  }
}

function addUser(state, action) {
  return [
        ...state.filter(user => user.id !== action.data.id),
        Object.assign({}, action.data)
      ]
}