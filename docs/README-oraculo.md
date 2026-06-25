# Oráculo IA

> AI strategic consultant for your documents — RAG-based Q&A with semantic indexing and multi-source ingestion.

[![Live Demo](https://img.shields.io/badge/Live-oraculo--ia.vercel.app-green)](https://oraculo-ia.vercel.app/)
[![Stack](https://img.shields.io/badge/Stack-FastAPI%20%7C%20OpenSearch%20%7C%20Langflow%20%7C%20Docling%20%7C%20React-blue)](./)
[![License](https://img.shields.io/badge/License-MIT-yellow)](./LICENSE)

## What it does

Oráculo is an AI-powered strategic consultant that lets users upload documents, contracts, regulations, manuals and knowledge bases, then ask complex questions and get grounded answers with citations. It combines document parsing, vector search and large language models to turn static files into an interactive knowledge layer.

## Key features

- Document ingestion (PDF, DOCX, TXT, images)
- Semantic chunking and OpenSearch vector search
- Conversational Q&A with source attribution
- Multi-tenant workspace isolation
- Pre-configured prompt templates for legal, financial and operational analysis
- React frontend for real-time interaction

## Architecture

```text
Frontend:        React + TailwindCSS
Backend:         FastAPI + Python 3.11
Vector Search:   OpenSearch
AI Pipeline:     Langflow + OpenAI GPT-4 / Claude 3
Document Parser: Docling + OCR
Queue:           Redis
Deploy:          Docker + Vercel
```

## Quick evaluation

- Live demo: https://oraculo-ia.vercel.app/
- Demo time: 4–5 minutes
- GitHub repo: https://github.com/LeonardoRFragoso/Oraculo

## Results

- RAG pipeline in production
- Document Q&A with grounded answers
- Scalable multi-tenant knowledge base

## Author

Built by **Leonardo Fragoso** — Python Backend Developer.
- Portfolio: https://portfolio-leonardo-fragoso-react.vercel.app/
- LinkedIn: https://www.linkedin.com/in/leonardo-fragoso-921b166a/
