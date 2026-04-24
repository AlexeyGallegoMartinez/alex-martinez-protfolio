import { fallbackLng } from "@/app/i18n/settings";


const articleEntries = [
  {
    slug: "agentic-workflow-patterns-and-orchestration",
    category: {
      en: "AI",
      es: "IA",
    },
    tags: {
      en: ["Agents", "Workflows", "Orchestration"],
      es: ["Agentes", "Workflows", "Orquestacion"],
    },
    coverImage: "/agentic-workflow.svg",
    featured: true,
    publishedAt: "2026-04-20",
    updatedAt: "2026-04-20",
    title: {
      en: "Agentic Workflow: patterns, orchestration, and practical guardrails",
      es: "Workflow agentico: patrones, orquestacion y guardrails practicos",
    },
    summary: {
      en: "A practical guide to moving from single LLM calls into agentic systems using routing, parallelization, evaluator loops, tool use, and operational guardrails.",
      es: "Una guia practica para pasar de llamadas unicas a LLM hacia sistemas agenticos usando ruteo, paralelizacion, loops de evaluacion, uso de herramientas y guardrails operativos.",
    },
    body: {
      en: [
        {
          title: "From one model call to a workflow",
          paragraphs: [
            "A single chat completion call is the foundation: define messages, choose a model, and return a response. This solves many tasks quickly and should be your baseline before adding complexity.",
            "Agentic design starts when model outputs are no longer just final text, but become control signals that determine what happens next in the system.",
          ],
        },
        {
          title: "What makes a system agentic",
          paragraphs: [
            "In practice, agentic systems combine multiple model calls, tool usage, an execution environment, some planning or coordination logic, and a degree of autonomy.",
            "The key distinction is control flow: the LLM can influence or direct workflow execution instead of only answering one prompt.",
          ],
        },
        {
          title: "Workflow systems vs agents",
          paragraphs: [
            "Workflows are predefined paths where code orchestrates model and tool steps in a fixed sequence. This gives predictability and is usually easier to test.",
            "Agents are open-ended systems where the model decides which actions to take and in what order. This gives flexibility, but increases uncertainty and cost variability.",
          ],
        },
        {
          title: "Five workflow patterns that matter",
          paragraphs: [
            "Prompt chaining: split one large task into fixed subtasks with clear handoffs.",
            "Routing: classify the input and send it to a specialized handler.",
            "Parallelization: run independent subtasks concurrently (for sectioning or voting style aggregation).",
            "Orchestrator-workers: dynamically break down tasks and delegate work based on input shape.",
            "Evaluator-optimizer: generate, evaluate, and retry in a feedback loop until quality passes threshold.",
          ],
        },
        {
          title: "Orchestrating multiple models in practice",
          paragraphs: [
            "A practical orchestration pattern is parallel responses from multiple models followed by a judge model that ranks outputs. This combines diversity (parallelization) with quality control (evaluation).",
            "You can also run evaluator-optimizer loops where one model writes and another validates. If validation fails, the system retries with explicit feedback.",
          ],
        },
        {
          title: "Resources vs tools",
          paragraphs: [
            "Resources improve model context by providing relevant data in the prompt or retrieval layer. This strengthens reasoning quality without giving action permissions.",
            "Tools enable action: database queries, API calls, file operations, or external service lookups. In many systems, the model proposes tool actions and application code executes them safely.",
          ],
        },
        {
          title: "Framework choice and production reality",
          paragraphs: [
            "Frameworks can accelerate prototyping, but production systems often need fewer abstractions and tighter control over prompts, retries, state, and observability.",
            "When agent behavior is unpredictable, risk appears in execution path, output quality, and cost. Mitigation comes from monitoring, budgets, rate limits, and explicit guardrails.",
          ],
        },
        {
          title: "Build principles I follow",
          paragraphs: [
            "Keep design simple, make planning steps transparent, and document every tool interface like a production API contract.",
            "Start with deterministic workflows, then introduce autonomy where it provides measurable value. Reliability should scale with capability, not trail behind it.",
          ],
        },
      ],
      es: [
        {
          title: "De una llamada unica a un workflow",
          paragraphs: [
            "Una sola llamada de chat completion es la base: defines mensajes, eliges modelo y devuelves respuesta. Eso resuelve muchos casos y debe ser el punto de partida.",
            "El diseno agentico comienza cuando la salida del modelo deja de ser solo texto final y pasa a controlar lo que el sistema hace despues.",
          ],
        },
        {
          title: "Que hace agentico a un sistema",
          paragraphs: [
            "En la practica, un sistema agentico combina multiples llamadas a modelos, uso de herramientas, un entorno de ejecucion, logica de planificacion/coordinacion y cierto nivel de autonomia.",
            "La diferencia clave es el control de flujo: el LLM influye o dirige la ejecucion, no solo responde un prompt.",
          ],
        },
        {
          title: "Workflows vs agentes",
          paragraphs: [
            "Los workflows son rutas predefinidas donde el codigo orquesta pasos de modelo y herramientas en secuencia fija. Son mas predecibles y faciles de probar.",
            "Los agentes son sistemas abiertos donde el modelo decide que accion tomar y en que orden. Dan flexibilidad, pero aumentan incertidumbre y variacion de costo.",
          ],
        },
        {
          title: "Cinco patrones de workflow",
          paragraphs: [
            "Prompt chaining: dividir una tarea grande en subtareas fijas con handoffs claros.",
            "Routing: clasificar entrada y enviarla a un handler especializado.",
            "Paralelizacion: ejecutar subtareas independientes de forma concurrente (sectioning o voting).",
            "Orchestrator-workers: descomponer tareas de forma dinamica y delegar segun el tipo de entrada.",
            "Evaluator-optimizer: generar, evaluar y reintentar en loop hasta cumplir calidad.",
          ],
        },
        {
          title: "Orquestacion de multiples modelos",
          paragraphs: [
            "Un patron util es generar respuestas en paralelo con varios modelos y luego usar un modelo juez para rankear resultados. Combina diversidad con control de calidad.",
            "Tambien puedes usar loops evaluator-optimizer: un modelo redacta, otro valida, y si falla se reintenta con feedback explicito.",
          ],
        },
        {
          title: "Resources vs tools",
          paragraphs: [
            "Resources mejoran contexto al inyectar datos relevantes via prompt o retrieval. Mejoran calidad sin otorgar permisos de accion.",
            "Tools habilitan acciones: consultas DB, llamadas API, archivos o servicios externos. Normalmente el modelo propone acciones y el codigo de la app las ejecuta con seguridad.",
          ],
        },
        {
          title: "Frameworks y realidad de produccion",
          paragraphs: [
            "Los frameworks aceleran prototipos, pero en produccion muchas veces conviene reducir abstraccion y controlar mejor prompts, retries, estado y observabilidad.",
            "Cuando el comportamiento agentico es impredecible, el riesgo aparece en ruta de ejecucion, calidad de salida y costo. Se mitiga con monitoreo, presupuestos, limites y guardrails.",
          ],
        },
        {
          title: "Principios de implementacion",
          paragraphs: [
            "Mantener simplicidad, hacer visibles los pasos de planificacion y documentar cada interfaz de herramienta como contrato de API.",
            "Empieza con workflows deterministas y agrega autonomia solo donde aporta valor medible. La confiabilidad debe crecer junto a la capacidad.",
          ],
        },
      ],
    },
  },
  {
    slug: "object-oriented-programming-basics",
    category: {
      en: "Fundamentals",
      es: "Fundamentos",
    },
    tags: {
      en: ["OOP", "Programming Basics", "Design"],
      es: ["POO", "Bases de Programacion", "Diseno"],
    },
    coverImage: "/oop-basics.svg",
    featured: true,
    publishedAt: "2026-04-20",
    updatedAt: "2026-04-20",
    title: {
      en: "Object-Oriented Programming Basics",
      es: "Bases de Programacion Orientada a Objetos",
    },
    summary: {
      en: "A practical introduction to OOP: classes, objects, encapsulation, abstraction, inheritance, and polymorphism with code examples.",
      es: "Una introduccion practica a POO: clases, objetos, encapsulacion, abstraccion, herencia y polimorfismo con ejemplos de codigo.",
    },
    body: {
      en: [
        {
          title: "Background",
          paragraphs: [
            "Object-oriented programming models software around real-world entities. Instead of thinking only in functions, we model state and behavior together in objects.",
            "A class acts as a blueprint, and an object is an instance created from that blueprint. Attributes represent state, while methods represent behavior.",
          ],
        },
        {
          title: "OOP building blocks",
          paragraphs: [
            "Objects: real entities with state and behavior. A calculator can be on or off (state) and can add or multiply (behavior).",
            "Classes: templates for creating objects with shared structure and behavior.",
            "Attributes: variables that hold object state.",
            "Methods: functions attached to classes that define behavior.",
          ],
        },
        {
          title: "1) Encapsulation and data hiding",
          paragraphs: [
            "Encapsulation hides internal data and exposes safe public methods. A common convention is keeping class variables private and interacting through getters/setters or domain methods.",
            "This improves maintainability, control over read/write access, and protects internal consistency.",
          ],
          codeBlocks: [
            {
              language: "python",
              code: "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.__balance = balance  # private by convention\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n\n    def withdraw(self, amount):\n        if 0 < amount <= self.__balance:\n            self.__balance -= amount\n            return True\n        return False\n\n    def get_balance(self):\n        return self.__balance",
            },
          ],
        },
        {
          title: "2) Abstraction",
          paragraphs: [
            "Abstraction exposes only what users need and hides implementation details. It reduces cognitive load and keeps interfaces focused.",
            "In practice, we define a clear contract and allow concrete classes to implement details behind that contract.",
          ],
          codeBlocks: [
            {
              language: "python",
              code: "from abc import ABC, abstractmethod\n\nclass PaymentProcessor(ABC):\n    @abstractmethod\n    def pay(self, amount):\n        pass\n\nclass StripeProcessor(PaymentProcessor):\n    def pay(self, amount):\n        return f\"Paid ${amount} with Stripe\"\n\nclass PaypalProcessor(PaymentProcessor):\n    def pay(self, amount):\n        return f\"Paid ${amount} with PayPal\"",
            },
          ],
        },
        {
          title: "3) Inheritance, generalization, and specialization",
          paragraphs: [
            "Inheritance models IS-A relationships. A child class reuses and extends parent behavior.",
            "Generalization extracts shared behavior into a parent class, while specialization defines child classes with specific behavior.",
            "This supports reuse, extensibility, and better organization when multiple classes share common logic.",
          ],
          codeBlocks: [
            {
              language: "python",
              code: "class Shape:\n    def area(self):\n        raise NotImplementedError\n\nclass Rectangle(Shape):\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n\n    def area(self):\n        return self.w * self.h\n\nclass Square(Rectangle):\n    def __init__(self, side):\n        super().__init__(side, side)",
            },
          ],
        },
        {
          title: "4) Polymorphism",
          paragraphs: [
            "Polymorphism means one interface, many implementations. You can treat different subclasses through the same parent contract.",
            "Dynamic polymorphism is usually method overriding at runtime. Static polymorphism is typically method overloading/operator overloading depending on language support.",
          ],
          codeBlocks: [
            {
              language: "python",
              code: "class Animal:\n    def speak(self):\n        return \"...\"\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof\"\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Meow\"\n\ndef make_it_speak(animal: Animal):\n    return animal.speak()\n\nprint(make_it_speak(Dog()))\nprint(make_it_speak(Cat()))",
            },
          ],
        },
        {
          title: "Inheritance modes and design caution",
          paragraphs: [
            "You will hear about single, multiple, multi-level, hierarchical, and hybrid inheritance. Not every language supports each mode the same way.",
            "Use inheritance intentionally. If there is no clear IS-A relationship, composition is often a cleaner and safer design choice.",
          ],
        },
        {
          title: "Generalization, OCP, and maintainability",
          paragraphs: [
            "Generalization helps the open/closed principle: classes stay closed for modification but open for extension through new subclasses.",
            "When done well, OOP gives reusable modules, cleaner change boundaries, and easier long-term maintenance.",
          ],
        },
      ],
      es: [
        {
          title: "Contexto",
          paragraphs: [
            "La programacion orientada a objetos modela software alrededor de entidades del mundo real. En lugar de pensar solo en funciones, agrupamos estado y comportamiento en objetos.",
            "Una clase actua como plano y un objeto es una instancia creada desde ese plano. Los atributos representan estado y los metodos representan comportamiento.",
          ],
        },
        {
          title: "Bloques base de POO",
          paragraphs: [
            "Objetos: entidades con estado y comportamiento. Una calculadora puede estar encendida o apagada (estado) y sumar o multiplicar (comportamiento).",
            "Clases: plantillas para crear objetos con estructura y comportamiento compartido.",
            "Atributos: variables que guardan el estado del objeto.",
            "Metodos: funciones de clase que definen comportamiento.",
          ],
        },
        {
          title: "1) Encapsulacion y data hiding",
          paragraphs: [
            "La encapsulacion oculta datos internos y expone metodos publicos seguros. Una convencion comun es mantener variables privadas y usar getters/setters o metodos de dominio.",
            "Esto mejora mantenibilidad, control de acceso lectura/escritura y consistencia interna.",
          ],
          codeBlocks: [
            {
              language: "python",
              code: "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.__balance = balance\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n\n    def withdraw(self, amount):\n        if 0 < amount <= self.__balance:\n            self.__balance -= amount\n            return True\n        return False\n\n    def get_balance(self):\n        return self.__balance",
            },
          ],
        },
        {
          title: "2) Abstraccion",
          paragraphs: [
            "La abstraccion muestra solo lo necesario y oculta detalles de implementacion. Reduce complejidad y mantiene interfaces claras.",
            "En practica, definimos un contrato comun y dejamos que clases concretas implementen detalles.",
          ],
          codeBlocks: [
            {
              language: "python",
              code: "from abc import ABC, abstractmethod\n\nclass PaymentProcessor(ABC):\n    @abstractmethod\n    def pay(self, amount):\n        pass\n\nclass StripeProcessor(PaymentProcessor):\n    def pay(self, amount):\n        return f\"Paid ${amount} with Stripe\"\n\nclass PaypalProcessor(PaymentProcessor):\n    def pay(self, amount):\n        return f\"Paid ${amount} with PayPal\"",
            },
          ],
        },
        {
          title: "3) Herencia, generalizacion y especializacion",
          paragraphs: [
            "La herencia modela relaciones IS-A. Una clase hija reutiliza y extiende comportamiento de la clase padre.",
            "La generalizacion extrae comportamiento comun en una clase padre, y la especializacion define clases hijas con comportamiento mas especifico.",
            "Esto favorece reuso, extensibilidad y mejor organizacion del codigo.",
          ],
          codeBlocks: [
            {
              language: "python",
              code: "class Shape:\n    def area(self):\n        raise NotImplementedError\n\nclass Rectangle(Shape):\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n\n    def area(self):\n        return self.w * self.h\n\nclass Square(Rectangle):\n    def __init__(self, side):\n        super().__init__(side, side)",
            },
          ],
        },
        {
          title: "4) Polimorfismo",
          paragraphs: [
            "Polimorfismo significa una interfaz con multiples implementaciones. Podemos tratar diferentes subclases mediante un mismo contrato base.",
            "El polimorfismo dinamico suele ser overriding en runtime. El estatico suele venir de overloading u operator overloading segun el lenguaje.",
          ],
          codeBlocks: [
            {
              language: "python",
              code: "class Animal:\n    def speak(self):\n        return \"...\"\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof\"\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Meow\"\n\ndef make_it_speak(animal: Animal):\n    return animal.speak()",
            },
          ],
        },
        {
          title: "Modos de herencia y criterio de diseno",
          paragraphs: [
            "Existen herencia simple, multiple, multinivel, jerarquica e hibrida. No todos los lenguajes soportan cada modo de la misma forma.",
            "Usa herencia solo cuando haya una relacion IS-A clara. Si no, composicion suele ser una opcion mas segura.",
          ],
        },
        {
          title: "Generalizacion, OCP y mantenibilidad",
          paragraphs: [
            "La generalizacion apoya el principio open/closed: extender comportamiento sin modificar codigo estable.",
            "Bien aplicada, la POO mejora reuso, limites de cambio y mantenibilidad a largo plazo.",
          ],
        },
      ],
    },
  },
  {
    slug: "modern-web-security-oauth-oidc-pkce-and-token-lifecycles",
    category: {
      en: "Security",
      es: "Seguridad",
    },
    tags: {
      en: ["OAuth", "OIDC", "PKCE"],
      es: ["OAuth", "OIDC", "PKCE"],
    },
    coverImage: "/security-auth-architecture.svg",
    featured: true,
    publishedAt: "2026-04-24",
    updatedAt: "2026-04-24",
    title: {
      en: "Modern web security: OAuth, OIDC, PKCE, and token lifecycles",
      es: "Seguridad web moderna: OAuth, OIDC, PKCE y ciclos de vida de tokens",
    },
    summary: {
      en: "A practical breakdown of modern auth: OAuth for authorization, OIDC for authentication, PKCE for public clients, and a safer access/refresh token strategy.",
      es: "Un desglose practico de autenticacion moderna: OAuth para autorizacion, OIDC para autenticacion, PKCE para clientes publicos y una estrategia mas segura de access/refresh tokens.",
    },
    body: {
      en: [
        {
          title: "Security starts with trust boundaries",
          paragraphs: [
            "Web security is not one feature. It is the result of controlling identity, access, session lifetime, storage, transport, and failure handling across the whole system.",
            "The useful question is not just 'does login work?' but 'what happens if a browser tab is compromised, a token leaks, a session is replayed, or a refresh token is stolen?' Good auth design reduces blast radius when those things happen.",
          ],
        },
        {
          title: "OAuth handles authorization, OIDC handles authentication",
          paragraphs: [
            "OAuth 2.0 is an authorization framework. Its job is to let a client obtain delegated access to a protected resource with defined scopes and audiences.",
            "OpenID Connect sits on top of OAuth and adds identity. That means the system can answer who the user is through standardized claims and an ID token, while OAuth still governs what the client is allowed to do.",
          ],
        },
        {
          title: "Why Authorization Code + PKCE is the default choice",
          paragraphs: [
            "For browser-based apps, SPAs, mobile apps, and other public clients, Authorization Code Flow with PKCE is the modern baseline. The client starts auth, receives an authorization code, and exchanges it for tokens only after proving possession of the code verifier.",
            "PKCE matters because public clients cannot safely hold a client secret. It reduces code interception risk and closes a gap that older implicit-style flows handled poorly. In practice, there is little reason to choose implicit flow in a new application.",
          ],
        },
        {
          title: "Where JWTs fit and where teams misuse them",
          paragraphs: [
            "JWT is just a token format. It is useful because the token can carry signed claims such as issuer, audience, subject, expiration, and scopes or roles.",
            "The common mistake is treating JWT itself as the security architecture. It is not. A JWT can still be stolen, replayed, over-scoped, or accepted without proper validation if the surrounding design is weak.",
          ],
        },
        {
          title: "A practical token strategy I would ship",
          paragraphs: [
            "Use a short-lived access token, keep it in memory on the client, and avoid persisting it in localStorage or sessionStorage. If browser JavaScript is compromised, in-memory storage still limits how long the attacker can reuse the token and avoids a durable copy sitting in storage.",
            "A 15 minute access token lifetime is a practical default for many apps. It is short enough to reduce replay window, but long enough to avoid excessive refresh churn if your API surface and client behavior are reasonable.",
          ],
        },
        {
          title: "Refresh tokens should be longer lived and better protected",
          paragraphs: [
            "Refresh tokens exist to preserve user experience without making access tokens long lived. Store them in Secure, HttpOnly cookies so normal frontend JavaScript cannot read them directly.",
            "A refresh lifetime in the 15 to 90 day range is reasonable depending on device trust, session policy, and business risk. Rotation should be enabled, reuse should be detected, and logout or suspected compromise should revoke the server-side session tied to that refresh token family.",
          ],
        },
        {
          title: "Cookies do not remove the need for server checks",
          paragraphs: [
            "If you use cookies for refresh, set Secure in production, choose SameSite deliberately, and protect refresh endpoints against CSRF based on your flow. HttpOnly helps against token exfiltration through JavaScript, but it does not replace CSRF defenses or origin validation.",
            "On every protected API, validate issuer, audience, expiration, and signature. If roles or scopes drive access, validate those too, and keep authorization checks close to the resource being accessed instead of trusting the client to self-police.",
          ],
        },
        {
          title: "The practical architecture behind the recommendation",
          paragraphs: [
            "The clean mental model is simple: OIDC tells the client who authenticated, OAuth grants API access, PKCE secures the code exchange for public clients, access tokens stay short and in memory, and refresh tokens stay longer lived in HttpOnly cookies with rotation.",
            "That combination does not make a system invulnerable, but it is a strong modern default because it balances security, user experience, and operational simplicity better than long-lived browser-stored access tokens.",
          ],
        },
      ],
      es: [
        {
          title: "La seguridad empieza con limites de confianza",
          paragraphs: [
            "La seguridad web no es una sola feature. Es el resultado de controlar identidad, acceso, tiempo de sesion, almacenamiento, transporte y manejo de fallos en todo el sistema.",
            "La pregunta util no es solo 'funciona el login?' sino 'que pasa si una pestana del navegador se compromete, un token se filtra, una sesion se reusa o un refresh token es robado?' Un buen diseno reduce el blast radius cuando eso ocurre.",
          ],
        },
        {
          title: "OAuth maneja autorizacion, OIDC maneja autenticacion",
          paragraphs: [
            "OAuth 2.0 es un framework de autorizacion. Su trabajo es permitir que un cliente obtenga acceso delegado a un recurso protegido con scopes y audiencia definidos.",
            "OpenID Connect se monta sobre OAuth y agrega identidad. Eso permite responder quien es el usuario mediante claims estandarizados y un ID token, mientras OAuth sigue gobernando que puede hacer el cliente.",
          ],
        },
        {
          title: "Por que Authorization Code + PKCE es la opcion base",
          paragraphs: [
            "Para apps web, SPAs, apps moviles y otros clientes publicos, Authorization Code Flow con PKCE es el baseline moderno. El cliente inicia autenticacion, recibe un authorization code y luego lo intercambia por tokens probando posesion del code verifier.",
            "PKCE importa porque los clientes publicos no pueden guardar un client secret de forma segura. Reduce el riesgo de intercepcion del codigo y cierra un problema que los flujos implicitos resolvian mal. En una app nueva casi no hay razones para usar implicit flow.",
          ],
        },
        {
          title: "Donde encajan los JWT y donde se suelen usar mal",
          paragraphs: [
            "JWT es solo un formato de token. Es util porque puede transportar claims firmados como issuer, audience, subject, expiration y scopes o roles.",
            "El error comun es tratar JWT como si fuera toda la arquitectura de seguridad. No lo es. Un JWT tambien puede ser robado, reutilizado, sobre-privilegiado o aceptado sin validacion correcta si el diseno alrededor es debil.",
          ],
        },
        {
          title: "La estrategia de tokens que yo implementaria",
          paragraphs: [
            "Usa un access token de vida corta, mantenlo en memoria del cliente y evita persistirlo en localStorage o sessionStorage. Si el JavaScript del navegador se compromete, mantenerlo en memoria limita cuanto tiempo puede reutilizarse y evita dejar una copia durable en storage.",
            "Una expiracion de 15 minutos para el access token es un default practico para muchas apps. Es suficientemente corta para reducir ventana de replay, pero no tan corta como para generar refresh innecesario si la app esta bien construida.",
          ],
        },
        {
          title: "Los refresh tokens deben durar mas y estar mejor protegidos",
          paragraphs: [
            "Los refresh tokens existen para mantener buena experiencia de usuario sin volver largos los access tokens. Guardalos en cookies Secure y HttpOnly para que el frontend normal no pueda leerlos directamente.",
            "Una vida util de 15 a 90 dias puede ser razonable segun confianza del dispositivo, politica de sesion y riesgo del negocio. Debe existir rotacion, deteccion de reuse y revocacion de la sesion en logout o ante sospecha de compromiso.",
          ],
        },
        {
          title: "Las cookies no eliminan las validaciones del servidor",
          paragraphs: [
            "Si usas cookies para refresh, configura Secure en produccion, elige SameSite de forma intencional y protege los endpoints de refresh contra CSRF segun el flujo. HttpOnly ayuda contra exfiltracion por JavaScript, pero no reemplaza defensas CSRF ni validacion de origen.",
            "En cada API protegida valida issuer, audience, expiration y signature. Si roles o scopes controlan acceso, validalos tambien, y manten la autorizacion cerca del recurso en lugar de confiar en que el cliente se autorregule.",
          ],
        },
        {
          title: "La arquitectura practica detras de la recomendacion",
          paragraphs: [
            "El modelo mental limpio es simple: OIDC le dice al cliente quien se autentico, OAuth concede acceso al API, PKCE protege el intercambio del codigo para clientes publicos, los access tokens son cortos y viven en memoria, y los refresh tokens viven mas tiempo en cookies HttpOnly con rotacion.",
            "Esa combinacion no hace invulnerable a un sistema, pero si es un default moderno fuerte porque equilibra mejor seguridad, experiencia de usuario y simplicidad operativa que un access token largo guardado en el navegador.",
          ],
        },
      ],
    },
  },
];

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
      en: "Business Time & Expense Tracker Operations Platform",
      es: "Plataforma Operativa de Control de Tiempo y Gastos",
    },
    summary: {
      en: "Built a full-stack employee operations system for employees, managers, and admins to replace manual timesheet/expense workflows with secure submission, approvals, and reporting.",
      es: "Construí un sistema full-stack de operaciones para empleados, gerentes y administradores para reemplazar flujos manuales de tiempos y gastos con envios seguros, aprobaciones y reportes.",
    },
    body: {
      en: [
        {
          title: "Problem",
          paragraphs: [
            "Timesheet and expense workflows were manual, fragmented, and dependent on outdated tools, resulting in low visibility into submission status, approval progress, and reporting.",
            "The existing system had significant security gaps and had previously experienced a breach, highlighting the need for a more secure and controlled architecture.",
            "There was no reliable mechanism for reminding employees to complete submissions, leading to delays and administrative overhead. Event management functionality was limited and difficult to use",
            "Additionally, the system lacked mobile support and was restricted to legacy browser environments, preventing employees from submitting time and expenses efficiently, especially when uploading receipts or working remotely.",
          ],
        },
        {
          title: "Role and ownership",
          paragraphs: [
            "Owned end-to-end development and operation of a production system across frontend, backend, database, and authentication/security.",
            "Implemented core workflows (timesheets, expenses, events, reporting, RBAC) and led architecture improvements to enhance maintainability and scalability.",
          ],
        },
        {
          title: "Architecture and features",
          paragraphs: [
            "Frontend used React 18, Vite, React Router, Context API, and Tailwind. Backend used Node.js, Express, Sequelize, and MSSQL.",
            "Infrastructure was deployed on a Linux server using Docker containers, with Nginx as a reverse proxy and GitHub Actions runners enabling automated builds and updates.",
            "Security used JWT access and refresh cookies with session persistence, refresh rotation, and CSRF protection.",
            "Core functionality included secure authentication, timesheet and expense approval workflows, role-based access control (RBAC), event calendar management, and manager/admin reporting with automated reminders.",
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
            "Used by internal employees, managers, accounting, and admins, improving submission and approval efficiency while reducing manual follow-up work.",
            "Centralized reporting for both employees and accounting, and introduced in-app and email reminders to ensure timely completion of timesheets and expense submissions.",
            "Improved event management workflows, strengthened overall system security, and delivered a fully responsive interface enabling mobile access and receipt uploads, replacing a legacy, non-mobile-compatible system.",
          ],
        },
      ],
      es: [
        {
          title: "Problema",
          paragraphs: [
            "Los procesos de tiempos y gastos eran manuales y fragmentados, con baja visibilidad de envios faltantes y estado de aprobacion.",
            "El seguimiento y la reporteria requerian demasiado trabajo manual, y la seguridad de sesiones necesitaba mejoras.",
          ],
        },
        {
          title: "Rol y ownership",
          paragraphs: [
            "Fui owner de la entrega full-stack en frontend, backend, base de datos y seguridad de autenticacion/sesion.",
            "Construí flujos de tiempos, gastos, eventos, reportes y control por roles, y lidere limpieza de arquitectura para mantenibilidad.",
          ],
        },
        {
          title: "Arquitectura y funcionalidades",
          paragraphs: [
            "Frontend con React 18, Vite, React Router, Context API y Tailwind. Backend con Node.js, Express, Sequelize y MSSQL.",
            "Seguridad con JWT access/refresh en cookies, sesiones persistentes, rotacion de refresh y proteccion CSRF.",
            "Incluye autenticacion segura, aprobaciones de timesheet/gastos, RBAC, calendario de eventos y reportes con recordatorios.",
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
            "Uso interno por empleados, gerentes y administradores, con mejoras en eficiencia y menor trabajo manual de seguimiento.",
            "Repositorio y demo son internos; hay resumen de arquitectura y capturas para walkthroughs.",
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

export function getArticles(lng) {
  return articleEntries
    .map((entry) => localizeEntry(entry, lng))
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

export function getFeaturedArticles(lng, limit = 2) {
  return getArticles(lng)
    .filter((entry) => entry.featured)
    .slice(0, limit);
}

export function getArticleBySlug(slug, lng) {
  const article = articleEntries.find((entry) => entry.slug === slug);
  return article ? localizeEntry(article, lng) : null;
}

export function getArticleSlugs() {
  return articleEntries.map((entry) => ({ slug: entry.slug }));
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
