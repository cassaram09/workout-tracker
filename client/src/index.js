import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router'; 
// import configureStore from './store/configureStore';  

import { Provider } from 'react-redux'; 
import routes from './app/routes';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
