import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Barra from "./components/common/Barra";
import Bienvenida from "./components/Administrador/Bienvenida";
import Usuarios from "./components/Administrador/Usuarios";
import NuevaNoticia from "./components/Administrador/NuevaNoticia";
import Noticias from "./components/Administrador/Noticias";
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import CategoriaNueva from './components/Administrador/CategoriaNueva';
import Categoria from './components/Administrador/Categoria';


function App() {
  return (
    <div>
      <Header></Header>
      <Barra></Barra>
      <Bienvenida></Bienvenida>
      <Usuarios></Usuarios>
      <NuevaNoticia></NuevaNoticia>
      <Noticias></Noticias>
      <CategoriaNueva></CategoriaNueva>
      <Categoria></Categoria>
      <Footer></Footer>
    </div>
  );
}

export default App;
