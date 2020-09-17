import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CategoriaNueva = () => {

    return (
        <div>
<Jumbotron>
  <Container>
    <h2 className="text-center">Nueva Categoria</h2>
  </Container>
</Jumbotron>
<Form className="container">
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Ingrese nueva categoria (*)</Form.Label>
    <Form.Control type="text" placeholder="Ej : Actualidad" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Descripcion (*)</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Button variant="info" type="submit">Añadir nueva categoria</Button>
</Form>
        </div>
    );
};

export default CategoriaNueva;