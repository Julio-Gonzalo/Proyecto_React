import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import esLogo from "./assets/spain.png";
import enLogo from "./assets/united-kingdom.png";
import atrasLogo from "./assets/arrow.png";
import homeLogo from "./assets/home.png";
import inputLogo from "./assets/search.png";
import "./style/MenuHeader.scss";

// Componente para el botón "Volver"
function BackButton({ clearSelection }) {
  const [t] = useTranslation("global");
  return (
    <div className="header-div-info">
      <img
        src={atrasLogo}
        alt="Logo-Atrás"
        style={{
          cursor: "pointer",
          width: "30px",
          marginRight: "10px",
        }}
        onClick={clearSelection}
      />
      <span>{t("main.buttonback")}</span>
    </div>
  );
}

// Componente para el menú de idiomas y enlace a la página de inicio
function LanguageMenu() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation();
  const changeLanguage = (language) => i18n.changeLanguage(language);

  return (
    <div className="header-div-idioma-home">
      <Link to="/">
        <img
          src={homeLogo}
          alt="Español"
          style={{
            cursor: "pointer",
            width: "30px",
            marginRight: "10px",
          }}
        />
      </Link>
      <img
        src={esLogo}
        alt="Español"
        style={{
          cursor: "pointer",
          width: "30px",
          marginRight: "10px",
        }}
        onClick={() => changeLanguage("es")}
      />
      <img
        src={enLogo}
        alt="English"
        style={{ cursor: "pointer", width: "30px" }}
        onClick={() => changeLanguage("en")}
      />
    </div>
  );
}

export function MenuHeader({
  clearSelection,
  isCharacterInfo,
  isHouseDetails,
  functionFilter,
}) {
  const [filter, setFilter] = useState("");

  const filteredChange = (event) => {
    setFilter(event.target.value);
    functionFilter(event.target.value);
  };

  const { pathname } = useLocation();

  if (isCharacterInfo === false || isHouseDetails === false) {
    return (
      <>
        <header className="header">
          {pathname === "/" && <div className="div-vacio"></div>}
          {pathname === "/personajes" && (
            <div className="div-input">
              <div className="input-img">
                <img src={inputLogo} alt="Icono-Input" className="img" />
              </div>
              <input
                type="text"
                placeholder="  Buscar..."
                value={filter}
                onChange={filteredChange}
                className="input"
                size={40}
              />
            </div>
          )}
          {pathname === "/casas" && (
            <div className="div-input">
              <div className="input-img">
                <img src={inputLogo} alt="Icono-Input" className="img" />
              </div>
              <input
                type="text"
                placeholder="  Buscar..."
                value={filter}
                onChange={filteredChange}
                className="input"
                size={40}
              />
            </div>
          )}
          {pathname === "/cronologia" && <div className="div-vacio"></div>}
          {isCharacterInfo || isHouseDetails ? (
            <BackButton clearSelection={clearSelection} />
          ) : null}
          <LanguageMenu />
        </header>
      </>
    );
  } else {
    return (
      <>
        <header className="header">
          {pathname === "/" && <div className="div-vacio"></div>}
          {pathname === "/cronologia" && <div className="div-vacio"></div>}
          {isCharacterInfo || isHouseDetails ? (
            <BackButton clearSelection={clearSelection} />
          ) : null}
          <LanguageMenu />
        </header>
      </>
    );
  }
}
