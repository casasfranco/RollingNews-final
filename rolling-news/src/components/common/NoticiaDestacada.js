import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const NoticiaDestacada = (props) => {
  console.log(props);
  return (
    <div>
      <Card className=" p-0 mt-0  w-100 h-75">
        <Card.Img
          className="mt-0 w-100 h-50"
          src={props.noticia.urlImgPrincipalNoticia}
        ></Card.Img>
        <Card.Body>
          <Card.Title className="m-0">{props.noticia.tituloPrincipalNoticia}</Card.Title>

          <Card.Text>
          {props.noticia.copeteNoticia}
          </Card.Text>
        </Card.Body>
        <Link href="#" className=" text-dark font-italic mx-2 my-3">
          {" "}
          Leer mas...
        </Link>
      </Card>
    </div>
  );
};

export default NoticiaDestacada;
