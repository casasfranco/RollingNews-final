import React, { Fragment, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const NuevaNoticiaForm = () => {
  /*const [validar, setValidar] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("en el publicar")

  }
  
  const revisar = () => {
    if (setValidar() === false){
    console.log("Por favor complete los campos");
    }
      console.log("Todo esta en orden");
  }*/

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Fragment>
      <Container>
        <div className="bg-secondary p-5 my-4">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="tituloPrincipalNoticia">
              <Form.Label>
                <h5>Titulo</h5>
              </Form.Label>
              <Form.Control required type="text" placeholder="titulo principal"/>
              <Form.Control.Feedback>bien ahiii</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="copeteNoticia">
              <Form.Label>
                <h5>Descripción breve</h5>
              </Form.Label>
              <Form.Control required type="text"/>
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="urlImgPrincipalNoticia">
              <Form.Label>
                <h5>Imagen principal</h5>
              </Form.Label>
              <Form.Control required type="text"/>
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="cuerpoNoticia">
              <Form.Label>
                <h5>Cuerpo de la noticia</h5>
              </Form.Label>
              <Form.Control required as="textarea" rows="3" />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="urlImgOpcionalNoticia">
              <Form.Label>
                <h5>Imagen opcional</h5>
              </Form.Label>
              <Form.Control required type="text" />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="categoriaNoticia">
              <Form.Label>
                <h5>Categoria</h5>
              </Form.Label>
              <Form.Control required type="text"/>
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="autorNoticia">
              <Form.Label>
                <h5>Autor</h5>
              </Form.Label>
              <Form.Control required type="text"/>
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="publicadaNoticia">
              <Form.Label>
                <h5>Fecha de publicación</h5>
              </Form.Label>
              <Form.Control required type="text"/>
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>

            <Button type="submit">Publicar</Button>
          </Form>
        </div>
      </Container>
    </Fragment>
  );
};

export default NuevaNoticiaForm;
