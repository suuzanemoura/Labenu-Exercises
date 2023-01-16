import React from 'react'
import "./App.css"
import logo from "../src/img/logo.png"

const nome = "Conway"

function olaMundo () {
  alert("Olá mundo!")
}

const onClickBotao = () => {
  alert("Botão foi clicado!");
}

function App() {
  return (
    <main>
    {/* <h1>Introdução ao React</h1>
    <button onClick={olaMundo} className="meu-nome">Clique em mim, {nome}!</button> */}

    <div className="container">
    <h1>Aprenda React na Labenu!</h1>

    <div><img className="Logo" src={logo} alt="logo" /></div>

    <div><a href="https://labenu.com.br">Site da Labenu</a></div>

    <div><button onClick={onClickBotao}> Clique aqui! </button></div>
    </div>

    </main>
  );
}

export default App;
