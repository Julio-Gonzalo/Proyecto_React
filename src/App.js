import "./main/style.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ChronologyPage } from "./page/ChronologyPage/ChronologyPage";
import { HousesPage } from "./page/HousesPage/HousesPage";
import { CharactersPage } from "./page/CharactersPage/CharactersPage";
import { HomePage } from "./page/HomePage/HomePage";
import { Menu } from "./componentes/Menu/Menu";

function App() {
  return (
    <Router>
      <main className="main">
        <Routes>
          <Route path="/cronologia" element={<ChronologyPage />} />
          <Route path="/casas" element={<HousesPage />} />
          <Route path="/personajes" element={<CharactersPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Menu />
    </Router>
  );
}

export default App;
