import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Navbar,Nav } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Userform">Userform</Nav.Link>
      <Nav.Link href="/">Usertable</Nav.Link>
     
    </Nav>
   </Navbar.Collapse>
</Navbar>
    )
}

export default Header;
