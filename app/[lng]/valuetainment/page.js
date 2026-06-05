import Image from "next/image";
import Link from "next/link";

import { fallbackLng } from "@/app/i18n/settings";
import { BusinessOutcomeQuote } from "@/components/content/business-outcome-quote";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Header } from "@/components/ui/header";
import { createPageMetadata } from "@/lib/seo";
import { getSiteCopy } from "@/lib/site-copy";
import { getProjectBySlug } from "@/lib/site-content";

const copyByLocale = {
  en: {
    metadata: {
      title: "A Private Note For Valuetainment - Alexey Martinez",
      description:
        "A private role-fit page for Valuetainment, connecting Alexey Martinez's systems-builder background to media, education, events, software, AI workflows, and business operations.",
    },
    kicker: "Private note",
    title: "A systems builder for a builder's company.",
    intro: [
      "What stands out to me about Valuetainment is not only the media reach. It is the operating idea behind it: build a company around leadership, entrepreneurship, capitalism, debate, education, events, community, and products that help ambitious people think and execute better.",
      "That world makes sense to me because my own path has been shaped by ownership under pressure. Mechanical engineering roots, robotics and product development, internal business software, ERP leadership, AI workflow experiments, production infrastructure, and a constant pull toward building systems that make companies run clearer.",
    ],
    ctas: {
      contact: "Start the conversation",
      projects: "See the proof",
      resume: "Download resume",
    },
    brandTitle: "The brand I am responding to",
    brandIntro:
      "Publicly, Valuetainment presents itself as a business ecosystem, not a narrow media outlet. The pieces connect: content, education, consulting, events, products, community, and a culture of high ownership.",
    brandSignals: [
      {
        title: "Mission and audience",
        description:
          "The mission speaks to current and future leaders, and the audience includes entrepreneurs, founders, students, intrapreneurs, executives, and decision-makers.",
      },
      {
        title: "Builder culture",
        description:
          "The culture language is about thinkers, builders, doers, high standards, growth, and extreme ownership. That is a much better fit for me than a comfortable, slow-moving engineering environment.",
      },
      {
        title: "Business ecosystem",
        description:
          "The company is not one product. It connects media, Bet-David Consulting, The Vault, Valuetainment University, Minnect, commerce, events, and support operations.",
      },
      {
        title: "Execution over theory",
        description:
          "The strongest public message around The Vault and consulting side is not inspiration alone. It is strategy, execution, clarity, and the next moves a business needs to make.",
      },
    ],
    fitTitle: "Where my background maps",
    fitIntro:
      "I am not trying to force a one-to-one match. The fit is in the pattern: I build systems for pressure, scale, visibility, and execution.",
    fitRows: [
      {
        label: "Entrepreneurial audience",
        value:
          "My story is rooted in pressure, starting over, working while studying, engineering discipline, and learning to turn constraints into capability.",
      },
      {
        label: "Operational scale",
        value:
          "I have built platforms for daily business operations: time, expenses, approvals, reminders, reporting, roles, and production reliability.",
      },
      {
        label: "Products and workflows",
        value:
          "I have worked across ERP, mobile MVPs, internal tools, AI receipt analysis, website/product storytelling, robotics data, and controls-project architecture.",
      },
      {
        label: "Builder culture",
        value:
          "I am comfortable with ownership, ambiguity, direct feedback, high standards, and building useful systems before everything is perfectly defined.",
      },
    ],
    leverageTitle: "What I would bring to the role",
    leverageIntro:
      "The immediate case is not that I know every opportunity inside the company. It is that I can join the team, understand the product and business context quickly, and contribute to the software already on the roadmap.",
    leverageItems: [
      "Product-minded implementation: understand the user flow, business goal, edge cases, and acceptance criteria before turning work into code.",
      "Full-stack range: contribute across frontend, backend, API contracts, dashboards, admin surfaces, authentication flows, and data-backed workflows.",
      "Production habits: readable code, practical validation, useful tests where risk is highest, clear error handling, and respect for security boundaries.",
      "AI-assisted speed with human judgment: use tools for tests, review, scaffolding, research, and documentation without outsourcing architecture decisions.",
      "Team communication: ask the right questions, reduce ambiguity, document decisions, take feedback directly, and keep progress visible.",
      "Problem-solving under pressure: stay relentless when the problem matters, learn fast when the terrain is new, adapt when evidence changes, and pivot before pride turns into wasted effort.",
    ],
    proofEyebrow: "Proof points",
    proofTitle: "The work behind the claim",
    proofIntro:
      "These projects are not meant to say I have already worked inside Valuetainment's exact business. They show the kinds of systems judgment, ownership, and cross-functional execution that would transfer.",
    projectAngles: {
      "enterprise-erp-system":
        "Leading a role-based ERP build across employee, manager, admin, purchasing, receiving, inventory, engineering, and developer workflows.",
      "timesheet-and-expense-platform":
        "Built and operated a production internal platform that replaced spreadsheet-driven work with approvals, reminders, reporting, security, and uptime.",
      "bridge-mobile-app":
        "Private React Native MVP showing mobile product thinking: auth, feed, posts, comments, likes, map search, location, and API-backed workflows.",
      "receipt-reader-ai-feasibility-mvp":
        "AI workflow experiment that moved receipt images into structured extraction, human review, and expense-matching feasibility.",
      "encore-website-rebuild":
        "Company web rebuild connecting technical execution with product visibility, SEO, contact conversion, and media/product assets.",
      "controls-tracker-consulting":
        "Architecture thinking for a project tracker: ownership, blockers, tasks, reporting, permissions, and execution visibility.",
    },
    growthTitle: "The honest growth edge",
    growthCopy: [
      "I am not presenting myself as someone who has spent years inside a pure SaaS company. That would not be accurate.",
      "What I am saying is that my current work has been moving toward the same product patterns: authenticated applications, role-based workflows, dashboards, API-backed user flows, admin tooling, mobile MVPs, AI-assisted features, and production systems. Customer-facing SaaS and product engineering are the next step I am intentionally growing into.",
      "That is part of why Valuetainment interests me. It is a place where software is connected to business, media, education, events, community, and revenue. That is a more compelling environment to me than building isolated features without understanding the company behind them.",
    ],
    closeTitle: "The short version",
    closeCopy:
      "I am drawn to Valuetainment because it is a builder's company serving builders. My value is not that I fit into a narrow box. It is that I can understand pressure, find the system, build the useful slice, and keep improving it until it helps the business move.",
  },
  es: {
    metadata: {
      title: "Nota privada para Valuetainment - Alexey Martinez",
      description:
        "Pagina privada de fit para Valuetainment, conectando el perfil systems-builder de Alexey Martinez con media, educacion, eventos, software, IA y operaciones de negocio.",
    },
    kicker: "Nota privada",
    title: "Un systems builder para una compania de builders.",
    intro: [
      "Lo que me llama la atencion de Valuetainment no es solo el alcance en media. Es la idea operativa detras: construir una compania alrededor de liderazgo, entrepreneurship, capitalismo, debate, educacion, eventos, comunidad y productos que ayudan a gente ambiciosa a pensar y ejecutar mejor.",
      "Ese mundo tiene sentido para mi porque mi propio camino ha sido formado por ownership bajo presion. Raices en mechanical engineering, robotica y desarrollo de producto, software interno de negocio, liderazgo ERP, experimentos con IA, infraestructura de produccion y el impulso constante de construir sistemas que hagan las companias mas claras.",
    ],
    ctas: {
      contact: "Iniciar conversacion",
      projects: "Ver evidencia",
      resume: "Descargar resume",
    },
    brandTitle: "La marca a la que estoy respondiendo",
    brandIntro:
      "Publicamente, Valuetainment se presenta como un ecosistema de negocio, no como un medio aislado. Las piezas conectan: contenido, educacion, consulting, eventos, productos, comunidad y una cultura de ownership alto.",
    brandSignals: [
      {
        title: "Mision y audiencia",
        description:
          "La mision habla a lideres presentes y futuros, y la audiencia incluye entrepreneurs, founders, estudiantes, intrapreneurs, executives y decision-makers.",
      },
      {
        title: "Cultura builder",
        description:
          "El lenguaje cultural apunta a thinkers, builders, doers, altos estandares, crecimiento y extreme ownership. Eso encaja mejor conmigo que un ambiente de engineering comodo y lento.",
      },
      {
        title: "Ecosistema de negocio",
        description:
          "La compania no es un solo producto. Conecta media, Bet-David Consulting, The Vault, Valuetainment University, Minnect, commerce, eventos y operaciones de soporte.",
      },
      {
        title: "Ejecucion sobre teoria",
        description:
          "El mensaje mas fuerte alrededor de The Vault y consulting no es solo inspiracion. Es estrategia, ejecucion, claridad y los proximos movimientos que un negocio debe tomar.",
      },
    ],
    fitTitle: "Donde mi background conecta",
    fitIntro:
      "No estoy intentando forzar un match uno-a-uno. El fit esta en el patron: construyo sistemas para presion, escala, visibilidad y ejecucion.",
    fitRows: [
      {
        label: "Audiencia emprendedora",
        value:
          "Mi historia esta en presion, empezar de nuevo, trabajar mientras estudiaba, disciplina de engineering y aprender a convertir restricciones en capacidad.",
      },
      {
        label: "Escala operativa",
        value:
          "He construido plataformas para operaciones diarias: tiempo, gastos, aprobaciones, recordatorios, reporting, roles y confiabilidad en produccion.",
      },
      {
        label: "Productos y workflows",
        value:
          "He trabajado en ERP, MVPs mobile, herramientas internas, analisis de recibos con IA, website/product storytelling, data de robots y arquitectura de controles.",
      },
      {
        label: "Cultura builder",
        value:
          "Me siento comodo con ownership, ambiguedad, feedback directo, altos estandares y construir sistemas utiles antes de que todo este perfectamente definido.",
      },
    ],
    leverageTitle: "Lo que traeria al rol",
    leverageIntro:
      "El caso inmediato no es que yo conozca cada oportunidad dentro de la compania. Es que puedo entrar al equipo, entender rapido el producto y contexto de negocio, y contribuir al software que ya esta en el roadmap.",
    leverageItems: [
      "Implementacion con mentalidad de producto: entender user flow, objetivo de negocio, edge cases y acceptance criteria antes de convertir trabajo en codigo.",
      "Rango full-stack: contribuir en frontend, backend, contratos API, dashboards, superficies admin, auth flows y workflows con data.",
      "Habitos de produccion: codigo legible, validacion practica, tests utiles donde el riesgo es mayor, manejo claro de errores y respeto por limites de seguridad.",
      "Velocidad asistida por IA con juicio humano: usar herramientas para tests, review, scaffolding, research y documentacion sin delegar decisiones de arquitectura.",
      "Comunicacion de equipo: hacer buenas preguntas, reducir ambiguedad, documentar decisiones, recibir feedback directo y mantener progreso visible.",
      "Resolucion de problemas bajo presion: mantenerme relentless cuando el problema importa, aprender rapido cuando el terreno es nuevo, adaptarme cuando la evidencia cambia y pivotear antes de que el orgullo se convierta en esfuerzo perdido.",
    ],
    proofEyebrow: "Evidencia",
    proofTitle: "El trabajo detras del claim",
    proofIntro:
      "Estos proyectos no dicen que ya trabaje dentro del negocio exacto de Valuetainment. Muestran el criterio de sistemas, ownership y ejecucion cross-functional que si transfiere.",
    projectAngles: {
      "enterprise-erp-system":
        "Liderando un ERP por roles para workflows de empleados, managers, admin, purchasing, receiving, inventario, engineering y developer.",
      "timesheet-and-expense-platform":
        "Construi y opere una plataforma interna de produccion que reemplazo trabajo en spreadsheets con aprobaciones, recordatorios, reporting, seguridad y uptime.",
      "bridge-mobile-app":
        "MVP privado en React Native que muestra pensamiento de producto mobile: auth, feed, posts, comments, likes, busqueda en mapa, location y workflows con API.",
      "receipt-reader-ai-feasibility-mvp":
        "Experimento de IA que movio imagenes de recibos hacia extraccion estructurada, revision humana y factibilidad de matching de gastos.",
      "encore-website-rebuild":
        "Rebuild web corporativo conectando ejecucion tecnica con visibilidad de producto, SEO, conversion de contacto y assets de media/producto.",
      "controls-tracker-consulting":
        "Pensamiento de arquitectura para project tracker: ownership, blockers, tareas, reporting, permisos y visibilidad de ejecucion.",
    },
    growthTitle: "El growth edge honesto",
    growthCopy: [
      "No me estoy presentando como alguien con anos dentro de una compania SaaS pura. Eso no seria preciso.",
      "Lo que si digo es que mi trabajo actual se ha ido moviendo hacia patrones de producto similares: apps autenticadas, workflows por rol, dashboards, user flows con API, admin tooling, MVPs mobile, features asistidas por IA y sistemas de produccion. Customer-facing SaaS y product engineering son el siguiente paso al que estoy creciendo intencionalmente.",
      "Eso es parte de por que Valuetainment me interesa. Es un lugar donde software conecta con negocio, media, educacion, eventos, comunidad y revenue. Ese ambiente me resulta mas interesante que construir features aislados sin entender la compania detras.",
    ],
    closeTitle: "La version corta",
    closeCopy:
      "Me atrae Valuetainment porque es una compania de builders sirviendo a builders. Mi valor no es encajar en una caja estrecha. Es entender la presion, encontrar el sistema, construir el slice util y seguir mejorandolo hasta que ayude al negocio a moverse.",
  },
};

