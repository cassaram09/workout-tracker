import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './app';
import Home from './containers/home';
import Login from './containers/login';
import SignUp from './containers/signup';
import Profile from './containers/profile';
import Reports from './containers/reports';
import NewWorkout from './containers/workout-new';
import Workout from './containers/workout-single';
import Workouts from './containers/workouts';

export default(
  // configure our routes - set App as our top level component with Home as the index route
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/login' component={Login} />
    <Route path='/signup' component={SignUp} />
    <Route path='/profile' component={Profile} onEnter={requireAuth} />
    <Route path='/reports' component={Reports} onEnter={requireAuth} />
    <Route path='/workouts' component={Workouts} onEnter={requireAuth} >
      <Route name='newWorkout' path='/workouts/new' component={NewWorkout} />
      <Route name='workout' path='/workouts/:id' component={Workout} />
    </Route>
  </Route>
)

//checks if a user is loggedin (if JWT is in session storage); if not, redirect them to the login page 
function requireAuth(nextState, replace){
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: {nextPathName: nextState.location.pathName}
    })
  }
}