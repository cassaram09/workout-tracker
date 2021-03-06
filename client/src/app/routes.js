import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './App'
import HomePage from './pages/homePage'

import * as exercises from './exercises/index'
import * as workouts from './workouts/index'
import * as routines from './routines/index'

import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signup'
import UserProfilePage from './users/userProfilePage'


export default(
  // configure our routes - set App as our top level component with Home as the index route
  <Route path='/' component={App}>
    <IndexRoute component={HomePage}/>
    <Route path='/login' component={LoginPage} />
    <Route path='/signup' component={SignUpPage} />
    <Route path='/profile' component={UserProfilePage} onEnter={requireAuth} />
    <Route path='/exercises' component={exercises.ExercisesPage} onEnter={requireAuth} >
      <Route name='newExercise' path='/exercises/new' component={exercises.NewExercisePage} />
      <Route name='exercise' path='/exercises/:id' component={exercises.ExercisePage} />
    </Route>
    <Route path='/workouts' component={workouts.WorkoutsPage} onEnter={requireAuth} >
      <Route name='newWorkout' path='/workouts/new' component={workouts.NewWorkoutPage} />
       <Route name='workout' path='/workouts/:id' component={workouts.WorkoutPage} />
    </Route>
    <Route path='/routines' component={routines.RoutinesPage} onEnter={requireAuth} >
      <Route name='newRoutine' path='/routines/new' component={routines.NewRoutinePage} />
       <Route name='routine' path='/routines/:id' component={routines.RoutinePage} />
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