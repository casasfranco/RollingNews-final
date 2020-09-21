import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NoticiaDestacada from "./NoticiaDestacada.js";
import NoticiaSecundaria from "./NoticiaSecundaria.js";

const Principal = () => {
  return (
    <div>
      <div className="row">
        <h1>Apis</h1>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-between">
          {/* Cards */}
          <div className="col-sm-10 col-md-8 col-xl-9">
            <div className="row">
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
              <div className="col-sm-12 col-md-6 col-xl-4 p-0">
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
            <div className="col-sm-12 col-md-4 col-xl-3 mb-4">
              <div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
