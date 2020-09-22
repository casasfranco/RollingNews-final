import React from "react";
import NoticiaDestacada from "./NoticiaDestacada.js";
import NoticiaSecundaria from "./NoticiaSecundaria.js";
import Publicidad from "./Publicidad.js";

const Principal = () => {
  return (
    <div>
      <div className="row m-0" >
        <h1>Apis</h1>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-between">
          {/* Inicio de las cards de noticias */}
          <div className="col-sm-10 col-md-8 col-xl-9">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-xl-8">
                <NoticiaDestacada ></NoticiaDestacada>
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
                <NoticiaSecundaria></NoticiaSecundaria>
                <NoticiaSecundaria></NoticiaSecundaria>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-8">
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
