import React from 'react';
import logo from '../assets/images/logo.svg'
import Flashcard from './Flashcard';

export default function TelaFlashcards() {
    
    return (
        <div className="telaFlashcards">
                <div className="cabecalho">
                    <img className="logo" src={logo} />
                    <h1>ZapRecall</h1>
                </div>

                <div className="cards">
                    <Flashcard />
                    <Flashcard />
                    <Flashcard />
                    <Flashcard />
                    <Flashcard />
                    <Flashcard />
                    <Flashcard />
                </div>
        </div>
    )
}