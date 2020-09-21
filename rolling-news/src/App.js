import React from 'react';
import './App.css';
import Header from './components/common/Header';
import Criptomonedas from './components/common/Criptomonedas';
import Clima from './components/common/Clima';
import './bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Criptomonedas></Criptomonedas>
      <Clima></Clima>
    </div>
  );
}

export default App;
