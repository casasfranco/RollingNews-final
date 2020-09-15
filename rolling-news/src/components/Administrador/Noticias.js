import React, { Fragment } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import NoticiasTabla from "./NoticiasTabla";

const Noticias = () => {
  return (
    <Fragment>
      <Jumbotron className="my-4 text-center">
        <h1>Administración - Noticias</h1>
      </Jumbotron>
      <Container fluid>
        <NoticiasTabla></NoticiasTabla>
      </Container>
    </Fragment>
  );
};

export default Noticias;
