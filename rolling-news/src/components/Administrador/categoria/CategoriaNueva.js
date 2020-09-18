import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

const CategoriaNueva = () => {
  const { register, errors, handleSubmit } = useForm();
  const [datos, setDatos] = useState("")

  const onSubmit = (data, e) => {
    console.log(data);
    setDatos(data);
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
            name="categoriaNueva"
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
                value: /^[A-Za-z]+$/i,
                message: "Ingrese una opcion válida",
              },
            })}
          />
          <span id="errorCategoriaNueva" className="text-danger mb-2">
            {errors?.categoriaNueva?.message}
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
                value: 30,
                message: "No más de 30 carácteres",
              },
              minLength: {
                value: 5,
                message: "Mínimo 5 carácteres",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
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
