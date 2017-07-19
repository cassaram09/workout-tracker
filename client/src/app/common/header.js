import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';  
import * as sessionActions from '../_auth/sessionsActions';

class Header extends React.Component {
  constructor(){
    super()

    this.logOut = (event) =>{
      event.preventDefault();
      this.props.actions.logOutUser();
    }
  }

  render() {
     if (!this.props.logged_in) {
      return (
         <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeClassName="active">Home</IndexLink>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} >
              <Link to="/login" activeClassName="active">Login</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/signup" activeClassName="active">SignUp</Link>
            </NavItem>
          </Nav>
          
        </Navbar>
      )
    } else {
      return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeClassName="active">Home</IndexLink>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav>
            <MenuItem eventKey={1}>
              <Link to="/exercises" activeClassName="active">Exercises</Link>
            </MenuItem>
          </Nav>
          <Nav>
            <MenuItem eventKey={2}>
              <Link to="/workouts" activeClassName="active">Workouts</Link>
            </MenuItem>
          </Nav>
        </Navbar>
      )
    }
  }
}


Header.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
  return {logged_in: state.session}
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}


export default Header;