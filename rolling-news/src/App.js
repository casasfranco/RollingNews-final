import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Bienvenida from "./components/Administrador/Bienvenida";
import Usuarios from './components/Administrador/Usuarios';
import NuevaNoticia from "./components/Administrador/NuevaNoticia";

function App() {
  return (
    <div>
      <Bienvenida></Bienvenida>
      <Usuarios></Usuarios>
      <NuevaNoticia></NuevaNoticia>
    </div>
  );
}

export default App;
