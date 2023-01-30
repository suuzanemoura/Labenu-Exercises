import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [condicional, setCondicional] = useState(1);

  //  CONDICIONAL TERNÁRIO
  // const handleScreen = () => {
  //   setCondicional(!condicional);
  // };

  const handleScreen = (numero) => {
    setCondicional(numero);
  };

  if (condicional === 1) {
    return (
      <MainContainer>
        <GlobalStyled />
        <TelaLogin handleScreen={handleScreen} />
      </MainContainer>
    );
  }

  if (condicional === 2) {
    return (
      <MainContainer>
        <GlobalStyled />
        <TelaCadastro handleScreen={handleScreen} />
      </MainContainer>
    );
  }

  if (condicional === 3) {
    return (
      <MainContainer>
        <GlobalStyled />
        <TelaUsuarioCadastrado />
      </MainContainer>
    );
  }

  //RETURN COM TERNÁRIO
  // return (
  //   <MainContainer>
  //     <GlobalStyled />
  //     {condicional ? (
  //       <TelaCadastro handleScreen={handleScreen} />
  //     ) : (
  //       <TelaLogin handleScreen={handleScreen} />
  //     )}
  //   </MainContainer>
  // );
}

export default App;
