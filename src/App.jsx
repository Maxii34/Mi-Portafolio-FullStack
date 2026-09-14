import { Menu } from "./Components/shared/Menu";
import { Footer } from "./Components/shared/Footer";
import { Inicio } from "./Components/page/Inicio";
import { SectorProyectos } from "./Components/page/SectorProyectos";
import { SectorStack } from "./Components/page/SectorStack";
import { SectorContacto } from "./Components/page/SectorContacto";
import { BrowserRouter, Routes, Route } from "react-router";
import { DetallesProyectos } from "./Components/page/DetallesProyectos";
import { DetallesEstudios } from "./Components/page/DetallesEstudios";
import { TodosProyectos } from "./Components/page/TodosProyectos";

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
      <div className="min-h-screen bg-slate-950 text-slate-200 antialiased">
        <Menu />
        <main className="relative bg-gradient-to-b from-[#060d24] via-slate-950 to-black">
          <Routes>
            <Route path="/" element={<PaginaUnica />} />
            <Route path="/detalles/:id" element={<DetallesProyectos />} />
            <Route path="/estudios" element={<DetallesEstudios />} />
            <Route path="/proyectos" element={<TodosProyectos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
