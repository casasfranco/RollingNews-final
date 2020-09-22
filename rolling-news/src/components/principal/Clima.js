import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Clima = (props) => {
  function Cargar() {
    return (
      <Fragment>
        <Card border="dark">
          <Card.Header className="bg-dark text-light">
            <h3>
              {props.detallesClima.location.country},{" "}
              {props.detallesClima.location.region}
            </h3>
          </Card.Header>
          <Card.Body className="container">
              <Row>
                <div className="col-6">
                  <Card.Img
                    variant="top"
                    className="tiempoImg"
                    //Cambiar esta parte -----------------___-
                    //obtener desde la api respuesta.weather.icon
                    //respuesta.weather[0].icon
                    src="http://openweathermap.org/img/wn/09d@2x.png"
                  />
                  <b>{props.detallesClima.current.temperature}C°</b>
                </div>
                <div className="col-6">
                  <h6>
                    Sensacion térmica: {props.detallesClima.current.feelslike}°
                  </h6>
                  <h6>Humedad: {props.detallesClima.current.humidity}%</h6>
                </div>
              </Row>
          </Card.Body>
        </Card>
      </Fragment>
    );
    return "";
  }

  return (
    
      <div className="apiClima m-2">
        <Card>
          <Cargar></Cargar>
        </Card>
      </div>

  );
};

export default Clima;
