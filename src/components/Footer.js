import { deckArray } from './Deck';

export default function Footer ({cardsCheck}) {
    const tamDeck = deckArray.length;

    return (
        <div className='footer'>
            <p>{cardsCheck}/{tamDeck} CONCLUÍDOS</p>
        </div>
    )
}