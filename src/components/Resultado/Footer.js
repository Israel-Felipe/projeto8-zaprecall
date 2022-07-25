import { deckArray } from '../Flashcards/Deck';
import Resultado from './Resultado';

export default function Footer ({cardsCheck, setCardsCheck, seqCheck, setSeqCheck}) {
    const tamDeck = deckArray.length;

function Checks () {
    let footer = 'footer'
    {(cardsCheck === tamDeck) ? footer='footerResultado' : footer='footer'}
    return (
    <div className={footer}>
        <p>{cardsCheck}/{tamDeck} CONCLUÍDOS</p>

        <div className='sequenciaCheck'>
            {seqCheck.map((check, index) => <div className={check.cor}> <ion-icon key={index} name={check.name}></ion-icon> </div>)}
        </div> 
    </div>
    )
}

function Reiniciar () {
    return (<div className='reiniciar'>
        <button onClick={() => {setCardsCheck(0); setSeqCheck([])}}>
            REINICIAR RECALL
        </button>
    </div>

    )
}

if (cardsCheck === tamDeck) {
    return (
    <>
        <Resultado seqCheck={seqCheck}/>
        <Checks />
        <Reiniciar />
    </>
    )
}
    return (
    <Checks />  
    )
}