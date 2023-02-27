import React from "react";
import { Title, NameContainer, PostContainer } from "./style";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { useRequestData } from "./hooks/useRequestData";

function App() {
  const [nomeUsuarios, isLoadingUsuarios, errorUsuarios] =
    useRequestData("users");
  const [postagens, isLoadingPostagens, errorPostagens] =
    useRequestData("comments");

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {errorUsuarios ? (
          <p>Erro de requisição, tente novamente</p>
        ) : !isLoadingUsuarios ? (
          nomeUsuarios.map((usuario) => {
            return (
              <Card
                key={usuario.id}
                text={usuario.name}
                backgroudColor={"nome"}
                textColor={"nome"}
              />
            );
          })
        ) : (
          <p>Carregando, tenha paciência :)</p>
        )}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        {errorPostagens ? (
          <p> Erro de requisição, volte mais tarde</p>
        ) : !isLoadingPostagens ? (
          postagens.map((post) => {
            //console.log(post);
            return (
              <Card
                key={post.id}
                text={post.body}
                backgroudColor={"#1dc690"}
                textColor={"#ffffff"}
              />
            );
          })
        ) : (
          <p>Carregando postagens, tenha paciência :) </p>
        )}
      </PostContainer>
    </div>
  );
}

export default App;
