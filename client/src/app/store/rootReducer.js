import {combineReducers} from 'redux';
import exercises from '../exercises/exercisesReducer';

// combine our cats and hobbies reducers into one reducers
// this reducer gets passed to our configureStore function
const rootReducer = combineReducers({
  exercises
})

export default rootReducer;