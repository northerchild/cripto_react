import React from 'react';
import imagen from './cryptomonedas.png';
import Formulario from '../src/components/Formulario'
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="imagen criptomoneda" className="logotipo"/>
        </div>
        <div className="one-half column">
          <h1>Cotiza Criptomonedas al instante</h1>
          <Formulario />
        </div>
      </div>
    </div>
  );
}

export default App;
