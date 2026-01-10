import { AppBar, Container, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import pokedexLogo from "../assets/pokedex_logo.png";
import "./Header.css";

export default function Header() {
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
            <Button
              color="inherit"
              component={Link}
              to="/"
            >
              Inicio
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/add-pokemon"
            >
              Agregar Pokémon
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
