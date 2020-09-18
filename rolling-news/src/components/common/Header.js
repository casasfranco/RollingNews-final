import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";

const Header = () => {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Brand href="#home">Seccion Noticias</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
       
       );
};

export default Header;