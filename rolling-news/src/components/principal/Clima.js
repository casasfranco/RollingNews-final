import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";

const Clima = (props) => {
  function Cargar() {
      return (
        <Fragment>
          {/* <Card.Img variant="top" src={detallesClima} /> */}
          <Card.Body>
            <Card.Title>{props.detallesClima.location.country}, {props.detallesClima.location.country}</Card.Title>
            <Card.Text>{props.detallesClima.location.timezone_id}</Card.Text>
            <Card.Img
            variant="top"
            className="tiempoImg"
            //Cambiar esta parte -----------------___-
            //obtener desde la api respuesta.weather.icon
            //respuesta.weather[0].icon
            src="http://openweathermap.org/img/wn/09d@2x.png"
          />
          <Card.Text>Nubosidad: {props.detallesClima.current.cloudcover}</Card.Text>
          <Card.Text>Sensacion termica: {props.detallesClima.current.feelslike}</Card.Text>
          <Card.Text>Sensacion Humedad: {props.detallesClima.current.humidity}</Card.Text>
          <Card.Text>Sensacion Hora local: {props.detallesClima.current.observation_time}</Card.Text>
          <Card.Text>Sensacion precipitaciones: {props.detallesClima.current.precip}</Card.Text>
          <Card.Text>Sensacion temperatura: {props.detallesClima.current.temperature}</Card.Text>
          <Card.Text>Sensacion visibilidad: {props.detallesClima.current.visibility}</Card.Text>
          </Card.Body>
        </Fragment>
      );
    return "";
  }

  return (
    <section className="container">
      <div className="col-sm-12 col-md-6">
        <Card><Cargar></Cargar></Card>
        
      </div>
    </section>
  );
};

export default Clima;
