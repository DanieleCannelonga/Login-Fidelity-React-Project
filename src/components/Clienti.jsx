import React from 'react';

const cliente = (props) => {
return (
    <div>
        <h4 onClick={props.modifica}>Nome: {props.nome} - Bollini: {props.bollini} - Ultima Spesa: {props.data}</h4>
        <h5>{props.children}</h5>
        <input type="text" value ={props.nome} onChange={props.modificaNome}></input>
    </div>
)
}

export default cliente;