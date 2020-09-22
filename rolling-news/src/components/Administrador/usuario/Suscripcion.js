import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

const Suscripcion = (props) => {
  const [provinciasAPI, setProvinciasAPI] = useState([]);
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState();
  const [localidadesAPI, setLocalidadesAPI] = useState([]);
  const [cargarLocalidades, setCargarLocalidades] = useState(false);
  const location = useLocation();
  //console.log(location.state.usuario);
  let usuario;

  //Controlo si hay valores (estoy en editar)
  if (location.state !== undefined) {
    usuario = location.state.usuario;
  }
  const { register, handleSubmit, errors } = useForm({
    defaultValues: usuario,
  });

  useEffect(() => {
    consultarProvinciasAPI();
    if (cargarLocalidades) {
      consultarLocalidadesAPI();
      setCargarLocalidades(false);
    }
  }, [cargarLocalidades]);

  function prueba(valor) {
    console.log(valor);
  }

  //Cargo las provincias en el desplegable
  const consultarProvinciasAPI = async () => {
    try {
      const cabecera = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({token:localStorage.getItem('token')}),
      };
      const respuesta = await fetch(
        `https://apis.datos.gob.ar/georef/api/provincias`,
        cabecera
      )
        .then(function (response) {
          return response.json();
        })
        .then((response) => {
          setProvinciasAPI(response.provincias);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //Cargo las localidades en el desplegable
  const consultarLocalidadesAPI = async () => {
    try {
      const cabecera = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({token:localStorage.getItem('token')}),
      };
      const respuesta = await fetch(
        `https://apis.datos.gob.ar/georef/api/localidades?provincia=${provinciaSeleccionada}&campos=id&max=500`,
        cabecera
      )
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        setLocalidadesAPI(response.localidades);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data, e) => {
    // console.log(data);
    // console.log(data.provinciaUsuario);
    const usuario = {
      nombre: data.nombre,
      apellido: data.apellido,
      nombreUsuario: data.nombreUsuario,
      passUsuario: data.passUsuario,
      emailUsuario: data.emailUsuario,
      direccionUsuario: data.direccionUsuario,
      provinciaUsuario: data.provinciaUsuario,
      localidadUsuario: data.localidadUsuario,
      cpUsuario: data.cpUsuario,
      numTelefonoUsuario: data.numTelefonoUsuario,
      perfilUsuario: "publico",
      estadoUsuario: false,
    };

    console.log(usuario);

    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify(usuario),
      };

      const resultado = await fetch(
        "https://rolling-news-servidor.herokuapp.com/api/usuario/",
        cabecera
      );
      //Compruebo la respuesta
      if (resultado.status === 200) {
        Swal.fire(
          "Gracias!",
          "Sus datos fueron enviados y pronto nos contactaremos!",
          "success"
        );
      }
      //redireccionar
      // browserHistory.push("/admin/categorias");
      // props.history.push("/admin/categorias");
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

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
          <Form.Group controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Juanito"
              name="nombre"
              ref={register({
                required: true,
                maxLength: 18,
                minLength: 3,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors.nombre && (
              <Alert variant={"danger"} className="p-1">
                ⚠ Requiere su Nombre!
              </Alert>
            )}
          </Form.Group>

          <Form.Group controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Alcachofa"
              name="apellido"
              ref={register({
                required: true,
                maxLength: 18,
                minLength: 3,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors.apellido && (
              <Alert variant={"danger"} className="p-1">
                ⚠ Requiere su Apellido!
              </Alert>
            )}
          </Form.Group>

          <Form.Group controlId="nombreUsuario">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="juanitoGeimer69ALCACHOFAlover"
              name="nombreUsuario"
              ref={register({
                required: true,
                maxLength: 18,
                minLength: 3,
              })}
            />
            {errors.nombreUsuario && (
              <Alert variant={"danger"} className="p-1">
                ⚠ Requiere un Usuario!
              </Alert>
            )}
          </Form.Group>

          <Form.Group controlId="passUsuario">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              name="passUsuario"
              ref={register({ required: true })}
            />
            {errors.passUsuario && (
              <Alert variant={"danger"} className="p-1">
                ⚠ Requiere una Contraseña!
              </Alert>
            )}
          </Form.Group>

          <Form.Group controlId="direccionUsuario">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Corrientes 961"
              name="direccionUsuario"
              ref={register({
                required: true,
                maxLength: 18,
                minLength: 4,
              })}
            />
            {errors.direccionUsuario && (
              <Alert variant={"danger"} className="p-1">
                ⚠ Requiere su Direccion!
              </Alert>
            )}
          </Form.Group>

          <Form.Group controlId="provinciaUsuario">
            <Form.Label>Provincia</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Seleccione..."
              name="provinciaUsuario"
              ref={register({
                required: true,
              })}
              onChange={(e) => {
                setProvinciaSeleccionada(e.target.value);
                setCargarLocalidades(true);
              }}
            >
              {provinciasAPI.map((provincia) => (
                <option value={provincia.nombre} key={provincia.id}>
                  {provincia.nombre}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="localidadUsuario">
            <Form.Label>Localidad</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Seleccione..."
              name="localidadUsuario"
              ref={register({
                required: true,
              })}
            >
              {localidadesAPI.map((localidad) => (
                <option value={localidad.nombre} key={localidad.id}>
                  {localidad.nombre}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="cpUsuario">
            <Form.Label>Codigo Postal</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ni idea"
              name="cpUsuario"
              ref={register({
                required: true,
                maxLength: 4,
                minLength: 4,
                pattern: { value: /^[0-9]+$/i },
              })}
            />
            {errors.cpUsuario && (
              <Alert variant={"danger"} className="p-1">
                ⚠ Requiere su Codigo Postal!
              </Alert>
            )}
          </Form.Group>

          <Form.Group controlId="numTelefonoUsuario">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="3814919238"
              name="numTelefonoUsuario"
              ref={register({
                required: true,
                maxLength: 10,
                minLength: 10,
                pattern: { value: /^[0-9]+$/i },
              })}
            />
            {errors.numTelefonoUsuario && (
              <Alert variant={"danger"} className="p-1">
                ⚠ Requiere su Telefono!
              </Alert>
            )}
          </Form.Group>

          <Form.Group controlId="emailUsuario">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              placeholder="juanperez@hotmail.com"
              name="emailUsuario"
              ref={register({
                required: true,
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i },
              })}
            />
            {errors.emailUsuario && (
              <Alert variant={"danger"} className="p-1">
                ⚠ Requiere su Correo!
              </Alert>
            )}
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
