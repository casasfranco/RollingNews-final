import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Comentarios from "./Comentarios";
import { useLocation } from "react-router-dom";

const Titular = (props) => {
  const location = useLocation();
  let noticia;
  //Controlo si hay valores (estoy en editar)
  if (location.state !== undefined) {
    noticia = location.state.noticia;
  }

  return (
      <Jumbotron fluid className="mt-3">
        <Container className="container">
          <h5 className="mt-1">
            <Badge variant="info">{noticia.categoriaNoticia}</Badge>
          </h5>
          <div className="mt-2">
            <h1>{noticia.tituloPrincipalNoticia}</h1>
          </div>
          <h5>{noticia.copeteNoticia}</h5>
          <div className="mt-2">
            <Card.Subtitle className="text-muted">
              {noticia.updatedAt.slice(11, -5) +
                " | " +
                noticia.updatedAt.slice(0, -14)}
            </Card.Subtitle>
          </div>

          <div className="mt-2 ml-3">
            <Image src={noticia.urlImgPrincipalNoticia} fluid />
            <p>Foto tomada por {noticia.autorNoticia} .</p>
          </div>
          <section className="ml-2">
            <Image src={noticia.urlImgOpcionalNoticia} fluid />
          </section>
          <section className="mt-3">
            <p>{noticia.cuerpoNoticia}</p>
            <strong>{noticia.autorNoticia}</strong>
          </section>

          <div className="mt-3">
            <h4>Comentarios</h4>
            <Comentarios></Comentarios>
          </div>
        </Container>
      </Jumbotron>
  );
};

export default Titular;
