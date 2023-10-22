import "./App.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ChronologyPage } from "./page/ChronologyPage/ChronologyPage";
import { HousesPage } from "./page/HousesPage/HousesPage";
import { CharactersPage } from "./page/CharactersPage/CharactersPage";
import { HomePage } from "./page/HomePage/HomePage";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("");

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <Router>
      <>
        <Routes>
          <Route path="/cronologia" element={<ChronologyPage />} />
          <Route
            path="/casas"
            element={
              <HousesPage filter={filter} functionFilter={changeFilter} />
            }
          />
          <Route
            path="/personajes"
            element={
              <CharactersPage filter={filter} functionFilter={changeFilter} />
            }
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
