# Architecture Diagrams — Featured Projects

---

## 1. Oráculo IA

### High-Level Architecture

```mermaid
flowchart LR
  subgraph Frontend
    React[React SPA]
  end

  subgraph Backend
    API[FastAPI]
    Parser[Docling Parser]
    Chunker[Semantic Chunker]
  end

  subgraph Storage
    Postgres[(PostgreSQL)]
    OpenSearch[(OpenSearch Vector Index)]
  end

  subgraph AI
    Langflow[Langflow Orchestrator]
    LLM[OpenAI GPT-4]
  end

  User -->|Upload / Question| React
  React -->|REST| API
  API -->|Parse| Parser
  Parser -->|Chunks| Chunker
  Chunker -->|Embeddings| OpenSearch
  API -->|Semantic Search| OpenSearch
  API -->|Context + Prompt| Langflow
  Langflow -->|Generate| LLM
  LLM -->|Answer + Citations| API
  API -->|Response| React
  API -->|Metadata| Postgres
```

### Data Flow

1. User uploads a document.
2. Docling parses PDF, image or Office file.
3. Content is chunked and embedded.
4. Embeddings are stored in OpenSearch.
5. User asks a question.
6. Backend retrieves relevant chunks.
7. Langflow builds a prompt with context.
8. GPT-4 generates a cited answer.
9. Frontend displays answer with source references.

---

## 2. ProFlow AI

### High-Level Architecture

```mermaid
flowchart LR
  subgraph Client
    Vue[Vue.js 3 SPA]
    PWA[Mobile PWA]
  end

  subgraph Backend
    Django[Django REST]
    WS[WebSocket Server]
    AI[OpenAI GPT-4]
  end

  subgraph Storage
    Postgres[(PostgreSQL)]
    Redis[(Redis)]
    Storage[Cloud Storage]
  end

  subgraph Payments
    MP[Mercado Pago]
    Asaas[Asaas]
  end

  User -->|Browser| Vue
  User -->|Mobile| PWA
  Vue -->|REST| Django
  PWA -->|REST| Django
  Vue -->|Chat| WS
  PWA -->|Chat| WS
  Django -->|AI prompts| AI
  Django --> Postgres
  Django --> Redis
  Django -->|Files| Storage
  Django -->|Escrow| MP
  Django -->|Subscriptions| Asaas
  WS --> Redis
```

### Key Components

- **Django REST:** Main API, auth, projects, payments, escrow.
- **WebSocket Server:** Real-time chat between freelancers and clients.
- **Redis:** Cache and WebSocket Pub/Sub.
- **PostgreSQL:** Users, projects, payments, contracts, messages.
- **OpenAI GPT-4:** Pricing assistant, proposal generator, contract review.
- **Mercado Pago / Asaas:** Escrow, subscriptions, PIX payouts.
- **Cloud Storage:** Contracts, proposals, user files.

---

## 3. LogiFlow CRM

### High-Level Architecture

```mermaid
flowchart LR
  subgraph Applications
    CRM[CRM Vue.js]
    Driver[Driver PWA]
    Portal[Customer Portal]
    Site[Institutional Site]
  end

  subgraph Backend
    API[FastAPI]
    Queue[Task Queue]
  end

  subgraph Storage
    DB[(PostgreSQL)]
    Cache[(Redis)]
  end

  subgraph External
    ERP[Omie / Bling / Tiny]
    WhatsApp[WhatsApp API]
    GPS[GPS Provider]
    Fiscal[CT-e / MDF-e Provider]
    MP[Mercado Pago]
  end

  Client -->|CRM| CRM
  Driver -->|Mobile| Driver
  Customer -->|Self-service| Portal
  Visitor -->|Public| Site

  CRM --> API
  Driver --> API
  Portal --> API
  Site --> API

  API --> DB
  API --> Cache
  API --> Queue
  Queue --> ERP
  API --> WhatsApp
  API --> GPS
  API --> Fiscal
  API --> MP
```

### Multi-App Design

| App | Purpose | Users |
|-----|---------|-------|
| CRM | Sales, operations, billing | Company staff |
| Driver App | Trip execution, delivery proof | Drivers |
| Customer Portal | Tracking, invoices, self-service | Customers |
| Site | Marketing and lead capture | Public |

### Integration Layer

- **ERP Sync:** Bidirectional webhooks for orders, clients and invoices.
- **WhatsApp:** Automated tracking and delivery notifications.
- **GPS:** Real-time driver location updates.
- **Fiscal:** CT-e/MDF-e XML issuance.
- **Payments:** Freight collection via Mercado Pago.

---

## 4. Common Patterns

All three projects use:

- **PostgreSQL** as the primary relational database.
- **Redis** for caching and/or real-time state.
- **Docker** for local development and deployment.
- **REST APIs** for client-server communication.
- **AI/LLM integration** for value-added features.
- **Cloud deployment** (Vercel frontend, backend on VPS/cloud).

---

## 5. Deployment Overview

```mermaid
flowchart LR
  Dev[Local Dev]
  GitHub[GitHub]
  CI[CI/CD]
  Vercel[Vercel]
  Backend[Backend Server]
  DB[(PostgreSQL)]
  Redis[(Redis)]

  Dev -->|Push| GitHub
  GitHub -->|Trigger| CI
  CI -->|Deploy Frontend| Vercel
  CI -->|Deploy Backend| Backend
  Backend --> DB
  Backend --> Redis
```
