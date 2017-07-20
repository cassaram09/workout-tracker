import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';  
import * as authActions from '../_auth/authActions';

class HomePage extends Component {

  render(){
    if (this.props.session){
      return(
        <div className="home"> 
          <Grid>
            <Row>
              <Col xs={12} md={12} >
                <h1>Dashboard</h1>
              </Col>
            </Row>
          </Grid>
        </div>
      )
    } else {
      return(
        <div className="home">
          <Grid>
            <Row>
              <Col xs={12} md={8} >
                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.</p>
                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.</p>
              </Col>
              <Col xs={12} md={4} >
                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.</p>
                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.</p>
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }
  }

}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
  return {session: state.session}
}

function mapDispatchToProps(dispatch){
  return {
    auth: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
