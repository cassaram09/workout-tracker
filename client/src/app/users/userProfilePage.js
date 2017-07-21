import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col } from 'react-bootstrap'
import PasswordReset from './userPasswordReset'
import ProfileImage from './profileImage'
import UserProfile from './userProfile'


class Profile extends Component {

  render(){
    return (
      <Grid id="profile">
        <Row>
          <Col xs={8} sm={6} md={4} >
            <ProfileImage />
          </Col>
          <Col xs={8} sm={6} md={4} >
            <UserProfile />
          </Col>
          <Col xs={8} sm={6} md={4} >
            <PasswordReset />
          </Col>
        </Row>
      </Grid>
    )
  }

}

Profile.propTypes = {

}

export default Profile;