import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';  

import User from './users/userResource'
import Store from './_store/store'
import Header from './common/header'
import Auth from './auth/authComponent'

class App extends Component {
  constructor(){
    super()
  }  

  render() {
    return (
      <div className="App container">
        <Auth />
        <Header  />
        {this.props.children}
      </div>
    );
  }
}

export default App;
