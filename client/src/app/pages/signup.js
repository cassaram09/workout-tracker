import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as authActions from '../_auth/authActions'
import TextInput from '../common/textInput'

import User from '../users/userResource'
import * as actions from '../_store/actions'

class SignUpPage extends Component {
  constructor(){
    super()

    this.state={
      credentials: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    }

    // handle field changes
    this.onChange = (event) =>{
      const field = event.target.name;
      const credentials = this.state.credentials;
      credentials[field] = event.target.value
      return this.setState({credentials: credentials})
    }

    // dispatches the API call action
    this.signUp = (event) => {
      event.preventDefault();
      this.props.auth.dispatchAuthorization('signup', this.state.credentials);
      this.props.actions.dispatchAction(User, 'getCurrentUser', null)
    }
  }

  // return the form
  render(){
    return(
      <div>
        <form>
          <TextInput
            name="email"
            label="Email"
            type="email"
            value={this.state.credentials.email}
            onChange={this.onChange}/>

          <TextInput
            name="password"
            label="Password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}/>

          <TextInput
            name="password_confirmation"
            label="Confirm Password"
            type="password"
            value={this.state.credentials.password_confirmation}
            onChange={this.onChange}/>

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.signUp}/>
        </form>
      </div>
    )
  }

}

SignUpPage.propTypes = {

}

function mapDispatchToProps(dispatch) {
  return {
    auth: bindActionCreators(authActions, dispatch),
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SignUpPage);
