import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col } from 'react-bootstrap'
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 

import User from './userResource'
import StoreHelpers from '../_store/storeHelpers'
import UserForm from './userForm'


class UserProfile extends Component {
  constructor(props){
    super(props) 

    this.state = {
      user: this.props.user,
      editing: false
    }

    this.toggleEdit = () => {
      this.setState({editing: !this.state.editing})
    }

    this.updateUser = (event) => {
      event.preventDefault();
      var state = Object.assign({}, this.state)
      delete state.user.avatar;
      this.props.actions.dispatchAction('update', state)
      return this.toggleEdit();
    }

  }

  componentWillReceiveProps(nextProps) {
    return this.setState({user: nextProps.user});
  }

  render(){

    var {name, email, height, weight, age, gender, avatar} = this.state.user;

    if ( !this.state.editing ){
      return (
        <div id='userProfile'>
          <h2>Profile</h2>
          <UserForm user={this.state.user} updateUser={this.updateUser} /> 
        </div>
      )
    } 
  }

}

UserProfile.propTypes = {

}

function mapStateToProps(state, ownProps) { 
  return {user: state.user};
};

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({dispatchAction: User.dispatchAction}, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
