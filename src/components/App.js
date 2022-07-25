import React from "react";
import PrimeiraTela from "./Telas/PrimeiraTela";
import TelaFlashcards from "./Telas/TelaFlashcards";


export default function App() {
  
const [iniciar, setIniciar] = React.useState(true);

    return (
      <>
      {iniciar ? <PrimeiraTela iniciar={iniciar} setIniciar={setIniciar}/> : <TelaFlashcards />}
      </>
    )
}