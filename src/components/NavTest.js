import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container } from 'mdbreact';

class NavbarPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
        collapseID: ''

    }
  }
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  render() {
    return (
      <Container>
        <Navbar color="light-blue lighten-4" style={{marginTop: '20px'}} light>
          <Container>
            <NavbarBrand>
              Navbar
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
            <Collapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
              <NavbarNav left>
                <NavItem active>
                  <NavLink to="#!">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#!">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#!">Profile</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export default NavbarPage;