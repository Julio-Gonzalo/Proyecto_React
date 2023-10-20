import React from "react";
import { useTranslation } from "react-i18next";

export function MenuHeader() {
  const [t, i18n] = useTranslation();
  const changeLanguage = (languaje) => i18n.changeLanguage(languaje);

  return (
    <>
      <header className="header">
      <img
          src="" // Ruta de la imagen para el español
          alt="Español"
          style={{ cursor: 'pointer', width: '30px', marginRight: '10px' }}
          onClick={() => changeLanguage('es')}
        />
        <img
          src="" // Ruta de la imagen para el inglés
          alt="English"
          style={{ cursor: 'pointer', width: '30px' }}
          onClick={() => changeLanguage('en')}
        />
      </header>
    </>
  );
}
