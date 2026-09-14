import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

export const SectorContacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [enviando, setEnviando] = useState(false);

  const onSubmit = async (data) => {
    setEnviando(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nombre: data.nombreCompleto,
          email: data.email,
          mensaje: data.mensaje,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Te responderé lo antes posible.",
        icon: "success",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      reset();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "No se pudo enviar el mensaje. Intenta más tarde.",
        icon: "error",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setEnviando(false);
    }
  };

  const inputCls = (hasError) =>
    `w-full rounded-xl border bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 ${
      hasError ? "border-red-500/60" : "border-white/10"
    }`;

  return (
    <section id="contacto" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
            Hablemos
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Contacto <span className="text-gradient">Directo</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-400">
            Contame tu idea o propuesta y te respondo a la brevedad.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="glass mt-8 rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Nombre Completo
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                className={inputCls(errors.nombreCompleto)}
                {...register("nombreCompleto", {
                  required: "El nombre es obligatorio",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" },
                })}
              />
              {errors.nombreCompleto && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.nombreCompleto.message}
                </p>
              )}
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Correo Electrónico
              </label>
              <input
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className={inputCls(errors.email)}
                {...register("email", {
                  required: "El email es requerido",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email no válido",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Mensaje
            </label>
            <textarea
              rows={4}
              placeholder="¿En qué puedo ayudarte?"
              className={inputCls(errors.mensaje)}
              {...register("mensaje", {
                required: "El mensaje no puede estar vacío",
                minLength: {
                  value: 10,
                  message: "Cuéntame un poco más (mínimo 10 carac.)",
                },
              })}
            />
            {errors.mensaje && (
              <p className="mt-1 text-xs text-red-400">{errors.mensaje.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={enviando}
            className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 disabled:opacity-60"
          >
            {enviando ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};
