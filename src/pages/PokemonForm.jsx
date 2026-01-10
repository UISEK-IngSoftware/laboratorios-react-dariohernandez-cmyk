import { Box, Button, Typography, TextField } from "@mui/material";

export default function PokemonForm() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "auto",
        marginTop: 4,
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Agregar Nuevo Pokémon
      </Typography>

      <TextField
        label="Nombre del Pokémon"
        variant="outlined"
        fullWidth
      />

      <TextField
        label="Tipo"
        variant="outlined"
        fullWidth
      />

      <TextField
        label="Habilidad"
        variant="outlined"
        fullWidth
      />

      <TextField
        label="Imagen URL"
        variant="outlined"
        fullWidth
      />

      <Button variant="contained" color="primary">
        Guardar Pokémon
      </Button>
    </Box>
  );
}
