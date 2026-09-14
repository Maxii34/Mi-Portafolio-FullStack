import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { MdDownloading, MdMenu, MdClose } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const LINKS = [
  { id: "sobre-mi", label: "Sobre Mí" },
  { id: "educacion", label: "Educación" },
  { id: "proyectos", label: "Proyectos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "contacto", label: "Contacto" },
];

export const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const irASeccion = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialBtn =
    "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-sky-400/60 hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => irASeccion("sobre-mi")}
          className="text-lg font-extrabold tracking-tight text-white"
        >
          Maxi<span className="text-sky-400">.dev</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => irASeccion(l.id)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://www.instagram.com/codemax.dev"
            target="_blank"
            rel="noreferrer"
            className={socialBtn}
            aria-label="Instagram"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/maxiiordo%C3%B1ez/"
            target="_blank"
            rel="noreferrer"
            className={socialBtn}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://github.com/Maxii34"
            target="_blank"
            rel="noreferrer"
            className={socialBtn}
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="/CV-Maximiliano_Ordoñez.pdf"
            download="CV_Maximiliano_Ordoñez.pdf"
            className="ml-1 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            <MdDownloading size={18} /> CV
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-slate-200 hover:bg-white/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-4 pb-5 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => irASeccion(l.id)}
                className="rounded-lg px-3 py-2.5 text-left text-[15px] font-medium text-slate-200 hover:bg-white/5"
              >
                {l.label}
              </button>
            ))}
            <a
              href="/CV-Maximiliano_Ordoñez.pdf"
              download="CV_Maximiliano_Ordoñez.pdf"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <MdDownloading size={18} /> Descargar CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
