import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import User from 'app/modules/users/userResource'
import Auth from 'app/modules/auth/authResource'

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
         <Navbar inverse collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeClassName="active">YourFitnessFriend</IndexLink>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} >
              <Link to="/login" activeClassName="active">Login</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/signup" activeClassName="active">Sign Up</Link>
            </NavItem>
          </Nav>
        </Navbar>
      )
    } else {
      return (
        <Navbar inverse collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/profile" activeClassName="active">
                <img className='profile-avatar' src={this.props.user.avatar}/> 
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <MenuItem eventKey={1}>
                <Link to="/" activeClassName="active">Dashboard</Link>
              </MenuItem>
              <MenuItem eventKey={2}>
                <Link to="/workouts" activeClassName="active">Workouts</Link>
              </MenuItem>
              <MenuItem eventKey={3}>
                <Link to="/reports" activeClassName="active">Reports</Link>
              </MenuItem>
            </Nav> 
            <Nav pullRight>
               <MenuItem eventKey={4}>
                <a href="/logout" onClick={this.logOut}>Log Out</a>
              </MenuItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
      )
    }
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {session: state.session, user: state.user}
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({dispatchAction: Auth.dispatchAction}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
