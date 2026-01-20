export const utpCafeteriaArquitecture = `
---
config:
  layout: elk
  look: neo
  theme: neo
---
flowchart LR
 subgraph FE["Frontend"]
        FE1["Next.js App<br>App Router<br>UI / SSR / Client"]
  end
 subgraph MODULES["Domain Modules"]
        M_AUTH["Auth Module"]
        M_USERS["Users Module"]
        M_CHAT["Inventory Module"]
        M_DOCS["Products Module"]
        M_RUNS["Orders Module"]
  end
 subgraph DB["Data Layer"]
        Prisma["Prisma ORM"]
  end
 subgraph PROVIDERS["Infrastructure Providers"]
        CloudinaryModule["Cloudinary Module"]
        PusherModule["Pusher Module"]
  end
 subgraph BE["Backend - NestJS"]
        GW["HTTP API Layer<br>Controllers, Guards, Pipes"]
        MODULES
        DB
        PROVIDERS
  end
 subgraph EXT["External Services"]
        DBEXT[("PostgreSQL<br>(Neon DB)")]
        CloudinaryEXT["Cloudinary (Media storage)"]
        PusherEXT["Pusher (websockets / realtime)"]
  end
    FE1 -- HTTP / HTTPS --> GW
    GW --> M_AUTH & M_USERS & M_CHAT & M_DOCS & M_RUNS
    M_AUTH --> Prisma
    M_USERS --> Prisma
    M_DOCS --> Prisma & CloudinaryModule
    M_RUNS --> Prisma & PusherModule
    Prisma --> DBEXT
    CloudinaryModule --> CloudinaryEXT
    PusherModule --> PusherEXT
`
export const utpCafeteriaDatabase = `
erDiagram
    USUARIO ||--o{ ORDEN : realiza
    USUARIO {
        int id PK
        datetime creado
        datetime actualizado
        datetime dni
        string nombre
        string apellidos
        string correo
        string contrasena
        string rol
        boolean habilitado
        boolean archivado
        json pushSubscription
    }

    PRODUCTO ||--o{ ORDEN_ITEM : "está en"
    PRODUCTO ||--o{ INVENTARIO_DIARIO : registra

    PRODUCTO {
        int id PK
        datetime creado
        datetime actualizado
        string nombre
        string descripcion
        decimal precio
        int limite_orden
        string categoria
        string url
        boolean habilitado
        boolean archivado
    }

    ORDEN ||--|{ ORDEN_ITEM : contiene
    ORDEN {
        int id PK
        datetime creado
        datetime hora_programada
        string transaccion
        decimal monto_total
        string estado
        string metodo_pago
        int usuario_id FK
    }

    ORDEN_ITEM {
        int id PK
        int orden_id FK
        int producto_id FK
        string nombre_producto
        int cantidad
        decimal precio
    }

    INVENTARIO_DIARIO {
        int id PK
        int producto_id FK
        datetime fecha FK
        int stock_inicial
        int stock
        datetime stock_salida
        datetime ultima_entrada
    }
`

