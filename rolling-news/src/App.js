import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Barra from "./components/common/Barra";
import Bienvenida from "./components/Administrador/Bienvenida";
import Usuarios from "./components/Administrador/usuario/Usuarios";
import NuevaNoticia from "./components/Administrador/noticia/NuevaNoticia";
import Noticias from "./components/Administrador/noticia/Noticias";
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import CategoriaNueva from './components/Administrador/categoria/CategoriaNueva';
import Categoria from './components/Administrador/categoria/Categoria';


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
