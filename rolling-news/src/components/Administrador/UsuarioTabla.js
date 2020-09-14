import React from "react";
import Table from "react-bootstrap/table";

const UsuarioTabla = () => {
  return (
    <Table striped bordered variant="dark text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre y Apellido</th>
          <th>Email</th>
          <th>Usuario</th>
          <th>Teléfono</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody className="bg-light text-dark">
        <tr>
          <td>1</td>
          <td>Juanito Alcachofa</td>
          <td>sembrandoelterror@yahoo.com</td>
          <td>Juanchofa</td>
          <td>112549845</td>
          <td>Esperando su amor</td>
          <td>Editar / Borrar / Habilitar</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UsuarioTabla;
