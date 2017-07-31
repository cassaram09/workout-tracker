import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';  

import User from '../users/userResource'
import Auth from '../auth/authResource'
import Store from '../_store/store'

class Header extends React.Component {
  constructor(props){
    super()

    this.logOut = (event) =>{
      event.preventDefault();
      this.props.actions.dispatchAction('logout');
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
              <Link to="/workouts" activeClassName="active">Workouts</Link>
            </MenuItem>
            <MenuItem eventKey={2}>
              <Link to="/reports" activeClassName="active">Reports</Link>
            </MenuItem>
            <MenuItem eventKey={3}>
              <Link to="/profile" activeClassName="active">Profile</Link>
            </MenuItem>
            <MenuItem eventKey={5}>
              <a href="/logout" onClick={this.logOut}>Log Out</a>
            </MenuItem>
          </Nav> 
          <img src={this.props.user.avatar} style={{width: '25px', height: 'auto', 'margin-top':'12px'}}/>    
        </Navbar>
      )
    }
  }
}


Header.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
  return {session: state.session, user: state.user}
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({dispatchAction: Auth.dispatchAction}, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);