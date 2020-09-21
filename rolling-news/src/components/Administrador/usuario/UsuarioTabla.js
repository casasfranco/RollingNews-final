import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import LineaUsuarios from "./LineaUsuarios";


const UsuarioTabla = (props) => {
  return (
    <section className="container my-4">
      <h1 className="text-center my-4">Lista de Usuarios</h1>
      <ListGroup>
        {props.usuariosAPI.map((usuario) => (
          <LineaUsuarios
            key={usuario._id}
            usuario={usuario}
            setRecargarUsuarios={props.setRecargarUsuarios}
          ></LineaUsuarios>
        ))}
      </ListGroup>
    </section>
  );
};

export default UsuarioTabla;
