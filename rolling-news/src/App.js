import React from "react";
import "./App.css";
import Bienvenida from "./components/Administrador/Bienvenida";
import Usuarios from './components/Administrador/Usuarios';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <Bienvenida></Bienvenida>
      <Usuarios></Usuarios>
    </div>
  );
}

export default App;
