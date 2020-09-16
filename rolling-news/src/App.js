import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Bienvenida from "./components/Administrador/Bienvenida";
import Usuarios from './components/Administrador/Usuarios';
import NuevaNoticia from "./components/Administrador/NuevaNoticia";
import Noticias from "./components/Administrador/Noticias";


function App() {
  return (
    <div>
      <Bienvenida></Bienvenida>
      <Usuarios></Usuarios>
      <NuevaNoticia></NuevaNoticia>
      <Noticias></Noticias>
      

      
    </div>
  );
}

export default App;
