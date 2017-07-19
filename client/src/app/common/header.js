import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends React.Component {

  render() {
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


export default Header;