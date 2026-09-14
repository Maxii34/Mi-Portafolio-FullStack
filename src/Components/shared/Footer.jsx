import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandInstagram,
  TbMail,
} from "react-icons/tb";
import Swal from "sweetalert2";

export const Footer = () => {
  const anioActual = new Date().getFullYear();

  const abrir = (url) => window.open(url, "_blank");

  const copiarCorreo = () => {
    navigator.clipboard.writeText("exemaxi32@gmail.com");
    Swal.fire({
      title: "¡Copiado!",
      text: "Correo copiado al portapapeles",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
      background: "#0f172a",
      color: "#ffffff",
    });
  };

  const iconBtn =
    "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-400 transition hover:-translate-y-1 hover:border-sky-400/60 hover:text-sky-400";

  return (
    <footer className="border-t border-white/10 bg-[#05070f]">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6">
        <div className="text-2xl font-extrabold tracking-tight text-white">
          Maxi<span className="text-sky-400">.dev</span>
        </div>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
          Transformando desafíos en soluciones digitales robustas.
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Última actualización: 22/04/2026
        </p>

        <div className="mx-auto my-6 h-0.5 w-12 rounded bg-gradient-to-r from-blue-600 to-sky-400" />

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => abrir("https://github.com/Maxii34")}
            className={iconBtn}
            aria-label="GitHub"
          >
            <TbBrandGithub />
          </button>
          <button
            onClick={() =>
              abrir("https://www.linkedin.com/in/maxiiordo%C3%B1ez/")
            }
            className={iconBtn}
            aria-label="LinkedIn"
          >
            <TbBrandLinkedin />
          </button>
          <button
            onClick={() => abrir("https://www.instagram.com/codemax.dev")}
            className={iconBtn}
            aria-label="Instagram"
          >
            <TbBrandInstagram />
          </button>
          <button
            onClick={copiarCorreo}
            className={iconBtn}
            aria-label="Copiar correo"
          >
            <TbMail />
          </button>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          © {anioActual} - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
