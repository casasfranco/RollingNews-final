import React, { Fragment } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import NuevaNoticiaForm from "./NuevaNoticiaForm";

const NuevaNoticia = () => {
  return (
    <Fragment>
      <Jumbotron className="text-center">
        <h1>Nueva Noticia</h1>
      </Jumbotron>
        <NuevaNoticiaForm></NuevaNoticiaForm>
    </Fragment>
  );
};

export default NuevaNoticia;
