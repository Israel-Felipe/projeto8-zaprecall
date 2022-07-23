import React from "react";
import logo from "../assets/images/logo.svg"
export default function App() {
    return (
      <div className="conteudo">
        <img className="logo" src={logo} />
          <h1>ZapRecall</h1>
        <button className="botaoiniciar"> Iniciar Recall! </button>
      </div>
    )
}