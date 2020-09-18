import React from "react";
import Table from "react-bootstrap/table";

const NoticiasTabla = () => {
  return (
    <Table striped bordered variant="dark text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Fecha de publicación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody className="bg-light text-dark">
        <tr>
          <td>1</td>
          <td>Tucumán superó los 8.000 casos de coronavirus</td>
          <td>Juanito</td>
          <td>15/09/2020</td>
          <td>Editar / Borrar</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default NoticiasTabla;
