export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    // Header
    nav: {
      home: 'Home',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },

    // Hero
    hero: {
      roles: [
        'Full Stack Developer',
        'Python Specialist',
        'Backend Engineer',
        'Automation Expert',
      ],
      tagline: 'Transformando ideias em',
      taglineHighlight: 'soluções tecnológicas',
      taglineEnd: 'inovadoras',
      specialist: 'Multi-Stack:',
      techStack: 'Python, Go, Java, Node.js, PHP, React, Vue, Next.js, Flutter',
      focusOn: '',
      focusAreas: 'Sistemas empresariais, APIs REST, microsserviços e arquiteturas escaláveis',
      heroDescription: 'Desenvolvedor de Sistemas em empresa de logística. Experiência anterior como Gerente de TI. Foco em automação, integrações e soluções com IA.',
      viewProjects: 'Ver Projetos',
      getInTouch: 'Entrar em Contato',
      scroll: 'Scroll',
    },

    // About
    about: {
      title: 'Sobre Mim',
      role: 'Desenvolvedor Full Stack',
      description: 'com experiência comprovada em sistemas empresariais de alto impacto. Atualmente Desenvolvedor de Sistemas em empresa de logística, com experiência anterior como Gerente de TI liderando equipes técnicas. Domínio em múltiplas stacks: Python (Django, Flask, FastAPI), Go (Gin), Java (Spring Boot), Node.js, PHP (Laravel), além de frameworks frontend como React, Vue.js, Next.js, TypeScript e Flutter. Foco em automação de processos, APIs REST, microsserviços e arquiteturas escaláveis. Combino visão estratégica de negócios com habilidades técnicas avançadas para criar soluções completas, desde aplicações web em produção até interfaces modernas e intuitivas.',
      stats: {
        projects: 'Projetos Entregues',
        years: 'Anos em TI',
        certifications: 'Certificações',
        technologies: 'Tecnologias',
      },
      experience: {
        title: 'Experiência Profissional',
        current: 'ATUAL',
      },
      skills: {
        title: 'Stack Tecnológico',
        levels: {
          advanced: 'Avançado',
          intermediate: 'Intermediário',
        },
      },
      education: {
        title: 'Formação & Certificações',
        featured: 'DESTAQUE',
      },
    },

    // Skills Data
    skillsData: [
      { 
        name: 'Python, Go & Frameworks', 
        description: 'Django, Flask, FastAPI, Gin | APIs RESTful e GraphQL | Go para alta performance | Selenium, Pandas, NumPy | Celery, Redis | Desenvolvimento back-end robusto | Integração com MongoDB e MariaDB', 
        level: 'Avançado',
      },
      { 
        name: 'Banco de Dados', 
        description: 'PostgreSQL, MySQL, MariaDB, MongoDB, SQLite, Firebase | ORM (Django/SQLAlchemy) | Modelagem de dados, migrations e queries otimizadas', 
        level: 'Intermediário',
      },
      { 
        name: 'Frontend & Web', 
        description: 'React, TypeScript, Next.js | HTML5, CSS3, JavaScript ES6+ | Tailwind CSS, Framer Motion, shadcn/ui | PWA e SPA', 
        level: 'Intermediário',
      },
      { 
        name: 'DevOps & Cloud', 
        description: 'Git/GitHub, Docker, CI/CD | AWS (EC2, S3, RDS) | Vercel, Railway | Power BI | Linux (administração, shell scripts, serviços) | Metodologias Ágeis (Scrum/Kanban)', 
        level: 'Intermediário',
      },
      { 
        name: 'Automação & Dados', 
        description: 'Selenium WebDriver, BeautifulSoup, Scrapy | ETL e pipelines de dados | Streamlit para dashboards | pytest, unittest', 
        level: 'Avançado',
      },
      { 
        name: 'Infraestrutura & TI', 
        description: 'Windows Server, Active Directory, GPO | Redes TCP/IP, VPN, Firewall | Virtualização | Gestão de equipes técnicas', 
        level: 'Avançado',
      },
    ],

    // Experience Data
    experienceData: [
      {
        title: 'Desenvolvedor de Sistemas',
        company: 'Empresa de Logística',
        period: 'dez 2024 - Presente',
        description: 'Desenvolvimento de sistemas de automação e extração de dados para otimização de processos logísticos. Criação de APIs REST, dashboards gerenciais e integração de sistemas com Python, Django e React.',
        featured: true,
      },
      {
        title: 'Gerente de TI',
        company: 'RWE Telemedicina e Diagnósticos', 
        period: 'jan 2024 - jul 2024',
        description: 'Liderança de equipe de suporte técnico e infraestrutura. Implementação de melhorias em processos, governança de TI, gestão de projetos e tomada de decisões estratégicas.',
        featured: false,
      },
      {
        title: 'Analista de Suporte de TI',
        company: 'Experiência Corporativa',
        period: 'nov 2023 - jul 2024',
        description: 'Desenvolvimento back-end com Python e Django. Automação de processos, criação de scripts e ferramentas internas. Suporte N2/N3 e documentação técnica.',
        featured: false,
      },
    ],

    // Education Data
    educationData: [
      {
        degree: 'Gestão de Tecnologia da Informação',
        institution: 'Estácio de Sá',
        year: '2016 - 2019',
        description: 'Graduação com foco em gestão estratégica de TI, governança corporativa, gerenciamento de projetos e processos',
        featured: true,
      },
      {
        degree: 'Formação Python Developer',
        institution: 'Rocketseat',
        year: 'abr 2024 - ago 2024',
        description: 'Python avançado, APIs RESTful, testes automatizados, clean code e design patterns',
        certificate: 'Certificado verificado',
        featured: true,
      },
      {
        degree: 'Formação Full Stack',
        institution: 'Rocketseat',
        year: 'jun 2024 - set 2024',
        description: 'React, Node.js, TypeScript, PostgreSQL, Docker e deploy em produção na AWS',
        certificate: 'Certificado verificado',
        featured: true,
      },
      {
        degree: 'Django Master Bootcamp',
        institution: 'PyCode',
        year: 'abr 2024 - set 2024',
        description: 'Django avançado, Django REST Framework, ORM otimizado, AWS, Redis, Celery e WebSockets',
        certificate: '140h de carga horária',
      },
      {
        degree: 'Formação Explorer',
        institution: 'Rocketseat',
        year: 'abr 2024 - jul 2024', 
        description: 'HTML5, CSS3, JavaScript, Git, algoritmos, estruturas de dados e lógica de programação',
        certificate: 'Certificado verificado',
      },
      {
        degree: 'Analista de Dados',
        institution: 'Cubos Academy',
        year: 'jan 2024 - set 2024',
        description: 'Python para análise de dados, Pandas, NumPy, Matplotlib, SQL avançado e Machine Learning básico',
        certificate: 'Projeto final aprovado',
      },
    ],

    // Projects
    projects: {
      title: 'Projetos',
      subtitle: 'Explorando ideias através do código e criando',
      subtitleHighlight: 'soluções inovadoras',
      featured: 'DESTAQUE',
      saas: 'ONLINE',
      live: 'LIVE',
      photos: 'fotos',
      viewGallery: 'Ver Galeria',
      code: 'Código',
      visitSite: 'Visitar Site',
      projectsList: [
        {
          title: 'Sistema de Gestão Pátio',
          description: 'Sistema completo para gestão de pátios e estacionamentos com controle de vagas em tempo real, relatórios gerenciais, dashboard analítico e interface responsiva. Desenvolvido com arquitetura MVC e APIs REST.',
        },
        {
          title: 'Sistema de Gestão de Não-Conformidades',
          description: 'Sistema robusto para gestão de não-conformidades com workflow de aprovação multinível, notificações automáticas, relatórios PDF, dashboard executivo com KPIs e histórico completo de ações corretivas.',
        },
        {
          title: 'Sistema GR - Gestão de Risco',
          description: 'Sistema para gestão de riscos empresariais com identificação, avaliação e monitoramento de riscos, planos de mitigação, relatórios gerenciais automatizados e dashboard interativo com métricas de performance.',
        },
        {
          title: 'Dashboard de Multas - Streamlit',
          description: 'Dashboard interativo para análise de multas de trânsito com ETL automatizado, integração Google Drive, visualizações dinâmicas (Plotly/Altair), filtros avançados e exportação de relatórios personalizados.',
        },
        {
          title: 'Sistema para Andaimes Pini',
          description: 'Sistema de gestão de locações desenvolvido com React e Material-UI. Sidebar expansível, navbar fixa, registro de locações, visualização de pedidos, layout totalmente responsivo para mobile, tablet e desktop.',
        },
        {
          title: 'Sistema de Monitoramento Digital Signage',
          description: 'Plataforma corporativa de gerenciamento de TVs com suporte multi-empresa, comunicação em tempo real via WebSocket, compilação automática de vídeos com FFmpeg, integração nativa com Chromecast, métricas Prometheus e cache Redis para alta disponibilidade.',
        },
        {
          title: 'ProFlow - Plataforma para Freelancers',
          description: 'Plataforma web para freelancers com IA consultiva que sugere preços, gera propostas automáticas e protege contra calotes com sistema de pagamento em custódia. Inclui verificação de identidade (ProFlow Score), taxa fixa de 8% e suporte prioritário.',
        },
        {
          title: 'Base Corporativa - E-commerce',
          description: 'E-commerce completo para roupas corporativas com catálogo de produtos, carrinho de compras, checkout integrado, sistema de gestão de pedidos, analytics com Google Analytics e Meta Pixel, e PWA para experiência mobile.',
        },
        {
          title: 'MedFlow Finance',
          description: 'Sistema inteligente que recupera 10-20% do faturamento perdido por clínicas médicas devido a erros de faturamento e glosas. Automação de validação com Laravel 11 e Vue 3, dashboard de métricas ROI e processamento centralizado.',
        },
        {
          title: 'BI-as-a-Service',
          description: 'Plataforma SaaS de Business Intelligence com IA. Upload de CSV com análise automática via GPT-4o-mini, detecção semântica de dados, dashboards automáticos, KPIs dinâmicos, insights preditivos e gestão multi-tenant com billing integrado.',
        },
        {
          title: 'APM Platform',
          description: 'Plataforma de Monitoramento de Sistemas e APIs em Java 21 com Spring Boot. Coleta automática de métricas (latência, CPU, memória), health checks com classificação UP/DEGRADED/DOWN, alertas configuráveis e dashboard em tempo real via WebSocket.',
        },
        {
          title: 'FinanceControl',
          description: 'Sistema completo de gestão financeira pessoal com modelo Freemium. App multiplataforma em Flutter (Windows, Android, iOS, Web) com backend Django REST. Inclui dashboard interativo, metas financeiras, orçamentos, IA assistente e integração Mercado Pago para assinaturas.',
        },
        {
          title: 'GNLink - Site Institucional',
          description: 'Site institucional moderno e responsivo para empresa do setor de energia. Desenvolvido com Next.js 14, TypeScript e Tailwind CSS. Inclui internacionalização (PT/EN), animações com Framer Motion, menu responsivo e design premium.',
        },
        {
          title: 'LogiFlow CRM',
          description: 'Sistema CRM SaaS completo para transportadoras e logística. Unifica gestão comercial, operacional e fiscal com emissão de CT-e/MDF-e integrada, rastreamento GPS em tempo real, integrações com ERPs (Omie, Bling, Tiny), WhatsApp e MercadoPago. Inclui CRM Principal, App do Motorista (PWA), Portal do Cliente e Site Institucional.',
        },
        {
          title: 'TaskManager - Gestão de Projetos',
          description: 'Sistema completo estilo Trello para gestão de projetos e tarefas com backend em Go e frontend em Vue.js 3. Inclui Dark Mode, Internacionalização (PT-BR/EN), Dashboard com gráficos Chart.js, Kanban Board com drag-and-drop, sistema de Equipes/Squads, Notificações em tempo real, permissões granulares (lead/admin/member), busca e filtros avançados, atalhos de teclado e autenticação JWT com refresh tokens.',
        },
        {
          title: 'AgentesIA - Consultoria com IA',
          description: 'Plataforma SaaS de análise estratégica de negócios com múltiplos agentes de IA especializados (Claude 3). 5 agentes trabalham em conjunto: Analista de Negócio, Estrategista Comercial, Analista Financeiro, Especialista de Mercado e Revisor Executivo. Processamento assíncrono com Redis, exportação de relatórios (PDF, PPTX, Markdown), sistema de planos (Free/Pro/Enterprise) e arquitetura multi-tenant.',
        },
        {
          title: 'PyScriptTech - Plataforma de Cursos',
          description: 'Plataforma educacional para cursos de programação com foco em Python e tecnologias web. Interface moderna e responsiva desenvolvida com React, catálogo de cursos, sistema de autenticação, dashboard do aluno e integração com pagamentos.',
        },
      ],
    },

    // Contact
    contact: {
      title: 'Contato',
      subtitle: 'Entre em contato e',
      subtitleHighlight: 'vamos criar algo incrível juntos!',
      preferred: 'PREFERIDO',
      email: {
        title: 'Email',
        description: 'Envie uma mensagem direta para discutir projetos, oportunidades ou colaborações',
        action: 'Entrar em contato',
      },
      github: {
        title: 'GitHub',
        description: 'Explore meus repositórios, contribuições open source e projetos pessoais',
        action: 'Visitar perfil',
      },
      linkedin: {
        title: 'LinkedIn',
        description: 'Conecte-se para networking profissional e acompanhe minha trajetória',
        action: 'Conectar',
      },
      footer: 'Respondo rapidamente e estou sempre aberto a novas',
      opportunities: 'oportunidades',
      and: 'e',
      collaborations: 'colaborações',
    },

    // Footer
    footer: {
      description: 'Transformando ideias em soluções tecnológicas inovadoras com Python, Django, React e muito mais',
      visitGithub: 'Visite o perfil de Leonardo no GitHub',
      visitLinkedin: 'Visite o perfil de Leonardo no LinkedIn',
      sendEmail: 'Envie um e-mail para Leonardo Fragoso',
      copyright: 'Todos os direitos reservados.',
      madeWith: 'Desenvolvido com',
      and: 'e Python',
    },
  },

  en: {
    // Header
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },

    // Hero
    hero: {
      roles: [
        'Full Stack Developer',
        'Python Specialist',
        'Backend Engineer',
        'Automation Expert',
      ],
      tagline: 'Transforming ideas into',
      taglineHighlight: 'innovative tech solutions',
      taglineEnd: '',
      specialist: 'Multi-Stack:',
      techStack: 'Python, Go, Java, Node.js, PHP, React, Vue, Next.js, Flutter',
      focusOn: '',
      focusAreas: 'Enterprise systems, REST APIs, microservices and scalable architectures',
      heroDescription: 'Systems Developer at a logistics company. Previous experience as IT Manager. Focus on automation, integrations and AI-powered solutions.',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      scroll: 'Scroll',
    },

    // About
    about: {
      title: 'About Me',
      role: 'Full Stack Developer',
      description: 'with proven experience in high-impact enterprise systems. Currently Systems Developer at a logistics company, with previous experience as IT Manager leading technical teams. Proficient in multiple stacks: Python (Django, Flask, FastAPI), Go (Gin), Java (Spring Boot), Node.js, PHP (Laravel), plus frontend frameworks like React, Vue.js, Next.js, TypeScript and Flutter. Focused on process automation, REST APIs, microservices and scalable architectures. I combine strategic business vision with advanced technical skills to create complete solutions, from production web applications to modern and intuitive interfaces.',
      stats: {
        projects: 'Projects Delivered',
        years: 'Years in IT',
        certifications: 'Certifications',
        technologies: 'Technologies',
      },
      experience: {
        title: 'Professional Experience',
        current: 'CURRENT',
      },
      skills: {
        title: 'Tech Stack',
        levels: {
          advanced: 'Advanced',
          intermediate: 'Intermediate',
        },
      },
      education: {
        title: 'Education & Certifications',
        featured: 'FEATURED',
      },
    },

    // Skills Data
    skillsData: [
      { 
        name: 'Python, Go & Frameworks', 
        description: 'Django, Flask, FastAPI, Gin | RESTful & GraphQL APIs | Go for high performance | Selenium, Pandas, NumPy | Celery, Redis | Robust back-end development | MongoDB and MariaDB integration', 
        level: 'Advanced',
      },
      { 
        name: 'Databases', 
        description: 'PostgreSQL, MySQL, MariaDB, MongoDB, SQLite, Firebase | ORM (Django/SQLAlchemy) | Data modeling, migrations and optimized queries', 
        level: 'Intermediate',
      },
      { 
        name: 'Frontend & Web', 
        description: 'React, TypeScript, Next.js | HTML5, CSS3, JavaScript ES6+ | Tailwind CSS, Framer Motion, shadcn/ui | PWA and SPA', 
        level: 'Intermediate',
      },
      { 
        name: 'DevOps & Cloud', 
        description: 'Git/GitHub, Docker, CI/CD | AWS (EC2, S3, RDS) | Vercel, Railway | Power BI | Linux (administration, shell scripts, services) | Agile Methodologies (Scrum/Kanban)', 
        level: 'Intermediate',
      },
      { 
        name: 'Automation & Data', 
        description: 'Selenium WebDriver, BeautifulSoup, Scrapy | ETL and data pipelines | Streamlit for dashboards | pytest, unittest', 
        level: 'Advanced',
      },
      { 
        name: 'Infrastructure & IT', 
        description: 'Windows Server, Active Directory, GPO | TCP/IP Networks, VPN, Firewall | Virtualization | Technical team management', 
        level: 'Advanced',
      },
    ],

    // Experience Data
    experienceData: [
      {
        title: 'Systems Developer',
        company: 'Logistics Company',
        period: 'Dec 2024 - Present',
        description: 'Development of automation and data extraction systems for logistics process optimization. Creation of REST APIs, management dashboards and system integration with Python, Django and React.',
        featured: true,
      },
      {
        title: 'IT Manager',
        company: 'RWE Telemedicine and Diagnostics', 
        period: 'Jan 2024 - Jul 2024',
        description: 'Leadership of technical support and infrastructure team. Implementation of process improvements, IT governance, project management and strategic decision-making.',
        featured: false,
      },
      {
        title: 'IT Support Analyst',
        company: 'Corporate Experience',
        period: 'Nov 2023 - Jul 2024',
        description: 'Back-end development with Python and Django. Process automation, script creation and internal tools. N2/N3 support and technical documentation.',
        featured: false,
      },
    ],

    // Education Data
    educationData: [
      {
        degree: 'Information Technology Management',
        institution: 'Estácio de Sá',
        year: '2016 - 2019',
        description: 'Degree focused on strategic IT management, corporate governance, project and process management',
        featured: true,
      },
      {
        degree: 'Python Developer Training',
        institution: 'Rocketseat',
        year: 'Apr 2024 - Aug 2024',
        description: 'Advanced Python, RESTful APIs, automated testing, clean code and design patterns',
        certificate: 'Verified certificate',
        featured: true,
      },
      {
        degree: 'Full Stack Training',
        institution: 'Rocketseat',
        year: 'Jun 2024 - Sep 2024',
        description: 'React, Node.js, TypeScript, PostgreSQL, Docker and production deployment on AWS',
        certificate: 'Verified certificate',
        featured: true,
      },
      {
        degree: 'Django Master Bootcamp',
        institution: 'PyCode',
        year: 'Apr 2024 - Sep 2024',
        description: 'Advanced Django, Django REST Framework, optimized ORM, AWS, Redis, Celery and WebSockets',
        certificate: '140h course load',
      },
      {
        degree: 'Explorer Training',
        institution: 'Rocketseat',
        year: 'Apr 2024 - Jul 2024', 
        description: 'HTML5, CSS3, JavaScript, Git, algorithms, data structures and programming logic',
        certificate: 'Verified certificate',
      },
      {
        degree: 'Data Analyst',
        institution: 'Cubos Academy',
        year: 'Jan 2024 - Sep 2024',
        description: 'Python for data analysis, Pandas, NumPy, Matplotlib, advanced SQL and basic Machine Learning',
        certificate: 'Final project approved',
      },
    ],

    // Projects
    projects: {
      title: 'Projects',
      subtitle: 'Exploring ideas through code and creating',
      subtitleHighlight: 'innovative solutions',
      featured: 'FEATURED',
      saas: 'ONLINE',
      live: 'LIVE',
      photos: 'photos',
      viewGallery: 'View Gallery',
      code: 'Code',
      visitSite: 'Visit Site',
      projectsList: [
        {
          title: 'Parking Lot Management System',
          description: 'Complete system for parking lot management with real-time space control, management reports, analytical dashboard and responsive interface. Developed with MVC architecture and REST APIs.',
        },
        {
          title: 'Non-Conformance Management System',
          description: 'Robust system for non-conformance management with multi-level approval workflow, automatic notifications, PDF reports, executive dashboard with KPIs and complete corrective action history.',
        },
        {
          title: 'GR System - Risk Management',
          description: 'Enterprise risk management system with risk identification, assessment and monitoring, mitigation plans, automated management reports and interactive dashboard with performance metrics.',
        },
        {
          title: 'Traffic Fines Dashboard - Streamlit',
          description: 'Interactive dashboard for traffic fine analysis with automated ETL, Google Drive integration, dynamic visualizations (Plotly/Altair), advanced filters and customized report export.',
        },
        {
          title: 'Pini Scaffolding System',
          description: 'Rental management system built with React and Material-UI. Expandable sidebar, fixed navbar, rental registration, order visualization, fully responsive layout for mobile, tablet and desktop.',
        },
        {
          title: 'Digital Signage Monitoring System',
          description: 'Corporate TV management platform with multi-company support, real-time WebSocket communication, automatic video compilation with FFmpeg, native Chromecast integration, Prometheus metrics and Redis cache for high availability.',
        },
        {
          title: 'ProFlow - Freelancer Platform',
          description: 'Web platform for freelancers with consultive AI that suggests prices, generates automatic proposals and protects against defaults with escrow payment system. Includes identity verification (ProFlow Score), 8% flat fee and priority support.',
        },
        {
          title: 'Base Corporativa - E-commerce',
          description: 'Complete e-commerce for corporate clothing with product catalog, shopping cart, integrated checkout, order management system, analytics with Google Analytics and Meta Pixel, and PWA for mobile experience.',
        },
        {
          title: 'MedFlow Finance',
          description: 'Intelligent system that recovers 10-20% of revenue lost by medical clinics due to billing errors and denials. Validation automation with Laravel 11 and Vue 3, ROI metrics dashboard and centralized processing.',
        },
        {
          title: 'BI-as-a-Service',
          description: 'SaaS Business Intelligence platform with AI. CSV upload with automatic analysis via GPT-4o-mini, semantic data detection, automatic dashboards, dynamic KPIs, predictive insights and multi-tenant management with integrated billing.',
        },
        {
          title: 'APM Platform',
          description: 'Application Performance Monitoring Platform in Java 21 with Spring Boot. Automatic metrics collection (latency, CPU, memory), health checks with UP/DEGRADED/DOWN classification, configurable alerts and real-time dashboard via WebSocket.',
        },
        {
          title: 'FinanceControl',
          description: 'Complete personal finance management system with Freemium model. Cross-platform Flutter app (Windows, Android, iOS, Web) with Django REST backend. Includes interactive dashboard, financial goals, budgets, AI assistant and Mercado Pago integration for subscriptions.',
        },
        {
          title: 'GNLink - Institutional Website',
          description: 'Modern and responsive institutional website for an energy sector company. Built with Next.js 14, TypeScript and Tailwind CSS. Features internationalization (PT/EN), Framer Motion animations, responsive menu and premium design.',
        },
        {
          title: 'LogiFlow CRM',
          description: 'Complete SaaS CRM system for carriers and logistics. Unifies commercial, operational and fiscal management with integrated CT-e/MDF-e issuance, real-time GPS tracking, ERP integrations (Omie, Bling, Tiny), WhatsApp and MercadoPago. Includes Main CRM, Driver App (PWA), Customer Portal and Institutional Site.',
        },
        {
          title: 'TaskManager - Project Management',
          description: 'Complete Trello-style system for project and task management with Go backend and Vue.js 3 frontend. Features Dark Mode, Internationalization (PT-BR/EN), Dashboard with Chart.js graphs, Kanban Board with drag-and-drop, Teams/Squads system, real-time Notifications, granular permissions (lead/admin/member), advanced search and filters, keyboard shortcuts and JWT authentication with refresh tokens.',
        },
        {
          title: 'AgentesIA - AI Business Consulting',
          description: 'SaaS platform for strategic business analysis with multiple specialized AI agents (Claude 3). 5 agents work together: Business Analyst, Commercial Strategist, Financial Analyst, Market Specialist and Executive Reviewer. Async processing with Redis, report export (PDF, PPTX, Markdown), plan system (Free/Pro/Enterprise) and multi-tenant architecture.',
        },
        {
          title: 'PyScriptTech - Programming Courses Platform',
          description: 'Educational platform for programming courses focused on Python and web technologies. Modern and responsive interface built with React, course catalog, authentication system, student dashboard and payment integration.',
        },
      ],
    },

    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch and',
      subtitleHighlight: "let's create something amazing together!",
      preferred: 'PREFERRED',
      email: {
        title: 'Email',
        description: 'Send a direct message to discuss projects, opportunities or collaborations',
        action: 'Get in touch',
      },
      github: {
        title: 'GitHub',
        description: 'Explore my repositories, open source contributions and personal projects',
        action: 'Visit profile',
      },
      linkedin: {
        title: 'LinkedIn',
        description: 'Connect for professional networking and follow my journey',
        action: 'Connect',
      },
      footer: 'I respond quickly and am always open to new',
      opportunities: 'opportunities',
      and: 'and',
      collaborations: 'collaborations',
    },

    // Footer
    footer: {
      description: 'Transforming ideas into innovative tech solutions with Python, Django, React and more',
      visitGithub: "Visit Leonardo's GitHub profile",
      visitLinkedin: "Visit Leonardo's LinkedIn profile",
      sendEmail: 'Send an email to Leonardo Fragoso',
      copyright: 'All rights reserved.',
      madeWith: 'Made with',
      and: 'and Python',
    },
  },
};

export type Translations = typeof translations.pt;
