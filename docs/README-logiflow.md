# LogiFlow CRM

> SaaS CRM for logistics and transportation companies — 4 integrated apps for sales, operations, drivers and customers.

[![Live Demo](https://img.shields.io/badge/Live-Multiple%20Apps-green)](https://logi-flow-wuhp.vercel.app/)
[![Stack](https://img.shields.io/badge/Stack-FastAPI%20%7C%20Vue.js%203%20%7C%20PostgreSQL%20%7C%20Redis%20%7C%20WebSocket-blue)](./)
[![License](https://img.shields.io/badge/License-MIT-yellow)](./LICENSE)

## What it does

LogiFlow is a multi-app SaaS CRM built for logistics and transportation companies that are tired of isolated spreadsheets and disconnected systems. It unifies commercial, operational, fiscal and customer-facing workflows into a single backend with four specialized front-ends.

## Apps included

| App | Purpose | URL |
|-----|---------|-----|
| **Site** | Institutional landing page and lead capture | https://logi-flow-wuhp.vercel.app |
| **CRM** | Sales, customers, contracts and billing | https://logi-flow-blush.vercel.app |
| **Driver App** | Trip management, status updates and proof of delivery | https://logi-flow-app-motorista.vercel.app |
| **Customer Portal** | Real-time tracking, invoices and service history | https://logi-flow-z3t5.vercel.app |

## Key features

- Customer, contract and billing management
- Integration with ERPs (Omie, Bling, Tiny)
- WhatsApp notifications and tracking links
- GPS tracking integration
- CT-e/MDF-e issuance and automated fiscal workflows
- Real-time updates via WebSocket
- Multi-tenant data isolation

## Architecture

```text
Frontend:        Vue.js 3 + TailwindCSS
Backend:         FastAPI + Python 3.11
Database:        PostgreSQL
Cache/Queue:     Redis + Celery
Integrations:    ERPs, WhatsApp, GPS, tax APIs
Realtime:        WebSocket
Deploy:          Docker + Vercel
```

## Quick evaluation

- Live demos: 4 apps above
- Demo time: 5–8 minutes
- GitHub repo: https://github.com/LeonardoRFragoso/LogiFlow

## Results

- 4 integrated applications in one stack
- ERP, WhatsApp and GPS integrations
- Fiscal and billing automation

## Author

Built by **Leonardo Fragoso** — Python Backend Developer.
- Portfolio: https://portfolio-leonardo-fragoso-react.vercel.app/
- LinkedIn: https://www.linkedin.com/in/leonardo-fragoso-921b166a/
