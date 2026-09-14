import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiPrisma,
  SiMongoose,
  SiMongodb,
  SiPostgresql,
  SiZod,
  SiPostman,
  SiGit,
  SiGithub,
  SiDocker,
  SiClaude,
  SiNextdotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

export const SectorStack = () => {
  const categories = [
    {
      title: "Frontend",
      desc: "Interfaces rápidas y accesibles",
      skills: [
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Vite", icon: <SiVite />, color: "#646CFF" },
      ],
    },
    {
      title: "Backend & DB",
      desc: "APIs, auth y datos",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#ffffff" },
        { name: "JWT", icon: <SiJsonwebtokens />, color: "#FB015B" },
        { name: "Prisma", icon: <SiPrisma />, color: "#ffffff" },
        { name: "Mongoose", icon: <SiMongoose />, color: "#880000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
        { name: "Zod", icon: <SiZod />, color: "#3068B0" },
      ],
    },
    {
      title: "Herramientas & IA",
      desc: "Flujo profesional, DevOps e IA",
      skills: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Claude Code", icon: <SiClaude />, color: "#D97757" },
      ],
    },
  ];

  return (
    <section id="habilidades" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
            Capacidades
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Mi Stack <span className="text-gradient">Tecnológico</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-sky-300">
                {cat.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500">{cat.desc}</p>
              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3.5 transition hover:-translate-y-1 hover:border-sky-400/50 hover:bg-sky-400/5"
                  >
                    <span className="text-2xl" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
