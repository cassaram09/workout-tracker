import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';  

import User from './users/userResource'
import * as actions from './_store/actions'
import Store from './_store/store'

import Header from './common/header'

class App extends Component {
 constructor(){
  super()

  this.getCurrentUser = () => {
    actions.dispatchAction(User, 'getCurrentUser', null)(Store.dispatch)
   }
  }  

  componentWillMount(){
    if (sessionStorage.jwt) {
      this.getCurrentUser()
    }
  }

  componentWillUpdate(){
    if (sessionStorage.jwt) {
      this.getCurrentUser()
    }
  }

  render() {
    return (
      <div className="App container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