export const utpChabotArquitecture = `
---
config:
  layout: elk
  look: neo
  theme: neo-dark
---
flowchart LR
 subgraph FE["Frontend"]
        FE1["Next.js App<br>App Router<br>UI / SSR / Client"]
  end
 subgraph MODULES["Domain Modules"]
        M_AUTH["Auth Module"]
        M_USERS["Users Module"]
        M_CHAT["Chat Module"]
        M_CONV["Conversations Module"]
        M_DOCS["Documents Module"]
        M_TOPICS["Topics Module"]
        M_RUNS["Runs Module"]
        M_EVENTS["Events Module<br>(Async Jobs)"]
  end
 subgraph ORCH["Orchestrators"]
        G_RUNNER["Gemini Chat Runner<br>(Prompt + Execution)"]
  end
 subgraph DB["Data Layer"]
        Prisma["Prisma ORM"]
  end
 subgraph PROVIDERS["Infrastructure Providers"]
        CloudinaryModule["Cloudinary Module"]
        PusherModule["Pusher Module"]
        GeminiModule["Gemini Module"]
  end
 subgraph BE["Backend - NestJS"]
        GW["HTTP API Layer<br>Controllers, Guards, Pipes"]
        MODULES
        ORCH
        DB
        PROVIDERS
  end
 subgraph EXT["External Services"]
        DBEXT[("PostgreSQL<br>(Neon DB)")]
        CloudinaryEXT["Cloudinary"]
        PusherEXT["Pusher"]
        GeminiEXT["Google Cloud<br>(Gemini API)"]
  end
    FE1 -- HTTP / HTTPS --> GW
    GW --> M_AUTH & M_USERS & M_CHAT & M_CONV & M_DOCS & M_TOPICS
    M_CHAT --> M_CONV & G_RUNNER
    G_RUNNER --> M_RUNS & GeminiModule & M_EVENTS
    M_EVENTS -. Async .-> PusherModule
    M_AUTH --> Prisma
    M_USERS --> Prisma
    M_CONV --> Prisma
    M_DOCS --> Prisma
    M_TOPICS --> Prisma
    M_RUNS --> Prisma
    Prisma --> DBEXT
    CloudinaryModule --> CloudinaryEXT
    PusherModule --> PusherEXT
    GeminiModule L_GeminiModule_GeminiEXT_0@--> GeminiEXT


    L_GeminiModule_GeminiEXT_0@{ curve: linear }
`
export const utpChabotDatabase = `
erDiagram
    User {
        String id PK
        DateTime created_at
        DateTime updated_at
        String dni
        String name
        String last_name
        String email
        String password
        Role role
        Boolean is_active
        Boolean is_archived
    }

    Admin {
        String id PK
        String[] modules_access
        String user_id FK
    }

    Student {
        String id PK
        String utp_class_id
        String portal_token
        String class_token
        String campus
        String modality_description
        String period
        String user_id FK
    }

    Log {
        Int id PK
        DateTime created_at
        String user_id FK
        Action action
        Entity entity
        String entity_id
        Json details
    }

    Topic {
        String id PK
        DateTime created_at
        DateTime updated_at
        String name
        String description
        Int documents_count
        Decimal total_size
        Boolean is_active
        Boolean is_archived
    }

    Document {
        String id PK
        DateTime created_at
        DateTime updated_at
        String name
        String url
        String description
        String[] tags
        Decimal size
        Boolean is_active
        Boolean is_archived
        String topic_id FK
    }

    Conversation {
        String id PK
        DateTime created_at
        DateTime completed_at
        DateTime last_run
        Int total_runs
        Int total_tokens
        ConversationStatus status
        String title
    }

    Run {
        String id PK
        DateTime created_at
        Boolean is_run_successful
        String model_llm
        Decimal latency
        Int tokens
        String input
        String output
        String error
        String conversation_id FK
    }

    %% Relaciones
    User ||--o{ Log : "genera"
    User ||--o| Admin : "es"
    User ||--o| Student : "es"

    Topic ||--o{ Document : "contiene"

    Conversation ||--o{ Run : "tiene"

`

export const sistemaMassArquitecture = `
---
config:
  layout: elk
---
flowchart TB
 subgraph Client["Client Side"]
    direction TB
        Browser["User Browser"]
        Zustand["Zustand Store<br>(Cart / State)"]
  end
 subgraph API["API Routes (/src/app/api)"]
    direction TB
        AuthAPI["/auth/*"]
        ProductAPI["/products"]
        InventoryAPI["/inventory"]
        ProvidersAPI["/providers"]
        SalesAPI["/sales"]
        ReniecAPI["/reniec"]
        PayPalAPI["/checkout"]
  end
 subgraph AppServer["Next.js Application Server"]
    direction TB
        Middleware["NextAuth Middleware"]
        Router["App Router<br>(Pages &amp; Layouts)"]
        API
  end
 subgraph Database["Data Layer"]
    direction TB
        Prisma["Prisma ORM"]
        Postgres[("PostgreSQL")]
  end
 subgraph External["External Services"]
    direction TB
        PayPal["PayPal Gateway"]
        Cloudinary["Cloudinary<br>(Storage)"]
        GovAPIs["Reniec / Sunat APIs"]
  end
    Browser -- HTTP Request --> Middleware
    Zustand <--> Router
    Middleware --> Router & API
    AuthAPI --> Prisma
    ProductAPI --> Prisma & Cloudinary
    InventoryAPI --> Prisma
    ProvidersAPI --> Prisma
    SalesAPI --> Prisma & PayPal
    Prisma --> Postgres
    PayPalAPI --> PayPal
    ReniecAPI --> GovAPIs
`
export const sistemaMassDatabase = `
erDiagram
    User {
        Int id PK
        String supaBaseId
        DateTime created
        DateTime updated
        String dni
        String name
        String lastName
        String email
        String number
        String password
        Int role
        Boolean status
    }

    AuditLog {
        Int id PK
        Int userId FK
        String action
        String entity
        Int entityId
        DateTime created
        Json details
    }

    Product {
        Int id PK
        DateTime created
        DateTime updated
        String name
        String description
        String category
        String img
        Int stock
        Decimal price
        Decimal discount
        Int orderLimit
        Boolean status
        DateTime lastStockEntry
    }

    Movement {
        Int id PK
        DateTime created
        String type
        Int productId FK
        Int quantity
        String description
    }

    Provider {
        Int id PK
        DateTime created
        DateTime updated
        String ruc
        String name
        String legal
        String web
        String email
        String number
        Boolean status
    }

    Purchase {
        Int id PK
        DateTime created
        Int userId FK
        Int providerId FK
        Decimal totalPrice
        String receiptType
        String receiptNumber
        DateTime receiptDate
    }

    PurchaseItem {
        Int id PK
        Int purchaseId FK
        Int productId FK
        Int quantity
        Decimal price
    }

    Sale {
        Int id PK
        DateTime created
        String transaction
        Int userId FK
        Decimal totalAmount
        Decimal totalDiscount
        Decimal totalPayment
        String paymentMethod
        String status
    }

    SaleItem {
        Int id PK
        Int saleId FK
        Int productId FK
        Int quantity
        Decimal price
        Decimal discount
    }

    %% Relaciones
    User ||--o{ AuditLog : "genera"
    User ||--o{ Sale : "realiza"
    User ||--o{ Purchase : "registra"

    Product ||--o{ Movement : "tiene"
    Product ||--o{ SaleItem : "incluye"
    Product ||--o{ PurchaseItem : "incluye"

    Provider ||--o{ Purchase : "provee"

    Purchase ||--o{ PurchaseItem : "contiene"

    Sale ||--o{ SaleItem : "contiene"

`

