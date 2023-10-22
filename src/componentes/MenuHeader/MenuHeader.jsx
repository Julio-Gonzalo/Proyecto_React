import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./MenuHeader.scss";
import esLogo from "./assets/spain.png";
import enLogo from "./assets/united-kingdom.png";

export function MenuHeader({ onFilterChange }) {
  const [, i18n] = useTranslation();
  const changeLanguage = (language) => i18n.changeLanguage(language);
  const [filter, setFilter] = useState(""); // Nuevo estado para el filtro

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    onFilterChange(event.target.value); // Llama a la función de filtrado en el componente padre
  };

  return (
    <>
      <header className="header">
        <input
          type="text"
          placeholder="Buscar..."
          value={filter}
          onChange={handleFilterChange}
        />
        
        <img
          src={esLogo} // Ruta de la imagen para el español
          alt="Español"
          style={{ cursor: "pointer", width: "30px", marginRight: "10px" }}
          onClick={() => changeLanguage("es")}
        />
        <img
          src={enLogo} // Ruta de la imagen para el inglés
          alt="English"
          style={{ cursor: "pointer", width: "30px" }}
          onClick={() => changeLanguage("en")}
        />
      </header>
    </>
  );
}