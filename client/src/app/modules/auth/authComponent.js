import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 

import User from '../users/userResource'
import Store from '../../store/store' 

class AuthComponent extends React.Component {
  render(){
    if (this.props.session){
      User.dispatchAction('getCurrentUser')(Store.dispatch)
    }

    return (
      <div></div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {session: state.session}
}

export default connect(mapStateToProps)(AuthComponent);