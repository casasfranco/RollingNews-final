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
import logo from "../../assets/logo-rolling.png"; // relative path to image
import $ from "jquery";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Barra = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    //Login de los datos validados.

    const usuario = {
      nombreUsuario: data.nombreUsuario,
      passUsuario: data.passUsuario,
    };
    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      };

      const resultado = await fetch(
        "http://localhost:4000/api/autenticar/",
        cabecera
      )
        .then(function (response) {
          return response.json();
        })
        .then((response) => {
          if (response.ok) {
            localStorage.setItem("token", response.token);
            Swal.fire(
              "Bienvenido!!!",
              "Iniciaste sesion correctamente",
              "success"
            );
            handleClose();
            // console.log(resultado.body);
          } else {
            Swal.fire(
              "Opss!!!",
              "Contraseña o nomnbre de usuario incorrectos",
              "error"
            );
          }
        });
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
    // $(document.getElementById("loginModal")).hide();
  };

  return (
    <div>
      <Navbar
        bg=""
        variant="light"
        expand="lg"
        className="d-flex justify-content-between align-items-center"
      >
        <Image id="img-barra" src={logo} rounded></Image>

        <Nav className="text-center">
          <Button className="m-2 shadow btn btn-dark" onClick={handleShow}>
            Ingresar
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
            id="loginModal"
          >
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
                        value: /^[A-Za-z0-9\s]+$/g,
                        message:
                          "Solo puede contener letras mayúsculas o minúsculas y numeros",
                      },
                    })}
                  />
                  <span id="errorLogin" className="text-danger mb-2">
                    {errors?.passUsuario?.message}
                  </span>
                </Form.Group>

                <Button variant="dark" type="submit">
                  Ingresar
                </Button>
              </Form>
            </Modal.Body>

            <Modal.Footer className="mx-5">
              <p>Ingresá con tu cuenta</p>
              <Link to={`/error404`}>
                <Button variant="primary" size="lg" onClick={handleClose}>
                  <FontAwesomeIcon icon={faFacebook} />
                </Button>
              </Link>
              <Link to={`/error404`}>
                <Button variant="danger" size="lg" onClick={handleClose}>
                  <FontAwesomeIcon icon={faGoogle} />
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>

          <Link to={`/error404`}>
            <Button className="my-2 shadow" variant="outline-dark">
              Suscribirme
            </Button>
          </Link>
        </Nav>
      </Navbar>

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
