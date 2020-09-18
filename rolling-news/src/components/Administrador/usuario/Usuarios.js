import React, { Fragment } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import UsuarioTabla from "./UsuarioTabla";

const Usuarios = () => {
  return (
    <Fragment>
      <Jumbotron className="my-4 text-center">
        <h1>Administración - Usuarios</h1>
      </Jumbotron>
      <Container fluid>
        <UsuarioTabla></UsuarioTabla>
      </Container>
    </Fragment>
  );
};

export default Usuarios;
