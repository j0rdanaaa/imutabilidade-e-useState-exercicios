import React from "react";
import { Card, PokemonName, PokemonType, EvolveButton} from "./styles"

  const PokemonCard = (props) => {
  console.log(props);
  const { pokemon, setPokemon, evolucao } = props;
  const { name, type, evolved, weight, color, image, id } = pokemon;

  const evoluirPokemon = () => {
    setPokemon(evolucao);
  };

  return (
    <>
      <Card color={color}>
        <img src={image} alt={pokemon} />
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{evolved}</p>
        <p>{weight}kg</p>
        <p>Id: {id}</p>

        <EvolveButton onClick={evoluirPokemon}>Evoluir!</EvolveButton>
      </Card>
    </>
  );
}

export default PokemonCard;