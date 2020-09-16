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
      <th>#</th>
      <th className="text-center">
    <h3>Categorias Disponibles</h3>

      </th>
     
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>Magacien</td>
     
    </tr>
  </tbody>
</Table>
        </section>
        </Fragment>
    );
};

export default Categoria;