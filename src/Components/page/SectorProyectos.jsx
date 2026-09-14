import { useCallback, useEffect, useState } from "react";
import { CardsProyectosFront } from "../ui/CardsProyectosFront";
import { proyectos } from "../proyectos";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { TbArrowRight, TbChevronLeft, TbChevronRight } from "react-icons/tb";

// Los últimos del array son los más nuevos → se muestran primero.
const lista = [...proyectos].reverse();

const porVistaSegunAncho = () => {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
};

export const SectorProyectos = () => {
  const [porVista, setPorVista] = useState(porVistaSegunAncho);
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);

  const max = Math.max(lista.length - porVista, 0);

  useEffect(() => {
    const alCambiar = () => {
      setPorVista(porVistaSegunAncho());
      setIndice(0);
    };
    window.addEventListener("resize", alCambiar);
    return () => window.removeEventListener("resize", alCambiar);
  }, []);

  const irA = useCallback(
    (i) => setIndice(((i % (max + 1)) + (max + 1)) % (max + 1)),
    [max],
  );
  const anterior = useCallback(() => irA(indice - 1), [indice, irA]);
  const siguiente = useCallback(() => irA(indice + 1), [indice, irA]);

  useEffect(() => {
    if (pausado || max === 0) return;
    const t = setInterval(() => {
      setIndice((i) => (i + 1) % (max + 1));
    }, 5000);
    return () => clearInterval(t);
  }, [pausado, max]);

  const flecha =
    "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-sky-400/60 hover:text-white";

  return (
    <section id="proyectos" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
            Portafolio
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Últimos <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            Aplicaciones FullStack con foco en backend sólido, auth y datos.
          </p>
        </motion.div>

        <div
          className="relative mt-10"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${indice * (100 / porVista)}%)` }}
            >
              {lista.map((p, i) => (
                <div
                  key={p.id}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / porVista}%` }}
                >
                  <CardsProyectosFront p={p} isNuevo={i === 0} />
                </div>
              ))}
            </div>
          </div>

          {max > 0 && (
            <>
              <button
                onClick={anterior}
                aria-label="Proyectos anteriores"
                className={`${flecha} absolute -left-2 top-1/3 -translate-y-1/2 shadow-xl sm:-left-5`}
              >
                <TbChevronLeft size={20} />
              </button>
              <button
                onClick={siguiente}
                aria-label="Proyectos siguientes"
                className={`${flecha} absolute -right-2 top-1/3 -translate-y-1/2 shadow-xl sm:-right-5`}
              >
                <TbChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {max > 0 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => irA(i)}
                aria-label={`Ir a la página ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === indice
                    ? "w-7 bg-sky-400"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        <div className="mt-6 text-center">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 transition hover:gap-3 hover:text-white"
          >
            Ver todos los proyectos <TbArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
