import { Menu } from "./Components/shared/Menu";
import { Footer } from "./Components/shared/Footer";
import { Inicio } from "./Components/page/Inicio";
import { SectorProyectos } from "./Components/page/SectorProyectos";
import { SectorStack } from "./Components/page/SectorStack";
import { SectorContacto } from "./Components/page/SectorContacto";
import { BrowserRouter, Routes, Route } from "react-router";
import { DetallesProyectos } from "./Components/page/DetallesProyectos";

const PaginaUnica = () => {
  return (
    <>
      <Inicio />
      <SectorProyectos />
      <SectorStack />
      <SectorContacto />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <main className="Color-Fondo">
        <Routes>
          <Route path="/" element={<PaginaUnica />} />
          <Route path="/detalles/:id" element={<DetallesProyectos />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;