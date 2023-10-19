import { Link } from "react-router-dom";

export function Menu() {
  return (
    <header>
      <Link to="">Home</Link>
      <Link to="/personajes">Personajes</Link>
      <Link to="/casas">Casas</Link>
      <Link to="/Cronologia">Cronologia</Link>
    </header>
  );
}
