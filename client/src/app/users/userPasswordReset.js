import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';  
import {Grid, Row, Col } from 'react-bootstrap'

import TextInput from '../common/textInput'
import * as actions from '../_store/actions'

import User from './userResource'

class PasswordReset extends Component {
  constructor(props){
    super(props);

    this.state = {
      credentials: this.props.credentials,
      edit: false
    }

    // handle field changes
    this.onChange = (event) =>{
      const field = event.target.name;
      const credentials = this.state.credentials;
      credentials[field] = event.target.value
      return this.setState({credentials: credentials})
    }

    // dispatches the API call action
    this.onSave = (event) => {
      event.preventDefault();
      if (this.state.credentials.password == this.state.credentials.password_confirmation){
        var data = {user: this.state.credentials}
        this.props.auth.dispatchAction(User, 'changePassword', data )
      }
    }

    this.edit = () => {
      return this.setState({edit: !this.state.edit})
    }

  }

  render(){
    if (this.state.edit){
      return (
        <div id="passwordReset">
          <div className='field-group'>
            <button className="btn btn-default" onClick={this.edit}>Close</button>
          </div> 
          <TextInput
            name="old_password"
            label="Old Password"
            type="password"
            value={this.state.credentials.old_password}
            onChange={this.onChange}/>

          <TextInput
            name="password"
            label="Password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}/>

          <TextInput
            name="password_confirmation"
            label="Password confirmation"
            type="password"
            value={this.state.credentials.password_confirmation}
            onChange={this.onChange}/>

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onSave}/>
        </div>
      )
    } else {
      return (
        <div id="passwordReset">
          <div className='field-group'>
            <button className="btn btn-default" onClick={this.edit}>Reset Password</button>
          </div> 
        </div>
      )
    }
    
  }

}

PasswordReset.propTypes = {

}

function mapStateToProps(state, ownProps) {
  var credentials = Object.assign({}, state.user, {credentials: {
        old_password: '',
        password: '',
        password_confirmation: '',
      }})
  return {
    credentials: credentials,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    auth: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);