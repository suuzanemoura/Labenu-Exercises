import { Car } from "./style";

export function Carro({ modelo, cor, ano, adicionadoPor, flex, setCarro, novoCarro }) {

    return (
      <Car>
        <h2>{modelo}</h2>
        <ul>
          <li>Cor: {cor}</li>
          <li>Ano: {ano}</li>
          <li>Flex: {flex ? "Sim" : "Não"}</li>
          <li>Adicionado: {adicionadoPor}</li>
        </ul>

        <button onClick={() => setCarro(novoCarro)}>Muda Carro</button>
      </Car>
    );
  }
  
