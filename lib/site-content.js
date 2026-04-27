import { fallbackLng } from "@/app/i18n/settings";


const projectEntries = [
  {
    slug: "timesheet-and-expense-platform",
    role: {
      en: "Full-Stack & Systems Engineer",
      es: "Ingeniero Full-Stack y de Sistemas",
    },
    stack: [
      "React 18 + Vite + Tailwind",
      "Node.js + Express + Sequelize",
      "Microsoft SQL Server",
      "JWT + refresh cookies + CSRF",
      "Linux + Nginx + Docker ",
      "CI / CD with GitHub Actions",
    ],
    links: [
      {
        href: "mailto:alexeygallegomartinez@gmail.com?subject=Business%20Time%20Expense%20Tracker%20walkthrough",
        label: {
          en: "Request architecture walkthrough",
          es: "Solicitar walkthrough de arquitectura",
        },
      },
    ],
    coverImage: "/tes.png",
    featured: true,
    timeline: {
      en: "June 2024 - April 2026 (internal production use)",
      es: "Junio 2024 - Abril 2026 (uso interno en produccion)",
    },
    title: {
      en: "Internal Operations Platform: Time, Expenses, Events, Approvals",
      es: "Plataforma Interna de Operaciones: Tiempo, Gastos, Eventos, Aprobaciones",
    },
    summary: {
      en: "Architected and delivered a company-wide operations platform from scratch, replacing spreadsheet workflows with automated timesheets, expenses, event scheduling, deadline tracking, and multi-level approval routing.",
      es: "Arquitecté y entregué desde cero una plataforma interna usada por toda la compañía, reemplazando flujos en spreadsheets con tiempos, gastos, eventos, deadlines y aprobaciones multi-nivel.",
    },
    body: {
      en: [
        {
          title: "Problem",
          paragraphs: [
            "Timesheet and expense workflows were manual, fragmented, and dependent on outdated tools, resulting in low visibility into submission status, approval progress, and reporting.",
            "The company needed one reliable platform for employees, managers, accounting, and administrators instead of separate spreadsheet-driven processes.",
            "The existing system had significant security gaps and had previously experienced a breach, highlighting the need for a more secure and controlled architecture.",
            "There was no reliable mechanism for reminding employees to complete submissions, leading to delays and administrative overhead. Event management functionality was limited and difficult to use",
            "Additionally, the system lacked mobile support and was restricted to legacy browser environments, preventing employees from submitting time and expenses efficiently, especially when uploading receipts or working remotely.",
          ],
        },
        {
          title: "Role and ownership",
          paragraphs: [
            "Individually architected, built, deployed, and operated the production system across frontend, backend, database, authentication, and infrastructure.",
            "Implemented core workflows for timesheets, expenses, events, deadline tracking, reporting, RBAC, and multi-level approval routing.",
          ],
        },
        {
          title: "Architecture and features",
          paragraphs: [
            "Frontend used React 18, Vite, React Router, Context API, and Tailwind. Backend used Node.js, Express, Sequelize, and MSSQL.",
            "Infrastructure was deployed on a Linux server using Docker containers, with Nginx as a reverse proxy and GitHub Actions runners enabling automated builds and updates.",
            "Security used JWT access and refresh cookies with session persistence, refresh rotation, and CSRF protection.",
            "Core functionality included secure authentication, timesheet and expense approval workflows, role-based access control (RBAC), event calendar management, deadline tracking, manager/admin reporting, and automated reminders.",
          ],
        },
        {
          title: "Challenges and solutions",
          paragraphs: [
            "Backend logic had become difficult to maintain due to tightly coupled controller code. Refactored toward a service-based structure (DTO/service/repository) to improve separation of concerns and scalability.",
            "Managing secure session lifecycles across login, refresh, and logout introduced complexity. Implemented persistent sessions, refresh token rotation, and idle/absolute timeouts to ensure both security and reliability.",
            "Frontend API handling was inconsistent and duplicated across components. Introduced a centralized API client to standardize request handling, authentication flows, and error management.",
          ],
        },
        {
          title: "Impact and delivery",
          paragraphs: [
            "Used daily by internal employees, managers, accounting, and admins, improving submission and approval efficiency while reducing manual follow-up work.",
            "Centralized reporting for both employees and accounting, and introduced in-app and email reminders to ensure timely completion of timesheets and expense submissions.",
            "Improved event management workflows, strengthened overall system security, and delivered a fully responsive interface enabling mobile access and receipt uploads, replacing a legacy, non-mobile-compatible system.",
          ],
        },
      ],
      es: [
        {
          title: "Problema",
          paragraphs: [
            "Los procesos de tiempos y gastos eran manuales, fragmentados y dependientes de herramientas antiguas, con poca visibilidad de envios, aprobaciones y reporteria.",
            "La compañía necesitaba una plataforma confiable para empleados, managers, contabilidad y administradores en lugar de procesos separados en spreadsheets.",
            "El sistema anterior tenia brechas de seguridad importantes y ya habia sufrido un incidente, lo que hizo necesario un diseno mas controlado.",
          ],
        },
        {
          title: "Rol y ownership",
          paragraphs: [
            "Arquitecté, construí, desplegué y operé el sistema de producción end-to-end: frontend, backend, base de datos, autenticación e infraestructura.",
            "Construí flujos de tiempos, gastos, eventos, deadlines, reportes, RBAC y aprobaciones multi-nivel.",
          ],
        },
        {
          title: "Arquitectura y funcionalidades",
          paragraphs: [
            "Frontend con React 18, Vite, React Router, Context API y Tailwind. Backend con Node.js, Express, Sequelize y MSSQL.",
            "Despliegue en Linux con Docker, Nginx como reverse proxy y runners de GitHub Actions para builds y actualizaciones automatizadas.",
            "Seguridad con JWT access/refresh en cookies, sesiones persistentes, rotacion de refresh y proteccion CSRF.",
            "Incluye autenticacion segura, aprobaciones de timesheet/gastos, RBAC, calendario de eventos, deadline tracking y reportes con recordatorios.",
          ],
        },
        {
          title: "Retos y soluciones",
          paragraphs: [
            "La logica pesada en controllers se movio hacia separacion DTO/service/repository.",
            "La complejidad del ciclo de sesion se resolvio con sesiones persistentes, rotacion de refresh y timeouts.",
            "La duplicacion de fetch/errores en frontend se reemplazo con un cliente API centralizado.",
          ],
        },
        {
          title: "Impacto y entrega",
          paragraphs: [
            "Uso interno diario por empleados, managers, contabilidad y administradores, con mejoras en eficiencia y menor trabajo manual de seguimiento.",
            "Centralizo reportes, agrego recordatorios por app/email y habilito una interfaz responsive para uso movil y carga de recibos.",
          ],
        },
      ],
    },
  },
  {
    slug: "cap-analyzer-uv-sealer",
    role: {
      en: "Python Developer",
      es: "Desarrollador Python full-stack (GUI, integracion de dispositivo y base de datos)",
    },
    stack: [
      "Python",
      "CustomTkinter + Tkinter",
      "Matplotlib + tkcalendar",
      "FaRoC_Writer (FANUC)",
      "MongoDB",
      "Threaded desktop runtime",
    ],
    links: [
      {
        href: "mailto:alexeygallegomartinez@gmail.com?subject=Cap%20Analyzer%20UV%20Sealer%20walkthrough",
        label: {
          en: "Request internal walkthrough",
          es: "Solicitar walkthrough interno",
        },
      },
    ],
    coverImage: "/uvcap.png",
    featured: true,
    timeline: {
      en: "May 2024 - March 2025 (internal operations tool)",
      es: "Mayo 2024 - Marzo 2025 (herramienta interna de operaciones)",
    },
    title: {
      en: "Cap Analyzer (UV Sealer)",
      es: "Cap Analyzer (Sellador UV)",
    },
    summary: {
      en: "Built a Python desktop operations tool that connects to the UV sealer robot, captures per-cap load-cell traces, runs pass/fail analysis, and stores searchable batch history.",
      es: "Construí una herramienta desktop en Python que se conecta al robot UV sealer, captura trazas por cap, ejecuta analisis pass/fail y guarda historial de lotes consultable.",
    },
    body: {
      en: [
        {
          title: "Problem",
          paragraphs: [
            "Cap quality checks needed faster and repeatable analysis, with immediate visibility into pass/fail state and trace curves.",
            "Historical batch lookup and debugging were difficult without centralized storage, and real-time collection/review needed one interface.",
          ],
        },
        {
          title: "Role and ownership",
          paragraphs: [
            "I owned full-stack Python implementation: CustomTkinter/Tkinter UI, robot communication via faroc, MongoDB persistence/search, and analysis logic.",
            "I built operator workflows, per-cap graphing, and trace normalization/interpolation pipelines.",
          ],
        },
        {
          title: "Architecture and features",
          paragraphs: [
            "Desktop frontend/UI with CustomTkinter, Tkinter, tkcalendar, and Matplotlib in a single-process Python app layer.",
            "MongoDB (uv_sealer database, batches collection) stores batch and cap traces; FANUC robot integration runs through FaRoC_Writer.",
            "Features include connect/disconnect with threaded collection, register write workflow (Crush/Pressure/Cure Time), live pass/fail list, and date-based batch drilldown.",
          ],
        },
        {
          title: "Challenges and solutions",
          paragraphs: [
            "Variable-length traces were normalized with interpolation for consistent comparison and visualization.",
            "Continuous robot polling was moved to a background thread to keep the UI responsive.",
            "Calendar-based historical lookup plus per-cap graph drilldown reduced investigation time.",
          ],
        },
        {
          title: "Impact and operations",
          paragraphs: [
            "Improved operator visibility into cap quality outcomes and enabled faster review of production data in one internal tool.",
            "Deployment is desktop Python for operators with local MongoDB and direct faroc robot communication.",
          ],
        },
      ],
      es: [
        {
          title: "Problema",
          paragraphs: [
            "La verificacion de calidad de caps necesitaba analisis mas rapido y repetible, con visibilidad inmediata de pass/fail y curvas.",
            "La busqueda historica y depuracion era dificil sin almacenamiento centralizado, y la recoleccion/revision en tiempo real debia estar en una sola interfaz.",
          ],
        },
        {
          title: "Rol y ownership",
          paragraphs: [
            "Fui owner de la implementacion Python full-stack: UI en CustomTkinter/Tkinter, comunicacion robot con faroc, persistencia/busqueda en MongoDB y logica de analisis.",
            "Construí flujos para operadores, graficas por cap y pipelines de interpolacion/normalizacion.",
          ],
        },
        {
          title: "Arquitectura y funcionalidades",
          paragraphs: [
            "UI desktop con CustomTkinter, Tkinter, tkcalendar y Matplotlib en una capa Python de proceso unico.",
            "MongoDB (uv_sealer, batches) para lotes y trazas; integracion FANUC via FaRoC_Writer.",
            "Incluye conectar/desconectar con hilo de lectura, escritura de parametros (Crush/Pressure/Cure Time), lista en vivo pass/fail y busqueda por fecha con drilldown.",
          ],
        },
        {
          title: "Retos y soluciones",
          paragraphs: [
            "Las trazas de longitud variable se resolvieron con interpolacion y normalizacion.",
            "El polling continuo del robot se movio a un hilo en background para mantener la UI responsiva.",
            "La busqueda historica por calendario y grafica por cap redujo tiempo de investigacion.",
          ],
        },
        {
          title: "Impacto y operaciones",
          paragraphs: [
            "Mejoro la visibilidad de resultados de calidad y acelero la revision de datos de produccion en una sola herramienta interna.",
            "Despliegue desktop en Python para operadores, MongoDB local y comunicacion directa con el robot por faroc.",
          ],
        },
      ],
    },
  },
  {
    slug: "industrial-automation-visualization-and-controls-platform",
    role: {
      en: "Full-Stack Engineer",
      es: "Ingeniero Full-Stack",
    },
    stack: [
      "React 19 + Vite + Tailwind CSS 4",
      "React Router 7 + Redux Toolkit",
      "Node.js + Express + Socket.IO",
      "st-ethernet-ip",
      "Rockwell PLC integration",
      "MongoDB + Fanuc adapters (planned)",
    ],
    links: [
      {
        href: "https://github.com/AlexeyGallegoMartinez/industrial-automation-tool",
        label: {
          en: "View GitHub repository",
          es: "Ver repositorio en GitHub",
        },
      },
    ],
    coverImage: "/industrial-automation-platform.png",
    featured: true,
    timeline: {
      en: "April 2026 - Present (work in progress)",
      es: "Abril 2026 - Presente (en progreso)",
    },
    title: {
      en: "Industrial Automation Visualization and Controls Platform",
      es: "Plataforma de Visualizacion y Control para Automatizacion Industrial",
    },
    summary: {
      en: "Work in progress full-stack platform for real-time PLC and robot visibility, Socket.IO dashboards, tag monitoring, and eventually validated server-mediated writeback.",
      es: "Proyecto en progreso de plataforma full-stack para visibilidad en tiempo real de PLCs y robots, dashboards con Socket.IO, monitoreo de tags y eventualmente writeback validado desde el servidor.",
    },
    body: {
      en: [
        {
          title: "Problem",
          paragraphs: [
            "Industrial teams often have useful machine data trapped behind vendor tooling, fragmented interfaces, or low-visibility troubleshooting workflows. That makes it harder to monitor process state, inspect signals, and build one coherent operator or engineering view.",
            "The goal of this project is to create a browser-based visualization layer for industrial systems without pretending the browser is a real-time controller. It should expose data clearly, route commands through the backend, and preserve the safety boundaries that industrial environments require.",
          ],
        },
        {
          title: "Current implementation",
          paragraphs: [
            "The repository already has a working split between a Node.js backend and a React frontend. On the frontend, React Router and Redux organize a dashboard route, websocket connection state, PLC state, watched tags, and UI settings.",
            "The current usable slice is a single-device Rockwell PLC workspace: connect to a controller, browse controller and program-scoped tags, subscribe to watched tags, inspect live values, and break integer values into bit-level views in real time.",
          ],
        },
        {
          title: "Architecture direction",
          paragraphs: [
            "The backend owns device communication, polling, socket event publishing, and eventual validation for write operations. The frontend is intentionally limited to routing, visualization, subscriptions, and user interaction.",
            "That separation matters. PLCs and robots should never be written to directly from browser code. All future control workflows need to be server-mediated, permissioned, validated, and logged.",
          ],
        },
        {
          title: "Technology decisions",
          paragraphs: [
            "Frontend uses React 19, Vite, Tailwind CSS, React Router, Redux Toolkit, and Socket.IO client. Backend uses Node.js, Express, Socket.IO, and `st-ethernet-ip` to communicate with Rockwell controllers.",
            "The long-term design leaves room for MongoDB-backed configuration and history, Fanuc adapters, alarm/event storage, operator controls, custom dashboards, and 3D visualization once the live data path is stable.",
          ],
        },
        {
          title: "Why this is a work in progress",
          paragraphs: [
            "This project is still in the buildout phase. The core realtime path for a single Rockwell PLC is the foundation, but the broader product vision includes multi-device support, historical trending, auth and role-based permissions, audit logging, and carefully bounded writeback.",
            "The value of the project is not only the UI. It is the system design discipline behind it: backend-owned control surfaces, explicit industrial non-goals, and an architecture that can grow from monitoring into safer operational tooling.",
          ],
        },
      ],
      es: [
        {
          title: "Problema",
          paragraphs: [
            "En automatizacion industrial, mucha data util queda atrapada detras de herramientas del vendor, interfaces fragmentadas o flujos de troubleshooting con poca visibilidad. Eso dificulta monitorear estado de proceso, inspeccionar senales y construir una vista coherente para operadores o ingenieria.",
            "El objetivo de este proyecto es crear una capa web de visualizacion para sistemas industriales sin pretender que el navegador sea un controlador en tiempo real. Debe exponer data con claridad, enrutar comandos por el backend y respetar los limites de seguridad requeridos en este tipo de entorno.",
          ],
        },
        {
          title: "Implementacion actual",
          paragraphs: [
            "El repositorio ya tiene una separacion funcional entre backend en Node.js y frontend en React. En frontend, React Router y Redux organizan una ruta de dashboard, estado de websocket, estado del PLC, watched tags y configuraciones de UI.",
            "El slice util actual es un workspace para un solo Rockwell PLC: conectarse al controlador, explorar tags de controller y de programas, suscribirse a watched tags, ver valores en vivo e inspeccionar bits de enteros en tiempo real.",
          ],
        },
        {
          title: "Direccion de arquitectura",
          paragraphs: [
            "El backend es owner de la comunicacion con dispositivos, polling, publicacion de eventos por socket y validacion futura para operaciones de escritura. El frontend se limita intencionalmente a routing, visualizacion, suscripciones e interaccion de usuario.",
            "Esa separacion importa. Los PLCs y robots no deben escribirse directamente desde el navegador. Todos los flujos de control futuros deben pasar por el servidor con permisos, validacion y logging.",
          ],
        },
        {
          title: "Decisiones tecnologicas",
          paragraphs: [
            "El frontend usa React 19, Vite, Tailwind CSS, React Router, Redux Toolkit y Socket.IO client. El backend usa Node.js, Express, Socket.IO y `st-ethernet-ip` para comunicarse con controladores Rockwell.",
            "El diseno de largo plazo deja espacio para configuracion e historial en MongoDB, adaptadores para Fanuc, almacenamiento de alarmas/eventos, controles de operador, dashboards personalizables y visualizacion 3D cuando el flujo realtime este estable.",
          ],
        },
        {
          title: "Por que esta como work in progress",
          paragraphs: [
            "Este proyecto sigue en fase de construccion. La ruta realtime base para un solo Rockwell PLC es el fundamento, pero la vision completa incluye soporte multi-dispositivo, tendencias historicas, auth con permisos por rol, audit logging y writeback cuidadosamente acotado.",
            "El valor del proyecto no es solo la UI. Tambien esta en la disciplina de arquitectura: superficies de control manejadas por backend, non-goals industriales explicitos y una base que puede crecer de monitoreo hacia tooling operativo mas seguro.",
          ],
        },
      ],
    },
  },
  {
    slug: "receipt-reader-ai-feasibility-mvp",
    role: {
      en: "AI Integration / Full-Stack Engineer",
      es: "Integracion de IA / Ingeniero Full-Stack",
    },
    stack: [
      "React 18 + Vite + Tailwind CSS",
      "Node.js + Express",
      "SQLite + local file uploads",
      "OpenAI API",
      "Provider-based AI scaffold",
      "Expense matching MVP",
    ],
    links: [
      {
        href: "https://github.com/AlexeyGallegoMartinez/receipt-reader",
        label: {
          en: "View GitHub repository",
          es: "Ver repositorio en GitHub",
        },
      },
    ],
    coverImage: "/receipt-reader-mvp.png",
    featured: true,
    timeline: {
      en: "2026 (feasibility MVP)",
      es: "2026 (MVP de factibilidad)",
    },
    title: {
      en: "ReceiptReader: AI receipt analysis feasibility MVP",
      es: "ReceiptReader: MVP de factibilidad para analisis de recibos con IA",
    },
    summary: {
      en: "Small MVP used to validate whether receipt images could be processed through the OpenAI API into structured data and then connected to an expense matching workflow for broader implementation later.",
      es: "MVP pequeno usado para validar si imagenes de recibos podian procesarse con la OpenAI API hacia datos estructurados y luego conectarse a un flujo de matching de gastos para una implementacion mas amplia despues.",
    },
    body: {
      en: [
        {
          title: "Problem",
          paragraphs: [
            "Before investing in a larger expense-processing system, I needed to verify a narrower question first: could receipt images be uploaded, parsed by an AI model, normalized into usable fields, and then attached to a practical expense workflow.",
            "This project existed to answer that feasibility question quickly instead of overbuilding architecture before proving that receipt extraction quality and workflow shape were viable.",
          ],
        },
        {
          title: "Current MVP scope",
          paragraphs: [
            "The app includes a React + Tailwind frontend and a Node.js + Express backend with SQLite and local file storage. The UI walks through upload, receipt analysis, analysis results, manual expense creation, and receipt-to-expense matching.",
            "That makes it more than a single API demo. It is a thin end-to-end workflow designed to test whether extracted receipt data could fit a real expense-entry flow instead of stopping at raw OCR output.",
          ],
        },
        {
          title: "OpenAI feasibility path",
          paragraphs: [
            "Although the spec defines a broader provider architecture, the practical implementation today uses the OpenAI path to analyze receipt files and return normalized JSON for vendor, date, items, subtotal, tax, and total.",
            "The important result was not just that an API call worked. It was that receipt images could move through upload, analysis, normalization, persistence, and downstream workflow steps in a way that was useful enough to justify further implementation.",
          ],
        },
        {
          title: "Architecture direction",
          paragraphs: [
            "The repository was structured around a provider-based AI layer so future comparison work could include Ollama and a Python/HuggingFace service. That let the MVP answer the OpenAI feasibility question without blocking future extensibility.",
            "Backend responsibilities include file handling, analysis orchestration, persistence, and matching logic. The frontend stays focused on the operator workflow and reviewing results.",
          ],
        },
        {
          title: "Outcome",
          paragraphs: [
            "This project served as a feasibility checkpoint for broader implementation rather than a finished production system. It reduced uncertainty around AI extraction quality, response normalization, and how receipt analysis could plug into an expense workflow.",
            "In practical terms, it gave a concrete yes-or-no answer on whether the OpenAI-based receipt reading path was worth building on.",
          ],
        },
      ],
      es: [
        {
          title: "Problema",
          paragraphs: [
            "Antes de invertir en un sistema mas grande de procesamiento de gastos, primero necesitaba validar una pregunta mas acotada: si imagenes de recibos podian subirse, analizarse con un modelo de IA, normalizarse a campos utiles y conectarse a un flujo real de gastos.",
            "Este proyecto existio para responder esa pregunta de factibilidad rapido, en lugar de sobredisenar arquitectura antes de probar que la extraccion y el workflow realmente servian.",
          ],
        },
        {
          title: "Scope actual del MVP",
          paragraphs: [
            "La app incluye un frontend en React + Tailwind y un backend en Node.js + Express con SQLite y almacenamiento local de archivos. La UI recorre upload, analisis de recibos, resultados, creacion manual de gastos y matching entre recibos y gastos.",
            "Eso la hace mas que una demo de API. Es un flujo end-to-end delgado para probar si la data extraida del recibo podia encajar en una experiencia real de expense entry en lugar de quedarse en OCR crudo.",
          ],
        },
        {
          title: "Ruta de factibilidad con OpenAI",
          paragraphs: [
            "Aunque el spec define una arquitectura mas amplia por providers, la implementacion practica hoy usa la ruta de OpenAI para analizar archivos de recibos y devolver JSON normalizado con vendor, date, items, subtotal, tax y total.",
            "El resultado importante no fue solo que una llamada a API funcionara. Fue comprobar que los recibos podian pasar por upload, analisis, normalizacion, persistencia y pasos posteriores de workflow de una forma suficientemente util como para justificar mas implementacion.",
          ],
        },
        {
          title: "Direccion de arquitectura",
          paragraphs: [
            "El repositorio fue estructurado alrededor de una capa de IA por providers para que trabajo futuro pudiera comparar OpenAI con Ollama y un servicio Python/HuggingFace. Eso permitio responder la pregunta de factibilidad con OpenAI sin bloquear extensibilidad futura.",
            "El backend se encarga del manejo de archivos, orquestacion de analisis, persistencia y logica de matching. El frontend se mantiene enfocado en el workflow y la revision de resultados.",
          ],
        },
        {
          title: "Resultado",
          paragraphs: [
            "Este proyecto funciono como checkpoint de factibilidad para una implementacion mas amplia, no como sistema de produccion terminado. Redujo incertidumbre sobre calidad de extraccion con IA, normalizacion de respuestas y como conectar el analisis de recibos a un flujo de gastos.",
            "En terminos practicos, dio una respuesta concreta de si la ruta de lectura de recibos basada en OpenAI valia la pena para seguir construyendo.",
          ],
        },
      ],
    },
  },
];
function localizeEntry(entry, lng) {
  return {
    ...entry,
    title: entry.title[lng] ?? entry.title[fallbackLng],
    summary: entry.summary[lng] ?? entry.summary[fallbackLng],
    body: entry.body[lng] ?? entry.body[fallbackLng],
    category: entry.category
      ? (entry.category[lng] ?? entry.category[fallbackLng])
      : undefined,
    tags: entry.tags ? (entry.tags[lng] ?? entry.tags[fallbackLng]) : undefined,
    role: entry.role ? (entry.role[lng] ?? entry.role[fallbackLng]) : undefined,
    timeline: entry.timeline
      ? (entry.timeline[lng] ?? entry.timeline[fallbackLng])
      : undefined,
    links: entry.links?.map((link) => ({
      ...link,
      label: link.label[lng] ?? link.label[fallbackLng],
    })),
  };
}

export function getProjects(lng) {
  return projectEntries.map((entry) => localizeEntry(entry, lng));
}

export function getFeaturedProjects(lng, limit = 2) {
  return getProjects(lng)
    .filter((entry) => entry.featured)
    .sort((a, b) => {
      if (a.slug === "receipt-reader-ai-feasibility-mvp") {
        return -1;
      }

      if (b.slug === "receipt-reader-ai-feasibility-mvp") {
        return 1;
      }

      return 0;
    })
    .slice(0, limit);
}

export function getProjectBySlug(slug, lng) {
  const project = projectEntries.find((entry) => entry.slug === slug);
  return project ? localizeEntry(project, lng) : null;
}

export function getProjectSlugs() {
  return projectEntries.map((entry) => ({ slug: entry.slug }));
}
