import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Criptomoneda from './Criptomoneda';
function Formulario(){
    const [criptomonedas, guardarCriptomonedas] = useState([]);
    const [monedaCotizar, guardarMonedaCotizar] = useState('');
    const [criptoCotizar, guardarCriptoCotizar] = useState('');
    const [error, guardarError] = useState(false);
    useEffect(()=>{
        const consultarApi = async()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD'
            const resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
        }
        consultarApi();

    },[]);
    return(
        <form action="">
            <div className="row">
                <label>Elige tu moneda</label>
                <select className="u-full-width" onChange={e => guardarMonedaCotizar(e.target.value)}>
                    <option value="">Elige tu moneda</option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="MXN">Peso Mexicano</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>
            <div className="row">
                <label>Elige tu criptomoneda</label>
                <select className="u-full-width" onChange={e => guardarCriptoCotizar(e.target.value)}>
                    <option value="">Elige tu criptomoneda</option>
                   {criptomonedas.map(criptomoneda=>(
                       <Criptomoneda 
                       key = {criptomoneda.CoinInfo.Id}
                       criptomoneda={criptomoneda}/>
                   ))}
              
                </select>
            </div>
        </form>
    )
}
export default Formulario;