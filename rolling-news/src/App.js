import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Barra from "./components/common/Barra";
import Bienvenida from "./components/Administrador/Bienvenida";
import Usuarios from "./components/Administrador/usuario/Usuarios";
import Noticias from "./components/Administrador/noticia/Noticias";
import NuevaNoticia from "./components/Administrador/noticia/NuevaNoticia";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import CategoriaNueva from "./components/Administrador/categoria/CategoriaNueva";
import Categoria from "./components/Administrador/categoria/Categoria";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <Barra></Barra>
      <Switch>
        <Route exact path="/admin">
          <Bienvenida></Bienvenida>
        </Route>
        <Route
          exact
          path="/admin/categorias"
          render={() => (
            <div>
              <Categoria></Categoria>
            </div>
          )}
        ></Route>

        <Route exact path="/admin/categorias/nueva">
          <CategoriaNueva></CategoriaNueva>
        </Route>

        <Route exact path="/admin/usuarios">
          <Usuarios></Usuarios>
        </Route>

        <Route exact path="/admin/usuarios/nuevo">
          {/* <CategoriaNueva></CategoriaNueva> */}
        </Route>

        <Route exact path="/admin/noticias">
          <Noticias></Noticias>
        </Route>

        <Route exact path="/admin/noticias/nueva">
          <NuevaNoticia></NuevaNoticia>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
