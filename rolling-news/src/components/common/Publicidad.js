import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import PublicidadCorona from "../../assets/publicidad-corona.jpg";
import PublicidadSantander from "../../assets/publicidad-santander.jpg";
import PublicidadRedBull from "../../assets/publicidad-redbull.jpg";
import PublicidadCocaCola from "../../assets/publicidad-cocacola.jpg";

const Publicidad = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Image id="PublicidadCorona" src={PublicidadCorona} className="w-100" alt="anuncio"></Image>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Image id="PublicidadSantander" src={PublicidadSantander} className="w-100" alt="publicidad"></Image>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Image id="PublicidadRedBull" src={PublicidadRedBull} className="w-100" alt="publicidad"></Image>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Image id="PublicidadCocaCola" src={PublicidadCocaCola} className="w-100" alt="publicidad"></Image>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Publicidad;
