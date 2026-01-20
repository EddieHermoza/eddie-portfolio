export const DATABASE_DEFAULT_DIAGRAM = `erDiagram
    USER {
        string name
        string email
        string password
    }

    PROJECT {
        string title
        string description
        date start_date
        date end_date
    }

    TECHNOLOGY {
        string name
        string version
    }

    USER ||--o{ PROJECT : manages
    PROJECT ||--o{ TECHNOLOGY : uses
    USER }|--|{ TECHNOLOGY : knows`

export const ARQUITECTURE_DEFAULT_DIAGRAM = `graph TB
    A[Frontend] --> B[API Gateway]
    B --> C[Backend Service]
    C --> D[Base de Datos]
    C --> E[Cache]
    B --> F[Autenticación]
    C --> G[API Externa]
    D --> H[Backup]
    E --> I[Almacenamiento en Disco]`
