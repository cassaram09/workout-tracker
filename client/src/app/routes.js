import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './App'

export default(
  // configure our routes - set App as our top level component with Home as the index route
  <Route path='/' component={App}>
    
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