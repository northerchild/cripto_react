import React, {useState, useEffect}  from 'react';
import imagen from './cryptomonedas.png';
import Formulario from '../src/components/Formulario'
import Spinner from '../src/components/Spinner'
import axios from 'axios'
function App() {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [cargando, guardarCargardo] = useState(false);

  useEffect(()=>{
    const cotizarCriptomoneda = async()=>{
      //Si no hay moneda, no ejecutar
      if(moneda === '') return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);
      guardarCargardo(true);
      setTimeout(()=>{
        guardarCargardo(false);
      },3000)
    }
    cotizarCriptomoneda();
  },[criptomoneda,moneda])

  //Mostrar Spinner
  const componente = (cargando) ? <Spinner /> : null;

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
          {componente}
        </div>
      </div>
    </div>
  );
}

export default App;
