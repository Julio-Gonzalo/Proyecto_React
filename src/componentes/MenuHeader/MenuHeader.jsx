import React from "react";
import { useTranslation } from "react-i18next";
import "./style/MenuHeader.scss";
import esLogo from "./assets/spain.png";
import enLogo from "./assets/united-kingdom.png";
import atrasLogo from "./assets/arrow.png";
import homeLogo from "./assets/home.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export function MenuHeader({ clearSelection }) {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation();
  const changeLanguage = (language) => i18n.changeLanguage(language);

  const { pathname } = useLocation();

  return (
    <>
      <header className="header-personajes">
        {pathname === "/personajes" && (
          <>
            <div className="header-div-personajes">
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
              <span>Volver</span>
            </div>
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
                src={esLogo} // Ruta de la imagen para el español
                alt="Español"
                style={{
                  cursor: "pointer",
                  width: "30px",
                  marginRight: "10px",
                }}
                onClick={() => changeLanguage("es")}
              />
              <img
                src={enLogo} // Ruta de la imagen para el inglés
                alt="English"
                style={{ cursor: "pointer", width: "30px" }}
                onClick={() => changeLanguage("en")}
              />
            </div>
          </>
        )}

        {pathname === "/casas" && (
          <>
            <div className="header-div-personajes">
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
              <span>Volver</span>
            </div>
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
                src={esLogo} // Ruta de la imagen para el español
                alt="Español"
                style={{
                  cursor: "pointer",
                  width: "30px",
                  marginRight: "10px",
                }}
                onClick={() => changeLanguage("es")}
              />
              <img
                src={enLogo} // Ruta de la imagen para el inglés
                alt="English"
                style={{ cursor: "pointer", width: "30px" }}
                onClick={() => changeLanguage("en")}
              />
            </div>
          </>
        )}

        {pathname === "/cronologia" && (
          <>
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
                src={esLogo} // Ruta de la imagen para el español
                alt="Español"
                style={{
                  cursor: "pointer",
                  width: "30px",
                  marginRight: "10px",
                }}
                onClick={() => changeLanguage("es")}
              />
              <img
                src={enLogo} // Ruta de la imagen para el inglés
                alt="English"
                style={{ cursor: "pointer", width: "30px" }}
                onClick={() => changeLanguage("en")}
              />
            </div>
          </>
        )}

        {pathname === "/" && (
          <>
            <div className="header-div-idioma">
              <img
                src={esLogo} // Ruta de la imagen para el español
                alt="Español"
                style={{
                  cursor: "pointer",
                  width: "30px",
                  marginRight: "10px",
                }}
                onClick={() => changeLanguage("es")}
              />
              <img
                src={enLogo} // Ruta de la imagen para el inglés
                alt="English"
                style={{ cursor: "pointer", width: "30px" }}
                onClick={() => changeLanguage("en")}
              />
            </div>
          </>
        )}
      </header>
    </>
  );
}
