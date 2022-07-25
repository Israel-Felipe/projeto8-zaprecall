import logo from "../../assets/images/logo.svg"

export default function PrimeiraTela ({iniciar, setIniciar}) {

    return (
        <div className="primeiraTela">
            <div className="conteudo">
                <img className="logo" src={logo} />
                <h1>ZapRecall</h1>
                <button className="botaoiniciar" onClick={() => {iniciar ? setIniciar(!iniciar) : setIniciar(iniciar)}}> Iniciar Recall! </button>
            </div>
        </div>
    )
}