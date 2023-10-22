import "./App.scss";
import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ChronologyPage } from "./page/ChronologyPage/ChronologyPage";
import { HousesPage } from "./page/HousesPage/HousesPage";
import { CharactersPage } from "./page/CharactersPage/CharactersPage";
import { HomePage } from "./page/HomePage/HomePage";
import { MenuFooter } from "./componentes/MenuFooter/MenuFooter";
import { MenuHeader } from "./componentes/MenuHeader/MenuHeader";

function App() {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <Router>
      <MenuHeader onFilterChange={handleFilterChange}/>
      <main className="main">
        <Routes>
          <Route path="/cronologia" element={<ChronologyPage />} />
          <Route path="/casas" element={<HousesPage filter={filter} />} />
          <Route path="/personajes" element={<CharactersPage filter={filter} />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <MenuFooter />
    </Router>
  );
}

export default App;
