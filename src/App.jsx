import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonProfile from "./pages/pokemonProfile.jsx";
import Home from "./pages/Home.jsx";
import Header from "./Components/Header/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":pokemonName" element={<PokemonProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
