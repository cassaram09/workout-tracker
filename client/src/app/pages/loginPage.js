import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as authActions from '../_auth/authActions'
import TextInput from '../common/textInput'


class LoginPage extends Component {
  constructor(){
    super()

    this.state={
      credentials: {
        email: '',
        password: ''
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
    this.onSave = (event) => {
      event.preventDefault();
      this.props.auth.dispatchAuthorization('login', this.state.credentials);
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

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onSave}/>
        </form>
      </div>
    )
  }

}

LoginPage.propTypes = {

}

// map our sessionActions to class props
function mapDispatchToProps(dispatch) {
  return {
    auth: bindActionCreators(authActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
