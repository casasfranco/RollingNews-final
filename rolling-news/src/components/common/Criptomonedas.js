import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const Criptomonedas = () => {
    return (
 <section className ="container mt-2">
   <div className="row">
   <CardDeck >
  <div className="col-sm-12 col-md-6">
  <Card  style={{ width: '18rem' }}>
    <Card.Img variant="top" src="cripto.png" />
    <Card.Body>
      <Card.Text>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  <div className="col-sm-12 col-md-6">
   <Card  style={{ width: '18rem' }}>
    <Card.Img variant="top" src="clima.png" />
    </Card>
    </div>
</CardDeck>
</div>
        </section>
    );
};

export default Criptomonedas;