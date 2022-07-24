import React from 'react';
import logo from '../assets/images/logo.svg';
import { deckArray } from './Deck';
import Flashcard from './Flashcard';

export default function TelaFlashcards() {
    
    return (
        <div className="telaFlashcards">
                <div className="cabecalho">
                    <img className="logo" src={logo} />
                    <h1>ZapRecall</h1>
                </div>

                <div className="cards">
                {deckArray.map((card, index) => 
                    <Flashcard key={index} numPergunta={index+1} pergunta={card.pergunta} resposta={card.resposta} />)}
                </div>
        </div>
    )
} 