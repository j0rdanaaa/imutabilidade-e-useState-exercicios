
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
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

function App () {
const [pokemon, setPokemon] = useState({
  name: "Pikachu",
  type: "Electric",
  evolved: "Não evoluído",
  weight: 6,
  color: "yellow",
  image:
    "https://archives.bulbagarden.net/media/upload/thumb/archive/4/4a/20130810072317%210025Pikachu.png/120px-0025Pikachu.png",
  id: 25,
});

const evolucao = {
  name: "Raichu",
  type: "Electric",
  evolved: "Evoluído",
  weight: 30,
  color: "yellow",
  image:
    "https://archives.bulbagarden.net/media/upload/thumb/archive/b/b0/20100629124304%210026Raichu.png/120px-0026Raichu.png",
  id: 26,
};

const [squirtle, setSquirtle] = useState({
  name: "Squirtle",
  type: "Water",
  evolved: "Não evoluído",
  weight: 9,
  color: "Blue",
  image:
    "https://archives.bulbagarden.net/media/upload/thumb/archive/5/54/20110414005311%210007Squirtle.png/116px-0007Squirtle.png",
  id: 7,
});

const wartotle = {
  name: "Wartotle",
  type: "Water",
  evolved: "Evoluído",
  weight: 22.5,
  color: "Blue",
  image:
    "https://archives.bulbagarden.net/media/upload/thumb/archive/0/0f/20130810083345%210008Wartortle.png/117px-0008Wartortle.png",
  id: 8,
};

const [zubat, setZubat] = useState({
  name: "Zubat",
  type: "Flying",
  evolved: "Não evoluído",
  weight: 7.5,
  color: "Purple",
  image:
    "https://archives.bulbagarden.net/media/upload/thumb/archive/4/4c/20130810101529%210041Zubat.png/120px-0041Zubat.png",
  id: 41,
});

const golbat = {
  name: "Golbat",
  type: "Flying",
  evolved: "Evoluído",
  weight: 55,
  color: "Purple",
  image:
    "https://archives.bulbagarden.net/media/upload/thumb/archive/7/76/20090819184633%210042Golbat.png/120px-0042Golbat.png",
  id: 42,
  };

return ( 
  <>
    <GlobalStyles />
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
        pokemon={pokemon}
        setPokemon={setPokemon}
        evolucao={evolucao}
      />

      <PokemonCard
        pokemon={squirtle}
        setPokemon={setSquirtle}
        evolucao={wartotle}
      />

      <PokemonCard pokemon={zubat} 
      setPokemon={setZubat} 
      evolucao={golbat} />

      {/*Crie aqui seus próximos pokemons!*/ }
    </FlexContainer>
  </>
);
}
export default App;