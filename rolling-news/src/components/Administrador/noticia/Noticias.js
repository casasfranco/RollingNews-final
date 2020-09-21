import React, { Fragment, useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import NoticiasTabla from "./NoticiasTabla";


const Noticias = () => {
  const [noticiasAPI, setNoticiasAPI] = useState([]);
  const [recargarNoticias, setRecargarNoticias] = useState(true);

  useEffect(() => {
    if (recargarNoticias) {
      consultarAPI(); 
      setRecargarNoticias(false); 
      console.log(noticiasAPI);
    }
    consultarAPI();
  }, [recargarNoticias]);

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
        `http://localhost:4000/api/noticia/`,
        cabecera
      );
      const resultado = await respuesta.json();
      setNoticiasAPI(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Jumbotron fluid>
        <Container>
          <h1 className="text-center">Administracion de Noticias</h1>
        </Container>
      </Jumbotron>

      <section className="container">
        <div className="mb-3">
          <Link to="/admin/noticias/nueva">
            <Button variant="dark" size="lg">
              Nueva noticia
            </Button>{" "}
          </Link>
        </div>
        <NoticiasTabla
          noticiasAPI={noticiasAPI}
          setRecargarNoticias={setRecargarNoticias}
        ></NoticiasTabla>
      </section>
    </Fragment>
  );
};


export default Noticias;
