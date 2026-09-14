import { CardsProyectosFront } from "../ui/CardsProyectosFront";
import { proyectos } from "../proyectos";
import { motion } from "framer-motion";

export const SectorProyectos = () => {
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
              viewport={{ once: false, amount: 0.2 }}
              className="h-full"
            >
              <CardsProyectosFront p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
