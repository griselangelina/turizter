import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import turizterfrontlogo from '../../asset/img/turizterfrontlogo.png';
import './Header.css';

class Header extends Component {
    handleSelect(eventKey) {
        alert(`selected ${eventKey}`);
      }

  render() {
    return (
      <div className="navbar-color">
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
            <img src={turizterfrontlogo} className="logo-header" />
            </Navbar.Brand>
              
          </Navbar.Header>
         
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#" className={this.props.searchBar?"c":""}>
                    About Us
                  </NavItem>
              
                  <NavDropdown title="Tour" className={this.props.searchBar?"c":""}>
                    <MenuItem href="#books">Honeymoon</MenuItem>
                    <MenuItem href="#podcasts">Individual Tour</MenuItem>
                    <MenuItem href="#">Open Trip</MenuItem>
                  </NavDropdown>
                  <NavItem eventKey={4} href="#" className={this.props.searchBar?"c":""}>
                  Promo
                  </NavItem>
                  <NavDropdown title="Information" className={this.props.searchBar?"c":""}>
                    <MenuItem href="#books">Send Question</MenuItem>
                    <MenuItem href="#podcasts">FAQ</MenuItem>
                    <MenuItem href="#">Contact Our Team</MenuItem>
                  </NavDropdown>
                  <NavItem eventKey={5} href="#" className={this.props.searchBar?"c":""}>
                    
                    Custom Trip
                  </NavItem>
                  <NavItem eventKey={5} onClick={() => this.logout()} href="#" className={this.props.searchBar?"c":""}>
                    Keluar
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
</Navbar>
      </div>
    );
  }
}

export default Header;
