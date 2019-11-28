import React, {useState, useEffect}  from 'react';
import imagen from './cryptomonedas.png';
import Formulario from '../src/components/Formulario'
import axios from 'axios'
function App() {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');

  useEffect(()=>{
    const cotizarCriptomoneda = async()=>{
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);
    }
    cotizarCriptomoneda();
  },[criptomoneda,moneda])

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="imagen criptomoneda" className="logotipo"/>
        </div>
        <div className="one-half column">
          <h1>Cotiza Criptomonedas al instante</h1>
          <Formulario 
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}/>
        </div>
      </div>
    </div>
  );
}

export default App;
