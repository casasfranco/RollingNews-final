import React, { Fragment, useState, useEffect } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import UsuarioTabla from "./UsuarioTabla";

const Usuarios = () => {
  const [usuariosAPI, setUsuariosAPI] = useState([]);
  const [recargarUsuarios, setRecargarUsuarios] = useState(true);

  useEffect(() => {
    if (recargarUsuarios) {
      consultarAPI();
      setRecargarUsuarios(false);
    }
    consultarAPI();
  }, [recargarUsuarios]);

  const consultarAPI = async () => {
    try {
      const cabecera = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        // body: JSON.stringify({token:localStorage.getItem('token')}),
      };
      const respuesta = await fetch(
        `https://rolling-news-servidor.herokuapp.com/api/usuario/`,
        cabecera
      );
      const resultado = await respuesta.json();
      setUsuariosAPI(resultado);
    } catch (error) {
      console.log(error);
    }
  };

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
