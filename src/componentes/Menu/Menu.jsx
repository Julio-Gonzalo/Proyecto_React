import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>
      {/* <header>
        <Link to="" className="header-link">
          <img />
        </Link>
      </header> */}

      <footer className="footer">
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
    </>
  );
}
