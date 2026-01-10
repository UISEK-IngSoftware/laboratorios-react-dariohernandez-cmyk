import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import PokemonCard from "../components/PokemonCard";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then(res => res.json())
      .then(data => setPokemonList(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <Grid container spacing={2} marginTop={2}>
      {pokemonList.map((pokemon) => (
        <Grid key={pokemon.name} item xs={12} sm={6} md={4} lg={3}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
}
