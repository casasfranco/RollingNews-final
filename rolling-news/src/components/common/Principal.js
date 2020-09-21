import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NoticiaDestacada from "./NoticiaDestacada.js";
import Publicidad from "./Publicidad.js"

const Principal = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Card className="p-2" border="dark" id="">
                <h3>Aqui van las monedas</h3>
              </Card>
            </Col>
            <Col>
              <Card className="p-2" border="dark" id="">
                <h3>Aqui va el clima</h3>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <div className="container-fluid">
        <div className="row justify-content-between">
          {/* Inicio de las cards de noticias */}
          <div className="col-sm-10 col-md-8 col-xl-9">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-xl-4">
                <NoticiaDestacada></NoticiaDestacada>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <NoticiaDestacada></NoticiaDestacada>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <NoticiaDestacada></NoticiaDestacada>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <NoticiaDestacada></NoticiaDestacada>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <NoticiaDestacada></NoticiaDestacada>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <NoticiaDestacada></NoticiaDestacada>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <NoticiaDestacada></NoticiaDestacada>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <NoticiaDestacada></NoticiaDestacada>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <NoticiaDestacada></NoticiaDestacada>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <NoticiaDestacada></NoticiaDestacada>
              </div>
            </div>
          </div>
          {/* Fin de las cards de noticias */}
          <div className="col-sm-12 col-md-4 col-xl-3 mb-4">
            <div>
              <Publicidad></Publicidad>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