export const barbershopArquitecture = `
---
config:
  layout: elk
---
flowchart LR
    subgraph FE["Frontend"]
        FE1["Next.js App
        (App Router)
        UI + SSR + Client"]
    end
    subgraph GW["Backend - API Gateway"]
        GW1["Nest.js API Gateway
        (Auth, Routing, Validation)
        HTTP / HTTPS"]
    end
    subgraph MS["Microservicios (TCP)"]

        MS_USERS["User Service
        Nest.js"]

        MS_APPOINT["Appointment Service
        Nest.js"]

        MS_SERVICES["Service Catalog
        Nest.js"]

        MS_PAYMENTS["Payment Service
        Nest.js"]

        MS_ANALYTICS["Analytics Service
        Nest.js + Métricas"]
    end
    subgraph DB["Bases de Datos"]
        DB_USERS[(PostgreSQL)]
        DB_APPOINT[(PostgreSQL)]
        DB_SERVICES[(PostgreSQL)]
        DB_PAYMENTS[(PostgreSQL)]
    end
    subgraph EXT["Servicios Externos"]
        CLOUDINARY["Cloudinary
        (Media Storage)"]
    end
    FE1 -->|HTTPS| GW1

    GW1 -->|TCP| MS_USERS
    GW1 -->|TCP| MS_APPOINT
    GW1 -->|TCP| MS_SERVICES
    GW1 -->|TCP| MS_PAYMENTS
    GW1 -->|TCP| MS_ANALYTICS
    MS_USERS -->|PrismaORM| DB_USERS
    MS_APPOINT -->|PrismaORM| DB_APPOINT
    MS_SERVICES -->|PrismaORM| DB_SERVICES
    MS_PAYMENTS -->|PrismaORM| DB_PAYMENTS
    MS_USERS -->|Upload / Fetch| CLOUDINARY
    MS_SERVICES -->|Upload / Fetch| CLOUDINARY
`
export const barbershopDatabase = `
erDiagram
    USER ||--o| CUSTOMER : "perfil →"
    USER ||--o| ADMIN : "perfil →"
    USER ||--o| BARBER : "perfil →"

    USER {
        int id PK
        datetime created
        datetime updated
        string dni
        string name
        string lastName
        string email
        string password
        string role
        boolean isActive
        boolean isArchived
    }

    CUSTOMER {
        int id PK
        string img
        string number
        int userId FK
        boolean isArchived
    }

    ADMIN {
        int id PK
        datetime lastLogin
        int userId FK
        boolean isArchived
    }

    BARBER {
        int id PK
        string img
        string[] skills
        string description
        int userId FK
        boolean isActive
        boolean isArchived
    }

    SERVICE ||--o{ APPOINTMENT : "se agenda"
    SERVICE {
        int id PK
        datetime created
        datetime updated
        string name
        string description
        decimal price
        string img
        boolean isActive
        boolean isArchived
    }

    BARBER ||--o{ APPOINTMENT : "atiende"
    CUSTOMER ||--o{ APPOINTMENT : "realiza"
    APPOINTMENT ||--o{ PAYMENT : "genera"

    APPOINTMENT {
        int id PK
        datetime created
        datetime scheduledAt
        string customerName
        int barberId FK
        string barberName
        int serviceId FK
        string serviceName
        string notes
        AppointmentStatus status
        boolean isArchived
    }

    PAYMENT {
        int id PK
        decimal amount
        PaymentType type
        PaymentStatus status
        datetime created
        int appointmentId FK
        int customerId FK
        string customerName
    }
`

