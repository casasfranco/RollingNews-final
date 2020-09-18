import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Bienvenida = () => {
  return (
    <div>
      <Card className="w-100">
        <Card.Img src="fondoBienvenida.jpg" alt="Fondo de bienvenida" />
      </Card>
      <div className="row justify-content-center my-5 text-center">
        <Link to="/admin/categorias">
          <Button variant="info" size="lg">
            Categorias
          </Button>
        </Link>
        <Link to="/admin/usuarios">
          <Button variant="info" size="lg">
            Usuarios
          </Button>{" "}
        </Link>
        <Link to="/admin/noticias">
          <Button variant="info" size="lg">
            Noticias
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Bienvenida;
