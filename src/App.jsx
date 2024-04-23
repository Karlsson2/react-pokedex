import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PokemonProfilePage from "./pages/pokemonProfilePage.jsx";
import Home from "./pages/Home.jsx";
import Header from "./Components/Header/Header.jsx";
import FourOhFourPage from "./pages/404";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error/404" element={<FourOhFourPage />} />
          <Route path="*" element={<Navigate to="/error/404" />} />
          <Route path="/:pokemonName" element={<PokemonProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
