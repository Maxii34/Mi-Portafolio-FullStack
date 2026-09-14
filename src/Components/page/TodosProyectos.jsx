import { useEffect } from "react";
import { Link } from "react-router";
import { TbChevronLeft } from "react-icons/tb";
import { motion } from "framer-motion";
import { CardsProyectosFront } from "../ui/CardsProyectosFront";
import { proyectos } from "../proyectos";

// Los últimos del array son los más nuevos → se muestran primero.
const lista = [...proyectos].reverse();

export const TodosProyectos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Link
        to="/#proyectos"
        className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400/50 hover:text-white"
      >
        <TbChevronLeft size={18} /> Volver
      </Link>

      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
          Portafolio
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Todos los <span className="text-gradient">Proyectos</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
          {lista.length} proyectos · ordenados de más nuevo a más antiguo.
        </p>
      </motion.div>

      <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
            viewport={{ once: true, amount: 0.15 }}
            className="h-full"
          >
            <CardsProyectosFront p={p} isNuevo={i === 0} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
