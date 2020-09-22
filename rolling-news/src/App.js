import React, { useState, useEffect, Fragment } from "react";
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
import Criptomonedas from "./components/principal/Criptomonedas";
import Clima from "./components/principal/Clima";
import Principal from "./components/common/Principal";

function App() {
  const [monedasAPI, setMonedasAPI] = useState();
  const [recargarMonedas, setRecargarMonedas] = useState(true);
  const [recargarMonedasDetalle, setRecargarMonedasDetalle] = useState(false);
  const [urlMonedas, setUrlMonedas] = useState();
  const [monedasDetalleAPI, setMonedasDetalleAPI] = useState();
  const [climaAPI, setClimaAPI] = useState();
  const [recargarClima, setRecargarClima] = useState(true);

  useEffect(() => {
    if (recargarMonedas) {
      consultarMonedasAPI();
      setRecargarMonedas(false);
    }

    if (!recargarMonedas && recargarMonedasDetalle) {
      consultarAPI();
      setRecargarMonedasDetalle(false);
    }

    if (recargarClima) {
      consultarClimaAPI();
      setRecargarClima(false);
    }
  }, [recargarMonedas, recargarMonedasDetalle]);

  const consultarMonedasAPI = async () => {
    try {
      const cabecera = {
        method: "POST",
      };
      const resultado = await fetch(
        "http://api.coinlayer.com/list?access_key=91181e7c115623a9e2d9470dba2b0a1f",
        cabecera
      )
        .then(function (response) {
          return response.json();
        })
        .then((response) => {
          let bitcoin = response.crypto.BTC;
          let ethereum = response.crypto.ETH;
          let rippleXRP = response.crypto.XRP;
          let litecoin = response.crypto.LTC;
          let listaCrypt = [];
          listaCrypt.push(bitcoin, ethereum, rippleXRP, litecoin);
          let simbolos = `${bitcoin.symbol}, ${ethereum.symbol}, ${rippleXRP.symbol}, ${litecoin.symbol}`;
          setUrlMonedas(simbolos);
          setMonedasAPI(listaCrypt);
          setRecargarMonedasDetalle(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const consultarAPI = async () => {
    try {
      const cabecera = {
        method: "POST",
      };

      const resultado = await fetch(
        "https://coinlib.io/api/v1/coin?key=7ea96d98fb7595c7&pref=USD&symbol=" +
          urlMonedas,
        cabecera
      )
        .then(function (response) {
          return response.json();
        })
        .then((response) => {
          let listaCrypt = [];
          for (let index = 0; index < response.coins.length; index++) {
            const element = response.coins[index];
            listaCrypt.push(element);
          }
          setMonedasDetalleAPI(listaCrypt);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const consultarClimaAPI = async () => {
    try {
      const cabecera = {
        method: "POST",
      };
      const respuesta = await fetch(
        "http://api.weatherstack.com/current?access_key=d1e6ce3db0253b8c1e879baf671e2a35&query=Tucuman",
        cabecera
      );
      const resultado = await respuesta.json();
      setClimaAPI(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  function Cargar(props) {
    if (props.datos !== undefined) {
      return monedasAPI.map((moneda, index) => (
        <Criptomonedas
          moneda={moneda}
          key={moneda.name}
          detallesMoneda={props.datos[index]}
          setRecargarMonedasDetalle={setRecargarMonedasDetalle}
        ></Criptomonedas>
      ));
    }
    return "chau";
  }

  function CargarClima(props) {
    if (props.clima != undefined) {
      return <Clima detallesClima={props.clima}></Clima>;
    }
    return "chau";
  }

  return (
    <Router>
      <Barra></Barra>
      <Switch>
        <Route exact path="/noticia/:id">
          {/* <div className="container">
            <div className="row justify-content-center">
              <Cargar datos={monedasDetalleAPI} />
              <Clima></Clima>
            </div>
          </div>
          <CargarClima clima={climaAPI} /> */}

          <Titular></Titular>
          <Comentarios></Comentarios>
        </Route>
        <Route exact path="/">
          {/* <div className="container">
        <div className="row justify-content-center">
          <Cargar datos={monedasDetalleAPI} />
           <Clima></Clima> 
        </div>
      </div>
      <CargarClima clima={climaAPI} /> */}
          <Principal></Principal>
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

        <Route exact path="/admin/usuarios/:id">
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
