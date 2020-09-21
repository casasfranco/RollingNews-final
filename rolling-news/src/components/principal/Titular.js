import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Comentarios from './Comentarios';



const Titular = () => {
    return (
  <div className = "container">
  <Jumbotron fluid className="mt-3">
  <Container>
  <h5><Badge variant="info">Actualidad</Badge></h5>
    <div className="mt-2">
    <h1>Titulo de la noticia</h1>
    </div>
    <h5>En tiempos sin pandemia, el próximo lunes es una fecha de encuentro para los jóvenes tucumanos, que tradicionalmente salen a celebrar el día del estudiante y la llegada de la primavera..</h5>
<div className="mt-2">
     <Card.Subtitle className="text-muted">22 de Septiembre - 08:30</Card.Subtitle>
      </div>
  
  </Container>
  <div className="mt-2 ml-3">
  <Image src="tucuman.jpg" fluid />
  <p>Foto tomada por Rolling News .</p>
  </div>
  <section className="container ml-2">
  <Image src="cuidarse.png" fluid />
  </section>
  <section className="container mt-2">
  <p>En tiempos sin pandemia, el próximo lunes es una fecha de encuentro para los jóvenes tucumanos, que tradicionalmente salen a celebrar el día del estudiante y la llegada de la primavera.

Por esta razón, las autoridades sanitarias y municipales pusieron su atención en el 21 de septiembre, jornada que reforzarán los controles para evitar reuniones como las que ocurrieron el Día del Amigo o las aglomeraciones del Día del Niño.

Ayer jueves, la ministra de Salud, Rossana Chahla, acompañada por el secretario ejecutivo médico del Siprosa, Luis Medina Ruiz, recibió en su despacho al secretario de gobierno de la Municipalidad de San Miguel de Tucumán, Luis Rodolfo Ocaranza; y dialogaron sobre nuevas acciones para restringir la circulación masiva en el centro y para el próximo lunes.

Nos convocó la señora ministra de Salud al secretario de gobierno de la Municipalidad y a mí para tratar, sobre todo, el hecho de cómo restringir el tránsito en la ciudad. Estamos muy preocupados porque sabemos que el virus circula con las personas y esto es muy intenso en el microcentro sobre todo. Estuvimos hablando sobre algunas estrategias que vamos a implementar pensando en el 21 de septiembre por el Día del Estudiante, cómo restringir la circulación y cómo vamos a actuar para los festejos”.</p>
 
 <strong>Nota Elaborada por Lucas Gutierrez.</strong>
</section>

<div className="container mt-5">
  <h4>Comentarios</h4>
 <Comentarios></Comentarios>
</div>
 
</Jumbotron>
        </div>
    );
};

export default Titular;