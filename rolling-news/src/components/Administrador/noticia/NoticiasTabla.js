import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import LineaNoticia from "./LineaNoticia";

const NoticiasTabla = (props) => {
  return (
    <section className="container my-4">
    <h1 className="text-center my-4">Lista de noticias</h1>
    <ListGroup>
      {props.noticiasAPI.map((noticia) => (
        <LineaNoticia
          key={noticia._id}
          noticia={noticia}
          setRecargarNoticias={props.setRecargarNoticias}
        ></LineaNoticia>
      ))}
    </ListGroup>
  </section>
);
};

export default NoticiasTabla;
