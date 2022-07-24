import React from 'react';
import setinha from '../assets/images/setinha.svg';

export default function Flashcard ({numPergunta, pergunta, resposta, cardsCheck, setCardsCheck, seqCheck, setSeqCheck}) {
    
    const [contador, setContador] = React.useState(0);
    const [icon, setIcon] = React.useState('');
    const [corTexto, setCorTexto] = React.useState('');
    

    if (contador === 0) {
        return (
            <div className="cardFechado">
                <p>Flashcard {numPergunta}</p>
                <ion-icon name="play-outline" onClick={()=>setContador(contador+1)}></ion-icon>
            </div>
        )
    } 
    
    else if (contador === 1) {
        return (
            <div className="cardAberto">
                <p>{pergunta}</p>
                <img src={setinha} onClick={()=>setContador(contador+1)}/>
            </div>
        )
    } 
    
    else if (contador === 2) {
        return (
            <div className="cardAberto2">
                <p>{resposta}</p>
                <div className="botoes">
                    <button className="naoLembrei"    onClick={()=>{setContador(contador+1); setCorTexto("vermelho"); setIcon("close-circle");     setCardsCheck(cardsCheck+1); setSeqCheck([...seqCheck, {name:"close-circle", cor:"vermelho"}])}}>     Não lembrei       </button>
                    <button className="quaseLembrei"  onClick={()=>{setContador(contador+1); setCorTexto("laranja");  setIcon("help-circle");      setCardsCheck(cardsCheck+1); setSeqCheck([...seqCheck, {name:"help-circle", cor:"laranja"}])}}>      Quase não lembrei </button>
                    <button className="Lembrei"       onClick={()=>{setContador(contador+1); setCorTexto("verde");    setIcon("checkmark-circle"); setCardsCheck(cardsCheck+1); setSeqCheck([...seqCheck, {name:"checkmark-circle", cor:"verde"}])}}> Zap!              </button>
                </div>
            </div>
        )
    } 
    
    else {
        return (
            <div className={`cardConcluido ${corTexto}`}>
                <p>Flashcard {numPergunta}</p>
                <ion-icon name={icon}></ion-icon>
            </div>  
        )
    }
}