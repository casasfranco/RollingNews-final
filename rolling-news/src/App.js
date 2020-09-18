import React from 'react';
import './App.css';
import "./bootstrap.min.css";
import  Header from "./components/common/Header";
import  Footer from "./components/common/Footer";
import  Titular from "./components/common/principal/Titular";
import  Imagen from "./components/common/principal/Imagen";
import  Cuerpo from "./components/common/principal/Cuerpo";


function App() {
  return (
    <div>
      <Header></Header>
      <Titular></Titular>
      <Imagen></Imagen>
      <Cuerpo></Cuerpo>
      <Footer></Footer>
    </div>
  );
}

export default App;