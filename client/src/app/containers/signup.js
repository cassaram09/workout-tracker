import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Auth from '../modules/auth/authResource';
import TextInput from '../modules/common/textInput';
import User from '../modules/users/userResource';

class SignUp extends Component {
  constructor(){
    super()

    this.state={
      user: {
        email: '',
        password: '',
        password_confirmation: ''
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
            value={this.state.user.email}
            onChange={this.onChange}/>

          <TextInput
            name="password"
            label="Password"
            type="password"
            value={this.state.user.password}
            onChange={this.onChange}/>

          <TextInput
            name="password_confirmation"
            label="Confirm Password"
            type="password"
            value={this.state.user.password_confirmation}
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

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({dispatchAction: Auth.dispatchAction}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SignUp);
