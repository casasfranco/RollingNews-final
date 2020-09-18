import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Bienvenida from "./components/Administrador/Bienvenida";
import Usuarios from './components/Administrador/Usuarios';
import NuevaNoticia from "./components/Administrador/NuevaNoticia";
import Noticias from "./components/Administrador/Noticias";
import Suscripcion from "./components/Administrador/Suscripcion";


function App() {
  return (
    <div>
      {/* <Bienvenida></Bienvenida>
      <Usuarios></Usuarios>
      <NuevaNoticia></NuevaNoticia>
      <Noticias></Noticias> */}
      <Suscripcion />

      
    </div>
  );
}

export default App;
