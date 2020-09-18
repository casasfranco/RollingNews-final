import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import logo from '../../assets/logo-rolling.jpg' // relative path to image 
const Barra = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <div>
      <Navbar
        bg=""
        variant="light"
        expand="lg"
        className="d-flex justify-content-between align-items-center"
      >
        <Image id="logo" src={logo} rounded></Image>

        <Nav className="text-center">
          <Button className="mx-2 shadow" variant="dark" onClick={handleShow}>
            Ingresar
          </Button>

          <Modal show={show} onHide={handleClose} backdrop="static" centered>
            <Modal.Header closeButton>
              <Modal.Title className="text-center">Iniciar sesión</Modal.Title>
              <Image
                className="d-flex justify-content-center"
                id="logo-login"
                src="/logo-rolling.jpg"
              ></Image>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre de usuario"
                    name="nombreUsuario"
                    ref={register({
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                      maxLength: {
                        value: 30,
                        message: "No más de 30 carácteres!",
                      },
                      minLength: {
                        value: 3,
                        message: "Mínimo 3 carácteres",
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message:
                          "Solo puede contener letras mayúsculas o minúsculas",
                      },
                    })}
                  />
                  <span id="errorLogin" className="text-danger mb-2">
                    {errors?.nombreUsuario?.message}
                  </span>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    name="passUsuario"
                    ref={register({
                      required: {
                        value: true,
                        message: "campo obligatorio",
                      },
                      maxLength: {
                        value: 30,
                        message: "No más de 30 carácteres!",
                      },
                      minLength: {
                        value: 6,
                        message: "Mínimo 6 carácteres",
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message:
                          "Solo puede contener letras mayúsculas o minúsculas",
                      },
                    })}
                  />
                  <span id="errorLogin" className="text-danger mb-2">
                    {errors?.passUsuario?.message}
                  </span>
                </Form.Group>

                <Button variant="dark" size="sm" type="submit">
                  Ingresar
                </Button>
              </Form>
            </Modal.Body>

            <Modal.Footer className="mx-5">
              <p>Ingresá con tu cuenta</p>
              <Button variant="primary" size="lg" onClick={handleClose}>
                <FontAwesomeIcon icon={faFacebook} />
              </Button>
              <Button variant="danger" size="lg" onClick={handleClose}>
                <FontAwesomeIcon icon={faGoogle} />
              </Button>
            </Modal.Footer>
          </Modal>

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
              <b>Secciones</b>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Economia</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Internacional</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Policiales</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Fotografía</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Barra;
