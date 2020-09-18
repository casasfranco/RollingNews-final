import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Bienvenida from "./components/Administrador/Bienvenida";
import Usuarios from './components/Administrador/Usuarios';
import NuevaNoticia from "./components/Administrador/NuevaNoticia";
import Noticias from "./components/Administrador/Noticias";
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import CategoriaNueva from './components/principal/CategoriaNueva';


function App() {
  return (
    <div>
      <Bienvenida></Bienvenida>
      <Usuarios></Usuarios>
      <NuevaNoticia></NuevaNoticia>
      <Noticias></Noticias>
      <Header></Header>
      <CategoriaNueva></CategoriaNueva>
      <Footer></Footer>
    </div>
  );
}

export default App;
