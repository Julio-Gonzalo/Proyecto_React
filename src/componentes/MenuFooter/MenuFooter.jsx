import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style/MenuFooter.scss";

export function MenuFooter() {
  const [t] = useTranslation("global");

  return (
    <>
      <footer className="footer">
        <Link to="/personajes" className="footer-links">
          {t("main.menuCharacters")}
        </Link>
        <Link to="/casas" className="footer-links">
          {t("main.menuHouses")}
        </Link>
        <Link to="/cronologia" className="footer-links">
          {t("main.menuTimeline")}
        </Link>
      </footer>
    </>
  );
}
