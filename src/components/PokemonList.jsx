import { Grid } from "@mui/material";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemonList }) {
  return (
    <Grid container spacing={2} marginTop={2}>
      {pokemonList.map((pokemon) => (
        <Grid key={pokemon.id} item xs={12} sm={6} md={4} lg={3}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
}
