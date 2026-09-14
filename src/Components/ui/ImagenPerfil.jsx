import { TbBrandGithub } from "react-icons/tb";
import { MdDownloading } from "react-icons/md";
import { motion } from "framer-motion";

export const ImagenPerfil = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-blue-600/30 via-sky-400/10 to-transparent blur-2xl" />
        <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl">
          <img
            src="compressed-Maxi.jpeg"
            className="h-72 w-72 rounded-[1.6rem] object-cover sm:h-80 sm:w-80"
            alt="Foto de perfil de Maximiliano Ordoñez"
          />
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-emerald-400/30 bg-slate-950/90 px-4 py-1.5 text-xs font-semibold text-emerald-300">
            ● FullStack Developer
          </div>
        </div>
      </motion.div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="https://github.com/Maxii34"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-400/50"
        >
          <TbBrandGithub size={18} /> GitHub
        </a>
        <a
          href="/CV-Maximiliano_Ordoñez.pdf"
          download="CV_Maximiliano_Ordoñez.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-100"
        >
          <MdDownloading size={18} /> Download CV
        </a>
      </div>
    </div>
  );
};
