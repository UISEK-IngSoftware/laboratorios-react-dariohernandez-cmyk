import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";



export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();




const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const data = await login(username, password);
    localStorage.setItem("access_token", data.access_token);
    navigate("/");
  } catch {
    setError("Usuario o contraseña incorrectos");
  }
};

  return (
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
      }}
    >
      <Typography variant="h4">Login</Typography>

      {error && <Typography color="error">{error}</Typography>}

      <TextField
        label="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <TextField
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button type="submit" variant="contained">
        Iniciar Sesión
      </Button>
    </Box>
  );
}

