import { AppBar, Container, Toolbar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import pokedexLogo from "../assets/pokedex_logo.png";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    alert("Has cerrado sesión correctamente");
    navigate("/login");
  };

  return (
    <header className="pokedex-navbar">
      <AppBar position="static">
        <Container>
          <Toolbar>
            <div className="image-container">
              <img
                src={pokedexLogo}
                alt="Pokedex Logo"
                height={100}
              />
            </div>
          </Toolbar>

          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              Inicio
            </Button>

            {isLoggedIn && (
              <Button color="inherit" component={Link} to="/add-pokemon">
                Agregar Pokémon
              </Button>
            )}

            {!isLoggedIn ? (
              <Button color="inherit" component={Link} to="/login">
                Iniciar Sesión
              </Button>
            ) : (
              <Button color="inherit" onClick={handleLogout}>
                Cerrar Sesión
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
