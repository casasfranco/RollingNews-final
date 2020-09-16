import React, { Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";

const Categoria = () => {
    return (
      <Fragment>
<Jumbotron fluid>
  <Container>
    <h1 className="text-center">Administracion de Categorias</h1>       
  </Container>
</Jumbotron>

<section className="container">
<Table striped bordered hover>
  <thead>
    <tr>
      <th>
          #
      </th>
      <th className="text-center">
    <h3>Categorias Disponibles</h3>
      </th>
     <th className="text-center">
     <h3>Acciones</h3>
     </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td className="text-center">Actualidad</td>
      <td className="text-center">Editar</td>
    </tr>
    <tr>
      <td>2</td>
      <td className="text-center">Politica</td>
      <td className="text-center">Editar</td>
    </tr>
    <tr>
      <td>3</td>
      <td className="text-center">Tecnologia</td>
      <td className="text-center">Editar</td>
     </tr>
     <tr>
      <td>3</td>
      <td className="text-center">Deportes</td>
      <td className="text-center">Editar</td>
     </tr>
     <tr>
      <td>3</td>
      <td className="text-center">Espectaculos</td>
      <td className="text-center">Editar</td>
     </tr>
     <tr>
      <td>3</td>
      <td className="text-center">Economia</td>
      <td className="text-center">Editar</td>
     </tr>
     <tr>
      <td>3</td>
      <td className="text-center">Salud</td>
      <td className="text-center">Editar</td>
     </tr>
     <tr>
      <td>8</td>
      <td className="text-center">Fotografia</td>
      <td className="text-center">Editar</td>
     </tr>
</tbody>
</Table>
        </section>
        </Fragment>
    );
};

export default Categoria;