import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col } from 'react-bootstrap'
import PasswordReset from './userPasswordReset'
import ProfileImage from './profileImage'

class Profile extends Component {

  render(){
    return (
      <Grid id="profile">
        <Row>
          <Col xs={8} sm={6} md={4} >
            <PasswordReset />
          </Col>
          <Col xs={8} sm={6} md={4} >
            <ProfileImage />
          </Col>
        </Row>
      </Grid>
    )
  }

}

Profile.propTypes = {

}

export default Profile;