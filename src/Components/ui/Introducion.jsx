import { motion } from "framer-motion";
import { proyectos } from "../proyectos";

export const Introduccion = () => {
  const irAProyectos = (e) => {
    e.preventDefault();
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <motion.h1
        className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Hola, soy <br />
        <span className="text-gradient">Maximiliano Ordoñez</span>
      </motion.h1>

      <motion.div
        className="mt-5 max-w-xl space-y-4 text-[15px] leading-relaxed text-slate-400 sm:text-base"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p>
          Soy <strong className="font-semibold text-slate-100">Desarrollador Full Stack</strong>{" "}
          con especialización en <strong className="font-semibold text-slate-100">Backend</strong>,
          enfocado en APIs robustas, bases de datos eficientes y arquitecturas
          escalables.
        </p>
        <p>
          Trabajo en lógica de negocio, autenticación, seguridad, rendimiento e
          integración entre sistemas, asegurando soluciones sólidas y
          mantenibles.
        </p>
      </motion.div>

      <motion.div
        className="mt-7 flex flex-wrap gap-3"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <a
          onClick={irAProyectos}
          href="#proyectos"
          className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
        >
          Explorar mis proyectos →
        </a>
        <a
          href="#contacto"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400/50 hover:text-white"
        >
          Contactarme
        </a>
      </motion.div>

      <div className="mt-8 flex gap-8 border-t border-white/10 pt-6">
        {[
          [`${proyectos.length}`, "Proyectos"],
          ["MERN", "Stack"],
          ["REST", "APIs"],
        ].map(([n, l]) => (
          <div key={l}>
            <div className="text-2xl font-extrabold text-white">{n}</div>
            <div className="text-xs uppercase tracking-widest text-slate-500">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
