import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Titular = () => {
    return (
        <div className = "container">
            <Jumbotron fluid className="mt-5">
  <Container>
  <h5><Badge variant="info">Actualidad</Badge></h5>
    <div className="mt-4">
    <h1>Titulo de la noticia</h1>
    </div>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
      <div className="mt-4">
     <Card.Subtitle className="text-muted">22 de Septiembre - 08:30</Card.Subtitle>
      </div>
    </p>
  </Container>
  <div className="mt-4">
  <Image src="./imagenes/rolling.jpg" fluid />
  </div>
</Jumbotron>
        </div>
    );
};

export default Titular;