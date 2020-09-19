import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const LineaCategoria = (props) => {
  const eliminarCategoria = (id) => {
    console.log(id);

    Swal.fire({
      title: "¿Esta seguro de eliminar la categoria?",
      text: "No puedes recuperar una categoria eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then(async (result) => {
      if (result.value) {
        //Elimino la categoria
        try {
          const resultado = await fetch(
            `http://localhost:4000/api/categoria/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-type": "application/json",
                token: localStorage.getItem("token"),
              },
            }
          );
          console.log(resultado);
          if (resultado.status === 200) {
            Swal.fire(
              "Categoria eliminada!",
              "Su categoria fue eliminada correctamente.",
              "success"
            );
          }

          //Recargar la lista de categorias
          props.setRecargarCategorias(true);
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
            <p>{props.categoria.nombreCat}</p>
            <p>
              <span className="ml-3 text-muted">
                Descripción: {props.categoria.descripcionCat}
              </span>
            </p>
          </div>
        </div>
        <div>
          <Button
            variant="danger"
            onClick={() => eliminarCategoria(props.categoria._id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default LineaCategoria;
