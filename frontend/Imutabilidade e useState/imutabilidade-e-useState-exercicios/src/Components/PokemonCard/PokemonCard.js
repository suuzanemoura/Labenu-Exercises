import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = ({name, type, evolved, weight, color, image, id, setPokemon, evolvedPokemon, evolvedPokemon2}) => {

    const evoluirPokemon = () => {
      
      if (id === 0){
        if ( evolved === true){
          alert("Pokémon evoluído!")
        } else {
          setPokemon(evolvedPokemon);
        }
      } else {
        if ( evolved === true){
          alert("Pokémon evoluído!")
        } else {
          setPokemon(evolvedPokemon2);
        }
      }
    }
    
  return (
    <Card color={color}>
        <img src={image} alt={`Pokemon`}/>
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard