import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { GiAchievement } from "react-icons/gi";
import { TbChevronLeft, TbCircleCheck } from "react-icons/tb";
import { motion } from "framer-motion";
import { estudios } from "../estudios";

const estadoColor = (periodo = "") => {
  if (/en curso/i.test(periodo)) return "bg-amber-400";
  if (/finalizado|completado/i.test(periodo)) return "bg-emerald-400";
  return "bg-sky-400";
};

export const DetallesEstudios = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link
        to="/#educacion"
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
          Trayectoria
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Estudios y <span className="text-gradient">Formación</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
          Mi formación completa: programas, módulos y competencias.
        </p>
      </motion.div>

      <div className="mt-10 space-y-6">
        {estudios.map((estudio, index) => (
          <motion.article
            key={estudio.id}
            id={`estudio-${estudio.id}`}
            className="glass scroll-mt-24 rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 * index }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/15 px-3 py-1 text-xs font-semibold text-sky-300">
                <GiAchievement size={14} /> {estudio.periodo}
              </span>
              <span
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${estadoColor(estudio.periodo)}`}
                title={estudio.periodo}
              />
            </div>

            <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
              {estudio.institucion}
            </h2>
            <p className="mt-1 text-sm font-medium text-sky-300">
              {estudio.titulo}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {estudio.descripcion}
            </p>

            {estudio.competencias?.length > 0 && (
              <div className="mt-5 border-t border-white/10 pt-4">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                  Temario · {estudio.competencias.length}{" "}
                  {estudio.competencias.length === 1 ? "módulo" : "módulos"}
                </h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {estudio.competencias.map((c) => (
                    <li
                      key={c.label}
                      className="flex items-start gap-2 rounded-xl bg-white/[0.03] px-3 py-2.5 text-[13px] leading-relaxed"
                    >
                      <TbCircleCheck
                        size={16}
                        className="mt-0.5 shrink-0 text-sky-400"
                      />
                      <span>
                        <strong className="font-semibold text-slate-100">
                          {c.label}:
                        </strong>{" "}
                        <span className="text-slate-400">{c.items}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
};
