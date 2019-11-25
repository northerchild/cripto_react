import React from 'react'

function Formulario(){
    return(
        <form action="">
            <div className="row">
                <label>Elige tu moneda</label>
                <select className="u-full-width">
                    <option value="">Elige tu moneda</option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="MXN">Peso Mexicano</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>
            <div className="row">
                <label>Elige tu criptomoneda</label>
                <select className="u-full-width">
                    <option></option>
                </select>
            </div>
        </form>
    )
}
export default Formulario;