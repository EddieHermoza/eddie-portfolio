# 💼 Eddie Hermoza - Portfolio

<div align="center">

![Portfolio Banner](./public/Logo.webp)

**Portafolio profesional de Eddie Hermoza**  
*Desarrollador Full Stack especializado en aplicaciones web modernas*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](./LICENSE)

[🌐 Ver Demo](https://eddiehermoza.vercel.app) · [📧 Contacto](mailto:contact@eddiehermoza.com)

</div>

---

## 📖 Descripción

Portafolio profesional interactivo y moderno construido con las últimas tecnologías web. Presenta mis proyectos, habilidades técnicas y experiencia como desarrollador Full Stack, con un enfoque especial en la experiencia de usuario y el rendimiento.

### ✨ Características Principales

- 🎨 **Diseño Moderno**: Interfaz elegante y responsiva con animaciones fluidas usando Framer Motion
- 🌓 **Modo Claro/Oscuro**: Sistema de temas personalizable con transiciones suaves
- 📱 **Totalmente Responsivo**: Experiencia optimizada en todos los dispositivos
- 🚀 **Rendimiento Optimizado**: Carga rápida con Next.js 16 App Router y Server Components
- 🎯 **SEO Optimizado**: Metadata completa, Open Graph, Twitter Cards y datos estructurados
- 🖼️ **Galería de Proyectos**: Visualización interactiva con lightbox y álbumes de fotos
- 📊 **Diagramas Técnicos**: Arquitectura y base de datos visualizadas con Mermaid
- 🤖 **IA Integrada**: Explicaciones automáticas de arquitecturas usando Groq API
- 📂 **Explorador de Repositorios**: Navegación de código de GitHub integrada
- 🎭 **Animaciones Interactivas**: Cursor personalizado y transiciones de página
- 📧 **Formulario de Contacto**: Integración con Resend para emails transaccionales

---

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Lenguaje**: [TypeScript 5](https://www.typescriptlang.org/)
- **Estilos**: [TailwindCSS 4](https://tailwindcss.com/)
- **Componentes UI**: [Radix UI](https://www.radix-ui.com/) + [Shadcn/ui](https://ui.shadcn.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Iconos**: [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/)

### Backend & APIs
- **Email**: [Resend](https://resend.com/)
- **IA**: [Groq SDK](https://groq.com/)
- **Datos**: Mock data con TypeScript

### Herramientas de Desarrollo
- **Linting**: ESLint
- **Deployment**: [Vercel](https://vercel.com/)
- **Control de Versiones**: Git & GitHub

### Librerías Adicionales
- **Formularios**: React Hook Form + Zod
- **Galería**: React Photo Album + Yet Another React Lightbox
- **Gráficos**: Recharts
- **Notificaciones**: Sonner
- **Code Preview**: CodeMirror + Sandpack
- **Markdown**: React Markdown

---

## 📁 Estructura del Proyecto

```
portfolio/
├── public/                 # Archivos estáticos
│   ├── images/            # Imágenes de proyectos
│   ├── robots.txt         # SEO: Directivas para crawlers
│   └── manifest.json      # PWA manifest
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (landing)/    # Rutas públicas
│   │   ├── admin/        # Panel administrativo
│   │   ├── api/          # API routes
│   │   ├── layout.tsx    # Layout raíz
│   │   └── sitemap.ts    # Sitemap dinámico
│   ├── modules/          # Módulos de la aplicación
│   │   ├── landing/      # Landing page components
│   │   ├── admin/        # Admin components
│   │   └── shared/       # Componentes compartidos
│   ├── config/           # Configuración
│   │   ├── fonts.ts
│   │   └── metadata.ts   # SEO metadata
│   └── __mocks__/        # Datos mock
│       ├── projects.ts   # Proyectos
│       └── diagrams.ts   # Diagramas Mermaid
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 🚀 Instalación y Configuración

### Prerequisitos

- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/EddieHermoza/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configurar variables de entorno** (opcional)
   ```bash
   cp .env.example .env.local
   ```
   
   Edita `.env.local` con tus claves:
   ```env
   # Email (Resend)
   RESEND_API_KEY=your_resend_api_key
   
   # IA (Groq)
   GROQ_API_KEY=your_groq_api_key
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```
   
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador

---

## 📜 Scripts Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Construir para producción
npm run start    # Iniciar servidor de producción
npm run lint     # Ejecutar linter
```

---

## 🌐 Deployment

Este proyecto está optimizado para deployment en [Vercel](https://vercel.com/):

1. **Fork o clona este repositorio**
2. **Importa el proyecto en Vercel**
3. **Configura las variables de entorno**
4. **Deploy automático** 🚀

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/EddieHermoza/portfolio)

---

## 🎨 Características Destacadas

### 🔍 SEO Optimizado
- Metadata dinámica por página
- Open Graph y Twitter Cards
- Sitemap XML automático
- robots.txt configurado
- Datos estructurados (JSON-LD)
- URLs semánticas

### 🎭 Experiencia de Usuario
- Animaciones fluidas y naturales
- Cursor personalizado interactivo
- Transiciones de página suaves
- Lightbox para galerías de imágenes
- Modo oscuro/claro con persistencia
- Diseño mobile-first

### 📊 Visualización de Proyectos
- Diagramas de arquitectura generados con Mermaid
- Explicaciones automáticas con IA
- Explorador de código de GitHub
- Galería de imágenes interactiva
- Tabs para organizar información

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún bug o tienes sugerencias:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](./LICENSE) para más detalles.

---

## 👤 Autor

**Eddie Hermoza**

- Website: [eddiehermoza.vercel.app](https://eddiehermoza.vercel.app)
- GitHub: [@EddieHermoza](https://github.com/EddieHermoza)
- LinkedIn: [Eddie Hermoza](https://www.linkedin.com/in/eddiehermoza)

---

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) por el increíble framework
- [Vercel](https://vercel.com/) por el hosting
- [Shadcn/ui](https://ui.shadcn.com/) por los componentes UI
- [Framer Motion](https://www.framer.com/motion/) por las animaciones
- La comunidad open source 💚

---

<div align="center">

**⭐ Si te gustó este proyecto, considera darle una estrella ⭐**

Hecho con ❤️ por Eddie Hermoza

</div>
