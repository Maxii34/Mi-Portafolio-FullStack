import { Menu } from "./Components/shared/Menu"
import { Footer } from "./Components/shared/Footer"
import { Inicio } from "./Components/page/Inicio"
import { SectorEducacion } from "./Components/page/SectorEducacion"
import { SectorProyectos } from "./Components/page/SectorProyectos"


function App() {
  return (
    <>
      <Menu />
      <main className="Color-Fondo">
        <Inicio />
        <SectorEducacion />
        <SectorProyectos />

      </main>
      <Footer />
    </>
  )
}

export default App
