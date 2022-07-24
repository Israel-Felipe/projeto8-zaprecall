import React from "react";
import PrimeiraTela from "./PrimeiraTela";
import TelaFlashcards from "./TelaFlashcards";


export default function App() {
  
const [iniciar, setIniciar] = React.useState(true);

    return (
      <>
      {iniciar ? <PrimeiraTela iniciar={iniciar} setIniciar={setIniciar}/> : <TelaFlashcards />}
      </>
    )
}