import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './App'
import HomePage from './pages/homePage'
import ExercisesPage from './exercises/exercisesPage'
import NewExercisePage from './exercises/newExercisePage'
import ExercisePage from './exercises/exercisePage'

import * as workouts from './workouts/index'

export default(
  // configure our routes - set App as our top level component with Home as the index route
  <Route path='/' component={App}>
    <IndexRoute component={HomePage}/>
    <Route path='/exercises' component={ExercisesPage}>
      <Route name='newExercise' path='/exercises/new' component={NewExercisePage} />
      <Route name='exercise' path='/exercises/:id' component={ExercisePage} />
    </Route>
    <Route path='/workouts' component={workouts.WorkoutsPage}>
      <Route name='newWorkout' path='/workouts/new' component={workouts.NewWorkoutPage} />
       <Route name='workout' path='/workouts/:id' component={workouts.WorkoutPage} />
    </Route>
  </Route>
)

// checks if a user is loggedin (if JWT is in session storage); if not, redirect them to the login page 
// function requireAuth(nextState, replace){
//   if (!sessionStorage.jwt) {
//     replace({
//       pathname: '/login',
//       state: {nextPathName: nextState.location.pathName}
//     })
//   }
// }