
import emojiFeliz from '../assets/images/party.svg';
import emojiTriste from '../assets/images/sad.svg';

export default function Resultado ({seqCheck}) {
    
    let verif = true;
    for (let i=0; i<seqCheck.length; i++) {
        if (seqCheck[i].name === "close-circle") {verif = false}
    }

return (
    <div className='resultado'>
        <div className='emojiTitulo'>
            <img src={(verif) ? emojiFeliz : emojiTriste} />
            <h2>{(verif) ? 'Parabéns!' : 'Putz...'}</h2>
        </div>
        <p>{(verif) ? 'Você não esqueceu de nenhum flashcard!' : 'Ainda faltam alguns... Mas não desanime!'}</p>
    </div>
)
}
