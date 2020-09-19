import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CategoriaNueva = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    //Modelo del objeto con el que vamos a trabajar (debe cumplir esta estructura)
    const categoria = {
      nombreCat: data.nombreCategoria,
      descripcionCat: data.descripcionCategoria,
      estadoCat: true,
    };

    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify(categoria),
      };

      const resultado = await fetch(
        "http://localhost:4000/api/categoria/",
        cabecera
      );
      console.log(resultado);
      //Compruebo la respuesta
      if (resultado.status === 200) {
        Swal.fire(
          "La categoria creada",
          "La categoria se creo correctamente",
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
    <div>
      <Jumbotron>
        <Container>
          <h2 className="text-center">Nueva Categoria</h2>
        </Container>
      </Jumbotron>
      <Form className="container" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Ingrese nueva categoria (*)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej : Actualidad"
            name="nombreCategoria"
            ref={register({
              required: {
                value: true,
                message: "Ingrese una categoria",
              },
              maxLength: {
                value: 15,
                message: "No más de 15 carácteres",
              },
              minLength: {
                value: 5,
                message: "Mínimo 5 carácteres",
              },
              pattern: {
                value: /^[A-Za-z0-9\s]+$/g,
                message: "Ingrese una opcion válida",
              },
            })}
          />
          <span id="errorCategoriaNueva" className="text-danger mb-2">
            {errors?.nombreCategoria?.message}
          </span>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripcion (*)</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            type="text"
            placeholder="Esta categoria tratará sobre...."
            name="descripcionCategoria"
            ref={register({
              required: {
                value: true,
                message: "Agregue una descripcion de esta categoria",
              },
              maxLength: {
                value: 50,
                message: "No más de 50 carácteres",
              },
              minLength: {
                value: 5,
                message: "Mínimo 5 carácteres",
              },
              pattern: {
                value: /^[A-Za-z0-9\s]+$/g,
                message: "Agregue una descripción de esta categoria",
              },
            })}
          />
          <span id="errorTitulo" className="text-danger mb-2">
            {errors?.descripcionCategoria?.message}
          </span>
        </Form.Group>
        <Button variant="info" type="submit">
          Añadir nueva categoria
        </Button>
      </Form>
    </div>
  );
};

export default CategoriaNueva;
