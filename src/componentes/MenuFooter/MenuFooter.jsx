import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "./style/MenuFooter.scss";

export function MenuFooter() {
  const [t] = useTranslation("global");

  const { pathname } = useLocation();

  return (
    <>
      <footer className="footer">
        {pathname === "/cronologia" && (
          <>
            <Link to="/personajes" className="footer-links">
              {t("main.menuCharacters")}
            </Link>
            <Link to="/casas" className="footer-links">
              {t("main.menuHouses")}
            </Link>
            <Link to="/cronologia" className="footer-links">
              {t("main.menuTimeline")}
            </Link>
          </>
        )}

        {pathname === "/personajes" && (
          <>
            <Link to="/personajes" className="footer-links">
              {t("main.menuCharacters")}
            </Link>
            <Link to="/casas" className="footer-links">
              {t("main.menuHouses")}
            </Link>
            <Link to="/cronologia" className="footer-links">
              {t("main.menuTimeline")}
            </Link>
          </>
        )}

        {pathname === "/casas" && (
          <>
            <Link to="/personajes" className="footer-links">
              {t("main.menuCharacters")}
            </Link>
            <Link to="/casas" className="footer-links">
              {t("main.menuHouses")}
            </Link>
            <Link to="/cronologia" className="footer-links">
              {t("main.menuTimeline")}
            </Link>
          </>
        )}

        {pathname === "/" && (
          <>
            <Link to="/personajes" className="footer-links">
              {t("main.menuCharacters")}
            </Link>
            <Link to="/casas" className="footer-links">
              {t("main.menuHouses")}
            </Link>
            <Link to="/cronologia" className="footer-links">
              {t("main.menuTimeline")}
            </Link>
          </>
        )}
      </footer>
    </>
  );
}
