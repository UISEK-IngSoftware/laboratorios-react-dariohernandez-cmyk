import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from "@mui/material";

export default function PokemonCard({ pokemon }) {
  // Extraer ID desde la URL
  const id = pokemon.url.split("/").at(-2);

  // URL oficial de sprites
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={pokemon.name}
        sx={{ objectFit: "contain", padding: 2 }}
      />

      <CardContent>
        <Typography variant="h6" textAlign="center">
          {pokemon.name}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
  );
}
