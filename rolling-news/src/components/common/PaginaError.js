import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const PaginaError = () => {
  return (
    <Fragment>
      <div id="oopss">
        <div className="text-center">
          <img
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt="404"
          />
          <h3>Oh... Parece que te perdiste...</h3>
          <h3>Esta pagina no se encontro! </h3>
          <Link to={`/principal`}>
            <Button variant="danger" className="mt-3">
              Volver
            </Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default PaginaError;