const proofSlugs = [
  "enterprise-erp-system",
  "timesheet-and-expense-platform",
  "bridge-mobile-app",
  "receipt-reader-ai-feasibility-mvp",
  "encore-website-rebuild",
  "controls-tracker-consulting",
];

function getCopy(lng) {
  return copyByLocale[lng] ?? copyByLocale[fallbackLng];
}

export async function generateMetadata({ params }) {
  const { lng } = await params;
  const copy = getCopy(lng);

  return {
    ...createPageMetadata(lng, "/valuetainment", copy.metadata),
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  };
}

function ExternalButton({ href, children, variant = "dark" }) {
  const classes =
    variant === "accent"
      ? "inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
      : "inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200";

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}

function SectionHeader({ kicker, title, description }) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-500">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ProjectProofCard({ project, angle, lng }) {
  return (
    <Link
      href={`/${lng}/projects/${project.slug}`}
      className="group block overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-sm shadow-zinc-900/5 transition hover:-translate-y-1 hover:border-orange-300/70 hover:shadow-xl hover:shadow-zinc-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 dark:hover:border-orange-400/40"
    >
      <article>
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-6">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-orange-500">
            {project.role}
          </p>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {angle}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default async function ValuetainmentPage({ params }) {
  const { lng } = await params;
  const copy = getCopy(lng);
  const siteCopy = getSiteCopy(lng);
  const projects = proofSlugs
    .map((slug) => {
      const project = getProjectBySlug(slug, lng);

      return project
        ? {
            ...project,
            angle: copy.projectAngles[slug],
          }
        : null;
    })
    .filter(Boolean);

  return (
    <>
      <Header />
      <Container className="mt-16 sm:mt-32">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500">
              {copy.kicker}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              {copy.title}
            </h1>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {copy.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <ExternalButton
                href="mailto:alexeygallegomartinez@gmail.com?subject=Valuetainment%20conversation"
                variant="accent"
              >
                {copy.ctas.contact}
              </ExternalButton>
              <Button href={`/${lng}/projects`} variant="secondary">
                {copy.ctas.projects}
              </Button>
              <ExternalButton href="/Resume.pdf">
                {copy.ctas.resume}
              </ExternalButton>
            </div>
          </div>

          <aside className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {copy.brandTitle}
            </h2>
            <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {copy.brandIntro}
            </p>
            <div className="mt-6 space-y-5">
              {copy.brandSignals.map((signal) => (
                <div
                  key={signal.title}
                  className="border-t border-zinc-100 pt-5 first:border-t-0 first:pt-0 dark:border-zinc-800"
                >
                  <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {signal.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {signal.description}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-20 sm:mt-24">
          <SectionHeader title={copy.fitTitle} description={copy.fitIntro} />
          <div className="mt-10 divide-y divide-zinc-200/70 rounded-3xl border border-zinc-200/70 bg-white shadow-sm shadow-zinc-900/5 dark:divide-zinc-800 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20">
            {copy.fitRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-3 p-6 sm:grid-cols-[14rem_minmax(0,1fr)] sm:p-7"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                  {row.label}
                </h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {row.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <BusinessOutcomeQuote statement={siteCopy.services.outcomesStatement} />

        <section className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:mt-24">
          <SectionHeader
            title={copy.leverageTitle}
            description={copy.leverageIntro}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.leverageItems.map((item, index) => (
              <article
                key={item}
                className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 sm:mt-24">
          <SectionHeader
            kicker={copy.proofEyebrow}
            title={copy.proofTitle}
            description={copy.proofIntro}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectProofCard
                key={project.slug}
                project={project}
                angle={project.angle}
                lng={lng}
              />
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:mt-24">
          <article className="rounded-3xl border border-zinc-200/70 bg-white p-8 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {copy.growthTitle}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {copy.growthCopy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-zinc-200/70 bg-zinc-950 p-8 text-white shadow-xl shadow-zinc-900/10 dark:border-zinc-700/60 dark:bg-white dark:text-zinc-950 dark:shadow-black/20 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight">
              {copy.closeTitle}
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-300 dark:text-zinc-700">
              {copy.closeCopy}
            </p>
            <div className="mt-8">
              <ExternalButton
                href="mailto:alexeygallegomartinez@gmail.com?subject=Valuetainment%20conversation"
                variant="accent"
              >
                {copy.ctas.contact}
              </ExternalButton>
            </div>
          </article>
        </section>
      </Container>
    </>
  );
}
