import React, { Fragment } from 'react';
import './App.css';
import "./bootstrap.min.css";
import  Header from "./components/common/Header";
import  Footer from "./components/common/Footer";
import  Titular from "./components/common/principal/Titular";
import Comentarios from './components/common/principal/Comentarios';



function App() {
  return (
    <div>
      <Header></Header>
      <Titular></Titular>
      <Comentarios></Comentarios>
      <Footer></Footer>
     </div>

  );
}

export default App;