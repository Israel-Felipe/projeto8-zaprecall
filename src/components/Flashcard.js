import React from 'react';
import turn from '../assets/images/setinha.svg';

export default function Flashcard () {
    
    const [contador, setContador] = React.useState(0);
    const [icon, setIcon] = React.useState('');
    const [color, setColor] = React.useState('');

    if (contador === 0) {
        return (
            <div className="cardFechado">
                <p>Pergunta 1</p>
                <ion-icon name="play-outline" onClick={()=>setContador(contador+1)}></ion-icon>
            </div>
        )
    } 
    
    else if (contador === 1) {
        return (
            <div className="cardAberto">
                <p>O que é JSX?</p>
                <img className="turn" src={turn} onClick={()=>setContador(contador+1)}/>
            </div>
        )
    } 
    
    else if (contador === 2) {
        return (
            <div className="cardAberto2">
                <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                <div className="botoes">
                    <button className="red"    onClick={()=>{setContador(contador+1); setColor("red1");    setIcon("close-circle")     }}>Não lembrei      </button>
                    <button className="orange" onClick={()=>{setContador(contador+1); setColor("orange1"); setIcon("help-circle")      }}>Quase não lembrei</button>
                    <button className="green"  onClick={()=>{setContador(contador+1); setColor("green1");  setIcon("checkmark-circle") }}>Zap!             </button>
                </div>
            </div>
        )
    } 
    
    else {
        return (
            <div className={`cardFechado2 ${color}`}>
                <p>Pergunta 1</p>
                <ion-icon name={icon}></ion-icon>
            </div>  
        )
    }
}