import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'; 
import { Provider } from 'react-redux'; 

import registerServiceWorker from './registerServiceWorker';
import Store from './app/store/store';  
import routes from './app/routes';
import './index.css';
import App from './app/App';

ReactDOM.render(
  // wrap our Application in a provider so it's connected to the redux store
  <Provider store={Store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
   document.getElementById('root')
);

registerServiceWorker();