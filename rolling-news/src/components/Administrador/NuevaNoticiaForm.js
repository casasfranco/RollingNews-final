import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const NuevaNoticiaForm = () => {
  //const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  const { register, errors, handleSubmit } = useForm();

  
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <Fragment>
      <Container>
        <div className="bg-secondary p-5 my-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
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
                    value: /^[A-Za-z0-9]+$/i,
                    message:
                      "Ingrese un texto válido",
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
                    value: 150,
                    message: "No más de 150 carácteres",
                  },
                  minLength: {
                    value: 10,
                    message: "Mínimo 10 carácteres",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9]+$/i,
                    message:
                      "Ingrese un texto válido",
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
                    value: 100,
                    message: "No más de 100 carácteres",
                  },
                  minLength: {
                    value: 3,
                    message: "Mínimo 5 carácteres",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9]+$/i,
                    message:
                      "Ingrese una url",
                  },
                })}
              />
              <span id="errorUrlImgPrincipalNoticia" className="text-danger mb-2">
                {errors?.urlImgPrincipalNoticia?.message}
              </span>
            </Form.Group>
            <Form.Group controlId="cuerpoNoticia">
              <Form.Label>Cuerpo de la noticia</Form.Label>
              <Form.Control as="textarea" rows={10}
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
                    message: "Mínimo 5 carácteres",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9]+$/i,
                    message:
                      "Ingrese la información de la noticia",
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
                    value: 100,
                    message: "No más de 100 carácteres!",
                  },
                  minLength: {
                    value: 3,
                    message: "Mínimo 5 carácteres",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9]+$/i,
                    message:
                      "Ingrese una url",
                  },
                })}
              />
              <span id="errorUrlImgOpcionalNoticia" className="text-danger mb-2">
                {errors?.urlImgOpcionalNoticia?.message}
              </span>
            </Form.Group>
            <Form.Group controlId="categoriaNoticia">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Deportes"
                name="categoriaNoticia"
                ref={register({
                  required: {
                    value: true,
                    message: "Ingrese una categoria",
                  },
                  maxLength: {
                    value: 20,
                    message: "No más de 20 carácteres!",
                  },
                  minLength: {
                    value: 3,
                    message: "Mínimo 5 carácteres",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message:
                      "Ingrese solo texto",
                  },
                })}
              />
              <span id="errorCategoria" className="text-danger mb-2">
                {errors?.categoriaNoticia?.message}
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
                    message: "Mínimo 5 carácteres",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message:
                      "Ingrese solo texto",
                  },
                })}
              />
              <span id="errorAutor" className="text-danger mb-2">
                {errors?.autorNoticia?.message}
              </span>
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
                  maxLength: {
                    value: 20,
                    message: "No más de 20 carácteres!",
                  },
                  minLength: {
                    value: 3,
                    message: "Mínimo 5 carácteres",
                  },
                  pattern: {
                    value: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
                    message:
                      "Ingrese una fecha válida",
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

export default NuevaNoticiaForm;
