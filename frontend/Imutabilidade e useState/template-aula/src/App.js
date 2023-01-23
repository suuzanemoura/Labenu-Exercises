import { Garagem } from "./Componentes/Garagem/Garagem";
import { GlobalStyle } from "./GlobalStyle";
import { useState } from "react";

export default function App() {
  
  const [nome, setNome] = useState("Labenu");

  const mudaNome = () => {
    setNome("Conway")
    console.log("Você está trocando de garagem! Você está saindo da garagem da "+ nome);
    alert("Você está trocando de garagem! Você está saindo da garagem da "+ nome);
  }

  return (
    <>
      <GlobalStyle />
      <Garagem nome={nome} mudaNome={mudaNome} />
    </>
  );
}