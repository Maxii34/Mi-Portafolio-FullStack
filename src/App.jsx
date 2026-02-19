import { Menu } from "./Components/shared/Menu"
import { Inicio } from "./Components/page/Inicio"
import { SectorEducacion } from "./Components/page/SectorEducacion"


function App() {
  return (
    <>
      <Menu />
      <main className="Color-Fondo">
        <Inicio />
        <SectorEducacion />

      </main>
    </>
  )
}

export default App
