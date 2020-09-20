import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const LineaUsuarios = () => {
  const eliminarUsuario = (id) => {
    Swal.fire({
      title: "¿Esta seguro de eliminar el usuario?",
      text: "No puedes recuperar un usuario eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then(async (result) => {
      if (result.value) {
        //Elimino user
        try {
          const resultado = await fetch(
            `https://rolling-news-servidor.herokuapp.com/api/usuario/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-type": "application/json",
                token: localStorage.getItem("token"),
              },
            }
          );
          if (resultado.status === 200) {
            Swal.fire(
              "Usuario eliminado!",
              "Su usuario fue eliminado correctamente.",
              "success"
            );
          }
          //Recargar la lista de usuarios
          props.setRecargarUsuarios(true);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <div className="row">
          <div className="ml-3">
            <p>{props.usuario.nombre}</p>
            <p>{props.usuario.apellido}</p>
            <p>{props.usuario.nombreUsuario}</p>
            <p>{props.usuario.passUsuario}</p>
            <p>{props.usuario.direccionUsuario}</p>
            <p>{props.usuario.localidadUsuario}</p>
            <p>{props.usuario.localidadUsuario}</p>
            


          </div>
        </div>
        <div>
          <Button
            variant="danger"
            onClick={() => eliminarUsuario(props.usuario._id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default LineaUsuarios;
