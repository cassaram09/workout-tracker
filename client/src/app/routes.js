import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './app'
import HomePage from './pages/homePage'

import * as exercises from './exercises/index'
import * as workouts from './workouts/index'
import * as routines from './routines/index'

import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signup'
import ProfilePage from './users/profilePage'
import Reports from './users/reports'

export default(
  // configure our routes - set App as our top level component with Home as the index route
  <Route path='/' component={App}>
    <IndexRoute component={HomePage}/>
    <Route path='/login' component={LoginPage} />
    <Route path='/signup' component={SignUpPage} />
    <Route path='/profile' component={ProfilePage} onEnter={requireAuth} />
    <Route path='/reports' component={Reports} onEnter={requireAuth} />
    <Route path='/workouts' component={workouts.WorkoutsPage} onEnter={requireAuth} >
      <Route name='newWorkout' path='/workouts/new' component={workouts.NewWorkoutPage} />
      <Route name='workout' path='/workouts/:id' component={workouts.WorkoutPage} />
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