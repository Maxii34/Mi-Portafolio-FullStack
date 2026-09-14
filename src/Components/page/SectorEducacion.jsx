import { GiAchievement } from "react-icons/gi";
import { TbArrowRight } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { estudios } from "../estudios";

const estadoColor = (periodo = "") => {
  if (/en curso/i.test(periodo)) return "bg-amber-400";
  if (/finalizado|completado/i.test(periodo)) return "bg-emerald-400";
  return "bg-sky-400";
};

const EstudioCard = ({ estudio, index }) => {
  const total = estudio.competencias?.length ?? 0;

  return (
    <motion.article
      className="glass card-hover flex h-full flex-col rounded-2xl p-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/15 px-3 py-1 text-[11px] font-semibold text-sky-300">
          <GiAchievement size={14} /> {estudio.periodo}
        </span>
        <span
          className={`h-2 w-2 shrink-0 rounded-full ${estadoColor(estudio.periodo)}`}
          title={estudio.periodo}
        />
      </div>

      <h3 className="mt-3 text-base font-bold leading-snug text-white">
        {estudio.institucion}
      </h3>
      <p className="mt-1 text-[13px] font-medium text-sky-300/90">
        {estudio.titulo}
      </p>
      <p className="mt-2.5 line-clamp-3 text-[13px] leading-relaxed text-slate-400">
        {estudio.descripcion}
      </p>

      <div className="mt-auto pt-4">
        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <span className="text-xs text-slate-500">
            {total} {total === 1 ? "módulo" : "módulos"}
          </span>
          <Link
            to={`/estudios#estudio-${estudio.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-sky-300 transition hover:gap-2 hover:text-white"
          >
            Ver programa <TbArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export const SectorEducacion = () => {
  return (
    <div id="educacion" className="scroll-mt-20 py-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
          Trayectoria
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Estudios y <span className="text-gradient">Formación</span>
        </h2>
      </motion.div>

      <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        {estudios.map((estudio, index) => (
          <EstudioCard key={estudio.id} estudio={estudio} index={index} />
        ))}
      </div>
    </div>
  );
};
