import React, { Fragment, useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CategoriaTabla from "./CategoriaTabla";

const Categoria = () => {
  const [categoriasAPI, setCategoriasAPI] = useState([]);
  const [recargarCategorias, setRecargarCategorias] = useState(true);

  useEffect(() => {
    if (recargarCategorias) {
      consultarAPI();
      setRecargarCategorias(false);
      console.log(categoriasAPI);
    }
    consultarAPI();
  }, [recargarCategorias]);

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
        `https://rolling-news-servidor.herokuapp.com/api/categoria/`,
        cabecera
      );
      const resultado = await respuesta.json();
      setCategoriasAPI(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Jumbotron fluid>
        <Container>
          <h1 className="text-center">Administracion de Categorias</h1>
        </Container>
      </Jumbotron>

      <section className="container">
        <div className="mb-3">
          <Link to="/admin/categorias/nueva">
            <Button variant="info" size="lg">
              Nueva categoria
            </Button>{" "}
          </Link>
        </div>
        <CategoriaTabla
          categoriasAPI={categoriasAPI}
          setRecargarCategorias={setRecargarCategorias}
        ></CategoriaTabla>
      </section>
    </Fragment>
  );
};

export default Categoria;
