import { createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

// configure our store to use our combined reducer and apply the Thunk Middleware
function configureStore(){
  return createStore(rootReducer, applyMiddleware(thunk))
};

export default configureStore();
