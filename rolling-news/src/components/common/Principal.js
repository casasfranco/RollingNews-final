import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

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

      <Container className=" container-fluid">
        <div className="row">
          <div className="col-lg-8 col-sm-12 p-0">noticia</div>
          <div className="col-lg-4 col-sm-12 p-0 bg-danger">publicidad</div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-12 p-0"> noticia</div>
          <div className="col-lg-4 col-sm-12 p-0"> noticia</div>
          <div className="col-lg-4 col-sm-12 p-0"> publicidad</div>
        </div>

        <div className="font-weight-bolder"> categoria</div>

        <div className="row">
          <div className="col-lg-4 col-sm-12 p-0">noticia </div>
          <div className="col-lg-4 col-sm-12 p-0">noticia </div>
        </div>

        <div className="font-weight-bolder">categoria</div>
        <div className="row">
          <div className="col-lg-8 col-sm-12 p-0"> Noticia </div>
          <div className="col-lg-4 col-sm-12 p-0"> publicidad</div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-sm-12 p-0">noticia </div>
          <div className="col-lg-4 col-sm-12 p-0"> publicidad</div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-sm-12">noticia </div>
          <div class="col-lg-4 col-sm-12">noticia </div>
          <div class="col-lg-4 col-sm-12"> noticia</div>
        </div>
      </Container>
    </div>
  );
};

export default Principal;
