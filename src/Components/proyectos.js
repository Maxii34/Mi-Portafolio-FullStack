export const proyectos = [
  {
    id: "project-dogtor-veterinaria",
    titulo: "Dogtor Veterinaria",
    subtitulo: "Sistema de Gestión Veterinaria & Control de Turnos",
    descripcion:
      "Plataforma integral diseñada para optimizar la administración de clínicas veterinarias. Permite la gestión de historias clínicas de pacientes, control exhaustivo de turnos y una experiencia de usuario fluida. Implementa una arquitectura robusta con seguridad avanzada para la protección de datos sensibles y autenticación de usuarios.",
    imagenes: ["/img/Dog1.png", "/img/Dog2.png", "/img/Dog3.png"],
    stack: {
      frontend: ["React.js", "Bootstrap", "HTML5", "CSS3"],
      backend: ["Node.js", "Express", "JSON Web Token", "Bcrypt.js"],
      database: ["MongoDB"],
    },
    links: {
      demo: "https://dogtorveterinaria.netlify.app/",
      githubFront: "https://github.com/Maxii34/ModuloN-2-Front",
      githubBack: "https://github.com/Maxii34/Backend-DogTor",
    },
  },
  {
    id: "project-sintax-hotel",
    titulo: "Sintax Hotel",
    subtitulo: "Sistema Integral de Gestión de Reservas y Hospitalidad",
    descripcion:
      "Desarrollo colaborativo de una plataforma robusta para la administración hotelera. El sistema centraliza el control de inventario de habitaciones, gestión de huéspedes y un flujo de reservas optimizado. Destaca por su panel administrativo intuitivo, validaciones complejas de disponibilidad y una arquitectura escalable pensada para el alto tráfico.",
    imagenes: ["/img/Sintax01.png", "/img/Sintax02.png", "/img/Sintax03.png"],
    stack: {
      frontend: [
        "React.js",
        "React Router",
        "Bootstrap",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      backend: [
        "Node.js",
        "Express",
        "Mongoose",
        "JSON Web Token",
        "Bcrypt.js",
      ],
      database: ["MongoDB"],
    },
    links: {
      demo: "https://sintaxhotelv2max.netlify.app/",
      githubFront: "https://github.com/Maxii34/ModuloN3-Front",
      githubBack: "https://github.com/Maxii34/ModuloN3-Back",
    },
  },
  {
    id: "project-blog-recetas",
    titulo: "Blog de Recetas",
    subtitulo: "Plataforma CMS para Contenido Gastronómico",
    descripcion:
      "Aplicación web dinámica diseñada para la difusión y gestión de contenido culinario. Cuenta con una interfaz de usuario optimizada para la búsqueda de recetas y un sistema administrativo (CMS) privado. La plataforma destaca por su manejo de formularios complejos, validaciones en tiempo real y alertas interactivas, garantizando una administración de contenido fluida y segura.",
    imagenes: [
      "/img/Tarta1.png",
      "/img/Tarta2.png",
      "/img/Tarta3.png",
      "/img/Tarta4.png",
    ],
    stack: {
      frontend: [
        "React.js",
        "Vite",
        "Bootstrap",
        "React Router",
        "React Hook Form",
        "SweetAlert2",
      ],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
    },
    links: {
      demo: "https://blogderecetasmax.netlify.app",
      githubFront: "https://github.com/Maxii34/Tp-06-Blog-de-Recetas",
      githubBack: "https://github.com/Maxii34/Tp-5-Backend-BlogDeRecetas.",
    },
  },
  {
    id: "project-gestor-tareas",
    titulo: "Gestor de Tareas",
    subtitulo: "Herramienta de Productividad y Organización Personal",
    descripcion:
      "Aplicación de productividad diseñada bajo el modelo CRUD (Crear, Leer, Actualizar, Borrar) para la gestión eficiente de actividades diarias. El sistema ofrece una sincronización inmediata entre el cliente y el servidor, permitiendo un seguimiento del estado de tareas en tiempo real. Se destaca por su arquitectura limpia y un manejo de errores robusto mediante alertas interactivas.",
    imagenes: ["/img/GTarea01.png", "/img/GTarea02.png", "/img/GTarea03.png"],
    stack: {
      frontend: [
        "React.js",
        "Vite",
        "Bootstrap",
        "React Bootstrap",
        "React Router",
        "SweetAlert2",
      ],
      backend: ["Node.js", "Express", "Mongoose", "Cors", "Morgan"],
      database: ["MongoDB"],
    },
    links: {
      demo: "https://listadetareasmax.netlify.app/tareas",
      githubFront: "https://github.com/Maxii34/Tp-02-Lista-de-Tareas",
      githubBack: "https://github.com/Maxii34/Tp-1-Lista-De-Tareas-",
    },
  },
  {
    id: "project-apolo-petshop",
    titulo: "Apolo PetShop",
    subtitulo: "E-commerce especializado en productos para mascotas",
    descripcion:
      "Plataforma integral de comercio electrónico para la venta y distribución de productos para mascotas. El sistema permite una gestión dinámica de un catálogo que incluye alimentos, accesorios y juguetes, integrando un flujo de pago seguro y un panel administrativo para el control de inventario. Incluye funcionalidades avanzadas de filtrado por tipo de animal y categoría, optimizando la experiencia de compra del usuario.",
    imagenes: [
      "/img/Apolo01.png",
      "/img/Apolo02.png",
      "/img/Apolo03.png",
      "/img/Apolo04.png",
      "/img/Apolo05.png",
      "/img/Apolo06.png",
    ],
    stack: {
      frontend: [
        "React.js",
        "JavaScript",
        "Bootstrap",
        "React Bootstrap",
        "React Router",
        "React Hook Form",
        "SweetAlert2",
      ],
      backend: [
        "Node.js",
        "Express",
        "JWT (Autenticación)",
        "Mercado Pago SDK", // Implementado para procesar las compras del carrito
        "Cloudinary API", // Usado para las imágenes de productos
        "Multer", // Gestión de carga de archivos
        "Bcrypt", // Cifrado de seguridad
      ],
      database: [
        "MongoDB",
        "Mongoose", // Modelado de productos, usuarios y órdenes
      ],
    },
    links: {
      demo: "https://petshop-v2-apolo.netlify.app/",
      githubFront: "https://github.com/Maxii34/PetShop-v2-React",
      githubBack: "https://github.com/Maxii34/Backend-Petshopv2",
    },
  },
  {
    id: "project-force-gim",
    titulo: "ForceGim",
    subtitulo: "Sistema de Gestión Integral para Gimnasios",
    descripcion:
      "Plataforma full stack para la administración operativa de gimnasios. El backend (Node.js + Express + MongoDB) centraliza el padrón de socios, membresías, renovaciones y estadísticas financieras, con un sistema de roles (Superadmin, Admin, Moderador) mediante JWT y Bcrypt, y automatización de vencimientos vía Cron Jobs. El frontend, desarrollado en Next.js 16 con React 19 y TypeScript, ofrece un panel administrativo para gestionar socios, membresías, renovaciones e ingresos, con dashboard de métricas en tiempo real.",
    imagenes: ["/img/iron01.png", "/img/iron02.png", "/img/iron03.png"],
    stack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "Lucide React",
        "SweetAlert2",
      ],
      backend: [
        "Node.js",
        "Express",
        "JSON Web Token",
        "Bcrypt.js",
        "Mongoose",
        "Node-Cron",
      ],
      database: ["MongoDB"],
    },
    links: {
      demo: "https://irongim-sistema-gestor.vercel.app",
      githubFront: "https://github.com/Maxii34/Sistema-GestorIntegral",
      githubBack: "https://github.com/Maxii34/Force-Gym-Backend",
    },
  },

  {
    id: "project-gestor-inventario",
    titulo: "Gestor de Inventario",
    subtitulo: "Sistema Full Stack de Inventario, Ventas y Stock",
    descripcion:
      "Plataforma full stack pensada para pequeños y medianos negocios. El backend (Node.js + Express + TypeScript + Prisma + PostgreSQL) administra productos, categorías, clientes, movimientos de stock (entradas, salidas, ajustes) y ventas, con autenticación JWT y refresh token, roles Admin/Vendedor, transacciones atómicas para evitar inconsistencias de stock, y cobros integrados con Mercado Pago (Checkout Pro) vía webhook. El frontend, en Next.js con React y TypeScript, ofrece un panel administrativo con dashboard de métricas, control de stock con alertas de bajo/crítico, ventas presenciales y a distancia con link de pago + código QR y polling de estado, y gestión de usuarios con rutas protegidas por rol.",
    imagenes: ["/img/gestor01.png", "/img/gestor02.png", "/img/gestor03.png"],
    stack: {
      frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Motion",
        "React Icons",
        "QRCode.react",
      ],
      backend: [
        "Node.js",
        "Express",
        "TypeScript",
        "Prisma",
        "JSON Web Token",
        "Bcrypt",
        "Zod",
        "Mercado Pago (Checkout Pro)",
      ],
      database: ["PostgreSQL"],
    },
    links: {
      demo: "https://sistema-inventario-woad.vercel.app",
      githubFront: "https://github.com/Maxii34/Gestor-Inventario",
      githubBack: "https://github.com/Maxii34/Gestor-Inventario-back",
    },
  },
];
