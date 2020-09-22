import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const NoticiaSecundaria = () => {
  return (
    <ListGroup.Item className="my-0 ">
      <div className="d-flex justify-content-between">
        <div className="col-md-7 col-12 p-0">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Titulo</h5>
          </div>
          <p className="mt-2">Sobre la noticia</p>
          <Link href="#" className=" text-dark font-italic mx-2 my-3">
            {" "}
            Leer mas...
          </Link>
        </div>
        <div className="col-md-5 p-0 w-100 h-100 rounded ">
          <img
            src="https://picsum.photos/600/500?random"
            alt=" "
            className="img-fluid mt-0"
          />
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default NoticiaSecundaria;
