import React, { Fragment, useState, useEffect } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import UsuarioTabla from "./UsuarioTabla";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
      <section className="container">
        <div className="mb-3">
          <Link to="/admin/usuarios/nuevo">
            <Button variant="info" size="lg">
              Nuevo usuario
            </Button>{" "}
          </Link>
        </div>
        <UsuarioTabla
          usuariosAPI={usuariosAPI}
          setRecargarUsuarios={setRecargarUsuarios}
        ></UsuarioTabla>
      </section>
    </Fragment>
    
  );
};

export default Usuarios;
