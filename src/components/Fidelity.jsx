import React from 'react';
import Cliente from './Clienti';

export default class Fidelity extends React.Component {

    constructor(props) {
        super(props);
        console.log("Avvio constructor");
    }

    state = {
        clienti: [
            {nome:'Jacopo Camplone', bollini:'120', data:'01/12/2020'},
            {nome:'Daniele Cannelonga', bollini:'130', data:'02/12/2020'},
            {nome:'Pierluigi Sperandii', bollini:'110', data:'03/12/2020'}
        ]
    }

    modificaDati = (Bollini) => {
        this.setState(
            {
                clienti: [
                    {nome:'Jacopo Camplone', bollini:Bollini, data:'31/12/2020'},
                    {nome:'Daniele Cannelonga', bollini:'3000', data:'31/12/2020'},
                    {nome:'Pierluigi Sperandii', bollini:'50000', data:'31/12/2020'}
                ]
            }
        )
    }

    modificaDati2 = (event) => {
        this.setState(
            {
                clienti: [
                    {nome:'Jacopo Camplone', bollini:'700', data:'31/12/2020'},
                    {nome: event.target.value, bollini:'3000', data:'31/12/2020'},
                    {nome:'Pierluigi Sperandii', bollini:'50000', data:'31/12/2020'}
                ]
            }
        )
    }
    render() {
        console.log("Avvio render");
        return (
            <div>
                <Cliente modifica={this.modificaDati.bind(this, '700')} nome={this.state.clienti[0].nome} bollini={this.state.clienti[0].bollini} data={this.state.clienti[0].data}>Prova</Cliente>
                <Cliente modificaNome={this.modificaDati2} nome={this.state.clienti[1].nome} bollini={this.state.clienti[1].bollini} data={this.state.clienti[1].data}></Cliente>
                <Cliente nome={this.state.clienti[2].nome} bollini={this.state.clienti[2].bollini} data={this.state.clienti[2].data}></Cliente>
                <button onClick={this.modificaDati.bind(this, '1400')}>Modifica</button>
            </div>
        )
    }

    componentDidMount() {
        console.log("Avvio component did mount");
    }

    shouldComponentUpdate() {
    }
}