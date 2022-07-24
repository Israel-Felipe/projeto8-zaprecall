import { deckArray } from './Deck';

export default function Footer ({cardsCheck, seqCheck}) {
    const tamDeck = deckArray.length;
    
    return (
        <div className='footer'>
            <p>{cardsCheck}/{tamDeck} CONCLUÍDOS</p>

            <div className='sequenciaCheck'>
                {seqCheck.map((check, index) => 
                    <div className={check.cor}><ion-icon key={index} name={check.name}></ion-icon></div>
                )}
            </div> 
        </div>
    )
}