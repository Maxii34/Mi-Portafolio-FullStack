import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import { Link } from "react-router";

export const CardsProyectosFront = ({ p }) => {
  return (
    <article className="glass card-hover flex h-full flex-col overflow-hidden rounded-2xl">
      <Link to={`/detalles/${p.id}`} className="group relative block overflow-hidden">
        <img
          className="h-44 w-full object-cover object-top transition duration-500 group-hover:scale-105"
          src={p.imagenes[0]}
          alt={`Captura principal de ${p.titulo}`}
          loading="lazy"
          onError={(e) => {
            e.target.src = "/img/SinImagen.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-white">{p.titulo}</h3>
        <p className="mt-0.5 text-[13px] font-medium text-sky-400">{p.subtitulo}</p>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">
          {p.descripcion}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {[...(p.stack?.frontend || []), ...(p.stack?.backend || [])]
            .slice(0, 4)
            .map((t) => (
              <span
                key={t}
                className="rounded-full bg-blue-600/10 px-2.5 py-1 text-[11px] font-medium text-sky-300"
              >
                {t}
              </span>
            ))}
        </div>

        <div className="mt-4 flex gap-2 border-t border-white/10 pt-4">
          {p.links.githubFront && (
            <a
              href={p.links.githubFront}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:border-sky-400/50"
            >
              <TbBrandGithub size={15} /> Front
            </a>
          )}
          {p.links.githubBack && (
            <a
              href={p.links.githubBack}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:border-sky-400/50"
            >
              <TbBrandGithub size={15} /> Back
            </a>
          )}
          {p.links.demo && (
            <a
              href={p.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-500"
            >
              <TbExternalLink size={15} /> Demo
            </a>
          )}
        </div>

        <Link
          to={`/detalles/${p.id}`}
          className="mt-2 text-center text-xs font-semibold text-slate-500 transition hover:text-sky-400"
        >
          Ver detalle completo →
        </Link>
      </div>
    </article>
  );
};
