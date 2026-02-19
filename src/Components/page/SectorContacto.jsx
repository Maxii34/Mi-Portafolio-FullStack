import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

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
        text: "Gracias por contactarme. Te responderé lo antes posible.",
        icon: "success",
        confirmButtonColor: "#0d6efd",
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

  return (
    <Container
      id="contacto"
      className="d-flex flex-column justify-content-center pt-5 mt-lg-5"
      style={{
        minHeight: "100vh",
        scrollMarginTop: "20px",
      }}
    >
      <h2 className="section-title pb-1">
        Contacto <span className="text-highlight">Directo</span>
      </h2>

      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="contact-container rounded shadow-sm">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                {/* Nombre Completo */}
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label className="text-white-50 small">
                      Nombre Completo
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className={`contact-input ${errors.nombreCompleto ? "is-invalid" : ""}`}
                      placeholder="Tu nombre"
                      {...register("nombreCompleto", {
                        required: "El nombre es obligatorio",
                        minLength: { value: 3, message: "Mínimo 3 caracteres" },
                      })}
                    />
                    {errors.nombreCompleto && (
                      <Form.Text className="text-danger">
                        {errors.nombreCompleto.message}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>

                {/* Email */}
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label className="text-white-50 small">
                      Correo Electrónico
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className={`contact-input ${errors.email ? "is-invalid" : ""}`}
                      placeholder="tucorreo@ejemplo.com"
                      {...register("email", {
                        required: "El email es requerido",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Email no válido",
                        },
                      })}
                    />
                    {errors.email && (
                      <Form.Text className="text-danger">
                        {errors.email.message}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* Mensaje */}
              <Form.Group className="mb-4">
                <Form.Label className="text-white-50 small">Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  className={`contact-input ${errors.mensaje ? "is-invalid" : ""}`}
                  placeholder="¿En qué puedo ayudarte?"
                  {...register("mensaje", {
                    required: "El mensaje no puede estar vacío",
                    minLength: {
                      value: 10,
                      message: "Cuéntame un poco más (mínimo 10 carac.)",
                    },
                  })}
                />
                {errors.mensaje && (
                  <Form.Text className="text-danger">
                    {errors.mensaje.message}
                  </Form.Text>
                )}
              </Form.Group>

              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 fw-bold py-2 btn-send"
                  disabled={enviando}
                >
                  {enviando ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
