import React from 'react';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Criptomonedas from './components/common/Criptomonedas';
import './bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Criptomonedas></Criptomonedas>
      <Footer></Footer>
      </div>
  );
}

export default App;
