import { ImagenPerfil } from "../ui/ImagenPerfil";
import { Introduccion } from "../ui/Introducion";
import { SectorEducacion } from "./SectorEducacion";

export const Inicio = () => {
  return (
    <section id="sobre-mi" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Introduccion />
          <ImagenPerfil />
        </div>
        <SectorEducacion />
      </div>
    </section>
  );
};
