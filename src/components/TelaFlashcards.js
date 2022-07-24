import React from 'react';
import logo from '../assets/images/logo.svg';
import { deckArray } from './Deck';
import Flashcard from './Flashcard';
import Footer from './Footer';

export default function TelaFlashcards() {
    const [cardsCheck, setCardsCheck] = React.useState(0);
    /* const [seqCheck, setSeqCheck] = React.useState(0); */
    return (
        <div className="telaFlashcards">
                <div className="cabecalho">
                    <img className="logo" src={logo} />
                    <h1>ZapRecall</h1>
                </div>

                <div className="cards">
                {deckArray.map((card, index) => 
                    <Flashcard key={index} 
                    numPergunta={index+1} pergunta={card.pergunta} resposta={card.resposta} 
                    cardsCheck={cardsCheck} setCardsCheck={setCardsCheck} /**/ /* seqCheck={cardsCheck} setSeqCheck={setSeqCheck}  *//>)}
                </div>
                
                <Footer cardsCheck={cardsCheck} /* seqCheck={seqCheck} */ />
        </div>
    )
} 