import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import LineaCategoria from "./LineaCategoria";

const CategoriaTabla = (props) => { 
  return (
    <section className="container my-4">
      <h1 className="text-center my-4">Lista de categorias</h1>
      <ListGroup>
        {props.categoriasAPI.map((categoria) => (
          <LineaCategoria
            key={categoria._id}
            categoria={categoria}
            setRecargarCategorias={props.setRecargarCategorias}
          ></LineaCategoria>
        ))}
      </ListGroup>
    </section>
  );
};

export default CategoriaTabla;
