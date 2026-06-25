# ProFlow

> The Brazilian Freelancer Operating System — SaaS with AI, escrow payments and gamified onboarding.

[![Live Demo](https://img.shields.io/badge/Live-proflow.pro-green)](https://www.proflow.pro/)
[![Stack](https://img.shields.io/badge/Stack-Django%20%7C%20Vue.js%203%20%7C%20PostgreSQL%20%7C%20Redis%20%7C%20GPT--4-blue)](./)
[![License](https://img.shields.io/badge/License-MIT-yellow)](./LICENSE)

## What it does

ProFlow is a complete SaaS platform for Brazilian freelancers that solves the three biggest problems in the market: payment insecurity, wrong pricing and lack of automation in proposals and contracts.

The platform is built around 4 pillars:

- **ProFlow AI** — GPT-4 assistant that helps price projects, write proposals and review contracts.
- **ProFlow Secure** — Escrow payment (custódia) with Mercado Pago and Asaas, protecting both freelancer and client.
- **ProFlow Score** — Reputation and KYC identity verification.
- **ProFlow Path** — Gamified onboarding that guides freelancers through best practices.

## Key features

- Real-time chat via WebSocket
- Virtual wallet with PIX withdrawals
- Recurring subscriptions and billing
- AI Auto-Fixer for automatic error correction
- Responsive UI with Vue.js 3 and TailwindCSS
- Multi-tenant architecture ready for teams

## Architecture

```text
Frontend:        Vue.js 3 + TailwindCSS + Pinia
Backend:         Django 5 + Django REST Framework
Database:        PostgreSQL
Cache/Queue:     Redis + Celery
Payments:        Mercado Pago + Asaas
AI:              OpenAI GPT-4 API
Realtime:        WebSocket (Django Channels)
Deploy:          Docker + Linux + Vercel
```

## Quick evaluation

- Live demo: https://www.proflow.pro/
- Demo time: 2–3 minutes
- GitHub repo: https://github.com/LeonardoRFragoso/ProFlow

## Results

- Own SaaS running in real production
- Integrated payments (PIX, escrow, subscriptions)
- Real-time chat and wallet system

## Author

Built by **Leonardo Fragoso** — Python Backend Developer.
- Portfolio: https://portfolio-leonardo-fragoso-react.vercel.app/
- LinkedIn: https://www.linkedin.com/in/leonardo-fragoso-921b166a/
