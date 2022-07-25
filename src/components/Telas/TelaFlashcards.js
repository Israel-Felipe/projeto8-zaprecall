import React from 'react';
import logo from '../../assets/images/logo.svg';
import { deckArray } from '../Flashcards/Deck';
import Flashcard from '../Flashcards/Flashcard';
import Footer from '../Resultado/Footer';
import MisturaDeck from '../Flashcards/Deck';

export default function TelaFlashcards() {
    const [cardsCheck, setCardsCheck] = React.useState(0);
    const [seqCheck, setSeqCheck] = React.useState([]);
    return (
        <div className="telaFlashcards">
                <div className='topo'>
                <div className='gradiente'></div>
                    <div className="cabecalho">
                        <img className="logo" src={logo} />
                        <h1>ZapRecall</h1>
                    </div>
                </div>

                <div className="cards">
                {MisturaDeck(deckArray).map((card, index) => 
                    <Flashcard key={index} 
                    numPergunta={index+1} pergunta={card.pergunta} resposta={card.resposta}
                    cardsCheck={cardsCheck} setCardsCheck={setCardsCheck} seqCheck={seqCheck} setSeqCheck={setSeqCheck} />)}
                </div>
                
                <Footer cardsCheck={cardsCheck} setCardsCheck={setCardsCheck} seqCheck={seqCheck} setSeqCheck={setSeqCheck} />
        </div>
    )
} 