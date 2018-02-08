import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { Navbar, Nav, NavItem} from 'react-bootstrap'

import {HOME_PATH, LOGIN_PATH, CREATE_PATH} from '../constants'

class Header extends Component {

  render(){
      return(
        <Navbar  className={'container navbar-light bg-light'}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Tasker</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} onClick={ e => browserHistory.push(HOME_PATH) }>
              Home
            </NavItem>
            <NavItem eventKey={3} onClick={ e => browserHistory.push(LOGIN_PATH) }>
              Login
            </NavItem>
            <NavItem eventKey={2} onClick={ e => browserHistory.push(CREATE_PATH) }>
              New task
            </NavItem>
          </Nav>
          {/* { this.props.user.authed &&
          <Navbar.Text>
            Logged in as {this.props.user}
          </Navbar.Text>
          } */}
        </Navbar>
    )
  }

}

export default Header
