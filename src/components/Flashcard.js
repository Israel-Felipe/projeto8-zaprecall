import React from 'react';
import turn from '../assets/images/setinha.svg';

export default function Flashcard ({numPergunta, pergunta, resposta}) {
    
    const [contador, setContador] = React.useState(0);
    const [icon, setIcon] = React.useState('');
    const [corTexto, setCorTexto] = React.useState('');

    if (contador === 0) {
        return (
            <div className="cardFechado">
                <p>Pergunta {numPergunta}</p>
                <ion-icon name="play-outline" onClick={()=>setContador(contador+1)}></ion-icon>
            </div>
        )
    } 
    
    else if (contador === 1) {
        return (
            <div className="cardAberto">
                <p>{pergunta}</p>
                <img className="turn" src={turn} onClick={()=>setContador(contador+1)}/>
            </div>
        )
    } 
    
    else if (contador === 2) {
        return (
            <div className="cardAberto2">
                <p>{resposta}</p>
                <div className="botoes">
                    <button className="naoLembrei"    onClick={()=>{setContador(contador+1); setCorTexto("textoVermelho"); setIcon("close-circle")     }}> Não lembrei       </button>
                    <button className="quaseLembrei"  onClick={()=>{setContador(contador+1); setCorTexto("textoLaranja");  setIcon("help-circle")      }}> Quase não lembrei </button>
                    <button className="Lembrei"       onClick={()=>{setContador(contador+1); setCorTexto("textoVerde");    setIcon("checkmark-circle") }}> Zap!              </button>
                </div>
            </div>
        )
    } 
    
    else {
        return (
            <div className={`cardConcluido ${corTexto}`}>
                <p>Pergunta 1</p>
                <ion-icon name={icon}></ion-icon>
            </div>  
        )
    }
}