import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NoticiaDestacada from "./NoticiaDestacada.js";

const Principal = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          {" "}
          <Row>
            <Col>
              <Card className="p-2" border="dark" id="">
                <h3>aqui van las monedas</h3>
              </Card>
            </Col>
            <Col>
              <Card className="p-2" border="dark" id="">
                <h3>aqui va el clima</h3>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <div className="container-fluid">
        <div className="row justify-content-between">
          {/* Cards */}
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
            </div>
            <div className="col-sm-12 col-md-4 col-xl-3 mb-4">
              <div>
                <Card>
                  <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
