import { Menu } from "./Components/shared/Menu"
import { Footer } from "./Components/shared/Footer"
import { Inicio } from "./Components/page/Inicio"
import { SectorEducacion } from "./Components/page/SectorEducacion"
import { SectorProyectos } from "./Components/page/SectorProyectos"
import { SectorStack } from "./Components/page/SectorStack"
import { SectorContacto } from "./Components/page/SectorContacto"

function App() {
  return (
    <>
      <Menu />
      <main className="Color-Fondo">
        <Inicio />
        <SectorEducacion />
        <SectorProyectos />
        <SectorStack />
        <SectorContacto />
      </main>
      <Footer />
    </>
  )
}

export default App
