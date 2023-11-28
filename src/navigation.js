import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/logo.png";

const Navigation = () => {
  
  return (
      <Navbar fixed="top" className="nav bg-body-tertiary"  expand="lg"  data-bs-theme="dark">
        <Container>          

          <Navbar.Brand href="#home"><img src={logo} className="img-logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="nav">
            <Nav  >
              <Nav.Link className="nav-items" href="#home" >Home</Nav.Link>
              <Nav.Link className="nav-items" href="#link" >About</Nav.Link>
              <NavDropdown className="nav-items" title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Community Access</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Respite Accomodation</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Return to Country Trips</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Shared Independant Living</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
};

export default Navigation;