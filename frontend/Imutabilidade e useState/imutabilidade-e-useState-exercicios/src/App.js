import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {

  const [cleffa, setCleffa] = useState({
    name: "Cleffa",
    type: "Fairy",
    evolved: false,
    weight: 3,
    color: 'pink',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/0173Cleffa.png/250px-0173Cleffa.png',
    id: 0
  })

  const clefairy = {
    ...cleffa,
    name: "Clefairy",
    weight: 7.5,
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b7/0035Clefairy.png/250px-0035Clefairy.png',
    id: 1
  }

  const clefable = {
    ...cleffa,
    name: "Clefable",
    evolved: true,
    weight: 40,
    image: 'https://archives.bulbagarden.net/media/upload/thumb/a/a4/0036Clefable.png/250px-0036Clefable.png',
    id: 2
  }

  const [eevee, setEevee] = useState({
    name: "Eevee",
    type: "Normal",
    evolved: false,
    weight: 6.5,
    color: 'brown',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4c/0133Eevee.png/240px-0133Eevee.png',
    id: 0
  })

  const flareon = {
    name: "Flareon",
    type: "Fire",
    evolved: true,
    weight: 25,
    color: 'orange',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/f/f1/0136Flareon.png/250px-0136Flareon.png',
    id: 1
  }

  const [pichu, setPichu] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/f/f3/0172Pichu.png/250px-0172Pichu.png',
    id: 0
  })

  const pikachu = {
    ...pichu,
    name: "Pikachu",
    weight: 6,
    image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/250px-0025Pikachu.png',
    id: 1
  }

  const raichu = {
    ...pichu,
    name: "Raichu",
    evolved: true,
    weight: 30,
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b0/0026Raichu.png/250px-0026Raichu.png',
    id: 2
  }

  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
      name={pichu.name}
      type={pichu.type}
      evolved={pichu.evolved}
      weight={pichu.weight}
      color={pichu.color}
      image={pichu.image}
      id={pichu.id}
      setPokemon={setPichu}
      evolvedPokemon={pikachu}
      evolvedPokemon2={raichu}
      />
      {/* Crie aqui seus próximos pokemons! */}
      <PokemonCard
      name={cleffa.name}
      type={cleffa.type}
      evolved={cleffa.evolved}
      weight={cleffa.weight}
      color={cleffa.color}
      image={cleffa.image}
      id={cleffa.id}
      setPokemon={setCleffa}
      evolvedPokemon={clefairy}
      evolvedPokemon2={clefable}
      />

      <PokemonCard
      name={eevee.name}
      type={eevee.type}
      evolved={eevee.evolved}
      weight={eevee.weight}
      color={eevee.color}
      image={eevee.image}
      id={eevee.id}
      setPokemon={setEevee}
      evolvedPokemon={flareon}
      />
    </FlexContainer>
  </>
    
  );
}

export default App;
