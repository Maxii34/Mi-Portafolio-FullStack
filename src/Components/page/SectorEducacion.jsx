import { GiAchievement } from "react-icons/gi";
import { motion } from "framer-motion";
import { estudios } from "../estudios";

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

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {estudios.map((estudio, index) => (
          <motion.article
            key={estudio.id}
            className="glass card-hover rounded-2xl p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/15 px-3 py-1 text-xs font-semibold text-sky-300">
              <GiAchievement /> {estudio.periodo}
            </div>
            <h3 className="mt-3 text-xl font-bold text-white">
              {estudio.institucion}
            </h3>
            <p className="mt-1 text-sm font-medium text-sky-300/90">
              {estudio.titulo}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {estudio.descripcion}
            </p>
            {estudio.competencias && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {estudio.competencias.map((c) => (
                  <span
                    key={c.label}
                    title={c.items}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {c.label}
                  </span>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
};
