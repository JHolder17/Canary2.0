import React from 'react';
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 } from 'reactstrap';

export default class ReactNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand> 
            <img src={require("../images/CanaryLogo.png")} width="200" height="62" alt=""></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <Link to="/">HOME</Link>
              </NavItem>
              <NavItem >
              <Link to="/ProductInfo/">PRODUCT INFO</Link>
              </NavItem>
              <NavItem >
              <Link to="/Videos/">VIDEOS</Link>
              </NavItem>
              <NavItem >
                <Link to="/Articles/">ARTICLES</Link>
              </NavItem>
              <NavItem >
                <a href="https://canarycompliance.com/login">SIGN IN</a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}