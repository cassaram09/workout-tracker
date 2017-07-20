import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';  
import {Grid, Row, Col } from 'react-bootstrap'

import TextInput from '../common/textInput'
import * as authActions from '../_auth/authActions'

class Profile extends Component {
  constructor(props){
    super(props);

    this.state={
      credentials: {
        old_password: '',
        password: '',
        password_confirmation: '',
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
      if (this.state.credentials.password == this.state.credentials.password_confirmation){
        this.props.auth.dispatchPasswordChange(this.state.credentials);
      }
    }

  }

  render(){
    return (
      <Grid id="profile">
        <Row>
          <Col xs={8} sm={6} md={4} >
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
          </Col>
        </Row>
      </Grid>
    )
  }

}

Profile.propTypes = {

}

// map our sessionActions to class props
function mapDispatchToProps(dispatch) {
  return {
    auth: bindActionCreators(authActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Profile);