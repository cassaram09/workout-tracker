import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';  
import * as authActions from '../_auth/authActions';

class Header extends React.Component {
  constructor(props){
    super()

    this.logOut = (event) =>{
      event.preventDefault();
      this.props.auth.dispatchAuthorization('logout');
    }
  }

  render() {

     if (!this.props.session) {
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
            <MenuItem eventKey={2}>
              <Link to="/workouts" activeClassName="active">Workouts</Link>
            </MenuItem>
            <MenuItem eventKey={3}>
              <Link to="/routines" activeClassName="active">Routines</Link>
            </MenuItem>
            <MenuItem eventKey={4}>
              <a href="/logout" onClick={this.logOut}>Log Out</a>
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
  return {session: state.session}
}

function mapDispatchToProps(dispatch){
  return {
    auth: bindActionCreators(authActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);