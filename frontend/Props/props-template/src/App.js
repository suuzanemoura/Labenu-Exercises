import React from "react";
import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Conway"
  const name = "Suzane"
  
  const apresentaGaragem = (nomeNaGaragem) => {
    alert(`Boas vindas à Garagem de ${nomeNaGaragem}`);
  };

  const carro1 = {
    nome: "Gol",
    cor: "Branco",
    ano: 2015,
    flex: true
  }

  const carro2 = {
    nome: "Fusca",
    cor: "Azul",
    ano: 1989,
    flex: false
  }

  const carro3 = {
    nome: "Prisma Sedan",
    cor: "Preto",
    ano: 2016,
    flex: true
  }

  const carro4 = {
    nome: "Ônix",
    cor: "Vermelho",
    ano: 2021,
    flex: true
  }

  const carro5 = {
    nome: "Siena",
    cor: "Verde escuro",
    ano: 2018,
    flex: true
  }

  const carro6 = {
    nome: "Ônix",
    cor: "Preto",
    ano: 2022,
    flex: true
  }

  const carro7 = {
    nome: "Jeep Renegade",
    cor: "Preto",
    ano: 2023,
    flex: true
  }

  const carro8 = {
    nome: "Range Rover",
    cor: "Preto",
    ano: 2021,
    flex: true
  }

  return (
    <div className="App">
      <Garagem
        nome={nome}
        apresentaGaragem={apresentaGaragem}
        carro1={carro1}
        carro2={carro2}
        carro3={carro3}
        carro4={carro4}
      />

      <Garagem
        nome={name}
        apresentaGaragem={apresentaGaragem}
        carro1={carro5}
        carro2={carro6}
        carro3={carro7}
        carro4={carro8}
      />
    </div>
  );
}