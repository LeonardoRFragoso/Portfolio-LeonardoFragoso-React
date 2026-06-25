export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    // Header
    nav: {
      home: 'Home',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
      testimonials: 'Depoimentos',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      hireCTA: 'Contratar',
      downloadCV: 'Download CV',
    },

    // Hero
    hero: {
      roles: [
        'Desenvolvedor Python Backend | Django · FastAPI · IA',
        'APIs · IA · Sistemas Enterprise',
        'Django · FastAPI · PostgreSQL',
        'ProFlow.pro em Produção',
      ],
      availableBadge: 'Disponível para contratação',
      headline: 'Desenvolvedor Python Backend | Django · FastAPI · IA',
      subheadline: 'APIs, IA Aplicada e Sistemas Corporativos para empresas que precisam escalar.',
      techPills: 'Django · FastAPI · PostgreSQL · Docker · OpenAI',
      projectsDelivered: '+20 projetos entregues',
      proofPoints: [
        'SaaS próprio em produção',
        '6 sistemas enterprise',
        '+20 projetos no GitHub',
      ],
      tagline: 'Desenvolvedor Python Backend',
      taglineHighlight: 'Django · FastAPI · IA',
      taglineEnd: '| ProFlow.pro em Produção',
      specialist: 'Stack Principal:',
      techStack: 'Python, Django, FastAPI, PostgreSQL, Redis, Docker',
      focusOn: '',
      focusAreas: 'Django · FastAPI · APIs REST | Sistemas em produção | Buscando crescer em equipe',
      heroDescription: 'Desenvolvedor Python backend com experiência em sistemas reais. Busco integrar uma equipe onde possa contribuir, aprender e me especializar cada vez mais.',
      contactMe: 'Fale Comigo',
      whatsappCta: 'Falar no WhatsApp',
      emailCta: 'Enviar Email',
      viewProjects: 'Ver Projetos',
      getInTouch: 'Entrar em Contato',
      downloadCV: 'Download CV',
      scroll: 'Scroll',
    },

    // Social Proof
    socialProof: {
      title: 'Provas de entrega real',
      subtitle: 'Não só código — resultados em produção',
      items: [
        {
          text: 'Experiência em sistemas utilizados no maior terminal portuário privado do Brasil.',
          context: 'iTracker · ICTSI — Porto do Rio de Janeiro',
        },
        {
          text: 'Desenvolvimento de mais de 6 sistemas corporativos.',
          context: 'Django · FastAPI · PostgreSQL · Docker',
        },
        {
          text: 'Mais de 20 projetos publicados no GitHub.',
          context: 'Repositórios públicos para avaliação técnica',
        },
      ],
    },

    // About
    about: {
      title: 'Sobre Mim',
      role: 'Desenvolvedor Python Backend | Django · FastAPI · IA',
      description: 'com experiência prática em sistemas reais de produção. Na iTracker (ICTSI — maior terminal portuário privado do Brasil), atuei como desenvolvedor responsável por 6 sistemas enterprise — incluindo plataforma com pipeline LLM/RAG, sistema de controle de acesso portuário, plataforma de Digital Signage (rodando na intranet da ICTSI) e RPAs automatizando fluxos financeiros. Tenho o ProFlow (proflow.pro) em produção real, e mais 2 projetos com demos ao vivo: LogiFlow e AgentesIA — disponíveis para recrutadores e devs avaliarem. Busco uma equipe onde possa crescer, colaborar e aprofundar meu domínio em Django · FastAPI · APIs REST.',
      stats: {
        systems: 'Sistemas Enterprise',
        automation: 'Redução Processos',
        saas: 'SaaS em Produção',
        queries: 'Consultas/Dia',
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
      whyHireMe: {
        title: 'Por que me contratar?',
        subtitle: 'Backend, IA e sistemas que geram resultado',
        items: [
          {
            title: 'Experiência em Sistemas Enterprise',
            description: '6+ sistemas corporativos entregues na iTracker/ICTSI, incluindo plataforma LLM/RAG, Digital Signage, controle de acesso portuário e RPAs financeiros.',
            icon: 'briefcase',
          },
          {
            title: 'Aplicações com IA Aplicada',
            description: 'Projetos em produção com OpenAI GPT-4, Claude 3, OpenRAG, Langflow e Docling. De chatbots a consultores estratégicos com indexação semântica.',
            icon: 'code',
          },
          {
            title: 'Arquitetura de APIs e Backend',
            description: 'APIs REST bem estruturadas com Django, FastAPI, PostgreSQL, Redis, Docker e WebSocket. Foco em performance, escalabilidade e manutenibilidade.',
            icon: 'chart',
          },
          {
            title: 'Sistemas em Produção',
            description: 'ProFlow.pro rodando em produção real, além de LogiFlow e AgentesIA com demos ao vivo. Entrega de valor real, não apenas código de tutorial.',
            icon: 'users',
          },
        ],
      },
    },

    // Skills Data
    skillsData: [
      { 
        name: 'Python & Frameworks Backend', 
        description: 'Django 5, FastAPI, Flask · DRF, SQLAlchemy, Pydantic · Celery, Redis, Alembic · pytest · Desenvolvimento backend robusto e escalável', 
        level: 'Avançado',
      },
      { 
        name: 'Banco de Dados', 
        description: 'PostgreSQL, MySQL, MariaDB, SQLite · ORM (Django/SQLAlchemy) · Migrations e queries otimizadas · APScheduler, Flyway', 
        level: 'Intermediário',
      },
      { 
        name: 'Frontend (Suporte)', 
        description: 'Vue.js 3, TypeScript, React · JavaScript ES6+ · TailwindCSS · Chart.js, Plotly · PWA e SPA', 
        level: 'Intermediário',
      },
      { 
        name: 'DevOps & Cloud', 
        description: 'Docker, Docker Compose · Linux (Ubuntu) · Nginx · AWS (EC2, S3, RDS) · Vercel, Railway · CI/CD · Prometheus, Grafana · Git/GitHub', 
        level: 'Intermediário',
      },
      { 
        name: 'IA & Automação', 
        description: 'Pipelines LLM/RAG · GPT-4 / OpenAI API · Vector Search · OpenSearch · RPA (Selenium + PyAutoGUI) · ETL Pipelines · BeautifulSoup, Scrapy · Streamlit · Pandas, NumPy', 
        level: 'Avançado',
      },
      { 
        name: 'APIs & Integrações', 
        description: 'REST APIs · JWT Authentication · WebSockets, Socket.IO · Stripe, Mercado Pago · WhatsApp Business API · Google APIs · Microservices · Telematics GPS API', 
        level: 'Avançado',
      },
    ],

    // Experience Data
    experienceData: [
      {
        title: 'Desenvolvedor Python Backend',
        company: 'iTracker | ICTSI Group — Porto do Rio de Janeiro',
        period: 'dez 2024 - jan 2026 · 1 ano 2 meses',
        description: 'Desenvolvedor responsável pelo design, construção e deploy de 6 sistemas enterprise em produção para operações portuárias e logísticas — Python, Django, FastAPI, Linux, Docker. Integrou capacidades de IA/LLM na plataforma de analytics comercial e construiu bots RPA automatizando fluxos financeiros críticos.',
        impact: '6 sistemas enterprise · LLM/RAG integrado · ProFlow.pro em produção',
        tags: ['Python', 'Django 5', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'LLM/RAG', 'Linux'],
        featured: false,
      },
      {
        title: 'Gerente de TI',
        company: 'RWE Telemedicina e Diagnósticos', 
        period: 'jan 2024 - jul 2024 · 7 meses',
        description: 'Coordenação e supervisão dos setores de suporte técnico, infraestrutura e governança de TI, garantindo operações diárias eficientes.',
        impact: 'Liderança de equipe de 5 pessoas',
        tags: ['Gestão de TI', 'ITIL', 'Governança', 'Python'],
        featured: false,
      },
      {
        title: 'Analista de Suporte de TI',
        company: 'RWE Telemedicina e Diagnósticos',
        period: 'nov 2023 - jan 2024 · 3 meses',
        description: 'Desenvolvimento de back-end com Python e suporte técnico avançado.',
        tags: ['Python', 'Back-end', 'Suporte N2'],
        featured: false,
      },
      {
        title: 'Assistente de Helpdesk',
        company: 'RWE Telemedicina e Diagnósticos',
        period: 'out 2023 - nov 2023 · 2 meses',
        description: 'Atendimento de chamados telefônico e presencial. Backup e formatação de máquinas Windows, Linux e MacOS.',
        tags: ['Windows', 'Linux', 'MacOS', 'Suporte N1'],
        featured: false,
      },
      {
        title: 'Assistente de T.I',
        company: 'MEDGRUPO',
        period: 'jan 2022 - out 2022 · 10 meses',
        description: 'Suporte técnico aos colaboradores. Configuração e manutenção de VPN, conexão remota, Active Directory.',
        tags: ['Active Directory', 'VPN', 'Zabbix', 'Infraestrutura'],
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
      whatsappContact: 'Testar WhatsApp',
      filterAll: 'Todos',
      filterSaaS: 'SaaS',
      filterEcommerce: 'E-commerce',
      filterAI: 'Inteligência Artificial',
      filterEnterprise: 'Empresarial',
      filterWeb: 'Web',
      showingProjects: 'Mostrando',
      of: 'de',
      projects: 'projetos',
      quickEval: 'Avaliação Rápida',
      evalTime2to3: '2-3 min',
      evalTime3to4: '3-4 min',
      evalTime4to5: '4-5 min',
      evalTime5to8: '5-8 min',
      evalGithub: 'GitHub',
      complexity: 'Complexidade',
      multipleApps: 'Múltiplos Apps',
      viewMore: 'Ver Mais Projetos',
      viewLess: 'Ver Menos',
      viewAllProjects: 'Ver Todos os Projetos',
      moreProjectsTitle: 'Mais Projetos',
      moreProjectsSubtitle: 'Outros trabalhos e experimentações técnicas',
      showMoreProjects: 'Ver Projetos Adicionais',
      hideMoreProjects: 'Ocultar Projetos Adicionais',
      contactAboutProject: 'Quero algo assim',
      contactProjectSubject: 'Gostaria de conversar sobre este projeto',
      topForRecruiters: 'Top 3 para Recrutadores',
      topForRecruitersSubtitle: 'Projetos selecionados para avaliação rápida e completa',
      easyToEvaluate: 'Fácil de Avaliar',
      fullSystem: 'Sistema Completo',
      modernStack: 'Stack Moderna',
      flagship: {
        badge: 'PROJETO PRINCIPAL',
        online: 'ONLINE',
        accessPlatform: 'Acessar Plataforma',
        viewCode: 'Ver Código',
        gallery: 'Galeria',
        photos: 'fotos',
        complexity: 'Complexidade',
        pillars: {
          ai: { title: 'ProFlow AI', desc: 'IA com GPT-4' },
          secure: { title: 'ProFlow Secure', desc: 'Escrow Anti-Calote' },
          score: { title: 'ProFlow Score', desc: 'Reputação + KYC' },
          path: { title: 'ProFlow Path', desc: 'Onboarding Gamificado' },
        },
      },
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
          title: 'ProFlow - O Sistema Operacional do Freelancer',
          description: 'Plataforma completa para freelancers brasileiros com 4 pilares: ProFlow AI (IA consultiva com GPT-4 para precificação e propostas), ProFlow Secure (pagamento em custódia anti-calote com Mercado Pago e Asaas), ProFlow Score (reputação com KYC) e ProFlow Path (onboarding gamificado). Chat em tempo real via WebSocket, carteira virtual com saques PIX, sistema de assinaturas recorrentes e AI Auto-Fixer para correção automática de erros.',
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
          title: 'PyScript.tech - Site Institucional',
          description: 'Website institucional e portfólio da PyScript.tech - empresa de desenvolvimento de software sob medida. Design moderno com glassmorphism e gradientes animados. Formulário de contato integrado com EmailJS, carrossel de depoimentos e páginas de serviços e projetos com filtros por categoria.',
        },
        {
          title: 'Assistente Financeiro via WhatsApp',
          description: 'Sistema SaaS completo de gestão financeira pessoal via WhatsApp com dashboard web e IA para processamento de linguagem natural. IMPORTANTE: É necessário cadastro prévio no site antes de entrar em contato via WhatsApp. O número cadastrado deve ser o mesmo que enviará mensagens. Registre despesas, receitas e lembretes usando linguagem informal. Backend Python/FastAPI com PostgreSQL e Redis, frontend Next.js 14 com TailwindCSS, integração Twilio WhatsApp e OpenAI GPT-4o.',
        },
        {
          title: 'Oráculo — Consultor Estratégico com IA',
          description: 'Consultor estratégico com IA com pipeline OpenRAG completo. Interface estilo ChatGPT em React, analytics preditivos, dashboard executivo, gestão de orçamento e metas, e integração universal com dados de nuvem para logística e dados comerciais. Stack: OpenSearch · Langflow · Docling — totalmente conteinerizado em Docker.',
        },
      ],
    },

    // Contact
    contact: {
      title: 'Contato',
      subtitle: 'Entre em contato e',
      subtitleHighlight: 'vamos criar algo incrível juntos!',
      preferred: 'PREFERIDO',
      availability: 'Disponível para novos projetos',
      responseTime: 'Respondo em até 24h',
      formTitle: 'Envie uma Mensagem',
      formName: 'Seu Nome',
      formEmail: 'Seu Email',
      formSubject: 'Assunto',
      formMessage: 'Mensagem',
      formSend: 'Enviar Mensagem',
      formSending: 'Enviando...',
      formSuccess: 'Mensagem enviada com sucesso!',
      formError: 'Erro ao enviar mensagem. Tente novamente.',
      scheduleCall: 'Agendar Reunião de 30min',
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
      whatsapp: {
        title: 'WhatsApp',
        description: 'Atendimento rápido para dúvidas, propostas e projetos urgentes',
        action: 'Enviar mensagem',
        label: 'Fale pelo WhatsApp',
      },
      projectType: {
        label: 'Tipo de projeto',
        placeholder: 'Selecione o tipo de projeto',
        options: {
          backend: 'Backend API',
          ai: 'IA / Machine Learning',
          corporate: 'Sistema Corporativo',
          automation: 'Automação',
          other: 'Outro',
        },
      },
      pjServices: {
        title: 'Serviços PJ',
        subtitle: 'Empresa regularizada para prestação de serviços',
        companyName: 'Leonardo Fragoso Developer',
        legalName: 'Leonardo Rodrigues Fragoso Desenvolvimento de Software LTDA',
        cnpj: 'CNPJ: 65.032.889/0001-34',
        companyType: 'Microempresa (M.E.) - Limitada Unipessoal',
        services: 'Desenvolvimento de Software sob Encomenda',
        invoicing: 'Emissão de Nota Fiscal',
        description: 'Empresa regularizada e apta para prestação de serviços B2B com emissão de notas fiscais',
        badge: 'CNPJ ATIVO',
      },
    },

    // Featured Projects
    featuredProjects: {
      title: 'Projetos em Destaque',
      subtitle: 'Arquitetura, IA e sistemas reais em produção',
      problem: 'Problema',
      solution: 'Solução',
      architecture: 'Arquitetura',
      keyResults: 'Resultados',
      caseStudy: 'Ver Case Study',
      viewDemo: 'Demo',
      viewCode: 'GitHub',
      items: [
        {
          id: 'oraculo',
          title: 'Oráculo IA',
          role: 'Backend Engineer / AI Integration',
          problem: 'Empresas perdem decisões estratégicas porque dados dispersos (planilhas, PDFs, sistemas legados) não são transformados em insights acionáveis de forma rápida.',
          solution: 'Consultor estratégico com IA que ingestiona documentos, executa pipeline OpenRAG com OpenSearch + Langflow + Docling e responde em linguagem natural com fontes verificáveis.',
          architecture: 'FastAPI · OpenSearch · Langflow · Docling · Docker · React · OpenAI',
          results: [
            'Pipeline OpenRAG com indexação semântica',
            'Containerização completa com Docker',
            'Respostas com citação de fontes',
          ],
        },
        {
          id: 'proflow',
          title: 'ProFlow AI',
          role: 'Full Stack / Backend Lead',
          problem: 'Freelancers brasileiros sofrem com insegurança de pagamento, precificação errada e falta de automação em propostas e contratos.',
          solution: 'SaaS completo com 4 pilares: IA consultiva (GPT-4), pagamento em custódia (Mercado Pago + Asaas), reputação com KYC e onboarding gamificado.',
          architecture: 'Django · PostgreSQL · Vue.js 3 · WebSocket · Redis · OpenAI GPT-4 · Mercado Pago · Asaas',
          results: [
            'SaaS próprio em produção (proflow.pro)',
            'Chat em tempo real e carteira virtual com PIX',
            'Assinaturas recorrentes e escrow anti-calote',
          ],
        },
        {
          id: 'logiflow',
          title: 'LogiFlow CRM',
          role: 'Backend Engineer / System Integrations',
          problem: 'Transportadoras e empresas de logística usam sistemas isolados para vendas, operações, faturamento e rastreamento, gerando retrabalho e atrasos.',
          solution: 'CRM SaaS unificando gestão comercial, operacional e fiscal com 4 apps integrados (CRM, App Motorista, Portal Cliente, Site Institucional).',
          architecture: 'FastAPI · PostgreSQL · Redis · Vue.js 3 · WebSocket · ERPs (Omie/Bling/Tiny) · WhatsApp · Mercado Pago · GPS',
          results: [
            '4 aplicações integradas em uma stack única',
            'Integrações com ERPs, WhatsApp e rastreamento GPS',
            'Emissão de CT-e/MDF-e e faturamento automatizado',
          ],
        },
      ],
    },

    // Floating WhatsApp
    floatingWhatsApp: {
      tooltip: 'Fale comigo no WhatsApp',
      message: 'Olá Leonardo, vi seu portfólio e gostaria de discutir um projeto.',
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

    // Results - Nova seção
    results: {
      title: 'Em Números',
      subtitle: 'Trajetória real, entrega real',
      items: [
        {
          metric: '6',
          description: 'Sistemas enterprise entregues em produção',
          context: 'iTracker · ICTSI — Porto do Rio de Janeiro',
        },
        {
          metric: 'ProFlow',
          description: 'SaaS próprio em produção real',
          context: 'proflow.pro — clientes reais, pagamentos integrados',
        },
        {
          metric: '300h+',
          description: 'Certificações técnicas concluídas',
          context: 'Python · Django · Full Stack · Data Analysis',
        },
        {
          metric: '< 2 anos',
          description: 'De suporte de TI a dev backend em produção',
          context: 'Crescimento acelerado com foco em Python e Django',
        },
      ],
    },
    // Testimonials - Baseados em recomendações reais do LinkedIn
    testimonials: {
      title: 'Recomendações',
      subtitle: 'Feedback de colegas e gestores (LinkedIn)',
      linkedinNote: 'Verifique as recomendações completas no meu perfil do LinkedIn',
      items: [
        {
          name: 'Verificar no LinkedIn',
          role: 'Recomendações Profissionais',
          company: 'linkedin.com/in/leonardo-fragoso-921b166a',
          text: 'Para garantir autenticidade, minhas recomendações estão disponíveis diretamente no LinkedIn. Clique para verificar o histórico completo de feedbacks de colegas, gestores e clientes.',
          rating: 5,
          isLinkedIn: true,
        },
      ],
    },

    // Engineering Impact
    engineeringImpact: {
      title: 'Impacto em Engenharia',
      subtitle: 'Resultados técnicos que geram valor de negócio',
      items: {
        enterprise: {
          title: 'Sistemas Enterprise',
          description: 'Sistemas usados no maior terminal portuário privado do Brasil, com milhares de usuários internos e criticidade operacional.',
        },
        saas: {
          title: 'SaaS com Pagamentos',
          description: 'ProFlow.pro com pagamentos em custódia, assinaturas recorrentes, PIX e integração com Mercado Pago e Asaas.',
        },
        multitenant: {
          title: 'Multi-Tenant',
          description: 'Arquitetura que isola dados por empresa em LogiFlow, ProFlow e Oráculo, pronta para escalar.',
        },
        realtime: {
          title: 'Sistemas em Tempo Real',
          description: 'WebSocket + Redis para chat, notificações, atualizações de status e Digital Signage em produção.',
        },
        ai: {
          title: 'Aplicações com IA',
          description: 'GPT-4, Claude 3, OpenRAG, Langflow e Docling em produção para consultoria, propostas e análise de documentos.',
        },
        integrations: {
          title: 'Integrações e APIs',
          description: 'ERP Omie/Bling/Tiny, WhatsApp, GPS, CT-e/MDF-e, fiscal e automações RPA conectadas a sistemas legados.',
        },
        production: {
          title: 'Deploy em Produção',
          description: 'Docker, Vercel, CI/CD, servidores Linux e aplicações reais servindo clientes e usuários finais.',
        },
        security: {
          title: 'Segurança e Compliance',
          description: 'JWT, KYC, escrow, RBAC, logs de auditoria e separação de dados sensíveis por cliente.',
        },
      },
    },
  },

  en: {
    // Header
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      testimonials: 'Testimonials',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      hireCTA: 'Hire Me',
      downloadCV: 'Download CV',
    },

    // Hero
    hero: {
      roles: [
        'Python Backend Developer | Django · FastAPI · AI',
        'APIs · AI · Enterprise Systems',
        'Django · FastAPI · PostgreSQL',
        'ProFlow.pro in Production',
      ],
      availableBadge: 'Available for hire',
      headline: 'Python Backend Developer | Django · FastAPI · AI',
      subheadline: 'APIs, Applied AI and Corporate Systems for companies that need to scale.',
      techPills: 'Django · FastAPI · PostgreSQL · Docker · OpenAI',
      projectsDelivered: '+20 projects delivered',
      proofPoints: [
        'Own SaaS in production',
        '6 enterprise systems',
        '+20 projects on GitHub',
      ],
      tagline: 'Python Backend Developer',
      taglineHighlight: 'Django · FastAPI · AI',
      taglineEnd: '| ProFlow.pro in Production',
      specialist: 'Main Stack:',
      techStack: 'Python, Django, FastAPI, PostgreSQL, Redis, Docker',
      focusOn: '',
      focusAreas: 'Django · FastAPI · REST APIs | Business-critical systems | SaaS with payments | Applied AI',
      heroDescription: 'Python Backend Developer focused on production systems, APIs and applied AI. I build backends that handle real business-critical workloads, from enterprise port operations to live SaaS with payments.',
      contactMe: 'Contact Me',
      whatsappCta: 'WhatsApp Me',
      emailCta: 'Send Email',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      downloadCV: 'Download CV',
      scroll: 'Scroll',
    },

    // Social Proof
    socialProof: {
      title: 'Proof of real delivery',
      subtitle: 'Not just code — results in production',
      items: [
        {
          text: 'Experience in systems used at Brazil\'s largest private port terminal.',
          context: 'iTracker · ICTSI — Porto do Rio de Janeiro',
        },
        {
          text: 'Development of more than 6 corporate systems.',
          context: 'Django · FastAPI · PostgreSQL · Docker',
        },
        {
          text: 'More than 20 projects published on GitHub.',
          context: 'Public repositories for technical evaluation',
        },
      ],
    },

    // About
    about: {
      title: 'About Me',
      role: 'Python Backend Developer | Django · FastAPI · AI',
      description: 'with hands-on experience in real production systems. At iTracker (ICTSI — Brazil\'s largest private port terminal), I led the design, build and deployment of 6 enterprise systems — including an LLM/RAG analytics platform, port access control, a Digital Signage platform (running on ICTSI\'s intranet) and RPA bots automating financial workflows. ProFlow (proflow.pro) is live in real production, with integrated payments, escrow and subscriptions. LogiFlow and Oráculo also have live demos for technical evaluation. I deliver backend systems that are observable, scalable and business-critical, and I am open to remote opportunities with global teams.',
      stats: {
        systems: 'Enterprise Systems',
        automation: 'Process Reduction',
        saas: 'SaaS in Production',
        queries: 'Queries/Day',
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
      whyHireMe: {
        title: 'Why Hire Me?',
        subtitle: 'Backend, AI and systems that deliver business results',
        items: [
          {
            title: 'Enterprise Systems',
            description: 'Delivered and operated 6+ corporate systems at iTracker/ICTSI, including LLM/RAG analytics, Digital Signage, port access control and RPA bots that automated financial workflows.',
            icon: 'briefcase',
          },
          {
            title: 'Applied AI & RAG',
            description: 'Production projects with OpenAI GPT-4, Claude 3, OpenSearch, Langflow and Docling. From AI assistants to strategic consultants with semantic indexing.',
            icon: 'code',
          },
          {
            title: 'Backend Architecture',
            description: 'REST APIs with Django, FastAPI, PostgreSQL, Redis, Docker, WebSocket. I care about performance, data integrity, test coverage and long-term maintainability.',
            icon: 'chart',
          },
          {
            title: 'SaaS in Production',
            description: 'ProFlow.pro is live with real users, payments, escrow and subscriptions. LogiFlow and Oráculo have live demos for technical evaluation.',
            icon: 'users',
          },
        ],
      },
    },

    // Skills Data
    skillsData: [
      { 
        name: 'Python & Backend Frameworks', 
        description: 'Django 5, FastAPI, Flask · DRF, SQLAlchemy, Pydantic · Celery, Redis, Alembic · pytest · Robust and scalable backend development', 
        level: 'Advanced',
      },
      { 
        name: 'Databases', 
        description: 'PostgreSQL, MySQL, MariaDB, SQLite · ORM (Django/SQLAlchemy) · Optimized migrations and queries · APScheduler, Flyway', 
        level: 'Intermediate',
      },
      { 
        name: 'Frontend (Supporting)', 
        description: 'Vue.js 3, TypeScript, React · JavaScript ES6+ · TailwindCSS · Chart.js, Plotly · PWA and SPA', 
        level: 'Intermediate',
      },
      { 
        name: 'DevOps & Cloud', 
        description: 'Docker, Docker Compose · Linux (Ubuntu) · Nginx · AWS (EC2, S3, RDS) · Vercel, Railway · CI/CD · Prometheus, Grafana · Git/GitHub', 
        level: 'Intermediate',
      },
      { 
        name: 'AI & Automation', 
        description: 'LLM/RAG Pipelines · GPT-4 / OpenAI API · Vector Search · OpenSearch · RPA (Selenium + PyAutoGUI) · ETL Pipelines · BeautifulSoup, Scrapy · Streamlit · Pandas, NumPy', 
        level: 'Advanced',
      },
      { 
        name: 'APIs & Integrations', 
        description: 'REST APIs · JWT Authentication · WebSockets, Socket.IO · Stripe, Mercado Pago · WhatsApp Business API · Google APIs · Microservices · Telematics GPS API', 
        level: 'Advanced',
      },
    ],

    // Experience Data
    experienceData: [
      {
        title: 'Python Backend Developer',
        company: 'iTracker | ICTSI Group — Porto do Rio de Janeiro',
        period: 'Dec 2024 - Jan 2026 · 1 year 2 months',
        description: 'Developer responsible for designing, building and deploying 6 production enterprise systems for port and logistics operations — Python, Django, FastAPI, Linux, Docker. Integrated AI/LLM capabilities into the commercial analytics platform and built RPA bots automating critical financial workflows.',
        impact: '6 enterprise systems · LLM/RAG integrated · ProFlow.pro in production',
        tags: ['Python', 'Django 5', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'LLM/RAG', 'Linux'],
        featured: false,
      },
      {
        title: 'IT Manager',
        company: 'RWE Telemedicine and Diagnostics', 
        period: 'Jan 2024 - Jul 2024 · 7 months',
        description: 'Coordinated and supervised technical support, infrastructure and IT governance sectors, ensuring efficient daily operations.',
        impact: 'Led team of 5 people',
        tags: ['IT Management', 'ITIL', 'Governance', 'Python'],
        featured: false,
      },
      {
        title: 'IT Support Analyst',
        company: 'RWE Telemedicine and Diagnostics',
        period: 'Nov 2023 - Jan 2024 · 3 months',
        description: 'Back-end development with Python and advanced technical support.',
        tags: ['Python', 'Back-end', 'N2 Support'],
        featured: false,
      },
      {
        title: 'Helpdesk Assistant',
        company: 'RWE Telemedicine and Diagnostics',
        period: 'Oct 2023 - Nov 2023 · 2 months',
        description: 'Phone and in-person ticket support. Backup and formatting of Windows, Linux and MacOS machines.',
        tags: ['Windows', 'Linux', 'MacOS', 'N1 Support'],
        featured: false,
      },
      {
        title: 'IT Assistant',
        company: 'MEDGRUPO',
        period: 'Jan 2022 - Oct 2022 · 10 months',
        description: 'Technical support for employees. VPN configuration and maintenance, remote connection, Active Directory.',
        tags: ['Active Directory', 'VPN', 'Zabbix', 'Infrastructure'],
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
      whatsappContact: 'Test WhatsApp',
      filterAll: 'All',
      filterSaaS: 'SaaS',
      filterEcommerce: 'E-commerce',
      filterAI: 'Artificial Intelligence',
      filterEnterprise: 'Enterprise',
      filterWeb: 'Web',
      showingProjects: 'Showing',
      of: 'of',
      projects: 'projects',
      quickEval: 'Quick Evaluation',
      evalTime2to3: '2-3 min',
      evalTime3to4: '3-4 min',
      evalTime4to5: '4-5 min',
      evalTime5to8: '5-8 min',
      evalGithub: 'GitHub',
      complexity: 'Complexity',
      multipleApps: 'Multiple Apps',
      viewMore: 'View More Projects',
      viewLess: 'View Less',
      viewAllProjects: 'View All Projects',
      moreProjectsTitle: 'More Projects',
      moreProjectsSubtitle: 'Other work and technical experiments',
      showMoreProjects: 'Show Additional Projects',
      hideMoreProjects: 'Hide Additional Projects',
      contactAboutProject: 'Want something similar',
      contactProjectSubject: 'I would like to discuss this project',
      topForRecruiters: 'Top 3 for Recruiters',
      topForRecruitersSubtitle: 'Selected projects for quick and complete evaluation',
      easyToEvaluate: 'Easy to Evaluate',
      fullSystem: 'Full System',
      modernStack: 'Modern Stack',
      flagship: {
        badge: 'MAIN PROJECT',
        online: 'ONLINE',
        accessPlatform: 'Access Platform',
        viewCode: 'View Code',
        gallery: 'Gallery',
        photos: 'photos',
        complexity: 'Complexity',
        pillars: {
          ai: { title: 'ProFlow AI', desc: 'AI with GPT-4' },
          secure: { title: 'ProFlow Secure', desc: 'Anti-Default Escrow' },
          score: { title: 'ProFlow Score', desc: 'Reputation + KYC' },
          path: { title: 'ProFlow Path', desc: 'Gamified Onboarding' },
        },
      },
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
          title: 'ProFlow - The Freelancer Operating System',
          description: 'Complete platform for Brazilian freelancers with 4 pillars: ProFlow AI (consultive AI with GPT-4 for pricing and proposals), ProFlow Secure (anti-default escrow payment with Mercado Pago and Asaas), ProFlow Score (reputation with KYC) and ProFlow Path (gamified onboarding). Real-time chat via WebSocket, virtual wallet with PIX withdrawals, recurring subscription system and AI Auto-Fixer for automatic error correction.',
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
          title: 'PyScript.tech - Institutional Website',
          description: 'Institutional website and portfolio for PyScript.tech - custom software development company. Modern design with glassmorphism and animated gradients. Contact form integrated with EmailJS, testimonial carousel and services/projects pages with category filters.',
        },
        {
          title: 'Financial Assistant via WhatsApp',
          description: 'Complete SaaS personal finance management system via WhatsApp with web dashboard and AI for natural language processing. IMPORTANT: Prior registration on the website is required before contacting via WhatsApp. The registered number must be the same one that will send messages. Register expenses, income and reminders using informal language. Python/FastAPI backend with PostgreSQL and Redis, Next.js 14 frontend with TailwindCSS, Twilio WhatsApp integration and OpenAI GPT-4o.',
        },
        {
          title: 'Oráculo — AI Strategic Decision Consultant',
          description: 'AI-powered strategic consultant with a full OpenRAG pipeline. ChatGPT-style React interface, predictive analytics, executive dashboard, budget & goal management, and universal cloud data integration for logistics and commercial data. Stack: OpenSearch · Langflow · Docling — fully containerized in Docker.',
        },
      ],
    },

    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch and',
      subtitleHighlight: "let's create something amazing together!",
      preferred: 'PREFERRED',
      availability: 'Available for new projects',
      responseTime: 'Response within 24h',
      formTitle: 'Send a Message',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSend: 'Send Message',
      formSending: 'Sending...',
      formSuccess: 'Message sent successfully!',
      formError: 'Error sending message. Please try again.',
      scheduleCall: 'Schedule 30min Meeting',
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
      whatsapp: {
        title: 'WhatsApp',
        description: 'Quick response for questions, proposals and urgent projects',
        action: 'Send message',
        label: 'Chat on WhatsApp',
      },
      projectType: {
        label: 'Project Type',
        placeholder: 'Select the project type',
        options: {
          backend: 'Backend API',
          ai: 'AI / Machine Learning',
          corporate: 'Corporate System',
          automation: 'Automation',
          other: 'Other',
        },
      },
      pjServices: {
        title: 'B2B Services',
        subtitle: 'Registered company for service provision',
        companyName: 'Leonardo Fragoso Developer',
        legalName: 'Leonardo Rodrigues Fragoso Desenvolvimento de Software LTDA',
        cnpj: 'CNPJ: 65.032.889/0001-34',
        companyType: 'Microenterprise (M.E.) - Single-Member LLC',
        services: 'Custom Software Development',
        invoicing: 'Invoice Issuing',
        description: 'Registered and qualified company for B2B services with invoice issuing',
        badge: 'ACTIVE CNPJ',
      },
    },

    // Featured Projects
    featuredProjects: {
      title: 'Featured Projects',
      subtitle: 'Architecture, AI and real systems in production',
      problem: 'Problem',
      solution: 'Solution',
      architecture: 'Architecture',
      keyResults: 'Results',
      caseStudy: 'View Case Study',
      viewDemo: 'Demo',
      viewCode: 'GitHub',
      items: [
        {
          id: 'oraculo',
          title: 'Oráculo IA',
          role: 'Backend Engineer / AI Integration',
          problem: 'Companies lose strategic decisions because scattered data (spreadsheets, PDFs, legacy systems) is not turned into actionable insights quickly.',
          solution: 'AI strategic consultant that ingests documents, runs an OpenRAG pipeline with OpenSearch + Langflow + Docling and answers in natural language with verifiable sources.',
          architecture: 'FastAPI · OpenSearch · Langflow · Docling · Docker · React · OpenAI',
          results: [
            'OpenRAG pipeline with semantic indexing',
            'Full containerization with Docker',
            'Answers with source citations',
          ],
        },
        {
          id: 'proflow',
          title: 'ProFlow AI',
          role: 'Full Stack / Backend Lead',
          problem: 'Brazilian freelancers struggle with payment insecurity, wrong pricing and lack of automation in proposals and contracts.',
          solution: 'Complete SaaS with 4 pillars: AI consulting (GPT-4), escrow payment (Mercado Pago + Asaas), reputation with KYC and gamified onboarding.',
          architecture: 'Django · PostgreSQL · Vue.js 3 · WebSocket · Redis · OpenAI GPT-4 · Mercado Pago · Asaas',
          results: [
            'Own SaaS in production (proflow.pro)',
            'Real-time chat and virtual wallet with PIX',
            'Recurring subscriptions and anti-fraud escrow',
          ],
        },
        {
          id: 'logiflow',
          title: 'LogiFlow CRM',
          role: 'Backend Engineer / System Integrations',
          problem: 'Transportation and logistics companies use isolated systems for sales, operations, billing and tracking, causing rework and delays.',
          solution: 'SaaS CRM unifying commercial, operational and fiscal management with 4 integrated apps (CRM, Driver App, Customer Portal, Institutional Site).',
          architecture: 'FastAPI · PostgreSQL · Redis · Vue.js 3 · WebSocket · ERPs (Omie/Bling/Tiny) · WhatsApp · Mercado Pago · GPS',
          results: [
            '4 integrated applications in a single stack',
            'Integrations with ERPs, WhatsApp and GPS tracking',
            'CT-e/MDF-e issuance and automated billing',
          ],
        },
      ],
    },

    // Floating WhatsApp
    floatingWhatsApp: {
      tooltip: 'Chat with me on WhatsApp',
      message: 'Hello Leonardo, I saw your portfolio and would like to discuss a project.',
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

    // Results - New section
    results: {
      title: 'By the Numbers',
      subtitle: 'Real trajectory, real delivery',
      items: [
        {
          metric: '6',
          description: 'Enterprise systems delivered in production',
          context: 'iTracker · ICTSI — Porto do Rio de Janeiro',
        },
        {
          metric: 'ProFlow',
          description: 'Own SaaS in real production',
          context: 'proflow.pro — real clients, integrated payments',
        },
        {
          metric: '300h+',
          description: 'Technical certifications completed',
          context: 'Python · Django · Full Stack · Data Analysis',
        },
        {
          metric: '< 2 yrs',
          description: 'From IT support to backend dev in production',
          context: 'Fast growth focused on Python and Django',
        },
      ],
    },
    // Testimonials - Based on real LinkedIn recommendations
    testimonials: {
      title: 'Recommendations',
      subtitle: 'Feedback from colleagues and managers (LinkedIn)',
      linkedinNote: 'Check the full recommendations on my LinkedIn profile',
      items: [
        {
          name: 'Check on LinkedIn',
          role: 'Professional Recommendations',
          company: 'linkedin.com/in/leonardo-fragoso-921b166a',
          text: 'To ensure authenticity, my recommendations are available directly on LinkedIn. Click to verify the complete history of feedback from colleagues, managers and clients.',
          rating: 5,
          isLinkedIn: true,
        },
      ],
    },

    // Engineering Impact
    engineeringImpact: {
      title: 'Engineering Impact',
      subtitle: 'Technical outcomes that drive business value',
      items: {
        enterprise: {
          title: 'Enterprise Systems',
          description: 'Systems running at the largest private port terminal in Brazil, with thousands of internal users and operational criticality.',
        },
        saas: {
          title: 'SaaS with Payments',
          description: 'ProFlow.pro with escrow payments, recurring subscriptions, PIX and integration with Mercado Pago and Asaas.',
        },
        multitenant: {
          title: 'Multi-Tenant',
          description: 'Architecture isolating data per company in LogiFlow, ProFlow and Oráculo, ready to scale.',
        },
        realtime: {
          title: 'Real-Time Systems',
          description: 'WebSocket + Redis for chat, notifications, status updates and Digital Signage in production.',
        },
        ai: {
          title: 'AI Applications',
          description: 'GPT-4, Claude 3, OpenRAG, Langflow and Docling in production for consulting, proposals and document analysis.',
        },
        integrations: {
          title: 'Integrations & APIs',
          description: 'ERP Omie/Bling/Tiny, WhatsApp, GPS, CT-e/MDF-e, tax and RPA automations connected to legacy systems.',
        },
        production: {
          title: 'Production Deployment',
          description: 'Docker, Vercel, CI/CD, Linux servers and real applications serving clients and end users.',
        },
        security: {
          title: 'Security & Compliance',
          description: 'JWT, KYC, escrow, RBAC, audit logs and sensitive data separation per client.',
        },
      },
    },
  },
};

export type Translations = typeof translations.pt;
