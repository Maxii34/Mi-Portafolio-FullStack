import { useState } from "react";
import { useParams, Link } from "react-router";
import { proyectos } from "../proyectos";
import { motion } from "framer-motion";
import {
  TbBrandGithub,
  TbExternalLink,
  TbChevronLeft,
  TbChevronRight,
  TbCode,
} from "react-icons/tb";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiVite,
  SiReactrouter,
  SiReacthookform,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiGithub,
} from "react-icons/si";

const techConfig = {
  HTML5: { icon: <SiHtml5 />, color: "#E34F26" },
  CSS3: { icon: <SiCss3 />, color: "#1572B6" },
  JavaScript: { icon: <SiJavascript />, color: "#F7DF1E" },
  React: { icon: <SiReact />, color: "#61DAFB" },
  "React.js": { icon: <SiReact />, color: "#61DAFB" },
  "Next.js": { icon: <SiNextdotjs />, color: "#ffffff" },
  Tailwind: { icon: <SiTailwindcss />, color: "#06B6D4" },
  Bootstrap: { icon: <SiBootstrap />, color: "#7952B3" },
  "React Bootstrap": { icon: <SiBootstrap />, color: "#7952B3" },
  "Node.js": { icon: <SiNodedotjs />, color: "#339933" },
  Express: { icon: <SiExpress />, color: "#ffffff" },
  MongoDB: { icon: <SiMongodb />, color: "#47A248" },
  Mongoose: { icon: <SiMongoose />, color: "#880000" },
  "JSON Web Token": { icon: <SiJsonwebtokens />, color: "#ffffff" },
  Vite: { icon: <SiVite />, color: "#646CFF" },
  "React Router": { icon: <SiReactrouter />, color: "#CA4245" },
  "React Hook Form": { icon: <SiReacthookform />, color: "#EC5990" },
  SweetAlert2: { icon: <TbCode />, color: "#f8bb86" },
  PostgreSQL: { icon: <SiPostgresql />, color: "#4169E1" },
  TypeScript: { icon: <SiTypescript />, color: "#3178C6" },
};

export const DetallesProyectos = () => {
  const { id } = useParams();
  const [imgIdx, setImgIdx] = useState(0);
  const currentIndex = proyectos.findIndex((p) => p.id === id);
  const proyecto = proyectos[currentIndex];

  if (!proyecto) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-white">Proyecto no encontrado</h2>
        <Link
          to="/"
          className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
        >
          Volver a proyectos
        </Link>
      </div>
    );
  }

  const prevProject =
    proyectos[(currentIndex - 1 + proyectos.length) % proyectos.length];
  const nextProject = proyectos[(currentIndex + 1) % proyectos.length];

  const getTech = (name) => {
    const clean = name.trim();
    return {
      name: clean,
      ...(techConfig[clean] || { icon: <TbCode />, color: "#94a3b8" }),
    };
  };

  const stack = {
    frontend: (proyecto.stack?.frontend || []).map(getTech),
    backend: (proyecto.stack?.backend || []).map(getTech),
    database: (proyecto.stack?.database || []).map(getTech),
  };

  const navBtn =
    "inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:border-sky-400/50 hover:text-white";

  return (
    <motion.div
      key={proyecto.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link to="/#proyectos" className={navBtn}>
          <TbChevronLeft size={18} /> Volver a Proyectos
        </Link>
        <div className="flex gap-2">
          <Link to={`/detalles/${prevProject.id}`} className={navBtn}>
            <TbChevronLeft size={18} /> Anterior
          </Link>
          <Link to={`/detalles/${nextProject.id}`} className={navBtn}>
            Siguiente <TbChevronRight size={18} />
          </Link>
        </div>
      </div>

      <div className="glass rounded-3xl p-5 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <img
                className="h-64 w-full object-cover object-top sm:h-80"
                src={proyecto.imagenes[imgIdx]}
                alt={`${proyecto.titulo} captura ${imgIdx + 1}`}
                onError={(e) => {
                  e.target.src = "/img/SinImagen.png";
                }}
              />
            </div>
            {proyecto.imagenes.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {proyecto.imagenes.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                      i === imgIdx
                        ? "border-sky-400"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-cover object-top"
                      onError={(e) => {
                        e.target.src = "/img/SinImagen.png";
                      }}
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-8">
              <h4 className="flex items-center gap-2 text-white">
                <TbCode className="text-sky-400" /> Stack del Proyecto
              </h4>
              <div className="mt-4 space-y-5">
                {[
                  ["Frontend", stack.frontend],
                  ["Backend", stack.backend],
                  ["Base de Datos", stack.database],
                ].map(
                  ([label, items]) =>
                    items.length > 0 && (
                      <div key={label}>
                        <h6 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-sky-400">
                          {label}
                        </h6>
                        <div className="flex flex-wrap gap-2">
                          {items.map((t, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                            >
                              <span style={{ color: t.color }} className="text-base">
                                {t.icon}
                              </span>
                              {t.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ),
                )}
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-gradient text-3xl font-extrabold tracking-tight sm:text-4xl">
              {proyecto.titulo}
            </h1>
            <h4 className="mt-1 text-sky-300">{proyecto.subtitulo}</h4>
            <div className="mt-5">
              <h5 className="font-semibold text-white">Descripción</h5>
              <p className="mt-2 leading-relaxed text-slate-400">
                {proyecto.descripcion}
              </p>
            </div>
            <div className="mt-6 grid gap-3">
              {proyecto.links.demo && (
                <a
                  href={proyecto.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
                >
                  <TbExternalLink size={20} /> Ver Demo en Vivo
                </a>
              )}
              <div className="flex gap-2">
                {proyecto.links.githubFront && (
                  <a
                    href={proyecto.links.githubFront}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-sky-400/50"
                  >
                    <TbBrandGithub size={18} /> Frontend
                  </a>
                )}
                {proyecto.links.githubBack && (
                  <a
                    href={proyecto.links.githubBack}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-sky-400/50"
                  >
                    <TbBrandGithub size={18} /> Backend
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
