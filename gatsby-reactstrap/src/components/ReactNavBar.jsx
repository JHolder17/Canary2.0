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

 const NavItemStyle = {
   paddingLeft: '2rem'
 }

export default class ReactNavBat extends React.Component {
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
            <img src={require("../../public/images/CanaryLogo.png")} width="234" height="125" alt=""></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem style={NavItemStyle}>
                <Link to="/">What We Do</Link>
              </NavItem>
              <NavItem style={NavItemStyle}>
              <Link to="/page-2/">Who We Are</Link>
              </NavItem>
              <NavItem style={NavItemStyle}>
              <Link to="/page-2/">Industry Insights</Link>
              </NavItem>
              <NavItem style={NavItemStyle}>
                <a href="https://canarycompliance.com/login">Sign In</a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}