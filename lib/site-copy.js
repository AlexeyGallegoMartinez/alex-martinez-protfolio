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
            company: "Florida International University",
            title: "Statics Learning Assistant",
            logo: "fiu",
            summary:
              "Taught engineering fundamentals by helping students apply calculus and physics to statics problems.",
            start: {
              label: "Jan 2019",
              dateTime: "2019-01",
            },
            end: {
              label: "Dec 2019",
              dateTime: "2019-12",
            },
          },
          {
            company: "GE Appliances",
            title: "Technology Co-Op",
            logo: "ge",
            summary:
              "Worked on AC ductless systems, supporting product component design, validation, and HVAC efficiency testing.",
            start: {
              label: "Jan 2020",
              dateTime: "2020-01",
            },
            end: {
              label: "May 2020",
              dateTime: "2020-05",
            },
          },
          {
            company: "ubreakifix",
            title: "Tech Leader / Manager",
            logo: "ubif",
            summary:
              "Managed operations and technical troubleshooting while leading repair workflows, customer handoff quality, and team execution.",
            start: {
              label: "Jul 2020",
              dateTime: "2020-07",
            },
            end: {
              label: "Jul 2021",
              dateTime: "2021-07",
            },
          },
          {
            company: "Encore Automation",
            title: "Product Development Engineer",
            logo: "encore",
            summary:
              "Designed patent-pending robotic tooling, owned plant installations, and began building the internal software foundation.",
            start: {
              label: "Jul 2021",
              dateTime: "2021-07",
            },
            end: {
              label: "Jun 2025",
              dateTime: "2025-06",
            },
          },
          {
            company: "Encore Automation",
            title: "Systems Engineer",
            logo: "encore",
            summary:
              "Leading ERP delivery while owning production internal platforms, AI workflows, and self-hosted Docker infrastructure.",
            start: {
              label: "Jun 2025",
              dateTime: "2025-06",
            },
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
          "Portfolio homepage for Alex Martinez, a full-stack systems engineer building practical software, AI workflows, and internal tools for business operations.",
      },
      eyebrow: "Full-Stack Systems Engineer",
      title: "Practical Software  AI Workflows  Industrial Systems",
      titleLines: [
        "Practical Software",
        "AI Workflows",
        "Industrial Systems",
      ],
      intro: [
        "I am a bilingual full-stack systems engineer working across software development, business operations, AI integration, and industrial automation.",
        "Over the past five years, I have gone from building internal tools solo to leading a small team delivering enterprise-scale systems. My focus is practical software that replaces friction: ERP workflows, operations platforms, AI-assisted receipt analysis, robot data pipelines, and reliable self-hosted infrastructure.",
      ],
      ctas: {
        about: "About me",
        projects: "See projects",
        downloadCv: "Download CV",
      },
      highlights: [
        {
          value: "99%+",
          label: "Uptime across internal platforms",
        },
        {
          value: "80->99%",
          label: "Robot process reliability improvement",
        },
        {
          value: "5+ yrs",
          label: "Software, systems, and automation delivery",
        },
      ],
      credibility: {
        eyebrow: "Career Journey",
        title: "Mechanical roots, software ownership, production outcomes",
        description:
          "My path runs through robotics-focused mechanical engineering, product development, plant-floor automation, and now full-stack systems work where correctness, clarity, and maintainability all matter.",
      },
      contact: {
        title: "Contact and social",
        description:
          "Best way to reach me is email. I also share technical notes and updates across social channels.",
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
          "Background, career journey, strengths, and current focus for Alex Martinez across software, AI, robotics, and business operations.",
      },
      eyebrow: "About",
      title: "I build systems that make messy operations easier to run.",
      intro: [
        "The only thing I’ve probably loved longer than solving technical problems is fútbol. If I’m not building something, I’m likely on a field, clearing my head the same way good engineering eventually forces you to.",
        "I didn’t start in software with a neat plan. I studied mechanical engineering with a focus on robotics because I kept getting pulled toward problems where hardware, software, and people all had to work together.",
        "That path took me through robotic tooling, product development, and industrial systems, and eventually into full-stack software. I build applications that help teams run their day-to-day work more clearly and with less friction.",
        "Today, I care less about software that sounds impressive and more about systems that are clear, reliable, and actually useful to the people who depend on them every day.",
      ],
      strengthsTitle: "How I work",
      strengths: [
        {
          title: "Start small",
          description:
            "I start with the main problem, the people feeling it, and the smallest useful path to remove real friction.",
        },
        {
          title: "Define requirements",
          description:
            "I define functional and nonfunctional requirements so each feature, and the system as a whole, can work reliably and effectively.",
        },
        {
          title: "Scope what matters",
          description:
            "I separate business problems from user problems, decide what needs to be solved now, and make it clear what can be ignored.",
        },
        {
          title: "Build, measure, iterate",
          description:
            "I build the useful slice, test it, measure whether it works, learn from real usage, and iterate as quickly as possible.",
        },
      ],
      careerTitle: "Career journey",
      careerMilestones: [
        {
          title: "Robotics foundation",
          description:
            "Earned a mechanical engineering degree with a robotics focus, then applied engineering fundamentals through teaching and early product validation work.",
        },
        {
          title: "Industrial product development",
          description:
            "Designed robotic end-of-arm tooling, supported plant installations, and worked directly with operators and managers in automotive production environments.",
        },
        {
          title: "Software systems ownership",
          description:
            "Built and operated company-wide internal platforms, integrated AI receipt analysis, led ERP delivery, and maintained production Docker/Linux infrastructure.",
        },
      ],
      skillGroupsTitle: "What I bring to a team",
      skillGroups: [
        {
          title: "Languages & Frameworks",
          items: [
            "JavaScript",
            "Node.js",
            "React",
            "Angular",
            "Python",
            "Java",
            "Spring Boot",
            "Next.js",
            "REST APIs",
            "ASP.NET",
          ],
        },
        {
          title: "AI & Automation",
          items: [
            "LLM Engineering",
            "Agentic AI",
            "MCP",
            "OpenAI APIs",
            "Claude APIs",
            "Codex Development",
            "Claude Development",
          ],
        },
        {
          title: "Databases",
          items: [
            "MSSQL",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Sequelize ORM",
          ],
        },
        {
          title: "Infrastructure & DevOps",
          items: [
            "Docker",
            "Kubernetes",
            "Linux",
            "CI/CD",
            "GitHub Actions",
            "AWS",
            "VMware",
          ],
        },
        {
          title: "Methodologies",
          items: [
            "Agile/SCRUM",
            "MVC Architecture",
            "JWT",
            "OAuth 2.0",
          ],
        },
      ],
      currentFocusTitle: "Current focus",
      currentFocus: [
        "I am currently leading a small engineering team building an enterprise ERP system while continuing to own a separate internal operations platform used across the company every day.",
        "The work I want more of sits at the intersection of full-stack product engineering, AI-enabled workflows, operations automation, and systems architecture: software that removes real business friction and holds up in production.",
      ],
    },
    common: {
      viewProject: "Explore project",
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
    notFound: {
      title: "Page not found",
      description: "Sorry, we could not find the page you are looking for.",
      action: "Go back home",
    },
    digitalTwin: {
      starterQuestions: [
        "What kind of systems does Alexey build?",
        "Summarize Alexey's career journey.",
        "What are his strongest technical skills?",
      ],
      initialMessage:
        "Ask me about Alexey's career, projects, technical strengths, or how he approaches building systems.",
      eyebrow: "Digital Twin",
      title: "Ask about Alexey",
      description: "Career, projects, skills, and working style.",
      thinking: "Thinking...",
      placeholder: "Ask a career question...",
      inputLabel: "Ask the digital twin a question",
      sendLabel: "Send message",
      closeLabel: "Close digital twin chat",
      openLabel: "Open digital twin chat",
      dismissGreetingLabel: "Dismiss digital twin greeting",
      greetingEyebrow: "Hi there",
      greetingTitle: "Talk to my AI-powered Digital Twin.",
      greetingDescription:
        "Ask about my career, projects, skills, or how I build systems.",
      defaultError: "I could not answer that right now. Please try again.",
      unavailableError: "Unable to reach the digital twin.",
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
    services: {
      metadata: {
        title: "Services – Alex Martinez",
        description:
          "Software, AI, automation, and operations consulting services for businesses that want to save time and reduce manual work.",
      },
      eyebrow: "Services",
      title: "Software and automation for businesses that have outgrown spreadsheets.",
      description:
        "I help teams turn messy operations into practical systems: internal tools, AI workflows, integrations, dashboards, approval flows, and automation that saves time, reduces errors, and gives owners more room to think about growth.",
      offerTitle: "How I can help",
      buildEyebrow: "What I build",
      buildDescription:
        "The goal is fewer bottlenecks, fewer repeated decisions, and a cleaner operating rhythm that gives the business time back.",
      offerMeta: [
        "Workflow platforms",
        "AI-assisted review",
        "Automation layers",
        "System rebuilds",
      ],
      offerTags: ["Save time", "Reduce errors", "Improve visibility"],
      offers: [
        {
          title: "Operations software",
          description:
            "Custom internal platforms for time, expenses, approvals, scheduling, reporting, and the repetitive workflows that quietly drain a team.",
        },
        {
          title: "AI workflow integration",
          description:
            "Practical AI features that plug into real processes: document extraction, receipt analysis, internal assistants, structured summaries, and review automation.",
        },
        {
          title: "Business process automation",
          description:
            "Replace manual handoffs with clear workflows, alerts, data checks, and integrations so people spend less time chasing status.",
        },
        {
          title: "Systems modernization",
          description:
            "Untangle old tools, spreadsheets, and fragile processes into maintainable software with cleaner architecture and better visibility.",
        },
      ],
      processTitle: "The way I approach it",
      process: [
        "Find the operations bottleneck that is costing time, money, or focus.",
        "Define the business goal, user workflow, and reliability requirements.",
        "Build the smallest useful system that solves the real problem.",
        "Measure the result, tighten the workflow, and iterate from actual usage.",
      ],
      outcomesTitle: "What businesses get back",
      outcomesStatement: {
        before: "The win is not a prettier dashboard. The win is a business that",
        highlightOne: "knows what is happening",
        middle:
          "without another meeting, another spreadsheet, or another person",
        highlightTwo: "manually checking the same thing twice",
      },
      outcomes: [
        "Less manual follow-up",
        "Cleaner approvals and reporting",
        "Fewer data-entry errors",
        "Better visibility into daily operations",
        "More time to think about growth",
      ],
      ctaTitle: "Have an operation that feels more painful than it should?",
      ctaDescription:
        "That is usually where useful software starts. Tell me what is slowing the team down and I will help figure out whether it should be automated, simplified, rebuilt, or left alone.",
      ctaLabel: "Start a conversation",
      workflowCtaTitle: "Have a workflow that should not still be manual?",
      workflowCtaDescription:
        "Bring the messy version. I will help figure out if it should be automated, simplified, rebuilt, or left alone.",
      workflowCtaLabel: "Contact me",
      nextMoveEyebrow: "Next move",
    },
    contact: {
      metadata: {
        title: "Contact – Alex Martinez",
        description:
          "Contact Alex Martinez for software, automation, AI workflow, and systems engineering conversations.",
      },
      eyebrow: "Contact",
      title: "Let’s talk before your spreadsheet becomes a department.",
      description:
        "If you want to talk software, operations, AI workflows, automation, or an idea that is currently surviving on copy-paste and good intentions, send it over. I like practical problems, clear constraints, and conversations that turn into useful systems.",
      cards: [
        {
          title: "Business and project inquiries",
          description:
            "Best for operations software, automation ideas, internal tools, AI workflow questions, and consulting conversations.",
          action: "Email Alexey",
          href: "mailto:alexeygallegomartinez@gmail.com?subject=Project%20or%20services%20inquiry",
        },
        {
          title: "Career and technical conversations",
          description:
            "Best for engineering roles, collaboration, system design discussions, or asking about one of the projects on this site.",
          action: "Connect on LinkedIn",
          href: "https://www.linkedin.com/in/alexey-martinez/",
        },
      ],
      note:
        "Short version: if it involves software, systems, AI, robots, business operations, or fixing a workflow that should have been fixed months ago, I probably want to hear about it.",
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
            company: "Florida International University",
            title: "Asistente de aprendizaje de Estática",
            logo: "fiu",
            summary:
              "Enseñé fundamentos de ingeniería ayudando a estudiantes a aplicar cálculo y física en problemas de estática.",
            start: {
              label: "Ene 2019",
              dateTime: "2019-01",
            },
            end: {
              label: "Dic 2019",
              dateTime: "2019-12",
            },
          },
          {
            company: "GE Appliances",
            title: "Practicante de tecnología",
            logo: "ge",
            summary:
              "Trabajé en sistemas AC ductless, apoyando diseño de componentes, validación y pruebas de eficiencia HVAC.",
            start: {
              label: "Ene 2020",
              dateTime: "2020-01",
            },
            end: {
              label: "May 2020",
              dateTime: "2020-05",
            },
          },
          {
            company: "ubreakifix",
            title: "Líder técnico / gerente",
            logo: "ubif",
            summary:
              "Gestioné operaciones y resolución técnica mientras lideraba flujos de reparación, calidad de entrega al cliente y ejecución del equipo.",
            start: {
              label: "Jul 2020",
              dateTime: "2020-07",
            },
            end: {
              label: "Jul 2021",
              dateTime: "2021-07",
            },
          },
          {
            company: "Encore Automation",
            title: "Ingeniero de desarrollo de producto",
            logo: "encore",
            summary:
              "Diseñé tooling robótico patent-pending, lideré instalaciones en planta y empecé a construir la base interna de software.",
            start: {
              label: "Jul 2021",
              dateTime: "2021-07",
            },
            end: {
              label: "Jun 2025",
              dateTime: "2025-06",
            },
          },
          {
            company: "Encore Automation",
            title: "Ingeniero de sistemas",
            logo: "encore",
            summary:
              "Lidero entrega ERP y soy owner de plataformas internas, workflows de IA e infraestructura Docker self-hosted.",
            start: {
              label: "Jun 2025",
              dateTime: "2025-06",
            },
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
          "Portafolio de Alex Martinez, ingeniero full-stack de sistemas construyendo software práctico, workflows de IA y herramientas internas para operaciones.",
      },
      eyebrow: "Ingeniero Full-Stack de Sistemas",
      title: "Software Práctico  Workflows de IA  Sistemas Industriales",
      titleLines: [
        "Software Práctico",
        "Workflows de IA",
        "Sistemas Industriales",
      ],
      intro: [
        "Soy un ingeniero bilingüe full-stack de sistemas trabajando entre desarrollo de software, operaciones, integración de IA y automatización industrial.",
        "En los últimos cinco años pasé de construir herramientas internas solo a liderar un equipo pequeño entregando sistemas enterprise. Mi enfoque es software práctico que reemplaza fricción: workflows ERP, plataformas de operaciones, análisis de recibos con IA, pipelines de robots e infraestructura self-hosted confiable.",
      ],
      ctas: {
        about: "Sobre mí",
        projects: "Ver proyectos",
        downloadCv: "Descargar CV",
      },
      highlights: [
        {
          value: "99%+",
          label: "Uptime en plataformas internas",
        },
        {
          value: "80->99%",
          label: "Mejora de confiabilidad en proceso robótico",
        },
        {
          value: "5+ años",
          label: "Entrega en software, sistemas y automatización",
        },
      ],
      credibility: {
        eyebrow: "Trayectoria",
        title: "Raíces mecánicas, ownership de software, resultados reales",
        description:
          "Mi camino cruza ingeniería mecánica enfocada en robótica, desarrollo de producto, automatización industrial y trabajo full-stack donde importan corrección, claridad y mantenibilidad.",
      },
      contact: {
        title: "Contacto y redes",
        description:
          "La forma más directa de contactarme es por correo. También comparto notas técnicas y actualizaciones en mis redes.",
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
          "Trayectoria, fortalezas y enfoque actual de Alex Martinez entre software, IA, robótica y operaciones.",
      },
      eyebrow: "Sobre mí",
      title: "Construyo sistemas que hacen más fáciles de operar procesos complejos.",
      intro: [
        "Probablemente la única cosa que he amado por más tiempo que resolver problemas técnicos es jugar fútbol. Si no estoy construyendo algo, probablemente estoy en una cancha, despejando la mente de la misma forma que la buena ingeniería eventualmente te obliga a hacer.",
        "No empecé en software con un plan perfecto. Estudié ingeniería mecánica con enfoque en robótica porque una y otra vez terminaba en problemas donde hardware, software y personas tenían que trabajar juntos.",
        "Ese camino me llevó por tooling robótico, desarrollo de producto y sistemas industriales, y eventualmente hacia software full-stack. Construyo aplicaciones que ayudan a los equipos a operar su trabajo diario con más claridad y menos fricción.",
        "Hoy me importa menos construir software que suene impresionante y más construir sistemas claros, confiables y realmente útiles para las personas que dependen de ellos cada día.",
      ],
      strengthsTitle: "Cómo trabajo",
      strengths: [
        {
          title: "Empiezo pequeño",
          description:
            "Empiezo por el problema principal, las personas que lo sienten y el camino útil más pequeño para reducir fricción real.",
        },
        {
          title: "Defino requisitos",
          description:
            "Defino requisitos funcionales y no funcionales para que cada parte, y el sistema completo, funcionen de forma confiable y efectiva.",
        },
        {
          title: "Marco el alcance",
          description:
            "Separo problemas de negocio y problemas de usuario, decido qué resolver ahora y dejo claro qué se puede ignorar.",
        },
        {
          title: "Construyo e itero",
          description:
            "Construyo el slice útil, lo pruebo, mido si funciona, aprendo del uso real e itero lo más rápido posible.",
        },
      ],
      careerTitle: "Trayectoria",
      careerMilestones: [
        {
          title: "Base en robótica",
          description:
            "Obtuve un título en ingeniería mecánica con enfoque en robótica y apliqué fundamentos de ingeniería enseñando y validando productos.",
        },
        {
          title: "Desarrollo industrial",
          description:
            "Diseñé herramientas robóticas, apoyé instalaciones en planta y trabajé directamente con operadores y gerentes en producción automotriz.",
        },
        {
          title: "Ownership de sistemas",
          description:
            "Construí y operé plataformas internas, integré análisis de recibos con IA, lideré entrega ERP y mantuve infraestructura Docker/Linux en producción.",
        },
      ],
      skillGroupsTitle: "Lo que aporto a un equipo",
      skillGroups: [
        {
          title: "Lenguajes y frameworks",
          items: [
            "JavaScript",
            "Node.js",
            "React",
            "Angular",
            "Python",
            "Java",
            "Spring Boot",
            "Next.js",
            "REST APIs",
            "ASP.NET",
          ],
        },
        {
          title: "IA y automatización",
          items: [
            "LLM Engineering",
            "Agentic AI",
            "MCP",
            "OpenAI APIs",
            "Claude APIs",
            "Codex Development",
            "Claude Development",
          ],
        },
        {
          title: "Bases de datos",
          items: [
            "MSSQL",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Sequelize ORM",
          ],
        },
        {
          title: "Infraestructura y DevOps",
          items: [
            "Docker",
            "Kubernetes",
            "Linux",
            "CI/CD",
            "GitHub Actions",
            "AWS",
            "VMware",
          ],
        },
        {
          title: "Metodologías",
          items: [
            "Agile/SCRUM",
            "Arquitectura MVC",
            "JWT",
            "OAuth 2.0",
          ],
        },
      ],
      currentFocusTitle: "En qué estoy enfocado ahora",
      currentFocus: [
        "Actualmente lidero un equipo pequeño construyendo un sistema ERP enterprise y sigo siendo owner de una plataforma interna de operaciones usada por toda la compañía cada día.",
        "El trabajo que quiero seguir haciendo vive entre producto full-stack, workflows habilitados por IA, automatización de operaciones y arquitectura de sistemas: software que elimina fricción real y se sostiene en producción.",
      ],
    },
    common: {
      viewProject: "Explorar proyecto",
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
    notFound: {
      title: "Página no encontrada",
      description: "No pudimos encontrar la página que estás buscando.",
      action: "Volver al inicio",
    },
    digitalTwin: {
      starterQuestions: [
        "¿Qué tipo de sistemas construye Alexey?",
        "Resume la trayectoria profesional de Alexey.",
        "¿Cuáles son sus fortalezas técnicas principales?",
      ],
      initialMessage:
        "Pregúntame sobre la carrera, proyectos, fortalezas técnicas o forma de construir sistemas de Alexey.",
      eyebrow: "Digital Twin",
      title: "Pregunta sobre Alexey",
      description: "Carrera, proyectos, habilidades y estilo de trabajo.",
      thinking: "Pensando...",
      placeholder: "Haz una pregunta sobre carrera...",
      inputLabel: "Hazle una pregunta al digital twin",
      sendLabel: "Enviar mensaje",
      closeLabel: "Cerrar chat del digital twin",
      openLabel: "Abrir chat del digital twin",
      dismissGreetingLabel: "Cerrar saludo del digital twin",
      greetingEyebrow: "Hola",
      greetingTitle: "Habla con mi Digital Twin impulsado por IA.",
      greetingDescription:
        "Pregunta sobre mi carrera, proyectos, habilidades o cómo construyo sistemas.",
      defaultError: "No pude responder ahora mismo. Intenta de nuevo.",
      unavailableError: "No se pudo conectar con el digital twin.",
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
    services: {
      metadata: {
        title: "Servicios – Alex Martinez",
        description:
          "Servicios de software, IA, automatización y operaciones para negocios que quieren ahorrar tiempo y reducir trabajo manual.",
      },
      eyebrow: "Servicios",
      title: "Software y automatización para negocios que ya superaron los spreadsheets.",
      description:
        "Ayudo a equipos a convertir operaciones complicadas en sistemas prácticos: herramientas internas, workflows de IA, integraciones, dashboards, aprobaciones y automatización que ahorra tiempo, reduce errores y libera espacio mental para crecer.",
      offerTitle: "Cómo puedo ayudar",
      buildEyebrow: "Qué construyo",
      buildDescription:
        "La meta es reducir cuellos de botella, decisiones repetidas y crear un ritmo operativo más claro que le devuelva tiempo al negocio.",
      offerMeta: [
        "Plataformas de workflow",
        "Revisión asistida por IA",
        "Capas de automatización",
        "Reconstrucción de sistemas",
      ],
      offerTags: ["Ahorrar tiempo", "Reducir errores", "Mejorar visibilidad"],
      offers: [
        {
          title: "Software operativo",
          description:
            "Plataformas internas para tiempos, gastos, aprobaciones, eventos, reportes y los workflows repetitivos que consumen al equipo.",
        },
        {
          title: "Integración de IA",
          description:
            "Funciones de IA prácticas conectadas a procesos reales: extracción de documentos, análisis de recibos, asistentes internos, resúmenes estructurados y revisión automatizada.",
        },
        {
          title: "Automatización de procesos",
          description:
            "Reemplazar handoffs manuales con workflows claros, alertas, validaciones e integraciones para pasar menos tiempo persiguiendo status.",
        },
        {
          title: "Modernización de sistemas",
          description:
            "Convertir herramientas viejas, spreadsheets y procesos frágiles en software mantenible con mejor arquitectura y visibilidad.",
        },
      ],
      processTitle: "Cómo lo trabajo",
      process: [
        "Encontrar el cuello de botella que cuesta tiempo, dinero o enfoque.",
        "Definir objetivo de negocio, flujo de usuario y requisitos de confiabilidad.",
        "Construir el sistema útil más pequeño que resuelve el problema real.",
        "Medir el resultado, ajustar el workflow e iterar desde uso real.",
      ],
      outcomesTitle: "Qué recupera el negocio",
      outcomesStatement: {
        before: "La ganancia no es un dashboard más bonito. La ganancia es un negocio que",
        highlightOne: "sabe qué está pasando",
        middle:
          "sin otra reunión, otro spreadsheet u otra persona",
        highlightTwo: "revisando manualmente lo mismo dos veces",
      },
      outcomes: [
        "Menos seguimiento manual",
        "Aprobaciones y reportes más claros",
        "Menos errores de data entry",
        "Mejor visibilidad de operaciones diarias",
        "Más tiempo para pensar en crecimiento",
      ],
      ctaTitle: "¿Tienes una operación que duele más de lo que debería?",
      ctaDescription:
        "Normalmente ahí empieza el software útil. Cuéntame qué está frenando al equipo y vemos si conviene automatizar, simplificar, reconstruir o dejarlo quieto.",
      ctaLabel: "Empezar conversación",
      workflowCtaTitle: "¿Tienes un workflow que no debería seguir siendo manual?",
      workflowCtaDescription:
        "Trae la versión desordenada. Te ayudo a decidir si conviene automatizarlo, simplificarlo, reconstruirlo o dejarlo como está.",
      workflowCtaLabel: "Contactarme",
      nextMoveEyebrow: "Próximo paso",
    },
    contact: {
      metadata: {
        title: "Contacto – Alex Martinez",
        description:
          "Contacta a Alex Martinez para conversaciones sobre software, automatización, IA y sistemas.",
      },
      eyebrow: "Contacto",
      title: "Hablemos antes de que tu spreadsheet se convierta en departamento.",
      description:
        "Si quieres hablar de software, operaciones, workflows de IA, automatización o una idea que hoy sobrevive con copy-paste y buena voluntad, escríbeme. Me gustan los problemas prácticos, restricciones claras y conversaciones que terminan en sistemas útiles.",
      cards: [
        {
          title: "Negocios y proyectos",
          description:
            "Para software operativo, ideas de automatización, herramientas internas, IA aplicada y conversaciones de consultoría.",
          action: "Enviar email",
          href: "mailto:alexeygallegomartinez@gmail.com?subject=Consulta%20de%20proyecto%20o%20servicios",
        },
        {
          title: "Carrera y conversaciones técnicas",
          description:
            "Para roles de ingeniería, colaboración, diseño de sistemas o preguntas sobre proyectos de este sitio.",
          action: "Conectar en LinkedIn",
          href: "https://www.linkedin.com/in/alexey-martinez/",
        },
      ],
      note:
        "Versión corta: si involucra software, sistemas, IA, robots, operaciones de negocio o arreglar un workflow que debió arreglarse hace meses, probablemente quiero escucharlo.",
    },
  },
};

export function getSiteCopy(lng) {
  return siteCopy[lng] ?? siteCopy[fallbackLng];
}
