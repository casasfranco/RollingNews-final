import React, { Fragment, useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const NuevaNoticia = () => {
  const { register, errors, handleSubmit } = useForm();
  const [categoriasAPI, setCategoriasAPI] = useState([]);
  const [cargarCategorias, setCargarCategorias] = useState(true);
  useEffect(() => {
    if (cargarCategorias) {
      consultarCategoriasAPI();
      setCargarCategorias(false);
    }
  });

  const consultarCategoriasAPI = async () => {
    try {
      const cabecera = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      };
      const respuesta = await fetch(
        "https://rolling-news-servidor.herokuapp.com/api/categoria",
        cabecera
      );
      const resultado = await respuesta.json();
      setCategoriasAPI(resultado);
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data, e) => {
    //Modelo del objeto con el que vamos a trabajar (debe cumplir esta estructura)
    const noticia = {
      volantaNoticia: data.volantaNoticia,
      tituloPrincipalNoticia: data.tituloPrincipalNoticia,
      copeteNoticia: data.copeteNoticia,
      urlImgPrincipalNoticia: data.urlImgPrincipalNoticia,
      cuerpoNoticia: data.cuerpoNoticia,
      urlImgOpcionalNoticia: data.urlImgOpcionalNoticia,
      autorNoticia: data.autorNoticia,
      categoriaNoticia: data.categoriaNoticia,
      publicadaNoticia: true,
      estadoNoticia: true,
    };

    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify(noticia),
      };

      const resultado = await fetch(
        "https://rolling-news-servidor.herokuapp.com/api/noticia/",
        cabecera
      );
      console.log(resultado);
      //Compruebo la respuesta
      if (resultado.status === 200) {
        Swal.fire(
          "La noticia creada",
          "La noticia se creo correctamente",
          "success"
        );
      }
      //redireccionar
      // browserHistory.push("/admin/categorias");
      // props.history.push("/admin/categorias");
      console.log();
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  return (
    <Fragment>
      <Jumbotron className="text-center">
        <h1>Nueva Noticia</h1>
      </Jumbotron>
      <Container>
        <div className="p-5 my-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Volanta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Antetitulo"
                name="volantaNoticia"
                ref={register({
                  required: {
                    value: true,
                    message: "Ingrese un antetitulo",
                  },
                  maxLength: {
                    value: 20,
                    message: "No más de 20 carácteres",
                  },
                  minLength: {
                    value: 5,
                    message: "Mínimo 5 carácteres",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9\s]+$/g,
                    message: "Ingrese un texto válido",
                  },
                })}
              />
              <span id="errorVolanta" className="text-danger mb-2">
                {errors?.volantaNoticia?.message}
              </span>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titulo principal"
                name="tituloPrincipalNoticia"
                ref={register({
                  required: {
                    value: true,
                    message: "Ingrese un titulo",
                  },
                  maxLength: {
                    value: 30,
                    message: "No más de 30 carácteres",
                  },
                  minLength: {
                    value: 5,
                    message: "Mínimo 5 carácteres",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9\s]+$/g,
                    message: "Ingrese un texto válido",
                  },
                })}
              />
              <span id="errorTitulo" className="text-danger mb-2">
                {errors?.tituloPrincipalNoticia?.message}
              </span>
            </Form.Group>
            <Form.Group controlId="copeteNoticia">
              <Form.Label>Descripción breve</Form.Label>
              <Form.Control
                type="text"
                placeholder="Información general"
                name="copeteNoticia"
                ref={register({
                  required: {
                    value: true,
                    message: "Agregue una descripción",
                  },
                  maxLength: {
                    value: 250,
                    message: "No más de 250 carácteres",
                  },
                  minLength: {
                    value: 10,
                    message: "Mínimo 10 carácteres",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9\s]+$/g,
                    message: "Ingrese un texto válido",
                  },
                })}
              />
              <span id="errorCopete" className="text-danger mb-2">
                {errors?.copeteNoticia?.message}
              </span>
            </Form.Group>
            <Form.Group controlId="urlImgPrincipalNoticia">
              <Form.Label>Imagen principal</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://www.lanacion.com.ar/sociedad/coronavirus-argentina-199-dias-del-primer-contagio-nid2453198"
                name="urlImgPrincipalNoticia"
                ref={register({
                  required: {
                    value: true,
                    message: "Agregue una imagen de principal",
                  },
                  maxLength: {
                    value: 200,
                    message: "No más de 200 carácteres",
                  },
                  minLength: {
                    value: 3,
                    message: "Mínimo 3 carácteres",
                  },
                })}
              />
              <span
                id="errorUrlImgPrincipalNoticia"
                className="text-danger mb-2"
              >
                {errors?.urlImgPrincipalNoticia?.message}
              </span>
            </Form.Group>
            <Form.Group controlId="cuerpoNoticia">
              <Form.Label>Cuerpo de la noticia</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                type="text"
                placeholder="Desarrollo de la noticia..."
                name="cuerpoNoticia"
                ref={register({
                  required: {
                    value: true,
                    message: "Complete el campo requerido",
                  },
                  maxLength: {
                    value: 10000,
                    message: "No más de 10000 carácteres",
                  },
                  minLength: {
                    value: 3,
                    message: "Mínimo 3 carácteres",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9\s]+$/g,
                    message: "Ingrese la información de la noticia",
                  },
                })}
              />
              <span id="errorCuerpoNoticia" className="text-danger mb-2">
                {errors?.cuerpoNoticia?.message}
              </span>
            </Form.Group>
            <Form.Group controlId="urlImgOpcionalNoticia">
              <Form.Label>Imagen secundaria (opcional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://www.lanacion.com.ar/sociedad/coronavirus-argentina-199-dias-del-primer-contagio-nid2453198"
                name="urlImgOpcionalNoticia"
                ref={register({
                  required: {
                    value: true,
                    message: "Agregue una imagen de opcional",
                  },
                  maxLength: {
                    value: 200,
                    message: "No más de 200 carácteres!",
                  },
                  minLength: {
                    value: 3,
                    message: "Mínimo 3 carácteres",
                  },
                })}
              />
              <span
                id="errorUrlImgOpcionalNoticia"
                className="text-danger mb-2"
              >
                {errors?.urlImgOpcionalNoticia?.message}
              </span>
            </Form.Group>
            <Form.Group controlId="autorNoticia">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juan Perez"
                name="autorNoticia"
                ref={register({
                  required: {
                    value: true,
                    message: "Ingrese el nombre del autor de la nota",
                  },
                  maxLength: {
                    value: 20,
                    message: "No más de 20 carácteres!",
                  },
                  minLength: {
                    value: 3,
                    message: "Mínimo 3 carácteres",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/g,
                    message: "Ingrese solo texto",
                  },
                })}
              />
              <span id="errorAutor" className="text-danger mb-2">
                {errors?.autorNoticia?.message}
              </span>
            </Form.Group>

            <Form.Group controlId="categoriaNoticia">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Seleccione..."
                name="categoriaNoticia"
                ref={register({
                  required: true,
                })}
              >
                {categoriasAPI.map((categoria) => (
                  <option value={categoria.nombreCat} key={categoria._id}>
                    {categoria.nombreCat}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="publicadaNoticia">
              <Form.Label>Fecha de publicación</Form.Label>
              <Form.Control
                type="text"
                placeholder="22/09/2020"
                name="publicadaNoticia"
                ref={register({
                  required: {
                    value: true,
                    message: "Ingrese una fecha válida",
                  },
                  pattern: {
                    value: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
                    message: "Ingrese una fecha válida",
                  },
                })}
              />
              <span id="errorFecha" className="text-danger mb-2">
                {errors?.publicadaNoticia?.message}
              </span>
            </Form.Group>

            <Button variant="dark" size="lg" type="submit">
              Publicar
            </Button>
          </Form>
        </div>
      </Container>
    </Fragment>
  );
};

export default NuevaNoticia;
