import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Header from './components/common/Header';
import CategoriaNueva from './components/principal/CategoriaNueva';


function App() {
  return (
    <div>
      <Header></Header>
      <CategoriaNueva></CategoriaNueva>
    </div>
  );
}

export default App;
