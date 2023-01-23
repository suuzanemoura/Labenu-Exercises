import { Carro } from "../Carro/Carro";
import { Button } from "./style";
import { GarageContainer } from "./style";
import { ParkingLot } from "./style";
import { Header } from "./style";
import { Footer } from "./style";
import { useState } from "react";

export function Garagem({nome, mudaNome}) {

  const novoCarro = {
    modelo: "Fusca",
    cor: "Azul",
    ano: 1989,
    adicionadoPor: "Suzane",
    flex: false
  }

  const novoCarrinho = {
    modelo: "Palio",
    cor: "Vermelho",
    ano: 2016,
    adicionadoPor: "Suzane",
    flex: true
  }

  const novoCarrao = {
    modelo: "Range Rover",
    cor: "Preto",
    ano: 2022,
    adicionadoPor: "Suzane",
    flex: true
  }
  
  const [carro, setCarro] = useState({modelo: "Ônix", cor: "Preto", ano: 2020, flex: "sim", adicionadoPor: "Conway"});

  const [carro2, setCarro2] = useState({modelo: "Prisma", cor: "Verde Musgo", ano: 2018, flex: "sim", adicionadoPor: "Inácio"});

  const [carro3, setCarro3] = useState({modelo: "Jeep Renegade", cor: "Preto", ano: 2023, flex: "sim", adicionadoPor: "Suzane"});

  return (
    <GarageContainer>
      <Header>
      <h1>Garagem da {nome}</h1>
      </Header>
      <Button onClick={mudaNome}>Mudar de Garagem</Button>
      <h1>Garagem de Carros</h1>
      <ParkingLot>
      {/* <Carro modelo="Corsa" cor="branco" ano={2020} adicionadoPor="Labenu" flex={true} /> */}
      <Carro modelo={carro.modelo} cor={carro.cor} ano={carro.ano} adicionadoPor={carro.adicionadoPor} flex={carro.flex} setCarro={setCarro} novoCarro={novoCarro}/>
      <Carro modelo={carro2.modelo} cor={carro2.cor} ano={carro2.ano} adicionadoPor={carro2.adicionadoPor} flex={carro2.flex} setCarro={setCarro2} novoCarro={novoCarrinho}/>
      <Carro modelo={carro3.modelo} cor={carro3.cor} ano={carro3.ano} adicionadoPor={carro3.adicionadoPor} flex={carro3.flex} setCarro={setCarro3} novoCarro={novoCarrao}/>
      </ParkingLot>
      <Footer><p>Prática Guidada de styled-components</p></Footer>
    </GarageContainer>
  );
}
