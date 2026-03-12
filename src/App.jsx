import { Menu } from "./Components/shared/Menu";
import { Footer } from "./Components/shared/Footer";
import { Inicio } from "./Components/page/Inicio";
import { Tecn } from "./Components/page/Tecn";
import { SectorContacto } from "./Components/page/SectorContacto";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <main className="Color-Fondo">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tecno" element={<Tecn />} />
          <Route path="/contacto" element={<SectorContacto />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;