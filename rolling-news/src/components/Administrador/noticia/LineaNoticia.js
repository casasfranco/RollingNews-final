import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";


const LineaNoticia = (props) => {
  const eliminarNoticia = (id) => {
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
            `http://localhost:4000/api/noticia/${id}`,
            {
              method: "DELETE",
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
          props.setRecargarNoticias(true);
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
            <p>{props.noticia.volantaNoticia}</p>
            <p>{props.noticia.tituloPrincipalNoticia}</p>
            <p>
              <span className="ml-3 text-muted">
                Descripción: {props.noticia.copeteNoticia}
              </span>
              <span className="ml-3 text-muted">
                Descripción: {props.noticia.urlImgPrincipalNoticia}
              </span>
              <span className="ml-3 text-muted">
                Descripción: {props.noticia.cuerpoNoticia}
              </span>
              <span className="ml-3 text-muted">
                Descripción: {props.noticia.urlImgOpcionalNoticia}
              </span>
              <span className="ml-3 text-muted">
                Descripción: {props.noticia.autorNoticia}
              </span>
            
              <span className="ml-3 text-muted">
                Descripción: {props.noticia.categoriaNoticia}
              </span>
            </p>
          </div>
        </div>
        <div>
          <Button
            variant="danger"
            onClick={() => eliminarNoticia(props.noticia._id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};


export default LineaNoticia;
