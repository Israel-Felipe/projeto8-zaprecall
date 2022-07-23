import React from 'react';
import logo from '../assets/images/logo.svg'

export default function TelaFlashcards() {
    return (
        <div className="telaFlashcards">
                <div className="cabecalho">
                    <img className="logo" src={logo} />
                    <h1>ZapRecall</h1>
                </div>
        </div>
    )
}