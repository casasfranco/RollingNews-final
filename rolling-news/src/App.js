import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Barra from "./components/common/Barra";
import Bienvenida from "./components/Administrador/Bienvenida";
import Usuarios from "./components/Administrador/usuario/Usuarios";
import Noticias from "./components/Administrador/noticia/Noticias";
import NuevaNoticia from "./components/Administrador/noticia/NuevaNoticia";
import Footer from "./components/common/Footer";
import CategoriaNueva from "./components/Administrador/categoria/CategoriaNueva";
import Categoria from "./components/Administrador/categoria/Categoria";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Suscripcion from "./components/Administrador/usuario/Suscripcion";
import PaginaError from "./components/common/PaginaError";
import Titular from "./components/principal/Titular";
import Comentarios from "./components/principal/Comentarios";
import Criptomonedas from './components/common/Criptomonedas';


function App() {
  return (
    <Router>
      <Barra></Barra>
      <Criptomonedas></Criptomonedas>
        <Switch>
        <Route exact path="/principal">
          <Titular></Titular>
          <Comentarios></Comentarios>
        </Route>

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
          <Suscripcion></Suscripcion>
        </Route>

        <Route exact path="/admin/usuarios/nuevo/:id">
          <Suscripcion></Suscripcion>
        </Route>

        <Route exact path="/admin/noticias">
          <Noticias></Noticias>
        </Route>

        <Route exact path="/admin/noticias/nueva">
          <NuevaNoticia></NuevaNoticia>
        </Route>

        <Route exact path="/error404">
          <PaginaError></PaginaError>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}
export default App;
