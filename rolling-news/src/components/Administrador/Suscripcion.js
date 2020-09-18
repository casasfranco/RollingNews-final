import React from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';
import { useForm } from "react-hook-form";


const Suscripcion = () => {

  const { register, handleSubmit,errors } = useForm();
  const onSubmit = data => console.log(data);  

  return (
    <div>
      <Container>
        <Jumbotron className="text-center">
          <h1>Suscripcion</h1>
          <p>
            A que esperas para suscribirte a la mejor pagina de noticias de todo
            el pais? Completa esta serie de pasos y estaras dentro!
          </p>
        </Jumbotron>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="Nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Juan Perez" name='nombre' ref={register({ required: true, maxLength: 18, minLength: 3, pattern: /^[A-Za-z]+$/i })} />
            {errors.nombre && <Alert variant={"danger"} className="p-1">Requiere su Nombre!</Alert>}
          </Form.Group>

          <Form.Group controlId="Direccion">
            <Form.Label>Direccion</Form.Label>
            <Form.Control type="text" placeholder="Corrientes 961" name='direccion' ref={register({ required: true, maxLength: 18, minLength: 4 })} />
            {errors.direccion && <Alert variant={"danger"} className="p-1">Requiere su Direccion!</Alert>}
          </Form.Group>

          <Form.Group controlId="Localidad">
            <Form.Label>Localidad</Form.Label>
            <Form.Control type="text" placeholder="Ni idea" name='localidad' ref={register({ required: true, maxLength: 30, minLength: 3 })} />
            {errors.localidad && <Alert variant={"danger"} className="p-1">Requiere su Localidad!</Alert>}
          </Form.Group>

          <Form.Group controlId="codigoPostal">
            <Form.Label>Codigo Postal</Form.Label>
            <Form.Control type="number" placeholder="123123" name='codigopostal' ref={register({ required: true, min: 1000, max: 9999 })} />
            {errors.codigopostal && <Alert variant={"danger"} className="p-1">Requiere su Codigo Postal!</Alert>}
          </Form.Group>

          <Form.Group controlId="Telefono">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="number" placeholder="3814919238" name='telefono' ref={register({ required: true, maxLength: 10, minLength: 10 })} />
            {errors.telefono && <Alert variant={"danger"} className="p-1">Requiere su Telefono!</Alert>}
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="juanperez@hotmail.com" name='correo' ref={register({ required: true })} />
            {errors.correo && <Alert variant={"danger"} className="p-1">Requiere su Correo!</Alert>}
          </Form.Group>

          <Button variant="primary" className="w-100 p-3" type="submit">
            <h3>Enviar Datos</h3>
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Suscripcion;
