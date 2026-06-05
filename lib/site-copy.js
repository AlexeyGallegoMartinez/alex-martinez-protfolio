import { fallbackLng } from "@/app/i18n/settings";

export const siteCopy = {
  en: {
    profile: {
      portraitAlt: "Portrait of Alexey Martinez",
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
              "Built an internal MVC progress-dashboard platform while supporting A/C ductless performance work, component design, testing, and product validation.",
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
              "Led technician and customer-service operations, improved workflow performance, grew revenue through process tracking, and managed certified device repair plus inventory.",
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
            title: "Systems & Software Engineer",
            logo: "encore",
            summary:
              "Progressed from product development, automation, and robotics into software architecture, ERP leadership, AI adoption, technical mentorship, and production Docker/Linux systems.",
            start: {
              label: "Jul 2021",
              dateTime: "2021-07",
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
        title: "Home – Alexey Martinez",
        description:
          "Portfolio homepage for Alexey Martinez, a systems builder using software, AI, automation, and engineering to solve business problems.",
      },
      eyebrow: "Software / AI / Automation / Operations",
      title: "Engineer  Builder  Problem Solver",
      titleLines: [
        "Engineer.",
        "Builder.",
        "Problem Solver.",
      ],
      intro: [
        "I am a bilingual systems builder based in Miami, relocating from Michigan, and available for on-site opportunities across Miami, Fort Lauderdale, and South Florida.",
        "I use software, AI, automation, and engineering to solve business problems: ERP workflows, internal operations platforms, AI-assisted receipt analysis, robot data pipelines, product-development systems, and reliable self-hosted infrastructure.",
        "The through-line is ownership: find the operational bottleneck, design the system, build it, deploy it, measure the outcome, and keep improving it.",
      ],
      ctas: {
        about: "About me",
        projects: "See projects",
        contact: "Contact",
        downloadCv: "Download CV",
      },
      highlights: [
        {
          value: "70% to 95%",
          label: "Timesheet compliance",
        },
        {
          value: "50% to 90%",
          label: "Expense compliance",
        },
        {
          value: "80% to 99%",
          label: "Process reliability",
        },
        {
          value: "1 day to 1-2h",
          label: "Receipt review time",
        },
      ],
      credibility: {
        eyebrow: "Career Journey",
        title: "Mechanical roots, software ownership, business outcomes",
        description:
          "My path runs through robotics-focused mechanical engineering, product development, plant-floor automation, and now full-stack systems work where correctness, clarity, maintainability, and business impact all matter.",
      },
      contact: {
        title: "Ready for South Florida",
        description:
          "Based in Miami, relocating from Michigan, and available for on-site software, AI, systems, and business operations work across Miami, Fort Lauderdale, and South Florida.",
      },
      selectedProjects: {
        eyebrow: "Case Studies",
        title: "Results tied to the work",
        description:
          "Metrics only matter when the story is clear. These are the projects behind the outcomes: what was built, what changed, and where to read the full case study.",
        cta: "See all projects",
        accomplishmentLabel: "What changed",
        stories: [
          {
            slug: "enterprise-erp-system",
            kicker: "Enterprise ERP",
            summary:
              "A role-based ERP system bringing employee work, service logs, time cards, expenses, calendar, purchasing, receiving, inventory, and management consoles into one platform.",
            accomplishment:
              "I am leading the architecture and delivery while coordinating a small engineering team around reusable domain modules, role-aware navigation, and daily workflow surfaces.",
            metrics: [
              {
                value: "8+ role consoles",
                label: "Unified access paths",
              },
              {
                value: "12+ workflow areas",
                label: "Operations covered",
              },
            ],
          },
          {
            slug: "timesheet-and-expense-platform",
            kicker: "Operations platform",
            summary:
              "A company-wide internal system replacing spreadsheet-driven time, expense, event, deadline, reporting, and approval workflows.",
            accomplishment:
              "I owned the full production build across frontend, backend, database, authentication, deployment, and day-to-day operation.",
            metrics: [
              {
                value: "70% to 95%",
                label: "Timesheet compliance",
              },
              {
                value: "50% to 90%",
                label: "Expense compliance",
              },
            ],
          },
          {
            slug: "cap-analyzer-uv-sealer",
            kicker: "Robot data tool",
            summary:
              "A Python desktop application connected to a FANUC UV sealer robot to capture load-cell traces, analyze pass/fail outcomes, and store searchable batch history.",
            accomplishment:
              "I built the operator workflow, robot communication, MongoDB persistence, threaded collection, trace normalization, and per-cap visualization.",
            metrics: [
              {
                value: "80% to 99%",
                label: "Process reliability",
              },
            ],
          },
          {
            slug: "receipt-reader-ai-feasibility-mvp",
            kicker: "AI workflow",
            summary:
              "A focused MVP proving receipt images could move through upload, OpenAI analysis, structured extraction, persistence, and expense matching.",
            accomplishment:
              "I validated the AI path before a larger build, turning receipt review into a practical human-verified workflow instead of a raw OCR experiment.",
            metrics: [
              {
                value: "1 day to 1-2h",
                label: "Receipt review time",
              },
            ],
          },
        ],
      },
    },
    about: {
      metadata: {
        title: "About – Alexey Martinez",
        description:
          "Background, career journey, strengths, and current focus for Alexey Martinez across software, AI, robotics, product development, and business operations.",
      },
      eyebrow: "About",
      title: "The same instinct has always been there: understand the system, then build a way through it.",
      intro: [
        "I grew up pulled by two forces: sports and science. Soccer taught me pace, grit, improvisation, and the habit of finding ways to compete even when the other side looked stronger.",
        "Physics and math gave that instinct structure. They taught me that if you understand the principles underneath a problem, you can build something useful instead of just reacting to pressure.",
        "That combination eventually became my work: mechanical engineering roots, robotics and product development, plant-floor automation, full-stack software, AI workflows, ERP systems, and production infrastructure.",
        "I care most about systems that make people better at their actual work: clearer decisions, fewer manual handoffs, stronger workflows, and software that holds up when the business depends on it.",
      ],
      storyEyebrow: "Origin story",
      storyTitle: "Pressure turned into range.",
      storyDescription:
        "The story is not separate from the engineering. It explains why I am comfortable with ambiguity, why I learn fast, and why I keep pulling problems back to ownership, principles, and practical outcomes.",
      storyImageAlt: 'Workspace monitor displaying the words "Do More."',
      storyChapters: [
        {
          period: "Cuba",
          kicker: "Sports and science",
          title: "Competition gave me instinct. Science gave me structure.",
          description:
            "As a kid in Cuba, I was drawn to the field and to the classroom for the same reason: both rewarded discipline, pattern recognition, and the ability to keep thinking under pressure. I passed the entrance exams into one of the strongest science-focused schools there, then left before graduating when the opportunity came to start a new life in the United States.",
        },
        {
          period: "Restart",
          kicker: "Starting over",
          title: "I learned early that pressure can either scatter you or focus you.",
          description:
            "The first years in the U.S. were not polished. I moved through instability, woke up before sunrise, biked long distances to school, worked late nights, and learned how much character is built when nobody is watching. That period gave me a simple standard: become useful, become capable, and do not wait for perfect conditions.",
        },
        {
          period: "MDC / FIU",
          kicker: "Engineering discipline",
          title: "School became the way to turn ambition into skill.",
          description:
            "I graduated high school with a 3.9 GPA, went to Miami Dade College, tutored chemistry, worked service jobs, helped support family, and kept moving toward engineering. At FIU, I focused on robotics, became a Statics Learning Assistant, and built foundations in C, Python, Linux, ROS2, MATLAB, mechanics, and systems thinking.",
        },
        {
          period: "GE / UBreakiFix",
          kicker: "Early ownership",
          title: "The work got practical quickly.",
          description:
            "At GE Appliances, I supported HVAC and ductless systems through testing, validation, design work, and product issue discovery during COVID-era constraints. At ubreakifix, I moved from technician into technical leadership, managed repairs, inventory, customer handoffs, and store execution, and helped increase store revenue by about 50%.",
        },
        {
          period: "Encore",
          kicker: "Systems builder",
          title: "The through-line became business-critical systems.",
          description:
            "At Encore Automation, the range widened: robotic tooling, plant troubleshooting, Python/FANUC tools, Next.js web work, React/Node operations platforms, ERP leadership, AI receipt analysis, Linux/Docker deployments, CI/CD, and mentoring. The pattern stayed the same: find the operational pressure, understand the system, build the useful path, and keep improving it.",
        },
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
      personalEyebrow: "Personal compass",
      personalTitle: "The work is technical, but the fuel is personal.",
      personalDescription:
        "I keep a small set of influences close because they sharpen the way I think about standards, courage, curiosity, faith, competition, and ownership. They are not there to decorate the story. They are reminders of the kind of builder I am trying to become.",
      personalInfluences: [
        {
          title: "Soccer",
          description:
            "Still my reset and my classroom for competition: rhythm, humility, pressure, resilience, and learning from both wins and losses.",
        },
        {
          title: "Faith and standards",
          description:
            "Faith gives me a moral center. Standards keep me honest about whether the work is useful, reliable, and worthy of the people depending on it.",
        },
        {
          title: "Builders I study",
          description:
            "Messi, Cristiano, Leonardo da Vinci, Elon Musk, Jesus Christ, and Patrick Bet-David each represent a different lesson: excellence, discipline, curiosity, first principles, sacrifice, and ownership.",
        },
      ],
      skillGroupsTitle: "What I bring to a team",
      skillGroups: [
        {
          title: "Languages & Frameworks",
          items: [
            "JavaScript",
            "TypeScript",
            "Node.js",
            "React",
            "Angular",
            "Python",
            "Java",
            "Next.js",
            ".NET",
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
        "The work I want more of sits at the intersection of product development, full-stack systems, AI-enabled workflows, operations automation, and architecture: practical systems that help businesses grow, remove friction, and hold up in production.",
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
      eyebrow: "Route not found",
      title: "Page not found",
      description:
        "This page is not part of the system anymore, or the link is pointing to the wrong place.",
      action: "Go back home",
      projectsAction: "View projects",
      contactAction: "Contact",
      checks: [
        {
          title: "Back to the signal",
          description:
            "The main portfolio is still available with project evidence, career context, and contact options.",
        },
        {
          title: "Route cleaned up",
          description:
            "Some pages are intentionally removed while the site gets sharper and more focused.",
        },
        {
          title: "Still reachable",
          description:
            "Use the contact page if the missing page was something you expected to see.",
        },
      ],
    },
    errorPage: {
      eyebrow: "Unexpected error",
      title: "Something broke while loading this page.",
      description:
        "The request reached the site, but the page hit an unexpected problem. You can retry the render or jump back to a stable section.",
      retryAction: "Try again",
      homeAction: "Go home",
      projectsAction: "View projects",
      contactAction: "Contact",
      checks: [
        {
          title: "Retry first",
          description:
            "A refresh can clear a transient render or network issue without changing where you were going.",
        },
        {
          title: "Stable paths",
          description:
            "The home, project, about, and contact pages are the primary routes for reviewing the portfolio.",
        },
        {
          title: "Report context",
          description:
            "If this keeps happening, send the route and what you were trying to open.",
        },
      ],
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
        title: "Projects – Alexey Martinez",
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
        title: "Services – Alexey Martinez",
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
        title: "Contact – Alexey Martinez",
        description:
          "Contact Alexey Martinez for software, automation, AI workflow, and systems engineering conversations.",
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
      portraitAlt: "Retrato de Alexey Martinez",
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
          href: "https://www.linkedin.com/in/alexey-martinez/",
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
              "Construí una plataforma MVC interna para dashboards de progreso y apoyé trabajo en sistemas A/C ductless, diseño de componentes, pruebas y validación.",
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
              "Lideré operaciones de técnicos y servicio al cliente, mejoré workflows, aumenté ingresos con seguimiento de procesos y gestioné reparaciones certificadas e inventario.",
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
            title: "Ingeniero de sistemas y software",
            logo: "encore",
            summary:
              "Progresé de desarrollo de producto, automatización y robótica hacia arquitectura de software, liderazgo ERP, adopción de IA, mentoría técnica y sistemas Docker/Linux en producción.",
            start: {
              label: "Jul 2021",
              dateTime: "2021-07",
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
        title: "Inicio – Alexey Martinez",
        description:
          "Portafolio de Alexey Martinez, systems builder usando software, IA, automatización e ingeniería para resolver problemas de negocio.",
      },
      eyebrow: "Software / IA / Automatizacion / Operaciones",
      title: "Ingeniero  Builder  Problem Solver",
      titleLines: [
        "Ingeniero.",
        "Builder.",
        "Problem Solver.",
      ],
      intro: [
        "Soy un systems builder bilingüe basado en Miami, en proceso de reubicación desde Michigan, y disponible para oportunidades presenciales en Miami, Fort Lauderdale y el sur de Florida.",
        "Uso software, IA, automatización e ingeniería para resolver problemas de negocio: workflows ERP, plataformas internas, análisis de recibos con IA, pipelines de robots, sistemas de desarrollo de producto e infraestructura self-hosted confiable.",
        "La línea central es ownership: encontrar el cuello de botella operativo, diseñar el sistema, construirlo, desplegarlo, medir el resultado y seguir mejorándolo.",
      ],
      ctas: {
        about: "Sobre mí",
        projects: "Ver proyectos",
        contact: "Contacto",
        downloadCv: "Descargar CV",
      },
      highlights: [
        {
          value: "70% a 95%",
          label: "Cumplimiento de timesheets",
        },
        {
          value: "50% a 90%",
          label: "Cumplimiento de gastos",
        },
        {
          value: "80% a 99%",
          label: "Confiabilidad de proceso",
        },
        {
          value: "1 día a 1-2h",
          label: "Revisión de recibos",
        },
      ],
      credibility: {
        eyebrow: "Trayectoria",
        title: "Raíces mecánicas, ownership de software, resultados de negocio",
        description:
          "Mi camino cruza ingeniería mecánica enfocada en robótica, desarrollo de producto, automatización industrial y trabajo full-stack donde importan corrección, claridad, mantenibilidad e impacto de negocio.",
      },
      contact: {
        title: "Listo para South Florida",
        description:
          "Basado en Miami, en proceso de reubicación desde Michigan, y disponible para trabajo presencial en software, IA, sistemas y operaciones de negocio en Miami, Fort Lauderdale y el sur de Florida.",
      },
      selectedProjects: {
        eyebrow: "Casos de estudio",
        title: "Resultados conectados al trabajo",
        description:
          "Las métricas solo importan cuando la historia es clara. Estos son los proyectos detrás de los resultados: qué se construyó, qué cambió y dónde leer el caso completo.",
        cta: "Ver todos los proyectos",
        accomplishmentLabel: "Qué cambió",
        stories: [
          {
            slug: "enterprise-erp-system",
            kicker: "ERP empresarial",
            summary:
              "Un ERP con acceso por roles que une trabajo de empleados, service logs, time cards, gastos, calendario, compras, receiving, inventario y consolas de management en una sola plataforma.",
            accomplishment:
              "Lidero la arquitectura y entrega mientras coordino un equipo pequeno alrededor de modulos reutilizables, navegacion por rol y superficies de workflow diario.",
            metrics: [
              {
                value: "8+ consolas",
                label: "Accesos por rol",
              },
              {
                value: "12+ areas",
                label: "Operaciones cubiertas",
              },
            ],
          },
          {
            slug: "timesheet-and-expense-platform",
            kicker: "Plataforma operativa",
            summary:
              "Un sistema interno para reemplazar workflows en spreadsheets de tiempos, gastos, eventos, deadlines, reportes y aprobaciones.",
            accomplishment:
              "Fui owner del build de producción completo: frontend, backend, base de datos, autenticación, despliegue y operación diaria.",
            metrics: [
              {
                value: "70% a 95%",
                label: "Cumplimiento de timesheets",
              },
              {
                value: "50% a 90%",
                label: "Cumplimiento de gastos",
              },
            ],
          },
          {
            slug: "cap-analyzer-uv-sealer",
            kicker: "Herramienta robot",
            summary:
              "Una aplicación desktop en Python conectada a un robot FANUC UV sealer para capturar trazas, analizar pass/fail y guardar historial consultable.",
            accomplishment:
              "Construí el workflow de operador, comunicación con robot, persistencia MongoDB, recolección en hilos, normalización de trazas y visualización por cap.",
            metrics: [
              {
                value: "80% a 99%",
                label: "Confiabilidad de proceso",
              },
            ],
          },
          {
            slug: "receipt-reader-ai-feasibility-mvp",
            kicker: "Workflow de IA",
            summary:
              "Un MVP enfocado para probar si recibos podían pasar por upload, análisis con OpenAI, extracción estructurada, persistencia y matching de gastos.",
            accomplishment:
              "Validé la ruta de IA antes de una implementación mayor, convirtiendo la revisión de recibos en un workflow práctico con verificación humana.",
            metrics: [
              {
                value: "1 día a 1-2h",
                label: "Tiempo de revisión",
              },
            ],
          },
        ],
      },
    },
    about: {
      metadata: {
        title: "Sobre mí – Alexey Martinez",
        description:
          "Trayectoria, fortalezas y enfoque actual de Alexey Martinez entre software, IA, robótica, desarrollo de producto y operaciones.",
      },
      eyebrow: "Sobre mí",
      title: "El mismo instinto siempre ha estado ahí: entender el sistema y construir un camino.",
      intro: [
        "Crecí atraído por dos fuerzas: el deporte y la ciencia. El fútbol me enseñó ritmo, carácter, improvisación y la costumbre de buscar cómo competir incluso cuando el otro lado parecía más fuerte.",
        "La física y la matemática le dieron estructura a ese instinto. Me enseñaron que si entiendes los principios debajo de un problema, puedes construir algo útil en lugar de solo reaccionar a la presión.",
        "Esa combinación terminó convirtiéndose en mi trabajo: raíces en ingeniería mecánica, robótica y desarrollo de producto, automatización industrial, software full-stack, workflows de IA, sistemas ERP e infraestructura de producción.",
        "Lo que más me importa son sistemas que hacen mejor el trabajo real de las personas: decisiones más claras, menos handoffs manuales, workflows más fuertes y software que aguanta cuando el negocio depende de él.",
      ],
      storyEyebrow: "Historia",
      storyTitle: "La presión se convirtió en rango.",
      storyDescription:
        "La historia no está separada de la ingeniería. Explica por qué me siento cómodo con ambigüedad, por qué aprendo rápido y por qué siempre vuelvo a ownership, principios y resultados prácticos.",
      storyImageAlt: 'Monitor de trabajo mostrando las palabras "Do More."',
      storyChapters: [
        {
          period: "Cuba",
          kicker: "Deporte y ciencia",
          title: "La competencia me dio instinto. La ciencia me dio estructura.",
          description:
            "De niño en Cuba, el campo y el aula me atraían por la misma razón: ambos premiaban disciplina, reconocer patrones y seguir pensando bajo presión. Pasé los exámenes de entrada a una de las escuelas más fuertes enfocadas en ciencias, y salí antes de graduarme cuando llegó la oportunidad de empezar una nueva vida en Estados Unidos.",
        },
        {
          period: "Reinicio",
          kicker: "Empezar de cero",
          title: "Aprendí temprano que la presión te dispersa o te enfoca.",
          description:
            "Los primeros años en Estados Unidos no fueron perfectos. Viví inestabilidad, despertaba antes del amanecer, manejaba bicicleta largas distancias para ir a la escuela, trabajaba tarde y aprendí cuánto carácter se construye cuando nadie está mirando. Esa etapa me dejó un estándar simple: ser útil, ser capaz y no esperar condiciones perfectas.",
        },
        {
          period: "MDC / FIU",
          kicker: "Disciplina de ingeniería",
          title: "La escuela se convirtió en la forma de convertir ambición en habilidad.",
          description:
            "Me gradué de high school con 3.9 GPA, fui a Miami Dade College, enseñé química como tutor, trabajé en servicio, ayudé a mi familia y seguí avanzando hacia ingeniería. En FIU me enfoqué en robótica, fui asistente de aprendizaje de Estática y construí bases en C, Python, Linux, ROS2, MATLAB, mecánica y pensamiento de sistemas.",
        },
        {
          period: "GE / UBreakiFix",
          kicker: "Ownership temprano",
          title: "El trabajo se volvió práctico rápido.",
          description:
            "En GE Appliances apoyé sistemas HVAC y ductless con pruebas, validación, diseño y detección de problemas de producto durante las restricciones de COVID. En ubreakifix pasé de técnico a liderazgo técnico, manejé reparaciones, inventario, entregas a clientes y operación de tienda, ayudando a aumentar ingresos aproximadamente 50%.",
        },
        {
          period: "Encore",
          kicker: "Systems builder",
          title: "La línea central se volvió sistemas críticos para el negocio.",
          description:
            "En Encore Automation el rango se amplió: tooling robótico, troubleshooting en planta, herramientas Python/FANUC, trabajo web con Next.js, plataformas operativas React/Node, liderazgo ERP, análisis de recibos con IA, despliegues Linux/Docker, CI/CD y mentoría. El patrón siguió siendo el mismo: encontrar la presión operativa, entender el sistema, construir el camino útil y mejorarlo.",
        },
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
      personalEyebrow: "Brújula personal",
      personalTitle: "El trabajo es técnico, pero el combustible es personal.",
      personalDescription:
        "Mantengo ciertas influencias cerca porque afilan cómo pienso sobre estándares, valentía, curiosidad, fe, competencia y ownership. No están para decorar la historia. Son recordatorios del tipo de builder que intento llegar a ser.",
      personalInfluences: [
        {
          title: "Fútbol",
          description:
            "Sigue siendo mi reset y una escuela de competencia: ritmo, humildad, presión, resiliencia y aprender tanto de ganar como de perder.",
        },
        {
          title: "Fe y estándares",
          description:
            "La fe me da centro moral. Los estándares me obligan a ser honesto sobre si el trabajo es útil, confiable y digno de las personas que dependen de él.",
        },
        {
          title: "Builders que estudio",
          description:
            "Messi, Cristiano, Leonardo da Vinci, Elon Musk, Jesus Christ y Patrick Bet-David representan lecciones distintas: excelencia, disciplina, curiosidad, primeros principios, sacrificio y ownership.",
        },
      ],
      skillGroupsTitle: "Lo que aporto a un equipo",
      skillGroups: [
        {
          title: "Lenguajes y frameworks",
          items: [
            "JavaScript",
            "TypeScript",
            "Node.js",
            "React",
            "Angular",
            "Python",
            "Java",
            "Next.js",
            ".NET",
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
        "El trabajo que quiero seguir haciendo vive entre desarrollo de producto, sistemas full-stack, workflows habilitados por IA, automatización de operaciones y arquitectura: sistemas prácticos que ayudan a negocios a crecer, eliminan fricción y se sostienen en producción.",
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
      eyebrow: "Ruta no encontrada",
      title: "Página no encontrada",
      description:
        "Esta pagina ya no forma parte del sistema, o el enlace apunta al lugar equivocado.",
      action: "Volver al inicio",
      projectsAction: "Ver proyectos",
      contactAction: "Contacto",
      checks: [
        {
          title: "Volver a lo importante",
          description:
            "El portfolio principal sigue disponible con evidencia de proyectos, contexto de carrera y opciones de contacto.",
        },
        {
          title: "Ruta limpiada",
          description:
            "Algunas paginas se eliminan intencionalmente mientras el sitio se vuelve mas enfocado.",
        },
        {
          title: "Sigo disponible",
          description:
            "Usa la pagina de contacto si la pagina faltante era algo que esperabas ver.",
        },
      ],
    },
    errorPage: {
      eyebrow: "Error inesperado",
      title: "Algo fallo al cargar esta pagina.",
      description:
        "La solicitud llego al sitio, pero la pagina encontro un problema inesperado. Puedes intentar cargar de nuevo o volver a una seccion estable.",
      retryAction: "Intentar de nuevo",
      homeAction: "Ir al inicio",
      projectsAction: "Ver proyectos",
      contactAction: "Contacto",
      checks: [
        {
          title: "Primero reintentar",
          description:
            "Un refresh puede resolver un problema temporal de render o red sin cambiar a donde ibas.",
        },
        {
          title: "Rutas estables",
          description:
            "Home, proyectos, about y contacto son las rutas principales para revisar el portfolio.",
        },
        {
          title: "Reportar contexto",
          description:
            "Si sigue pasando, envia la ruta y que estabas intentando abrir.",
        },
      ],
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
        title: "Proyectos – Alexey Martinez",
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
        title: "Servicios – Alexey Martinez",
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
        title: "Contacto – Alexey Martinez",
        description:
          "Contacta a Alexey Martinez para conversaciones sobre software, automatización, IA y sistemas.",
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
