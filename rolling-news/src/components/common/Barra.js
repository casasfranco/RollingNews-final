import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";

const Barra = () => {
    return (
        <div>
              <Navbar
        bg=""
        variant="light"
        expand="lg"
        className="d-flex justify-content-between align-items-center"
      >
        <Image id="logo" src="./logo-rolling1.jpg" rounded></Image>

        <Nav className="text-center" inline>
          <Button className="mx-2 shadow" variant="dark">
            Login
          </Button>

          
          <Button className="mx-2 shadow" size="sm" variant="outline-dark">
            Suscribirme
          </Button>
        </Nav>
      </Navbar>

      <hr />


      <Navbar expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-2">
          <Nav.Link href="#home">Actualidad</Nav.Link>
          <Nav.Link href="#features">Espectáculos</Nav.Link>
          <Nav.Link href="#pricing">Tecnología</Nav.Link>
          <Nav.Link href="#pricing">Deportes</Nav.Link>
          </Nav>

          <Dropdown>
          <Dropdown.Toggle
            className="mr-5 shadow"
            size="sm"
            variant="danger"
            id="dropdown-basic"
          >
            <b>Categorías</b>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Economia</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Internacional</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Policiales</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


       </Navbar.Collapse>
      </Navbar>
            
        </div>
    );
};

export default Barra;