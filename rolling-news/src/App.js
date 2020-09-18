import React from 'react';
import './App.css';
import "./bootstrap.min.css";
import  Header from "./components/common/Header";
import  Footer from "./components/common/Footer";


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