import {
  Box,
  Button,
  Typography,
  TextField,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";

export default function PokemonForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    tipo: "",
    habilidad: "",
    imagen: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulación de guardado (API / backend)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        nombre: "",
        tipo: "",
        habilidad: "",
        imagen: "",
      });
    }, 1500);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          margin: "auto",
          marginTop: 4,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" component="h2" textAlign="center">
          Agregar Nuevo Pokémon
        </Typography>

        <TextField
          label="Nombre del Pokémon"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          fullWidth
          required
          disabled={loading}
        />

        <TextField
          label="Tipo"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          fullWidth
          required
          disabled={loading}
        />

        <TextField
          label="Habilidad"
          name="habilidad"
          value={formData.habilidad}
          onChange={handleChange}
          fullWidth
          required
          disabled={loading}
        />

        <TextField
          label="Imagen URL"
          name="imagen"
          value={formData.imagen}
          onChange={handleChange}
          fullWidth
          disabled={loading}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{ height: 48 }}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Guardar Pokémon"
          )}
        </Button>
      </Box>

      {/* Feedback visual */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">
          Pokémon guardado correctamente 🐾
        </Alert>
      </Snackbar>
    </>
  );
}
