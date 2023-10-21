import React from "react";
import { useTranslation } from "react-i18next";

export function MenuHeader() {
  const [t, i18n] = useTranslation();
  const changeLanguage = (languaje) => i18n.changeLanguage(languaje);

  return (
    <>
      <header className="header">
        <button onClick={() => changeLanguage("es")}>Es</button>
        <button onClick={() => changeLanguage("en")}>En</button>
      </header>
    </>
  );
}
