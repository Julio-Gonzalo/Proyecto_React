// App.js
import React, { useState } from 'react';
import "./main/style.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ChronologyPage } from "./page/ChronologyPage/ChronologyPage";
import { HousesPage } from "./page/HousesPage/HousesPage";
import { CharactersPage } from "./page/CharactersPage/CharactersPage";
import { HomePage } from "./page/HomePage/HomePage";
import { Menu } from "./componentes/Menu/Menu";
import Header from './Header';

function App() {
  const [nombreBuscado, setNombreBuscado] = useState('');

  const handleSearch = (nombre) => {
    setNombreBuscado(nombre);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <main className="main">
        <Routes>
          <Route path="/cronologia" element={<ChronologyPage />} />
          <Route path="/casas" element={<HousesPage />} />
          <Route path="/personajes" element={<CharactersPage nombreBuscado={nombreBuscado} />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Menu />
    </Router>
  );
}

export default App;