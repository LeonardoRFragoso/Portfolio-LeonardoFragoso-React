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
        'Desenvolvedor Full Stack',
        'Python & Django Expert',
        'Arquiteto de APIs REST',
        '2 SaaS em Produção',
      ],
      availableBadge: 'Disponível para novas oportunidades',
      tagline: 'Desenvolvedor Full Stack',
      taglineHighlight: 'Python & React',
      taglineEnd: '| 2 SaaS em Produção',
      specialist: 'Stack Principal:',
      techStack: 'Python, Django, FastAPI, React, TypeScript, PostgreSQL',
      focusOn: '',
      focusAreas: '8+ sistemas enterprise | 80% redução de processos manuais | 500+ consultas/dia automatizadas',
      heroDescription: 'Transformo requisitos complexos em sistemas que funcionam. Experiência em liderança de equipe e entrega de soluções de alto impacto.',
      viewProjects: 'Ver Projetos',
      getInTouch: 'Entrar em Contato',
      downloadCV: 'Download CV',
      scroll: 'Scroll',
    },

    // About
    about: {
      title: 'Sobre Mim',
      role: 'Especialista em Automação & APIs',
      description: 'que transforma processos manuais em sistemas automatizados. Atualmente Desenvolvedor de Sistemas na iTracker (setor logístico), onde desenvolvi automações que reduziram 60% do tempo de processamento de dados. Experiência anterior como Gerente de TI na RWE Telemedicina, liderando equipe de 5 pessoas. Domínio em Python (Django, FastAPI), React/TypeScript e PostgreSQL. Tenho 2 SaaS em produção: ProFlow (plataforma para freelancers) e Base Corporativa (e-commerce). Meu diferencial: entendo o problema de negócio antes de codar.',
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
        subtitle: 'Diferenciais que fazem a diferença',
        items: [
          {
            title: 'Resultados Mensuráveis',
            description: '8+ sistemas enterprise em produção, 80% de redução em processos manuais, 500+ consultas automatizadas por dia.',
            icon: 'chart',
          },
          {
            title: 'Experiência em Liderança',
            description: 'Gerenciei equipe de 5 pessoas como Gerente de TI. Sei comunicar tecnicamente e traduzir para o negócio.',
            icon: 'users',
          },
          {
            title: 'Full Stack Real',
            description: 'Do banco de dados ao deploy. Python, Django, React, PostgreSQL, Docker. 2 SaaS em produção com usuários reais.',
            icon: 'code',
          },
          {
            title: 'Entendo o Negócio',
            description: 'Não codifico sem entender o problema. Experiência em logística, telemedicina e educação me deu visão de negócio.',
            icon: 'briefcase',
          },
        ],
      },
    },

    // Skills Data
    skillsData: [
      { 
        name: 'Python, Go & Frameworks', 
        description: 'Django, Flask, FastAPI, Gin | APIs RESTful e GraphQL | Go para alta performance | Selenium, Pandas, NumPy | Celery, Redis | Desenvolvimento back-end robusto', 
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
        description: 'Git/GitHub, Docker, CI/CD | AWS (EC2, S3, RDS) | Vercel, Railway | Power BI | Linux | Metodologias Ágeis (Scrum/Kanban)', 
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
        title: 'Desenvolvedor de Sistemas Junior',
        company: 'iTracker Logística Inteligente',
        period: 'dez 2024 - jan 2026 · 1 ano 2 meses',
        description: 'Desenvolvimento de soluções para o maior terminal portuário privado do Brasil (ICTSI). 8+ sistemas enterprise atendendo 200+ usuários diários, reduzindo processos manuais em 80%. Automações RPA processando 500+ consultas/dia.',
        impact: '80% redução processos | 500+ consultas/dia | 8+ sistemas',
        tags: ['Python', 'Django', 'FastAPI', 'React', 'Vue.js', 'PostgreSQL', 'Docker'],
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
      title: 'Resultados Comprovados',
      subtitle: 'Números que demonstram impacto real',
      items: [
        {
          metric: '200+',
          description: 'Usuários ativos diariamente nos sistemas enterprise',
          context: '8+ sistemas em produção na iTracker/ICTSI',
        },
        {
          metric: '80%',
          description: 'Redução em processos manuais com automação',
          context: 'RPAs processando 500+ consultas/dia',
        },
        {
          metric: '70%',
          description: 'Redução em custos operacionais',
          context: 'Soluções internas substituindo sistemas terceirizados',
        },
        {
          metric: '4 SaaS',
          description: 'Plataformas online em produção',
          context: 'ProFlow • LogiFlow • Base Corporativa • Digital Signage',
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
        'Full Stack Developer',
        'Python & Django Expert',
        'REST API Architect',
        '2 SaaS in Production',
      ],
      availableBadge: 'Available for new opportunities',
      tagline: 'Full Stack Developer',
      taglineHighlight: 'Python & React',
      taglineEnd: '| 2 SaaS in Production',
      specialist: 'Main Stack:',
      techStack: 'Python, Django, FastAPI, React, TypeScript, PostgreSQL',
      focusOn: '',
      focusAreas: '8+ enterprise systems | 80% manual process reduction | 500+ queries/day automated',
      heroDescription: 'I turn complex requirements into systems that work. Experience in team leadership and high-impact solution delivery.',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      downloadCV: 'Download CV',
      scroll: 'Scroll',
    },

    // About
    about: {
      title: 'About Me',
      role: 'Automation & API Specialist',
      description: 'who transforms manual processes into automated systems. Currently Systems Developer at iTracker (logistics sector), where I developed automations that reduced data processing time by 60%. Previous experience as IT Manager at RWE Telemedicine, leading a team of 5 people. Proficient in Python (Django, FastAPI), React/TypeScript and PostgreSQL. I have 2 SaaS in production: ProFlow (freelancer platform) and Base Corporativa (e-commerce). My differentiator: I understand the business problem before coding.',
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
        subtitle: 'Differentiators that make a difference',
        items: [
          {
            title: 'Measurable Results',
            description: '8+ enterprise systems in production, 80% reduction in manual processes, 500+ automated queries per day.',
            icon: 'chart',
          },
          {
            title: 'Leadership Experience',
            description: 'Managed a team of 5 as IT Manager. I know how to communicate technically and translate to business.',
            icon: 'users',
          },
          {
            title: 'Real Full Stack',
            description: 'From database to deploy. Python, Django, React, PostgreSQL, Docker. 2 SaaS in production with real users.',
            icon: 'code',
          },
          {
            title: 'Business Understanding',
            description: "I don't code without understanding the problem. Experience in logistics, telemedicine and education gave me business vision.",
            icon: 'briefcase',
          },
        ],
      },
    },

    // Skills Data
    skillsData: [
      { 
        name: 'Python, Go & Frameworks', 
        description: 'Django, Flask, FastAPI, Gin | RESTful & GraphQL APIs | Go for high performance | Selenium, Pandas, NumPy | Celery, Redis | Robust back-end development', 
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
        description: 'Git/GitHub, Docker, CI/CD | AWS (EC2, S3, RDS) | Vercel, Railway | Power BI | Linux | Agile Methodologies (Scrum/Kanban)', 
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
        title: 'Junior Systems Developer',
        company: 'iTracker Intelligent Logistics',
        period: 'Dec 2024 - Jan 2026 · 1 year 2 months',
        description: 'Developing solutions for Brazil\'s largest private port terminal (ICTSI). 8+ enterprise systems serving 200+ daily users, reducing manual processes by 80%. RPA automations processing 500+ queries/day.',
        impact: '80% process reduction | 500+ queries/day | 8+ systems',
        tags: ['Python', 'Django', 'FastAPI', 'React', 'Vue.js', 'PostgreSQL', 'Docker'],
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
      title: 'Proven Results',
      subtitle: 'Numbers that demonstrate real impact',
      items: [
        {
          metric: '200+',
          description: 'Daily active users on enterprise systems',
          context: '8+ systems in production at iTracker/ICTSI',
        },
        {
          metric: '80%',
          description: 'Reduction in manual processes with automation',
          context: 'RPAs processing 500+ queries/day',
        },
        {
          metric: '70%',
          description: 'Reduction in operational costs',
          context: 'Internal solutions replacing third-party systems',
        },
        {
          metric: '4 SaaS',
          description: 'Online platforms in production',
          context: 'ProFlow • LogiFlow • Base Corporativa • Digital Signage',
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
  },
};

export type Translations = typeof translations.pt;
