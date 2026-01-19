<div align="center">

# 🚀 Portfólio Leonardo Fragoso

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-11.11-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

<p align="center">
  <strong>Portfólio pessoal moderno, responsivo e bilíngue desenvolvido com React, TypeScript e TailwindCSS.</strong>
</p>

<p align="center">
  <a href="https://leonardofragosodev.netlify.app" target="_blank">
    <img src="https://img.shields.io/badge/🌐_Demo_Live-Netlify-00C7B7?style=for-the-badge" alt="Demo" />
  </a>
</p>

</div>

---

## Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [SaaS em Produção](#-saas-em-produção)
- [Projetos em Destaque](#-projetos-em-destaque)
- [Autor](#-autor)

---

## Sobre o Projeto

Portfólio pessoal desenvolvido para apresentar minha trajetória profissional, habilidades técnicas e projetos desenvolvidos. A aplicação foi construída com foco em **performance**, **acessibilidade** e **experiência do usuário**, utilizando as melhores práticas de desenvolvimento front-end moderno.

### Destaques

- **Design Premium**: Interface elegante com tema escuro e acentos em amarelo/dourado
- **Bilíngue**: Suporte completo para Português (PT-BR) e Inglês (EN)
- **Animações Fluidas**: Transições suaves com Framer Motion
- **Cursor Personalizado**: Experiência interativa única em desktop
- **Galeria de Projetos**: Modal com carrossel de imagens e thumbnails

---

## ✨ Funcionalidades

### 🏠 **Hero Section**
- Animação de texto rotativo com roles profissionais
- Partículas flutuantes e efeitos de gradiente
- Botões com efeitos hover premium

### 👤 **Sobre Mim**
- Estatísticas animadas (projetos, anos de experiência, certificações)
- Timeline de experiência profissional
- Grid de habilidades técnicas com níveis
- Seção de formação e certificações

### 💼 **Projetos**
- Cards com efeito hover e badge de destaque
- Modal de galeria com navegação por setas
- Thumbnails clicáveis para navegação rápida
- Tags de tecnologias utilizadas
- Links para repositórios GitHub

### 📞 **Contato**
- Cards interativos para Email, GitHub e LinkedIn
- Indicador de método preferido
- Animações suaves ao hover

### 🌐 **Internacionalização (i18n)**
- Toggle de idioma no header
- Tradução completa de todo o conteúdo
- Persistência da preferência do usuário

### 🎨 **Experiência Visual**
- Cursor personalizado com efeito de seguimento
- Scroll suave entre seções
- Separadores com gradiente animado
- Background com grid animado e orbes flutuantes

---

## 🛠 Tecnologias Utilizadas

### **Core**
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| React | 18.3.1 | Biblioteca para construção de interfaces |
| TypeScript | 5.5.3 | Superset JavaScript com tipagem estática |
| Vite | 5.4.2 | Build tool e dev server ultrarrápido |

### **Estilização**
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| TailwindCSS | 3.4.1 | Framework CSS utility-first |
| PostCSS | 8.4.35 | Processador CSS |
| Autoprefixer | 10.4.18 | Plugin para prefixos CSS |

### **Animações & UI**
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| Framer Motion | 11.11.17 | Biblioteca de animações para React |
| Lucide React | 0.344.0 | Ícones SVG modernos e consistentes |

### **Qualidade de Código**
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| ESLint | 9.9.1 | Linter para identificar problemas no código |
| TypeScript ESLint | 8.3.0 | Regras ESLint para TypeScript |

---

## 📁 Estrutura do Projeto

```
Portfolio-LeonardoFragoso-React/
├── public/
│   └── images/
│       ├── Pátio/              # Screenshots do Sistema de Pátio
│       ├── não-conformidade/   # Screenshots do Sistema de NC
│       ├── GR/                 # Screenshots do Sistema GR
│       ├── dash-multas/        # Screenshots do Dashboard
│       ├── Tvs-ICTSI/          # Screenshots do Sistema de TVs
│       └── project5*.png       # Screenshots Andaimes Pini
├── src/
│   ├── components/
│   │   ├── About.tsx           # Seção Sobre Mim
│   │   ├── Contact.tsx         # Seção Contato
│   │   ├── CustomCursor.tsx    # Cursor personalizado
│   │   ├── Header.tsx          # Navegação principal
│   │   ├── Hero.tsx            # Seção inicial
│   │   ├── LanguageToggle.tsx  # Toggle de idioma
│   │   └── Projects.tsx        # Galeria de projetos
│   ├── i18n/
│   │   ├── index.ts            # Exportações do módulo i18n
│   │   ├── LanguageContext.tsx # Context API para idioma
│   │   └── translations.ts     # Traduções PT-BR e EN
│   ├── App.tsx                 # Componente principal
│   ├── index.css               # Estilos globais e Tailwind
│   ├── main.tsx                # Entry point da aplicação
│   └── vite-env.d.ts           # Tipos do Vite
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🚀 Como Executar

### Pré-requisitos

- **Node.js** 18+ instalado
- **npm** ou **yarn** como gerenciador de pacotes

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/LeonardoRFragoso/Portfolio-LeonardoFragoso-React.git
   ```

2. **Acesse o diretório**
   ```bash
   cd Portfolio-LeonardoFragoso-React
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção otimizado |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o ESLint para análise de código |

---

## 🚀 SaaS em Produção

<div align="center">

| Projeto | Descrição | Link |
|---------|-----------|------|
| **ProFlow** | Plataforma para freelancers com IA consultiva, precificação automática e pagamento em custódia | [![ProFlow](https://img.shields.io/badge/🌐_Acessar-ProFlow-6366f1?style=for-the-badge)](https://www.proflow.pro/) |
| **Base Corporativa** | E-commerce de roupas corporativas com checkout Mercado Pago e PWA | [![Base](https://img.shields.io/badge/🌐_Acessar-Base_Corporativa-d4a574?style=for-the-badge)](https://basecorporativa.store/) |

</div>

### ProFlow - Plataforma para Freelancers
SaaS completo para freelancers profissionais com IA consultiva que sugere preços, gera propostas automáticas e protege contra calotes com sistema de pagamento em custódia. Inclui verificação de identidade (ProFlow Score), taxa fixa de 8% e suporte prioritário.
- **Stack**: Vue.js, TypeScript, Node.js, PostgreSQL, IA, Stripe
- **🔗 Live**: [proflow.pro](https://www.proflow.pro/)

### Base Corporativa - E-commerce
E-commerce completo para roupas corporativas com catálogo de produtos, carrinho de compras, checkout integrado com Mercado Pago, sistema de gestão de pedidos, analytics com Google Analytics e Meta Pixel, e PWA para experiência mobile.
- **Stack**: React, TypeScript, Node.js, Mercado Pago, PWA
- **🔗 Live**: [basecorporativa.store](https://basecorporativa.store/)

---

## 🏆 Projetos em Destaque

### 1. Sistema de Gestão de Pátio
Sistema completo para gestão de pátios e estacionamentos com controle de vagas em tempo real, relatórios gerenciais e dashboard analítico.
- **Stack**: Python, Django, JavaScript, PostgreSQL

### 2. Sistema de Gestão de Não-Conformidades
Sistema robusto com workflow de aprovação multinível, notificações automáticas, relatórios PDF e dashboard executivo com KPIs.
- **Stack**: Django, Python, JavaScript, PostgreSQL

### 3. Sistema GR - Gestão de Recursos
Sistema ERP para gestão de recursos empresariais com módulos de inventário, alocação de ativos e controle de manutenção.
- **Stack**: Python, Django, JavaScript, PostgreSQL

### 4. Dashboard de Multas - Streamlit
Dashboard interativo para análise de multas de trânsito com ETL automatizado e integração Google Drive.
- **Stack**: Streamlit, Python, Google Drive API, Data Analysis

### 5. Sistema para Andaimes Pini
Sistema empresarial customizado para locação de equipamentos com controle de estoque e faturamento automático.
- **Stack**: Flask, React, PostgreSQL

### 6. Sistema de Monitoramento TVs ICTSI
Sistema de digital signage para terminal portuário com gerenciamento de displays e agendamento de conteúdo.
- **Stack**: Python, Django, JavaScript, PostgreSQL

---

## 🌐 Deploy

O projeto está hospedado na **Netlify** com deploy contínuo a partir da branch `main`.

**🔗 Acesse:** [leonardofragosodev.netlify.app](https://leonardofragosodev.netlify.app)

---

## 🧑‍💻 Autor

<div align="center">
  <img src="https://github.com/LeonardoRFragoso.png" width="100px" style="border-radius: 50%;" alt="Leonardo Fragoso"/>
  
  **Leonardo Fragoso**
  
  *Full Stack Developer | Python Specialist | Automation Expert*

  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LeonardoRFragoso)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/leonardo-fragoso-921b166a/)
  [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:leonardorfragoso@gmail.com)
</div>

---

<div align="center">
  
  **⭐ Se este projeto foi útil, considere dar uma estrela!**
  
  Feito com ❤️ e ☕ por Leonardo Fragoso
  
</div>