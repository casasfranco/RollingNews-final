import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import CategoriaNueva from './components/principal/CategoriaNueva';


function App() {
  return (
    <div>
      <Header></Header>
      <CategoriaNueva></CategoriaNueva>
      <Footer></Footer>
    </div>
  );
}

export default App;
