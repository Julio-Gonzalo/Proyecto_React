import { Link } from "react-router-dom";

export function Menu() {
  return (
    <header className="header">
      <Link to="" className="header-links">
        Home
      </Link>
      <Link to="/personajes" className="header-links">
        Personajes
      </Link>
      <Link to="/casas" className="header-links">
        Casas
      </Link>
      <Link to="/Cronologia" className="header-links">
        Cronologia
      </Link>
    </header>
  );
}
