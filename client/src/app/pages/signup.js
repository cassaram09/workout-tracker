import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Auth from '../_auth/authResource'
import TextInput from '../common/textInput'

import User from '../users/userResource'

class SignUpPage extends Component {
  constructor(){
    super()

    this.state={
      auth: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    }

    // handle field changes
    this.onChange = (event) =>{
      const field = event.target.name;
      const auth = this.state.auth;
      auth[field] = event.target.value
      return this.setState({auth: auth})
    }

    // dispatches the API call action
    this.signUp = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction('signup', this.state);
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
            value={this.state.auth.email}
            onChange={this.onChange}/>

          <TextInput
            name="password"
            label="Password"
            type="password"
            value={this.state.auth.password}
            onChange={this.onChange}/>

          <TextInput
            name="password_confirmation"
            label="Confirm Password"
            type="password"
            value={this.state.auth.password_confirmation}
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
    actions: bindActionCreators({dispatchAction: Auth.dispatchAction}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SignUpPage);
