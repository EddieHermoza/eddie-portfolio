import {
  barbershopArquitecture,
  barbershopDatabase,
  classitArquitecture,
  classitDatabase,
  sistemaMassArquitecture,
  sistemaMassDatabase,
  utpCafeteriaArquitecture,
  utpCafeteriaDatabase,
  utpChabotArquitecture,
  utpChabotDatabase,
  yanapataArquitecture,
  yanapataDatabase,
} from './diagrams'

export type Project = {
  id: string
  name: string
  slug: string
  shortDescription: string
  longDescription: string
  technologies: string[]
  stack: string
  visibility: 'publico' | 'privado'
  features: string[]
  repositories: { label: string; link: string }[]
  repositoryLink?: string
  liveDemoLink: string

  diagramImages?: {
    architecture?: {
      light: string
      dark: string
      mermaidCode?: string
      explication?: string
    }
    database?: {
      light: string
      dark: string
      mermaidCode?: string
      explication?: string
    }
  }
  galleryImages?: {
    src: string
    width: number
    height: number
    isPreview?: boolean
  }[]
}

export const PROJECTS: Project[] = [
  {
    id: '17',
    name: 'BarberShop',
    slug: 'barbershop',
    shortDescription: 'Sistema de gestión para barberías.',
    longDescription:
      'Aplicación diseñada para la gestión integral de una barbería, permitiendo el control de citas, servicios, productos y personal, optimizando la atención al cliente y la administración del negocio.',
    technologies: [
      'Next.js',
      'React',
      'Nest.js',
      'gRPC',
      'TCP',
      'Swagger',
      'JWT',
      'Microservices',
      'Node.js',
      'PrismaORM',
      'PostgreSQL',
      'TailwindCSS',
      'Shadcn UI',
      'Cloudinary',
      'Zustand',
    ],
    stack: 'full',
    visibility: 'publico',
    features: [
      'Gestión de citas ',
      'Catálogo de servicios',
      'Panel administrativo',
      'Arquitectura de microservicios',
    ],
    repositories: [
      {
        label: 'Frontend',
        link: 'https://github.com/EddieHermoza/barbershop-frontend',
      },
      {
        label: 'Api Gateway',
        link: 'https://github.com/EddieHermoza/barbershop-backend-gateway',
      },
      {
        label: 'Microservicio/Usuarios',
        link: 'https://github.com/EddieHermoza/babershop-ms-users',
      },
      {
        label: 'Microservicio/Pagos',
        link: 'https://github.com/EddieHermoza/barbershop-ms-payments',
      },
      {
        label: 'Microservicio/Analíticas',
        link: 'https://github.com/EddieHermoza/barbershop-ms-analytics',
      },
      {
        label: 'Microservicio/Citas',
        link: 'https://github.com/EddieHermoza/barbershop-ms-appointments',
      },
      {
        label: 'Microservicio/Servicios',
        link: 'https://github.com/EddieHermoza/barbershop-ms-services',
      },
    ],
    liveDemoLink: '',

    diagramImages: {
      architecture: {
        light: '/images/barbershop/arquitecture-barbershop-light.svg',
        dark: '/images/barbershop/arquitecture-barbershop-dark.svg',
        mermaidCode: barbershopArquitecture,
      },
      database: {
        light: '/images/barbershop/database-barbershop-light.svg',
        dark: '/images/barbershop/database-barbershop-dark.svg',
        mermaidCode: barbershopDatabase,
      },
    },
    galleryImages: [
      {
        src: '/images/barbershop/barbershop-1.png',
        width: 1840,
        height: 1000,
        isPreview: true,
      },

      {
        src: '/images/barbershop/barbershop-4.png',
        width: 390,
        height: 845,
      },
      {
        src: '/images/barbershop/barbershop-10.png',
        width: 390,
        height: 845,
      },
      {
        src: '/images/barbershop/barbershop-3.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/barbershop/barbershop-5.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/barbershop/barbershop-6.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/barbershop/barbershop-8.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/barbershop/barbershop-9.png',
        width: 1840,
        height: 1000,
      },
    ],
  },
  {
    id: '4',
    name: 'UTP Cafetería',
    slug: 'utp-cafeteria',
    shortDescription: 'Sistema de pedidos para cafetería.',
    longDescription:
      'Aplicación full stack orientada a la gestión de pedidos en una cafetería universitaria. Permite visualizar productos, realizar pedidos y administrarlos desde un panel de control, mejorando la eficiencia del servicio y la experiencia del usuario.',
    technologies: [
      'React',
      'Node.js',
      'Next.js',
      'Nest.js',
      'Express',
      'Pusher',
      'REST API',
      'JWT',
      'Cloudinary',
      'PostgreSQL',
      'Zustand',
      'TailwindCSS',
      'Shadcn UI',
      'Vercel',
      'Swagger',
    ],
    stack: 'full',
    visibility: 'publico',
    features: [
      'Catálogo de productos',
      'Gestión de pedidos',
      'Panel administrativo',
    ],
    repositories: [
      {
        label: 'Frontend',
        link: 'https://github.com/EddieHermoza/UTP-cafeteria',
      },
      {
        label: 'Backend',
        link: 'https://github.com/EddieHermoza/UTP_API-tienda',
      },
    ],
    liveDemoLink: '',

    diagramImages: {
      architecture: {
        light: '/images/utp-cafeteria/arquitecture-utp-cafeteria-light.svg',
        dark: '/images/utp-cafeteria/arquitecture-utp-cafeteria-dark.svg',
        mermaidCode: utpCafeteriaArquitecture,
      },
      database: {
        light: '/images/utp-cafeteria/database-utp-cafeteria-light.svg',
        dark: '/images/utp-cafeteria/database-utp-cafeteria-dark.svg',
        mermaidCode: utpCafeteriaDatabase,
      },
    },
    galleryImages: [
      {
        src: '/images/utp-cafeteria/utp-cafeteria-1.png',
        width: 1840,
        height: 1000,
        isPreview: true,
      },
      {
        src: '/images/utp-cafeteria/utp-cafeteria-2.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/utp-cafeteria/utp-cafeteria-3.png',
        width: 500,
        height: 990,
      },
      {
        src: '/images/utp-cafeteria/utp-cafeteria-4.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/utp-cafeteria/utp-cafeteria-5.png',
        width: 360,
        height: 740,
      },
      {
        src: '/images/utp-cafeteria/utp-cafeteria-6.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/utp-cafeteria/utp-cafeteria-7.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/utp-cafeteria/utp-cafeteria-8.png',
        width: 1840,
        height: 1000,
      },
    ],
  },
  {
    id: '18',
    name: 'Class-It',
    slug: 'class-it',
    shortDescription: 'Plataforma educativa de cursos en línea.',
    longDescription:
      'Plataforma educativa integral diseñada para la gestión y distribución de cursos en línea. Permite a los estudiantes acceder a contenido educativo de calidad, realizar seguimiento de su progreso y desarrollar habilidades del futuro digital en áreas como tecnología, creatividad, liderazgo, negocios, bienestar y más.',

    technologies: [
      'Arquitectura',
      'Frontend',
      'Backend',
      'Base de datos',
      'Autenticación',
      'Seguridad',
      'Integración de APIs',
      'Optimización responsive',
      'Manejo de rendimiento',
      'Optimización SEO',
      'Despliegue',
    ],

    stack: 'full',
    visibility: 'privado',

    features: [
      'Catálogo de cursos',
      'Sistema de autenticación',
      'Gestión de estudiantes',
      'Administración de contenidos',
      'Diseño responsive',
    ],

    repositories: [],
    liveDemoLink: 'https://class-it.edu.pe/',
    diagramImages: {
      database: {
        light: '/images/class-it/database-classit-light.svg',
        dark: '/images/class-it/database-classit-dark.svg',
        mermaidCode: classitDatabase,
      },
      architecture: {
        light: '/images/class-it/arquitecture-classit-light.svg',
        dark: '/images/class-it/arquitecture-classit-dark.svg',
        mermaidCode: classitArquitecture,
      },
    },
    galleryImages: [
      {
        src: '/images/class-it/class-it-1.png',
        width: 1840,
        height: 1000,
        isPreview: true,
      },
      {
        src: '/images/class-it/class-it-2.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/class-it/class-it-3.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/class-it/class-it-4.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/class-it/class-it-5.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/class-it/class-it-6.png',
        width: 390,
        height: 845,
      },
      {
        src: '/images/class-it/class-it-7.png',
        width: 390,
        height: 845,
      },
      {
        src: '/images/class-it/class-it-8.png',
        width: 1840,
        height: 1000,
      },
    ],
  },
  {
    id: '6',
    name: 'Chatbot UTP',
    slug: 'chatbot-utp',
    shortDescription: 'Chatbot informativo universitario.',
    longDescription:
      'Asistente conversacional desarrollado para brindar información automática a estudiantes universitarios. Utiliza técnicas de procesamiento de lenguaje natural para interpretar consultas frecuentes y responder de manera rápida y eficiente.',
    technologies: [
      'Gemini API',
      'Next.js',
      'Nest.js',
      'PrismaORM',
      'TailwindCSS',
      'Pusher',
      'Cloudinary',
      'React',
      'REST API',
      'JWT',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Shadcn UI',
      'Vercel',
      'Swagger',
    ],
    stack: 'full',
    visibility: 'publico',
    features: [
      'Respuestas automáticas',
      'Entrenamiento por intents',
      'Integración con servicios externos',
    ],
    repositories: [
      {
        label: 'App',
        link: 'https://github.com/EddieHermoza/chatbot-UTP',
      },
      {
        label: 'API IA',
        link: 'https://github.com/EddieHermoza/ChatbotIA-API',
      },
    ],
    liveDemoLink: '',

    diagramImages: {
      database: {
        light: '/images/utp-chatbot/database-chatbot-light.svg',
        dark: '/images/utp-chatbot/database-chatbot-dark.svg',
        mermaidCode: utpChabotDatabase,
      },
      architecture: {
        light: '/images/utp-chatbot/arquitecture-chatbot-light.svg',
        dark: '/images/utp-chatbot/arquitecture-chatbot-dark.svg',
        mermaidCode: utpChabotArquitecture,
      },
    },
    galleryImages: [
      {
        src: '/images/utp-chatbot/chatbot-utp-1.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/utp-chatbot/chatbot-utp-2.png',
        width: 1840,
        height: 1000,
        isPreview: true,
      },
      {
        src: '/images/utp-chatbot/chatbot-utp-3.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/utp-chatbot/chatbot-utp-4.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/utp-chatbot/chatbot-utp-5.png',
        width: 1840,
        height: 1000,
      },
      { src: '/images/utp-chatbot/chatbot-utp-6.png', width: 390, height: 845 },
      { src: '/images/utp-chatbot/chatbot-utp-7.png', width: 390, height: 845 },
      {
        src: '/images/utp-chatbot/chatbot-utp-8.png',
        width: 1840,
        height: 1000,
      },
    ],
  },
  {
    id: '11',
    name: 'Sistema Mass',
    slug: 'sistema-mass',
    shortDescription:
      'Plataforma e-commerce para gestión y venta de productos.',
    longDescription:
      'Sistema web e-commerce orientado a la gestión y comercialización de productos, inspirado en el modelo de negocio de tiendas MASS. La plataforma permite administrar el catálogo, controlar operaciones de venta y visualizar información clave para la toma de decisiones comerciales.',

    technologies: [
      'Next.js',
      'Node.js',
      'React',
      'PrismaORM',
      'Cloudinary',
      'Zustand',
      'TailwindCSS',
      'Shadcn UI',
      'Vercel',
      'Paypal SDK',
    ],

    stack: 'full',
    visibility: 'publico',

    features: [
      'Gestión de catálogo de productos',
      'Carrito de compras y flujo de checkout',
      'Panel administrativo para gestión de ventas',
      'Control de pedidos y estados',
      'Reportes básicos de ventas',
      'Diseño responsive orientado a conversión',
    ],

    repositories: [
      {
        label: 'Repositorio',
        link: 'https://github.com/EddieHermoza/sistema-mass',
      },
    ],

    liveDemoLink: '',

    diagramImages: {
      architecture: {
        light: '/images/sistema-mass/arquitecture-sistema-mass-light.svg',
        dark: '/images/sistema-mass/arquitecture-sistema-mass-dark.svg',
        mermaidCode: sistemaMassArquitecture,
      },
      database: {
        light: '/images/sistema-mass/database-sistema-mass-light.svg',
        dark: '/images/sistema-mass/database-sistema-mass-dark.svg',
        mermaidCode: sistemaMassDatabase,
      },
    },

    galleryImages: [
      {
        src: '/images/sistema-mass/sistema-mass-1.png',
        width: 1840,
        height: 1000,
        isPreview: true,
      },
      {
        src: '/images/sistema-mass/sistema-mass-2.png',
        width: 390,
        height: 845,
      },
      {
        src: '/images/sistema-mass/sistema-mass-3.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/sistema-mass/sistema-mass-4.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/sistema-mass/sistema-mass-5.png',
        width: 390,
        height: 845,
      },
      {
        src: '/images/sistema-mass/sistema-mass-6.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/sistema-mass/sistema-mass-7.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/sistema-mass/sistema-mass-8.png',
        width: 1840,
        height: 1000,
      },
    ],
  },
  {
    id: '14',
    name: 'Yana Pata',
    slug: 'yana-pata',
    shortDescription: 'Sistema web para gestión veterinaria.',
    longDescription:
      'Sistema web desarrollado para la gestión de una veterinaria, orientado a la administración de pacientes, propietarios y servicios. La plataforma prioriza una navegación clara, diseño responsivo y una correcta organización de la información para optimizar la atención y el control operativo.',

    technologies: [
      'Next.js',
      'Node.js',
      'React',
      'PrismaORM',
      'Resend',
      'Stack AI',
      'TailwindCSS',
    ],

    stack: 'full',
    visibility: 'publico',

    features: [
      'Gestión de pacientes y propietarios',
      'Registro de servicios veterinarios',
      'Historial clínico básico',
      'Interfaz clara y responsiva',
      'Optimización básica para SEO',
    ],

    repositories: [
      {
        label: 'Repositorio',
        link: 'https://github.com/EddieHermoza/YanaPata',
      },
    ],

    liveDemoLink: '',

    diagramImages: {
      architecture: {
        light: '/images/yanapata/arquitecture-yanapata-light.svg',
        dark: '/images/yanapata/arquitecture-yanapata-dark.svg',
        mermaidCode: yanapataArquitecture,
      },
      database: {
        light: '/images/yanapata/database-yanapata-light.svg',
        dark: '/images/yanapata/database-yanapata-dark.svg',
        mermaidCode: yanapataDatabase,
      },
    },

    galleryImages: [
      {
        src: '/images/yanapata/yanapata-1.png',
        width: 1840,
        height: 1000,
        isPreview: true,
      },
      {
        src: '/images/yanapata/yanapata-2.png',
        width: 390,
        height: 845,
      },
      {
        src: '/images/yanapata/yanapata-3.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/yanapata/yanapata-4.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/yanapata/yanapata-5.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/yanapata/yanapata-6.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/yanapata/yanapata-7.png',
        width: 1840,
        height: 1000,
      },
      {
        src: '/images/yanapata/yanapata-8.png',
        width: 390,
        height: 845,
      },
    ],
  },
]
