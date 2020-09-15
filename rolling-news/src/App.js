import React from "react";
import "./App.css";
import Bienvenida from "./components/Administrador/Bienvenida";
import Usuarios from "./components/Administrador/Usuarios";
import "bootstrap/dist/css/bootstrap.min.css";
import Noticias from "./components/Administrador/Noticias";

function App() {
  return (
    <div>
      <Bienvenida></Bienvenida>
      <Usuarios></Usuarios>
      <Noticias></Noticias>
    </div>
  );
}

export default App;
