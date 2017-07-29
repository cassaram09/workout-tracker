import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Auth from '../auth/authResource'

import TextInput from '../common/textInput'

import User from '../users/userResource'


class LoginPage extends Component {
  constructor(){
    super()

    this.state={
      user: {
        email: '',
        password: ''
      }
    }

    // handle field changes
    this.onChange = (event) =>{
      const field = event.target.name;
      const user = this.state.user;
      user[field] = event.target.value
      return this.setState({user: user})
    }

    // dispatches the API call action
    this.onSave = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction('login', this.state);
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
            value={this.state.user.email}
            onChange={this.onChange}/>

          <TextInput
            name="password"
            label="Password"
            type="password"
            value={this.state.user.password}
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
    actions: bindActionCreators({dispatchAction: Auth.dispatchAction}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
