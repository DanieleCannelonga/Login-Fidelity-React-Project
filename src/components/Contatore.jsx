import React from 'react';
import './Contatore.css';
import Bottone from './Bottone'



export default class Contatore extends React.Component {

    state = {
        cont:0
    }

      render() {
        return (
            <div>
                <Bottone modifica={this.incrementa.bind(this, 1)} decrementa={this.decrementa.bind(this, 1)} valore={1}></Bottone>
                <Bottone modifica={this.incrementa.bind(this, 5)} decrementa={this.decrementa.bind(this, 5)} valore={5}></Bottone>
                <Bottone modifica={this.incrementa.bind(this, 10)} decrementa={this.decrementa.bind(this, 10)} valore={10}></Bottone>
                <span className="valore">{this.state.cont}</span>
                <div>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
        
    }   
    reset = () =>{
        this.setState (
            (prevState) =>
            {
            return {cont : 0}
            }
        )
    }


    incrementa = (valore) => {
        this.setState (
            (prevState) =>
            {
            return {cont : prevState.cont + valore}
            }
        )
    }
    decrementa = (valore) => {
        this.setState (
            (prevState) =>
            {
            return {cont : prevState.cont - valore}
            }
        )
    }
}
//Capitolo 4 Punto 4