export const yanapataArquitecture = `
---
config:
  layout: elk
---
flowchart TB
 subgraph subGraph0["Client Side"]
        Browser["User Browser"]
        AIChat["AI Chat Widget"]
  end
 subgraph subGraph1["API Routes & Server Actions"]
        Auth["Auth"]
        Services["Services Actions"]
        Contact["Contact / Citas"]
  end
 subgraph subGraph2["Nextjs Application Server"]
        AuthMW["Auth Middleware"]
        AppRouter["App Router"]
        subGraph1
  end
 subgraph subGraph3["Data Layer"]
        DB[("PostgreSQL")]
        Prisma["Prisma ORM"]
  end
 subgraph subGraph4["External Services"]
        Resend["Resend Email API"]
        StackAI["Stack AI Platform"]
  end
    Prisma --> DB
    AuthMW --> AppRouter & subGraph1
    AIChat --> StackAI
    Browser --> AuthMW & AppRouter
    AppRouter --> subGraph1
    Services --> Resend & Prisma
    Contact --> Prisma
    Auth --> Prisma
    Contact --> Resend
`
export const yanapataDatabase = `
erDiagram
    Servicio {
        Int id PK
        DateTime creacion
        DateTime modificacion
        String nombre
        String descrip
        String foto
        String estado
        Decimal precio_min
    }

    Usuario {
        Int id PK
        DateTime creacion
        DateTime modificacion
        String nombres
        String apellidos
        String email
        String password
        String rol
        String estado
    }

    Cliente {
        Int id PK
        DateTime creacion
        DateTime modificacion
        Int usuario_id FK
        String telefono
    }

    Mascota {
        Int id PK
        DateTime creacion
        DateTime modificacion
        Int cliente_id FK
        String nombre
        String tipo
        String raza
        String sexo
        String altura
        Decimal peso
        DateTime ultima_cita
        String foto
    }

    Cita {
        Int id PK
        DateTime creacion
        DateTime modificacion
        String fechaSolicitud
        String horaSolicitud
        String nombreMascota
        String nombreCliente
        Json ClienteInfo
        Json MascotaInfo
        Int cliente_id FK
        Int mascota_id FK
        Int servicio_id FK
        String asunto
        String estado
    }

    Comentario {
        Int id PK
        DateTime creacion
        DateTime modificacion
        DateTime confirmacion
        Int calificacion
        String mensaje
        String estado
        Int servicio_id FK
        Int cliente_id FK
    }

    Pago {
        Int id PK
        DateTime creacion
        String nombreCliente
        Decimal monto_servicio
        Decimal monto_adicional
        Decimal monto_total
        Decimal igv
        Int servicio_id FK
    }

    %% Relaciones
    Usuario ||--o| Cliente : "es"

    Cliente ||--o{ Mascota : "tiene"
    Cliente ||--o{ Cita : "solicita"
    Cliente ||--o{ Comentario : "realiza"

    Mascota ||--o{ Cita : "participa"

    Servicio ||--o{ Cita : "incluye"
    Servicio ||--o{ Comentario : "recibe"
    Servicio ||--o{ Pago : "genera"

`
export const classitArquitecture = `
---
config:
  layout: elk
  theme: neo
---
flowchart LR
 subgraph AUTH["Auth Module"]
        AUTH_CORE["Authentication & Authorization"]
  end
 subgraph DOMAIN["Domain Modules"]
        DM_USERS["User Management"]
        DM_COURSES["Course Management"]
        DM_CONTENT["Content Management"]
  end
 subgraph JOBS["Background Jobs"]
        BJ["Async Processing"]
  end
 subgraph BE["Backend API"]
        GW["API Gateway<br>(Controllers / Routing)"]
        AUTH
        DOMAIN
        JOBS
  end
    FE["Web Client<br>(SPA / SSR)"] -- HTTP / HTTPS --> GW
    GW --> AUTH & DOMAIN
    DOMAIN --> JOBS & DB[("Relational Database")] & EXT["External Services<br>(Media · Realtime · AI · Email)"]
    AUTH --> DB
    JOBS --> DB & EXT
`
export const classitDatabase = `
---
config:
  layout: elk
  theme: neo
---
erDiagram
  USER
  COURSE
  MODULE
  LESSON
  ENROLLMENT
  PROGRESS

  USER ||--o{ ENROLLMENT : enrolls
  COURSE ||--o{ ENROLLMENT : includes

  COURSE ||--o{ MODULE : contains
  MODULE ||--o{ LESSON : includes

  USER ||--o{ PROGRESS : tracks
  LESSON ||--o{ PROGRESS : updates
`