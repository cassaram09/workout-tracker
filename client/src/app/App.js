import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';  

import Header from './modules/common/header';
import Auth from './modules/auth/authComponent';

import './app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Auth />
        <Header  />
        {this.props.children}
      </div>
    );
  }
}

export default App;
