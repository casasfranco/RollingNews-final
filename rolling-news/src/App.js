import React from 'react';
import './App.css';
import "./bootstrap.min.css";
import  Header from "./components/common/Header";
import  Footer from "./components/common/Footer";
import Categoria from './principal/Categoria';



function App() {
  return (
    <div>
    <Header></Header>
    <Categoria></Categoria>
    <Footer></Footer>
    </div>
  );
}

export default App;
