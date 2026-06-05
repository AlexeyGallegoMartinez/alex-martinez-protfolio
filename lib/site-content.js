import { fallbackLng } from "@/app/i18n/settings";


const projectEntries = [
  {
    slug: "enterprise-erp-system",
    role: {
      en: "Technical Lead / Full-Stack Engineer",
      es: "Lider tecnico / Ingeniero Full-Stack",
    },
    stack: [
      "ASP.NET Core",
      "Angular",
      ".NET",
      "TypeScript",
      "SQL Server",
      "Role-based access",
      "Modular ERP domains",
    ],
    links: [
      {
        href: "mailto:alexeygallegomartinez@gmail.com?subject=Enterprise%20ERP%20System%20walkthrough",
        label: {
          en: "Request ERP walkthrough",
          es: "Solicitar walkthrough del ERP",
        },
      },
    ],
    coverImage: "/images/projects/erp.png",
    featured: true,
    timeline: {
      en: "2025 - Present (enterprise ERP build)",
      es: "2025 - Presente (ERP empresarial en desarrollo)",
    },
    title: {
      en: "Enterprise ERP System",
      es: "Sistema ERP Empresarial",
    },
    summary: {
      en: "Leading the architecture and delivery of a role-based ERP system that brings employee work, service logs, time cards, expenses, calendars, purchasing, receiving, inventory, engineering, manager, administrator, and developer consoles into one operational platform.",
      es: "Lidero la arquitectura y entrega de un ERP con acceso por roles que unifica trabajo de empleados, service logs, time cards, gastos, calendario, compras, receiving, inventario, ingenieria, managers, administradores y consola de desarrollo en una sola plataforma operativa.",
    },
    body: {
      en: [
        {
          title: "Problem",
          paragraphs: [
            "The business needed a unified ERP surface instead of scattered operational tools for employee work, service logs, time cards, expenses, purchasing, receiving, inventory, engineering, and management workflows.",
            "Different roles needed different home consoles, but the system also needed one consistent navigation model, shared visual language, and reusable workflow foundation.",
          ],
        },
        {
          title: "Role and ownership",
          paragraphs: [
            "I am leading a small engineering team while owning major architecture decisions across the frontend, backend, domain structure, navigation model, and user workflow design.",
            "My work includes translating business process needs into modular application areas, setting implementation patterns, reviewing code, mentoring teammates, and keeping the build aligned with practical operational use.",
          ],
        },
        {
          title: "Architecture and features",
          paragraphs: [
            "The ERP is built around role-aware consoles for employee, manager, administrator, developer, purchaser, inventory manager, engineer, and receiving workflows.",
            "Visible modules include service logs, time cards, expense reports, calendar, travel, jobs, organizations, requisitions, purchase orders, goods received, contacts, parts, assembly, and support.",
            "The interface uses a dark operational dashboard pattern with persistent navigation, account switching, role destinations, and work-item cards designed for repeated daily use.",
          ],
        },
        {
          title: "Leadership and delivery",
          paragraphs: [
            "The project combines hands-on full-stack engineering with technical leadership: defining how modules should be composed, how shared UI patterns should behave, and how the team should move without turning every feature into a one-off screen.",
            "I am keeping the implementation focused on business workflow clarity first, then expanding the system domain by domain as requirements become concrete.",
          ],
        },
        {
          title: "Current value",
          paragraphs: [
            "The current build establishes the operating shell for a broad ERP: role-based entry points, workflow-specific navigation, employee work surfaces, and the foundation for approvals, reporting, purchasing, inventory, and receiving flows.",
            "The value is in bringing daily operational work into a single system that can grow with the business instead of leaving each department to operate from disconnected tools.",
          ],
        },
      ],
      es: [
        {
          title: "Problema",
          paragraphs: [
            "El negocio necesitaba una superficie ERP unificada en lugar de herramientas operativas separadas para trabajo de empleados, service logs, time cards, gastos, compras, receiving, inventario, ingenieria y flujos de management.",
            "Cada rol necesitaba una consola distinta, pero el sistema tambien necesitaba una navegacion consistente, lenguaje visual compartido y una base reutilizable para workflows.",
          ],
        },
        {
          title: "Rol y ownership",
          paragraphs: [
            "Lidero un equipo pequeno de ingenieria mientras tomo decisiones clave de arquitectura en frontend, backend, estructura de dominios, navegacion y diseno de workflows.",
            "Mi trabajo incluye convertir necesidades de proceso en modulos de aplicacion, definir patrones de implementacion, revisar codigo, mentorear al equipo y mantener el build alineado con uso operativo real.",
          ],
        },
        {
          title: "Arquitectura y funcionalidades",
          paragraphs: [
            "El ERP esta construido alrededor de consolas por rol para empleados, managers, administradores, developers, purchasers, inventory managers, engineers y receiving.",
            "Los modulos visibles incluyen service logs, time cards, expense reports, calendar, travel, jobs, organizations, requisitions, purchase orders, goods received, contacts, parts, assembly y support.",
            "La interfaz usa un patron de dashboard operativo oscuro con navegacion persistente, cambio de cuenta, destinos por rol y tarjetas de trabajo pensadas para uso diario repetido.",
          ],
        },
        {
          title: "Liderazgo y entrega",
          paragraphs: [
            "El proyecto combina engineering full-stack hands-on con liderazgo tecnico: definir como componer modulos, como deben comportarse patrones UI compartidos y como avanzar sin convertir cada feature en una pantalla aislada.",
            "Mantengo la implementacion enfocada primero en claridad de workflow de negocio, luego expandiendo el sistema dominio por dominio cuando los requisitos se vuelven concretos.",
          ],
        },
        {
          title: "Valor actual",
          paragraphs: [
            "El build actual establece el shell operativo para un ERP amplio: entradas por rol, navegacion por workflow, superficies de trabajo para empleados y la base para aprobaciones, reportes, compras, inventario y receiving.",
            "El valor esta en llevar el trabajo operativo diario a un solo sistema que puede crecer con el negocio en lugar de dejar a cada departamento operar con herramientas desconectadas.",
          ],
        },
      ],
    },
  },
  {
    slug: "timesheet-and-expense-platform",
    role: {
      en: "Systems Builder / Full-Stack Engineer",
      es: "Systems Builder / Ingeniero Full-Stack",
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
    coverImage: "/images/projects/tes.png",
    featured: true,
    timeline: {
      en: "June 2024 - Present (internal production use)",
      es: "Junio 2024 - Presente (uso interno en produccion)",
    },
    title: {
      en: "Internal Operations Platform: Time, Expenses, Events, Approvals",
      es: "Plataforma Interna de Operaciones: Tiempo, Gastos, Eventos, Aprobaciones",
    },
    summary: {
      en: "Architected and delivered a company-wide operations platform from scratch, replacing spreadsheet workflows with automated timesheets, expenses, event scheduling, deadline tracking, and multi-level approval routing while improving timesheet compliance from about 70% to 95% and expense compliance from about 50% to 90%.",
      es: "Arquitecté y entregué desde cero una plataforma interna usada por toda la compañía, reemplazando flujos en spreadsheets con tiempos, gastos, eventos, deadlines y aprobaciones multi-nivel mientras mejoraba el cumplimiento de timesheets de aproximadamente 70% a 95% y el de gastos de aproximadamente 50% a 90%.",
    },
    body: {
      en: [
        {
          title: "Problem",
          paragraphs: [
            "Timesheet and expense workflows were manual, fragmented, and dependent on outdated tools, resulting in low visibility into submission status, approval progress, and reporting.",
            "The company needed one reliable platform for employees, managers, accounting, and administrators instead of separate spreadsheet-driven processes.",
            "The existing system had legacy security gaps and outdated authentication patterns, highlighting the need for a more secure and controlled architecture.",
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
            "Increased timesheet compliance from approximately 70% to 95% and expense submission compliance from approximately 50% to 90% through redesigned workflows, automated reminders, and manager/admin visibility.",
            "Centralized reporting for both employees and accounting, and introduced in-app and email reminders to ensure timely completion of timesheets and expense submissions.",
            "Maintained 99%+ uptime across internal production use while improving event management workflows, strengthening overall system security, and delivering a fully responsive interface for mobile access and receipt uploads.",
          ],
        },
      ],
      es: [
        {
          title: "Problema",
          paragraphs: [
            "Los procesos de tiempos y gastos eran manuales, fragmentados y dependientes de herramientas antiguas, con poca visibilidad de envios, aprobaciones y reporteria.",
            "La compañía necesitaba una plataforma confiable para empleados, managers, contabilidad y administradores en lugar de procesos separados en spreadsheets.",
            "El sistema anterior tenia brechas de seguridad legacy y patrones de autenticacion antiguos, lo que hizo necesario un diseno mas seguro y controlado.",
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
            "Aumento el cumplimiento de timesheets de aproximadamente 70% a 95% y el de gastos de aproximadamente 50% a 90% mediante workflows redisenados, recordatorios automatizados y mejor visibilidad para managers/admins.",
            "Mantuvo 99%+ uptime en uso interno de produccion mientras centralizo reportes, agrego recordatorios por app/email y habilito una interfaz responsive para uso movil y carga de recibos.",
          ],
        },
      ],
    },
  },
  {
    slug: "bridge-mobile-app",
    role: {
      en: "Mobile / Full-Stack Product Builder",
      es: "Product Builder Mobile / Full-Stack",
    },
    stack: [
      "Expo SDK 54",
      "React Native 0.81",
      "React 19",
      "Expo Router",
      "AsyncStorage JWT sessions",
      "react-native-maps + expo-location",
      "Node.js + Express 5",
      "Sequelize + MSSQL",
      "Google Places API",
    ],
    links: [
      {
        href: "mailto:alexeygallegomartinez@gmail.com?subject=Bridge%20mobile%20app%20walkthrough",
        label: {
          en: "Request private walkthrough",
          es: "Solicitar walkthrough privado",
        },
      },
    ],
    coverImage: "/images/projects/bridge.png",
    featured: true,
    timeline: {
      en: "2026 (mobile MVP)",
      es: "2026 (MVP mobile)",
    },
    title: {
      en: "Bridge: React Native social and services discovery app",
      es: "Bridge: App React Native social y busqueda de servicios",
    },
    summary: {
      en: "Built a mobile-first Expo/React Native MVP that combines an authenticated social feed with map-based discovery for autism-related services, backed by a Node/Express API, MSSQL data model, JWT auth, and Google Places search.",
      es: "Construi un MVP mobile-first con Expo/React Native que combina feed social autenticado con busqueda de servicios relacionados al autismo en mapa, respaldado por API Node/Express, modelo MSSQL, auth JWT y Google Places.",
    },
    body: {
      en: [
        {
          title: "Problem",
          paragraphs: [
            "Bridge explores a focused product need: a mobile experience where families and caregivers can share updates while also finding nearby autism-related services without jumping between disconnected apps.",
            "The goal was not just to build a feed or a map. It was to validate whether social interaction, service discovery, account flows, and location search could live in one coherent mobile product shape.",
          ],
        },
        {
          title: "Role and ownership",
          paragraphs: [
            "I built across the React Native client and backend API: authentication, route gating, feed screens, post creation, likes, comments, owner edit/delete flows, service search, map cards, and backend data contracts.",
            "I also documented the product spec and known gaps so the MVP could be evaluated honestly before more production hardening work.",
          ],
        },
        {
          title: "Mobile architecture",
          paragraphs: [
            "The mobile app uses Expo Router with protected route redirects, a tabbed app shell, AsyncStorage-backed JWT sessions, and a centralized API helper for authenticated requests and normalized error handling.",
            "The main screens include Home for posts, Services for location and place search, Notifications as a mocked product surface, and Settings for profile, password update, toggles, help/contact, and sign out.",
          ],
        },
        {
          title: "Backend and integrations",
          paragraphs: [
            "The API uses Express 5, Sequelize, MSSQL, JWT, and bcrypt. Core models cover users, posts, comments, and post likes, including owner-only edit/delete behavior and like/comment counters.",
            "Service discovery uses Google Places text and nearby search with optional location bias, radius, provider keywords, and details enrichment for phone numbers and websites.",
          ],
        },
        {
          title: "Current state and next hardening",
          paragraphs: [
            "The project is a private MVP rather than a polished public app. The strongest slices are auth, feed, create/detail/edit/delete post workflows, comments, like toggling, map search, and backend contracts.",
            "The next production steps are to replace mocked notifications, persist settings preferences, add tests and migration discipline, require a real JWT secret in every environment, tighten public comment access, and optimize Google Places detail calls for quota control.",
          ],
        },
      ],
      es: [
        {
          title: "Problema",
          paragraphs: [
            "Bridge explora una necesidad de producto concreta: una experiencia mobile donde familias y cuidadores puedan compartir updates y tambien encontrar servicios cercanos relacionados al autismo sin saltar entre apps desconectadas.",
            "La meta no era solo construir un feed o un mapa. Era validar si interaccion social, busqueda de servicios, account flows y location search podian vivir en una sola forma coherente de producto mobile.",
          ],
        },
        {
          title: "Rol y ownership",
          paragraphs: [
            "Construi tanto el cliente React Native como el backend API: autenticacion, proteccion de rutas, feed, creacion de posts, likes, comments, edit/delete por owner, busqueda de servicios, cards de mapa y contratos backend.",
            "Tambien documente el spec del producto y los gaps conocidos para evaluar el MVP honestamente antes de endurecerlo para produccion.",
          ],
        },
        {
          title: "Arquitectura mobile",
          paragraphs: [
            "La app usa Expo Router con redirects para rutas protegidas, shell con tabs, sesiones JWT en AsyncStorage y un helper API centralizado para requests autenticados y manejo consistente de errores.",
            "Las pantallas principales incluyen Home para posts, Services para busqueda por ubicacion/lugar, Notifications como superficie mockeada, y Settings para perfil, cambio de password, toggles, help/contact y sign out.",
          ],
        },
        {
          title: "Backend e integraciones",
          paragraphs: [
            "La API usa Express 5, Sequelize, MSSQL, JWT y bcrypt. Los modelos principales cubren users, posts, comments y post likes, incluyendo edit/delete solo por owner y contadores de likes/comments.",
            "La busqueda de servicios usa Google Places text y nearby search con bias de ubicacion opcional, radio, keywords de providers y enriquecimiento de detalles para telefonos y websites.",
          ],
        },
        {
          title: "Estado actual y siguiente hardening",
          paragraphs: [
            "El proyecto es un MVP privado, no una app publica pulida. Los slices mas fuertes son auth, feed, create/detail/edit/delete de posts, comments, like toggling, map search y contratos backend.",
            "Los proximos pasos de produccion son reemplazar notifications mockeadas, persistir preferencias de settings, agregar tests y migraciones, requerir un JWT secret real en cada ambiente, endurecer acceso publico a comments y optimizar llamadas de Google Places details por control de quota.",
          ],
        },
      ],
    },
  },
  {
    slug: "robotic-sealing-skiving-tool",
    role: {
      en: "Product Development Engineer / Robotics Systems Builder",
      es: "Ingeniero de Desarrollo de Producto / Builder de Sistemas Roboticos",
    },
    stack: [
      "FANUC robot programming",
      "Robotic sealing",
      "Skiving process development",
      "Mechanical tooling",
      "Pneumatic systems",
      "Sensor-driven validation",
      "Operator demos",
      "Plant deployment support",
    ],
    links: [
      {
        href: "mailto:alexeygallegomartinez@gmail.com?subject=Robotic%20sealing%20case%20study%20walkthrough",
        label: {
          en: "Request confidential walkthrough",
          es: "Solicitar walkthrough confidencial",
        },
      },
    ],
    coverImage: "/images/projects/skive.png",
    featured: true,
    timeline: {
      en: "Encore product development and plant deployment period",
      es: "Periodo de desarrollo de producto y despliegue en planta en Encore",
    },
    title: {
      en: "Robotic Sealing and Skiving Tool",
      es: "Herramienta Robotica de Sellado y Skiving",
    },
    summary: {
      en: "Designed and helped deploy a patent-pending robotic sealing/skiving solution for automotive manufacturing, combining tooling, FANUC robot behavior, process validation, and stakeholder demos while reducing sealing cycle time by about 50%.",
      es: "Disene y ayude a desplegar una solucion robotica patent-pending de sellado/skiving para manufactura automotriz, combinando tooling, comportamiento FANUC, validacion de proceso y demos a stakeholders mientras reducia el cycle time de sellado en aproximadamente 50%.",
    },
    body: {
      en: [
        {
          title: "Problem",
          paragraphs: [
            "The manufacturing process needed a faster and more repeatable way to perform sealing and skiving work without sacrificing quality, operator confidence, or deployment practicality.",
            "The challenge sat across mechanical design, robot motion, process physics, and plant acceptance. A useful solution had to work as equipment, not just as a prototype.",
          ],
        },
        {
          title: "Role and ownership",
          paragraphs: [
            "I worked on the product development side of the solution: tooling concepts, robot behavior, process validation, demo preparation, stakeholder communication, and practical deployment support.",
            "The work required translating a messy manufacturing problem into a repeatable system that operators, engineers, managers, and customers could understand and trust.",
          ],
        },
        {
          title: "Engineering approach",
          paragraphs: [
            "The solution combined mechanical tooling, controlled robotic movement, pneumatic/mechanical process behavior, and validation cycles to prove that the sealing/skiving process could run faster and more consistently.",
            "I treated the tool as a full system: robot path, end effector behavior, process contact, quality checks, operator handoff, and plant constraints all had to fit together.",
          ],
        },
        {
          title: "Deployment and stakeholder work",
          paragraphs: [
            "I supported customer-facing demos, plant installation work, operator communication, and engineering iteration while keeping confidential customer, plant, and economics details out of public materials.",
            "That experience shaped how I build software now: a system is only successful when it survives real users, real environments, and real operational pressure.",
          ],
        },
        {
          title: "Impact",
          paragraphs: [
            "The solution reduced sealing cycle time by about 50% and was deployed across multiple plants in the U.S. and Canada.",
            "The strongest proof point is not just the metric. It is the combination of invention, validation, deployment, and cross-functional communication required to move a physical automation product into production use.",
          ],
        },
      ],
      es: [
        {
          title: "Problema",
          paragraphs: [
            "El proceso de manufactura necesitaba una forma mas rapida y repetible de realizar sellado y skiving sin sacrificar calidad, confianza del operador o viabilidad de despliegue.",
            "El reto cruzaba diseno mecanico, movimiento robotico, fisica del proceso y aceptacion en planta. Una solucion util tenia que funcionar como equipo real, no solo como prototipo.",
          ],
        },
        {
          title: "Rol y ownership",
          paragraphs: [
            "Trabaje en el lado de desarrollo de producto de la solucion: conceptos de tooling, comportamiento del robot, validacion de proceso, preparacion de demos, comunicacion con stakeholders y soporte practico de despliegue.",
            "El trabajo requirio convertir un problema de manufactura complejo en un sistema repetible que operadores, ingenieros, managers y clientes pudieran entender y confiar.",
          ],
        },
        {
          title: "Enfoque de ingenieria",
          paragraphs: [
            "La solucion combino tooling mecanico, movimiento robotico controlado, comportamiento pneumatico/mecanico del proceso y ciclos de validacion para probar que el sellado/skiving podia correr mas rapido y de forma mas consistente.",
            "Trate la herramienta como un sistema completo: path del robot, comportamiento del end effector, contacto de proceso, checks de calidad, handoff al operador y restricciones de planta tenian que encajar.",
          ],
        },
        {
          title: "Despliegue y stakeholders",
          paragraphs: [
            "Apoye demos a clientes, trabajo de instalacion en planta, comunicacion con operadores e iteracion de ingenieria, manteniendo fuera de materiales publicos detalles confidenciales de clientes, plantas y economics.",
            "Esa experiencia define como construyo software ahora: un sistema solo es exitoso cuando aguanta usuarios reales, ambientes reales y presion operativa real.",
          ],
        },
        {
          title: "Impacto",
          paragraphs: [
            "La solucion redujo el cycle time de sellado en aproximadamente 50% y fue desplegada en multiples plantas en Estados Unidos y Canada.",
            "El punto mas fuerte no es solo la metrica. Es la combinacion de invencion, validacion, despliegue y comunicacion cross-functional necesaria para llevar un producto fisico de automatizacion a uso productivo.",
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
    coverImage: "/images/projects/uvcap.png",
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
      en: "Built a Python desktop operations tool that connects to the UV sealer robot, captures per-cap load-cell traces, runs pass/fail analysis, stores searchable batch history, and helped improve process reliability from about 80% to 99%.",
      es: "Construí una herramienta desktop en Python que se conecta al robot UV sealer, captura trazas por cap, ejecuta analisis pass/fail, guarda historial de lotes consultable y ayudo a mejorar la confiabilidad del proceso de aproximadamente 80% a 99%.",
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
            "Improved process reliability from approximately 80% to 99% by giving operators and engineers clearer visibility into cap quality outcomes and production data.",
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
            "Mejoro la confiabilidad del proceso de aproximadamente 80% a 99% al darles a operadores e ingenieros mejor visibilidad de resultados de calidad y datos de produccion.",
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
    coverImage: "/images/projects/industrial-automation-platform.png",
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
    slug: "encore-website-rebuild",
    role: {
      en: "Next.js Developer / Product Marketing Systems",
      es: "Desarrollador Next.js / Sistemas de Product Marketing",
    },
    stack: [
      "Next.js",
      "React",
      "Responsive UI",
      "SEO metadata",
      "Product storytelling",
      "Contact workflows",
      "Video editing",
      "Business development support",
    ],
    links: [
      {
        href: "mailto:alexeygallegomartinez@gmail.com?subject=Website%20rebuild%20case%20study%20walkthrough",
        label: {
          en: "Request website rebuild walkthrough",
          es: "Solicitar walkthrough del website rebuild",
        },
      },
    ],
    coverImage: "/images/projects/encore-website.png",
    featured: false,
    timeline: {
      en: "Company website modernization",
      es: "Modernizacion de website corporativo",
    },
    title: {
      en: "Encore Website Rebuild",
      es: "Rebuild del Website de Encore",
    },
    summary: {
      en: "Rebuilt a company web presence around clearer product visibility, mobile usability, SEO, contact conversion, and media assets, connecting engineering execution with business development and product storytelling.",
      es: "Reconstrui una presencia web corporativa enfocada en visibilidad de productos, usabilidad mobile, SEO, conversion de contacto y assets de media, conectando ejecucion tecnica con business development y narrativa de producto.",
    },
    body: {
      en: [
        {
          title: "Problem",
          paragraphs: [
            "The company needed a web presence that did more than exist online. It had to explain industrial automation products clearly, work well on mobile, support search visibility, and make it easier for potential customers to initiate conversations.",
            "For a technical business, the site also needed a practical product storytelling layer: enough context for business development without exposing sensitive customer or plant details.",
          ],
        },
        {
          title: "Role and ownership",
          paragraphs: [
            "I worked across implementation, content structure, product presentation, SEO details, contact flow, and supporting media work.",
            "That made the project less like a standalone marketing page and more like a small business system: technical information, credibility signals, media, and lead capture had to line up.",
          ],
        },
        {
          title: "Execution",
          paragraphs: [
            "The rebuild focused on responsive layouts, clearer navigation, stronger product sections, search-friendly metadata, and practical calls to action.",
            "I also supported the media side by editing product/video assets so the site could show real industrial work instead of relying only on generic copy.",
          ],
        },
        {
          title: "Business value",
          paragraphs: [
            "The outcome was a cleaner digital front door for a technical automation company: easier to scan, easier to share, and better aligned with product conversations.",
            "This matters for the portfolio because it shows I can connect software execution with sales enablement, product positioning, and operational business needs.",
          ],
        },
      ],
      es: [
        {
          title: "Problema",
          paragraphs: [
            "La compania necesitaba una presencia web que hiciera mas que existir online. Tenia que explicar productos de automatizacion industrial con claridad, funcionar bien en mobile, apoyar SEO y facilitar que clientes potenciales iniciaran conversaciones.",
            "Para un negocio tecnico, el sitio tambien necesitaba una capa practica de product storytelling: suficiente contexto para business development sin exponer detalles sensibles de clientes o plantas.",
          ],
        },
        {
          title: "Rol y ownership",
          paragraphs: [
            "Trabaje en implementacion, estructura de contenido, presentacion de producto, detalles SEO, flujo de contacto y soporte de media.",
            "Eso hizo que el proyecto fuera menos una landing page aislada y mas un pequeno sistema de negocio: informacion tecnica, senales de credibilidad, media y lead capture tenian que alinearse.",
          ],
        },
        {
          title: "Ejecucion",
          paragraphs: [
            "El rebuild se enfoco en layouts responsive, navegacion mas clara, secciones de producto mas fuertes, metadata para search y llamadas a accion practicas.",
            "Tambien apoye el lado de media editando assets de producto/video para que el sitio pudiera mostrar trabajo industrial real en lugar de depender solo de copy generico.",
          ],
        },
        {
          title: "Valor de negocio",
          paragraphs: [
            "El resultado fue una puerta digital mas clara para una compania tecnica de automatizacion: mas facil de escanear, compartir y alinear con conversaciones de producto.",
            "Esto importa para el portfolio porque demuestra que puedo conectar ejecucion de software con sales enablement, posicionamiento de producto y necesidades operativas del negocio.",
          ],
        },
      ],
    },
  },
  {
    slug: "controls-tracker-consulting",
    role: {
      en: "Systems Architecture Consultant",
      es: "Consultor de Arquitectura de Sistemas",
    },
    stack: [
      "Workflow modeling",
      "Controls engineering process design",
      "Project tracking architecture",
      "Requirements mapping",
      "Data model planning",
      "Technical mentorship",
      "Implementation roadmap",
    ],
    links: [
      {
        href: "mailto:alexeygallegomartinez@gmail.com?subject=Controls%20tracker%20architecture%20walkthrough",
        label: {
          en: "Request architecture walkthrough",
          es: "Solicitar walkthrough de arquitectura",
        },
      },
    ],
    coverImage: "/images/projects/controls-tracker.png",
    featured: false,
    timeline: {
      en: "Controls engineering architecture consulting",
      es: "Consultoria de arquitectura para controls engineering",
    },
    title: {
      en: "Controls Tracker Consulting",
      es: "Consultoria para Controls Tracker",
    },
    summary: {
      en: "Helped shape the architecture direction for a controls-engineering project tracker, translating execution pain points into workflow structure, data model needs, permissions, and a practical implementation roadmap.",
      es: "Ayude a definir la direccion de arquitectura para un tracker de proyectos de controls engineering, traduciendo dolores de ejecucion en estructura de workflow, necesidades de data model, permisos y un roadmap practico de implementacion.",
    },
    body: {
      en: [
        {
          title: "Problem",
          paragraphs: [
            "Controls engineering work often spreads across emails, spreadsheets, informal status updates, and disconnected project notes. That makes ownership, blockers, milestones, and engineering readiness harder to see.",
            "The goal was to think through how a tracker could give controls teams a cleaner operating surface without adding unnecessary administrative burden.",
          ],
        },
        {
          title: "Role and ownership",
          paragraphs: [
            "I contributed systems architecture guidance: clarifying user workflows, identifying core entities, shaping permissions, and mapping how controls engineers and managers would actually use the system.",
            "The work was intentionally practical. A tracker only helps if it matches how project execution really happens.",
          ],
        },
        {
          title: "Architecture direction",
          paragraphs: [
            "The recommended direction centered on projects, milestones, tasks, blockers, ownership, engineering status, notes, and reporting views that could support day-to-day execution and management review.",
            "I emphasized a phased roadmap: start with visibility and accountability, then add richer reporting and automation after the team has real usage data.",
          ],
        },
        {
          title: "Value",
          paragraphs: [
            "This project shows the consulting side of my systems-builder work: understanding a business process, separating the real operating problem from feature requests, and shaping a system that a team can actually adopt.",
            "It also connects directly to the ERP and operations-platform work: role-aware tools, clear workflows, and software that makes work easier to run.",
          ],
        },
      ],
      es: [
        {
          title: "Problema",
          paragraphs: [
            "El trabajo de controls engineering muchas veces queda repartido entre emails, spreadsheets, updates informales y notas de proyecto desconectadas. Eso dificulta ver ownership, blockers, milestones y readiness de ingenieria.",
            "La meta era pensar como un tracker podia darle al equipo una superficie operativa mas clara sin agregar carga administrativa innecesaria.",
          ],
        },
        {
          title: "Rol y ownership",
          paragraphs: [
            "Aporte guia de arquitectura de sistemas: clarificar workflows de usuarios, identificar entidades principales, dar forma a permisos y mapear como controls engineers y managers usarian el sistema en la practica.",
            "El trabajo fue intencionalmente practico. Un tracker solo ayuda si encaja con como realmente ocurre la ejecucion de proyectos.",
          ],
        },
        {
          title: "Direccion de arquitectura",
          paragraphs: [
            "La direccion recomendada se centro en proyectos, milestones, tareas, blockers, ownership, estado de engineering, notas y vistas de reporting para apoyar ejecucion diaria y revision de management.",
            "Enfatice un roadmap por fases: empezar con visibilidad y accountability, luego agregar reporting mas rico y automatizacion despues de tener data real de uso.",
          ],
        },
        {
          title: "Valor",
          paragraphs: [
            "Este proyecto muestra el lado consultivo de mi trabajo como systems builder: entender un proceso de negocio, separar el problema operativo real de requests de features y dar forma a un sistema que un equipo pueda adoptar.",
            "Tambien conecta directamente con el ERP y la plataforma de operaciones: herramientas por rol, workflows claros y software que hace el trabajo mas facil de operar.",
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
    coverImage: "/images/projects/receipt-reader-mvp.png",
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
      en: "Small MVP used to validate whether receipt images could be processed through the OpenAI API into structured data and then connected to an expense matching workflow for broader implementation that reduced receipt review from about one business day to 1-2 hours.",
      es: "MVP pequeno usado para validar si imagenes de recibos podian procesarse con la OpenAI API hacia datos estructurados y luego conectarse a un flujo de matching de gastos para una implementacion mas amplia que redujo la revision de recibos de aproximadamente un dia laboral a 1-2 horas.",
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
          title: "Workflow and review model",
          paragraphs: [
            "The system was intentionally designed around human verification instead of fully automated approval. AI extraction speeds up the first pass, but users still need clear fields, visible totals, and a way to match extracted receipt data to an expense entry before it becomes trusted business data.",
            "That review model is the practical bridge between an impressive AI demo and a workflow a finance or operations team could actually use.",
          ],
        },
        {
          title: "Outcome",
          paragraphs: [
            "This project served as a feasibility checkpoint for broader implementation rather than a finished production system. It reduced uncertainty around AI extraction quality, response normalization, and how receipt analysis could plug into an expense workflow.",
            "In practical terms, it gave a concrete yes-or-no answer on whether the OpenAI-based receipt reading path was worth building on. The broader implementation direction reduced receipt review from about one business day to 1-2 hours when paired with human verification.",
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
          title: "Workflow y modelo de revision",
          paragraphs: [
            "El sistema fue disenado intencionalmente alrededor de verificacion humana en lugar de aprobacion completamente automatica. La extraccion con IA acelera el primer pase, pero los usuarios todavia necesitan campos claros, totales visibles y una forma de conectar la data del recibo con una entrada de gasto antes de convertirla en data confiable de negocio.",
            "Ese modelo de revision es el puente practico entre una demo impresionante de IA y un workflow que un equipo de finanzas u operaciones realmente podria usar.",
          ],
        },
        {
          title: "Resultado",
          paragraphs: [
            "Este proyecto funciono como checkpoint de factibilidad para una implementacion mas amplia, no como sistema de produccion terminado. Redujo incertidumbre sobre calidad de extraccion con IA, normalizacion de respuestas y como conectar el analisis de recibos a un flujo de gastos.",
            "En terminos practicos, dio una respuesta concreta de si la ruta de lectura de recibos basada en OpenAI valia la pena para seguir construyendo. La direccion de implementacion mas amplia redujo la revision de recibos de aproximadamente un dia laboral a 1-2 horas con verificacion humana.",
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
