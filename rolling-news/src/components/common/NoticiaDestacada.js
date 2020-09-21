import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const NoticiaDestacada = () => {
  return (
    <div>
      <Card className=" p-0 mt-0  w-100 h-75">
        <Card.Img
          className="mt-0 w-100 h-50"
          src="https://picsum.photos/300/150?random"
        ></Card.Img>
        <Card.Body>
          <Card.Title className="m-0">Titulo</Card.Title>

          <Card.Text>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            magnam dignissimos, iure obcaecati perspiciatis beatae, fuga, quam
            soluta dolores sint ipsa quasi nulla doloremque porro? Nihil tenetur
            quod at minus!
          </Card.Text>
        </Card.Body>
        <Link href="#" className=" text-dark font-italic mx-2 my-3">
          {" "}
          Leer mas...
        </Link>
      </Card>
    </div>
  );
};

export default NoticiaDestacada;