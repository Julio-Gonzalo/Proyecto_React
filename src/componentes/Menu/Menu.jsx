import { Link } from "react-router-dom";

export function Menu() {
  return (
    <footer className="footer">
      <Link to="" className="footer-links">
        Home
      </Link>
      <Link to="/personajes" className="footer-links">
        Personajes
      </Link>
      <Link to="/casas" className="footer-links">
        Casas
      </Link>
      <Link to="/cronologia" className="footer-links">
        Cronologia
      </Link>
    </footer>
  );
}
