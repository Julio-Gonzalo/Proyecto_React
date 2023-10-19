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
      <Menu />
      <main className="main">
        <Routes>
          <Route path="/casas" element={<ChronologyPage />} />
          <Route path="/casas" element={<HousesPage />} />
          <Route path="/personajes" element={<CharactersPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
