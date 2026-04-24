import { fallbackLng } from "@/app/i18n/settings";

export const siteCopy = {
  en: {
    profile: {
      portraitAlt: "Portrait of Alex Martinez",
      socialLinks: [
        {
          icon: "x",
          href: "https://x.com/alexmar19190",
          label: "Follow on X",
        },
        {
          icon: "instagram",
          href: "https://www.instagram.com/alexeygallegomartinez/",
          label: "Follow on Instagram",
        },
        {
          icon: "github",
          href: "https://github.com/AlexeyGallegoMartinez",
          label: "Follow on GitHub",
        },
        {
          icon: "linkedin",
          href: "https://www.linkedin.com/in/alexey-martinez/",
          label: "Follow on LinkedIn",
        },
        {
          icon: "email",
          href: "mailto:alexeygallegomartinez@gmail.com",
          label: "alexeygallegomartinez@gmail.com",
        },
      ],
      resume: {
        title: "Experience",
        download: "Download CV",
        roles: [
          {
            company: "GE Appliances",
            title: "Technology Co-Op",
            logo: "ge",
            summary:
              "Supported manufacturing technology projects focused on process improvement, system validation, and production support.",
            start: "2020",
            end: "2020",
          },
          {
            company: "ubreakifix",
            title: "Tech Leader / Manager",
            logo: "ubif",
            summary:
              "Managed operations and technical troubleshooting while leading repair workflows, customer handoff quality, and team execution.",
            start: "2020",
            end: "2021",
          },
          {
            company: "Encore Automation",
            title: "Product Development Engineer",
            logo: "encore",
            summary:
              "Led product-development work across robotics integration, process tooling, and software-facing system improvements for production environments.",
            start: "2021",
            end: "2025",
          },
          {
            company: "Encore Automation",
            title: "Systems/Software Engineer",
            logo: "encore",
            summary:
              "Transitioned into a systems-focused role, driving full-stack and AI-assisted solutions that improve reliability and operational performance.",
            start: "2025",
            end: {
              label: "Present",
              dateTime: new Date().getFullYear().toString(),
            },
          },
        ],
      },
    },
    home: {
      metadata: {
        title: "Home – Alex Martinez",
        description:
          "Systems-focused portfolio homepage for Alex Martinez featuring technical writing and project case studies.",
      },
      eyebrow: "Home",
      title: "Systems Engineer  Full-Stack Development  AI Integration",
      titleLines: [
        "Systems Engineer",
        "Full-Stack Development",
        "AI Integration",
      ],
      intro: [
        "Systems Engineer using full-stack software skills along with AI-driven development to build solutions that help businesses operate better.",
        "I build production-facing systems that connect operations, software, and people. The focus is reliability, clean interfaces, and practical delivery, not demos that only work under ideal conditions.",
      ],
      ctas: {
        articles: "Read articles",
        projects: "See projects",
        downloadCv: "Download CV",
      },
      credibility: {
        eyebrow: "Experience",
        title: "Hands-on across software and automation",
        description:
          "Built systems in industrial and product environments where correctness, clarity, and maintainability all matter.",
      },
      contact: {
        title: "Contact and social",
        description:
          "Best way to reach me is email. I also share technical notes and updates across social channels.",
      },
      featuredArticles: {
        eyebrow: "Writing",
        title: "Featured Articles",
        description:
          "Technical notes on backend architecture, AI integration workflows, and security fundamentals.",
        cta: "Browse all articles",
      },
      selectedProjects: {
        eyebrow: "Case Studies",
        title: "Selected Projects",
        description:
          "Portfolio projects that highlight system design decisions, implementation, and operational outcomes.",
        cta: "See all projects",
      },
    },
    about: {
      metadata: {
        title: "About – Alex Martinez",
        description:
          "Background, strengths, and current focus for Alex Martinez across robotics and software.",
      },
      title: "I build systems that need to work outside the demo.",
      intro: [
        "The only thing I’ve probably loved longer than solving technical problems is playing fútbol. If I’m not building something, there’s a good chance I’m on a field, clearing my head and resetting the same way good engineering work eventually forces you to do.",
        "I did not start in software with a neat master plan. I studied mechanical engineering with a focus on robotics because I kept getting pulled toward problems where hardware, software, and people all had to meet in the same system.",
        "That led me from robotic arm tooling and computer vision projects in school to industrial automation, product development, and software that has to coordinate robots, data, and operators in production environments.",
        "Today I care less about building something that sounds impressive and more about building something that is coherent, maintainable, and useful to the people who rely on it.",
      ],
      strengthsTitle: "How I work",
      strengths: [
        {
          title: "Systems first",
          description:
            "I try to understand the whole operating environment before I optimize one layer. That means interfaces, constraints, users, failure modes, and maintenance burden all matter early.",
        },
        {
          title: "Comfortable across domains",
          description:
            "I move comfortably between robotics, automation, backend logic, and UI work. The stack changes, but the job stays the same: make the system legible and dependable.",
        },
        {
          title: "Practical communication",
          description:
            "I like explaining technical ideas in a direct way. That is part of why this site exists. I want my writing to sound like an honest engineering conversation, not a polished sales deck.",
        },
      ],
      skillGroupsTitle: "What I bring to a team",
      skillGroups: [
        {
          title: "Software",
          items: [".NET", "ASP.NET Core", "Node.js", "Next.js", "APIs", "SQL"],
        },
        {
          title: "Automation",
          items: [
            "Robotics integration",
            "Vision systems",
            "HMI workflows",
            "Industrial tooling",
            "Production debugging",
          ],
        },
        {
          title: "Current learning",
          items: [
            "Applied AI",
            "Security fundamentals",
            "System design",
            "Developer tooling",
          ],
        },
      ],
      currentFocusTitle: "Current focus",
      currentFocus: [
        "I am actively sharpening the software side of my background: backend architecture, full-stack product work, AI-assisted development workflows, and the security fundamentals that make those systems trustworthy.",
        "Some of the final personal copy on this page will evolve, but the direction is stable: I want this site to show who I am, how I think, and the kind of engineering work I want to keep doing.",
      ],
    },
    common: {
      readArticle: "Open article",
      viewProject: "Explore project",
      backToArticles: "Back to articles",
      backToProjects: "Back to projects",
      published: "Published",
      updated: "Updated",
      category: "Category",
      topics: "Topics",
      role: "Role",
      timeline: "Timeline",
      stack: "Stack",
      links: "Links",
    },
    articles: {
      metadata: {
        title: "Articles – Alex Martinez",
        description:
          "Interview-style technical writing on .NET, Node.js, AI, and security fundamentals.",
      },
      eyebrow: "Writing",
      title:
        "Articles that sound like a technical conversation, not marketing copy.",
      description:
        "This is where I break down what I am learning the same way I would explain it in an interview: practical, opinionated, and tied to implementation.",
    },
    projects: {
      metadata: {
        title: "Projects – Alex Martinez",
        description:
          "Portfolio projects and engineering case studies from software and automation work.",
      },
      eyebrow: "Projects",
      title: "Projects that show how I think, build, and ship.",
      description:
        "Case studies focused on problem framing, technical tradeoffs, and the system behind the outcome.",
    },
  },
  es: {
    profile: {
      portraitAlt: "Retrato de Alex Martinez",
      socialLinks: [
        {
          icon: "x",
          href: "https://x.com/alexmar19190",
          label: "Seguir en X",
        },
        {
          icon: "instagram",
          href: "https://www.instagram.com/alexeygallegomartinez/",
          label: "Seguir en Instagram",
        },
        {
          icon: "github",
          href: "https://github.com/AlexeyGallegoMartinez",
          label: "Seguir en GitHub",
        },
        {
          icon: "linkedin",
          href: "https://www.linkedin.com/in/alexey-gallego/",
          label: "Seguir en LinkedIn",
        },
        {
          icon: "email",
          href: "mailto:alexeygallegomartinez@gmail.com",
          label: "alexeygallegomartinez@gmail.com",
        },
      ],
      resume: {
        title: "Experiencia",
        download: "Descargar CV",
        roles: [
          {
            company: "GE Appliances",
            title: "Practicante de tecnología",
            logo: "ge",
            summary:
              "Apoyé proyectos de tecnología de manufactura enfocados en mejora de procesos, validación de sistemas y soporte de producción.",
            start: "2020",
            end: "2020",
          },
          {
            company: "ubreakifix",
            title: "Líder técnico / gerente",
            logo: "ubif",
            summary:
              "Gestioné operaciones y resolución técnica mientras lideraba flujos de reparación, calidad de entrega al cliente y ejecución del equipo.",
            start: "2020",
            end: "2021",
          },
          {
            company: "Encore Automation",
            title: "Ingeniero de desarrollo de producto",
            logo: "encore",
            summary:
              "Lideré trabajo de desarrollo de producto en integración robótica, herramental de proceso y mejoras de sistemas de software para entornos de producción.",
            start: "2021",
            end: "2025",
          },
          {
            company: "Encore Automation",
            title: "Ingeniero de sistemas",
            logo: "encore",
            summary:
              "Pasé a un rol más centrado en sistemas, impulsando soluciones full-stack y asistidas por IA para mejorar confiabilidad y desempeño operativo.",
            start: "2025",
            end: {
              label: "Presente",
              dateTime: new Date().getFullYear().toString(),
            },
          },
        ],
      },
    },
    home: {
      metadata: {
        title: "Inicio – Alex Martinez",
        description:
          "Página principal del portafolio de Alex Martinez centrada en sistemas, escritura técnica y casos de estudio.",
      },
      eyebrow: "Inicio",
      title: "Ingeniería de Sistemas  Desarrollo Full-Stack  Integración de IA",
      titleLines: [
        "Ingeniería de Sistemas",
        "Desarrollo Full-Stack",
        "Integración de IA",
      ],
      intro: [
        "Ingeniero de sistemas que usa habilidades de software full-stack junto con desarrollo impulsado por IA para construir soluciones que ayuden a las empresas a operar mejor.",
        "Construyo sistemas orientados a producción que conectan operaciones, software y personas. El enfoque es confiabilidad, interfaces limpias y entrega práctica, no demos que solo funcionan en condiciones ideales.",
      ],
      ctas: {
        articles: "Leer artículos",
        projects: "Ver proyectos",
        downloadCv: "Descargar CV",
      },
      credibility: {
        eyebrow: "Experiencia",
        title: "Experiencia aplicada en software y automatización",
        description:
          "He construido sistemas en entornos industriales y de producto donde importan al mismo tiempo corrección, claridad y mantenibilidad.",
      },
      contact: {
        title: "Contacto y redes",
        description:
          "La forma más directa de contactarme es por correo. También comparto notas técnicas y actualizaciones en mis redes.",
      },
      featuredArticles: {
        eyebrow: "Escritura",
        title: "Artículos destacados",
        description:
          "Notas técnicas sobre arquitectura backend, flujos de integración de IA y fundamentos de seguridad.",
        cta: "Ver todos los artículos",
      },
      selectedProjects: {
        eyebrow: "Casos de estudio",
        title: "Proyectos seleccionados",
        description:
          "Proyectos que muestran decisiones de diseño de sistemas, implementación y resultados operativos.",
        cta: "Ver todos los proyectos",
      },
    },
    about: {
      metadata: {
        title: "Sobre mí – Alex Martinez",
        description:
          "Trayectoria, fortalezas y enfoque actual de Alex Martinez entre robótica y software.",
      },
      title: "Construyo sistemas que tienen que funcionar fuera del demo.",
      intro: [
        "Probablemente la única cosa que he amado por más tiempo que resolver problemas técnicos es jugar fútbol. Si no estoy construyendo algo, hay una buena probabilidad de que esté en una cancha, despejando la mente y reiniciando de la misma forma que el buen trabajo de ingeniería te obliga a hacer.",
        "No empecé en software con un plan perfecto. Estudié ingeniería mecánica con enfoque en robótica porque una y otra vez terminaba en problemas donde hardware, software y personas tenían que convivir dentro del mismo sistema.",
        "Eso me llevó desde herramientas para brazos robóticos y proyectos de visión por computadora en la universidad hasta automatización industrial, desarrollo de producto y software que coordina robots, datos y operadores en entornos de producción.",
        "Hoy me importa menos construir algo que suene impresionante y más construir algo coherente, mantenible y útil para las personas que dependen de ello.",
      ],
      strengthsTitle: "Cómo trabajo",
      strengths: [
        {
          title: "Primero el sistema",
          description:
            "Intento entender todo el entorno operativo antes de optimizar una sola capa. Interfaces, restricciones, usuarios, fallas y mantenimiento importan desde temprano.",
        },
        {
          title: "Cómodo entre dominios",
          description:
            "Me muevo con comodidad entre robótica, automatización, lógica backend y trabajo de interfaz. Cambia el stack, pero el trabajo sigue siendo el mismo: volver el sistema claro y confiable.",
        },
        {
          title: "Comunicación práctica",
          description:
            "Me gusta explicar ideas técnicas de forma directa. Por eso existe este sitio. Quiero que mi escritura suene como una conversación honesta entre ingenieros, no como una presentación de ventas.",
        },
      ],
      skillGroupsTitle: "Lo que aporto a un equipo",
      skillGroups: [
        {
          title: "Software",
          items: [".NET", "ASP.NET Core", "Node.js", "Next.js", "APIs", "SQL"],
        },
        {
          title: "Automatización",
          items: [
            "Integración robótica",
            "Sistemas de visión",
            "Flujos HMI",
            "Herramental industrial",
            "Depuración en producción",
          ],
        },
        {
          title: "Aprendizaje actual",
          items: [
            "IA aplicada",
            "Fundamentos de seguridad",
            "Diseño de sistemas",
            "Herramientas de desarrollo",
          ],
        },
      ],
      currentFocusTitle: "En qué estoy enfocado ahora",
      currentFocus: [
        "Estoy fortaleciendo activamente el lado de software de mi experiencia: arquitectura backend, trabajo full-stack, flujos de desarrollo asistidos por IA y los fundamentos de seguridad que hacen que esos sistemas sean confiables.",
        "Parte del texto final de esta página todavía va a evolucionar, pero la dirección es clara: quiero que este sitio muestre quién soy, cómo pienso y qué tipo de trabajo de ingeniería quiero seguir haciendo.",
      ],
    },
    common: {
      readArticle: "Abrir artículo",
      viewProject: "Explorar proyecto",
      backToArticles: "Volver a artículos",
      backToProjects: "Volver a proyectos",
      published: "Publicado",
      updated: "Actualizado",
      category: "Categoría",
      topics: "Temas",
      role: "Rol",
      timeline: "Periodo",
      stack: "Stack",
      links: "Enlaces",
    },
    articles: {
      metadata: {
        title: "Artículos – Alex Martinez",
        description:
          "Escritura técnica con tono de entrevista sobre .NET, Node.js, IA y fundamentos de seguridad.",
      },
      eyebrow: "Escritura",
      title: "Artículos que suenan a conversación técnica, no a marketing.",
      description:
        "Aquí desgloso lo que estoy aprendiendo como lo explicaría en una entrevista: práctico, con criterio y conectado a la implementación.",
    },
    projects: {
      metadata: {
        title: "Proyectos – Alex Martinez",
        description:
          "Proyectos de portafolio y estudios de caso de ingeniería en software y automatización.",
      },
      eyebrow: "Proyectos",
      title: "Proyectos que muestran cómo pienso, construyo y entrego.",
      description:
        "Estudios de caso centrados en cómo enmarco problemas, evalúo tradeoffs técnicos y estructuro el sistema detrás del resultado.",
    },
  },
};

export function getSiteCopy(lng) {
  return siteCopy[lng] ?? siteCopy[fallbackLng];
}
