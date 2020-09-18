import React from 'react';
import './App.css';
import "./bootstrap.min.css";
import  Header from "./components/common/Header";
import  Footer from "./components/common/Footer";
import  Titular from "./components/common/principal/Titular";


function App() {
  return (
    <div>
      <Header></Header>
      <Titular></Titular>
      <Footer></Footer>
    </div>
  );
}

export default App;