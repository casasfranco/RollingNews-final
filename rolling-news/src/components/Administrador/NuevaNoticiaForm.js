import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const NuevaNoticiaForm = () => {
  return (
    <Fragment>
      <Container>
        <div className="bg-secondary p-5 my-4">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className>
                <h5>Titulo</h5>
              </Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className>
                <h5>Descripción breve</h5>
              </Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className>
                <h5>Imagen principal</h5>
              </Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className>
                <h5>Imagen opcional</h5>
              </Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label><h5>Cuerpo de la noticia</h5></Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className>
                <h5>Categoria</h5>
              </Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className>
                <h5>Autor</h5>
              </Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className>
                <h5>Fecha de publicación</h5>
              </Form.Label>
              <Form.Control type="text"/>
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

export default NuevaNoticiaForm;
