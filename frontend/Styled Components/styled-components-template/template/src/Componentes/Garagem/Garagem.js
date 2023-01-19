import { Carro } from "../Carro/Carro";
import { Button } from "./style";
import { GarageContainer } from "./style";
import { ParkingLot } from "./style";
import { Header } from "./style";
import { Footer } from "./style";

export function Garagem(props) {
  return (
    <GarageContainer>
      <Header>
      <h1>Garagem da {props.nome}</h1>
      </Header>
      <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
      <h1>Garagem de Carros</h1>
      <ParkingLot>
      <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"true"} />
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"}  />
      <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"} />
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
      </ParkingLot>
      <Footer><p>Prática Guidada de styled-components</p></Footer>
    </GarageContainer>
  );
}
