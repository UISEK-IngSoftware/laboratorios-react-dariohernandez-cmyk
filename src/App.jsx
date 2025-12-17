import { Container } from "@mui/material";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import { pokemonList } from "./data/pokemonData";

function App() {
  return (
    <>
      <Header />
      <Container>
        <PokemonList pokemonList={pokemonList} />
      </Container>
    </>
  );
}

export default App;

