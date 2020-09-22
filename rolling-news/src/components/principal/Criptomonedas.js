import React, { useState, useEffect, Fragment } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const Criptomonedas = (props) => {
  const [detallesMoneda, SetDetallesMoneda] = useState([]);

  useEffect(() => {
    SetDetallesMoneda(props.detallesMoneda);
    console.log(detallesMoneda);
  }, [detallesMoneda]);

  function Cargar() {
    if (detallesMoneda !== undefined) {
      return (
        <Fragment>
          <Card.Title>{props.moneda.name_full}</Card.Title>
          <Card.Text>
            <span className="text-muted">USD</span> {detallesMoneda.price}
          </Card.Text>
        </Fragment>
      );
    }
    return "";
  }

  return (
    <CardDeck>
      <Card>
        <Card.Body>
          <Card.Img
            variant="top"
            className="criptoImg"
            src={props.moneda.icon_url}
          />
          <Cargar></Cargar>
        </Card.Body>
      </Card>
    </CardDeck>

    // <Card className="cardCripto" border="light">
    //   <div className="row justify-content-center">
    //     <Card.Body>
    //       <div className="col-sm-12 col-3">
    //         <Card.Img
    //           variant="top"
    //           className="criptoImg"
    //           src={props.moneda.icon_url}
    //         />
    //       </div>
    //       <div className="col-sm-12 col-4">
    //         <Card.Text>{props.moneda.name_full}</Card.Text>
    //         <Cargar></Cargar>
    //       </div>
    //     </Card.Body>
    //   </div>
    // </Card>
  );
};

export default Criptomonedas;
