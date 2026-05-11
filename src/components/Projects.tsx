import { useState, useMemo } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Eye, MessageCircle, Filter, Clock, Zap, Star, Award, ChevronDown, ChevronUp, Rocket, Shield, Brain, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n";

interface DemoLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  github?: string;
  demo?: string;
  demoLinks?: DemoLink[];
  featured?: boolean;
  saas?: boolean;
  whatsapp?: string;
  category: string[];
  quickEval: '2-3' | '3-4' | '4-5' | '5-8' | 'github';
  complexity: 1 | 2 | 3 | 4 | 5;
  topForRecruiters?: boolean;
  flagship?: boolean;
}

type FilterType = 'all' | 'saas' | 'ecommerce' | 'ai' | 'enterprise' | 'web';

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [showLinksModal, setShowLinksModal] = useState(false);
  const [selectedProjectLinks, setSelectedProjectLinks] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const INITIAL_PROJECTS_COUNT = 6;

  const projects: Project[] = [
    // TIER 1: "WOW FACTOR" - Top 5 projetos que vendem
    // #1 - ProFlow (FLAGSHIP - Projeto Principal)
    {
      title: t.projects.projectsList[6].title,
      description: t.projects.projectsList[6].description,
      images: ["/images/proflow/proflow.png", "/images/proflow/proflow2.png", "/images/proflow/proflow3.png"],
      tags: ["Vue.js 3", "Django", "TailwindCSS", "PostgreSQL", "OpenAI GPT-4", "Mercado Pago", "Asaas", "WebSocket"],
      github: "https://github.com/LeonardoRFragoso/ProFlow",
      demo: "https://www.proflow.pro/",
      featured: true,
      saas: true,
      flagship: true,
      category: ['saas', 'web', 'ai'],
      quickEval: '2-3',
      complexity: 5,
      topForRecruiters: true,
    },
    // #2 - LogiFlow CRM (SOBE de #5)
    {
      title: t.projects.projectsList[13].title,
      description: t.projects.projectsList[13].description,
      images: ["/images/LogiFlow/site-divulgacao/1.png", "/images/LogiFlow/site-divulgacao/2.png", "/images/LogiFlow/site-divulgacao/3.png", "/images/LogiFlow/site-divulgacao/4.png", "/images/LogiFlow/site-divulgacao/5.png", "/images/LogiFlow/site-divulgacao/6.png", "/images/LogiFlow/site-divulgacao/7.png", "/images/LogiFlow/site-divulgacao/8.png", "/images/LogiFlow/site-divulgacao/9.png", "/images/LogiFlow/site-divulgacao/10.png", "/images/LogiFlow/site-divulgacao/11.png", "/images/LogiFlow/site-divulgacao/12.png", "/images/LogiFlow/site-divulgacao/13.png", "/images/LogiFlow/site-divulgacao/14.png", "/images/LogiFlow/app/1.png", "/images/LogiFlow/app-motorista/1.png", "/images/LogiFlow/portal-cliente/1.png"],
      tags: ["Python", "FastAPI", "Vue.js 3", "TailwindCSS", "PostgreSQL", "Redis"],
      github: "https://github.com/LeonardoRFragoso/LogiFlow",
      demoLinks: [
        { label: "Site", url: "https://logi-flow-wuhp.vercel.app" },
        { label: "App CRM", url: "https://logi-flow-blush.vercel.app" },
        { label: "App Motorista", url: "https://logi-flow-app-motorista.vercel.app" },
        { label: "Portal Cliente", url: "https://logi-flow-z3t5.vercel.app" }
      ],
      featured: true,
      saas: true,
      category: ['saas', 'enterprise', 'web'],
      quickEval: '5-8',
      complexity: 5,
      topForRecruiters: true,
    },
    // #3 - Base Corporativa (DESCE de #2)
    {
      title: t.projects.projectsList[7].title,
      description: t.projects.projectsList[7].description,
      images: ["/images/base/base1.png", "/images/base/base2.png", "/images/base/base3.png", "/images/base/base4.png", "/images/base/base5.png", "/images/base/base6.png"],
      tags: ["React", "Django", "PostgreSQL", "Python", "Mercado Pago"],
      github: "https://github.com/LeonardoRFragoso/base-corporativa",
      demo: "https://basecorporativa.store/",
      featured: true,
      saas: true,
      category: ['saas', 'ecommerce', 'web'],
      quickEval: '3-4',
      complexity: 4,
      topForRecruiters: true,
    },
    // #4 - AgentesIA (MANTÉM)
    {
      title: t.projects.projectsList[15].title,
      description: t.projects.projectsList[15].description,
      images: ["/images/AgentesIA/1.png", "/images/AgentesIA/2.png", "/images/AgentesIA/3.png", "/images/AgentesIA/4.png", "/images/AgentesIA/5.png", "/images/AgentesIA/6.png", "/images/AgentesIA/7.png", "/images/AgentesIA/8.png", "/images/AgentesIA/9.png", "/images/AgentesIA/10.png", "/images/AgentesIA/11.png"],
      tags: ["FastAPI", "Next.js 14", "Claude 3", "PostgreSQL", "Redis", "JWT"],
      github: "https://github.com/LeonardoRFragoso/AgentesIA-Consultoria-de-Negocios-com-IA-Multi-Agentes",
      demo: "https://agentes-ia-consultoria-de-negocios.vercel.app",
      featured: true,
      saas: true,
      category: ['saas', 'ai', 'enterprise'],
      quickEval: '4-5',
      complexity: 5,
    },
    // #5 - Assistente WhatsApp (DESCE de #3)
    {
      title: t.projects.projectsList[17].title,
      description: t.projects.projectsList[17].description,
      images: ["/images/WhatsAppFinance/1.png", "/images/WhatsAppFinance/2.png", "/images/WhatsAppFinance/3.png", "/images/WhatsAppFinance/4.png", "/images/WhatsAppFinance/5.png", "/images/WhatsAppFinance/6.png", "/images/WhatsAppFinance/7.png"],
      tags: ["FastAPI", "Next.js 14", "OpenAI GPT-4", "PostgreSQL", "Redis", "Twilio"],
      github: "https://github.com/LeonardoRFragoso/AssistenteFinanceiroWhatsapp",
      demo: "https://assistente-financeiro-whatsapp.vercel.app/",
      whatsapp: "https://wa.me/14155238886?text=join%20your-sandbox-code",
      featured: true,
      saas: true,
      category: ['saas', 'ai', 'web'],
      quickEval: '2-3',
      complexity: 4,
    },

    // TIER 2: "DEMONSTRAÇÃO DE SKILLS" - Diversidade técnica
    // #6 - TaskManager Go (SOBE de #11)
    {
      title: t.projects.projectsList[14].title,
      description: t.projects.projectsList[14].description,
      images: ["/images/GO API - Task Manager/1.png", "/images/GO API - Task Manager/2.png", "/images/GO API - Task Manager/3.png", "/images/GO API - Task Manager/4.png", "/images/GO API - Task Manager/5.png", "/images/GO API - Task Manager/6.png", "/images/GO API - Task Manager/7.png", "/images/GO API - Task Manager/8.png"],
      tags: ["Go", "Vue.js 3", "PostgreSQL", "TailwindCSS", "JWT", "Docker"],
      github: "https://github.com/LeonardoRFragoso/Go-API-Gestao-de-Projetos-e-Tarefas",
      featured: true,
      category: ['enterprise', 'web'],
      quickEval: 'github',
      complexity: 4,
    },
    // #7 - Andaimes Pini (DESCE de #8)
    {
      title: t.projects.projectsList[4].title,
      description: t.projects.projectsList[4].description,
      images: ["/images/Andaimes Pini/pini1.png", "/images/Andaimes Pini/pini2.png", "/images/Andaimes Pini/pini3.png", "/images/Andaimes Pini/pini4.png", "/images/Andaimes Pini/pini5.png", "/images/Andaimes Pini/Pini6.png", "/images/Andaimes Pini/Pini7.png", "/images/Andaimes Pini/pini8.png", "/images/Andaimes Pini/pini9.png", "/images/Andaimes Pini/Pini10.png", "/images/Andaimes Pini/pini11.png", "/images/Andaimes Pini/pini12.png", "/images/Andaimes Pini/pini13.png", "/images/Andaimes Pini/pini14.png", "/images/Andaimes Pini/pini15.png"],
      tags: ["Flask", "React", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/AndaimesPini_Project",
      demo: "https://andaimes-pini-project.vercel.app/",
      featured: true,
      saas: true,
      category: ['saas', 'web', 'enterprise'],
      quickEval: '3-4',
      complexity: 3,
    },
    // #8 - GNLink (DESCE de #9)
    {
      title: t.projects.projectsList[12].title,
      description: t.projects.projectsList[12].description,
      images: ["/images/GNLink/1.png", "/images/GNLink/2.png", "/images/GNLink/3.png", "/images/GNLink/4.png", "/images/GNLink/5.png", "/images/GNLink/6.png", "/images/GNLink/7.png", "/images/GNLink/8.png"],
      tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/LeonardoRFragoso/GNLink",
      demo: "https://gn-link.vercel.app",
      featured: true,
      saas: true,
      category: ['web'],
      quickEval: '2-3',
      complexity: 3,
    },
    // #9 - PyScript.tech (DESCE de #10)
    {
      title: t.projects.projectsList[16].title,
      description: t.projects.projectsList[16].description,
      images: ["/images/PyScriptTech/1.png", "/images/PyScriptTech/2.png", "/images/PyScriptTech/3.png", "/images/PyScriptTech/4.png", "/images/PyScriptTech/5.png", "/images/PyScriptTech/6.png", "/images/PyScriptTech/7.png", "/images/PyScriptTech/8.png", "/images/PyScriptTech/9.png", "/images/PyScriptTech/10.png", "/images/PyScriptTech/11.png", "/images/PyScriptTech/12.png", "/images/PyScriptTech/13.png", "/images/PyScriptTech/14.png", "/images/PyScriptTech/15.png", "/images/PyScriptTech/16.png"],
      tags: ["React 18", "JavaScript", "CSS Modules", "EmailJS"],
      github: "https://github.com/LeonardoRFragoso/PyScriptTech_React",
      demo: "https://py-script-tech-react.vercel.app/",
      featured: true,
      saas: true,
      category: ['web'],
      quickEval: '2-3',
      complexity: 3,
    },
    // #10 - APM Platform Java (SOBE de #12)
    {
      title: t.projects.projectsList[10].title,
      description: t.projects.projectsList[10].description,
      images: ["/images/APM/APM1.png", "/images/APM/APM2.png", "/images/APM/APM3.png", "/images/APM/APM4.png", "/images/APM/APM5.png", "/images/APM/APM6.png", "/images/APM/APM7.png"],
      tags: ["Java 21", "Spring Boot", "WebSocket", "Clean Architecture"],
      github: "https://github.com/LeonardoRFragoso/Plataforma-de-Monitoramento-de-Sistemas-e-APIs",
      featured: true,
      category: ['enterprise'],
      quickEval: 'github',
      complexity: 5,
    },

    // TIER 3: "PROFUNDIDADE TÉCNICA" - Sistemas empresariais
    // #11 - MedFlow Finance (DESCE de #7)
    {
      title: t.projects.projectsList[8].title,
      description: t.projects.projectsList[8].description,
      images: ["/images/medflow/medflow1.png", "/images/medflow/medflow2.png", "/images/medflow/medflow3.png", "/images/medflow/medflow4.png", "/images/medflow/medflow5.png", "/images/medflow/medflow6.png", "/images/medflow/medflow7.png", "/images/medflow/medflow8.png"],
      tags: ["Laravel 11", "Vue 3", "PostgreSQL", "API REST"],
      github: "https://github.com/LeonardoRFragoso/MedFlow_Finance",
      featured: true,
      category: ['enterprise', 'web'],
      quickEval: 'github',
      complexity: 4,
    },
    // #12 - Digital Signage (DESCE de #6)
    {
      title: t.projects.projectsList[5].title,
      description: t.projects.projectsList[5].description,
      images: ["/images/digital-signage/1.jpg", "/images/digital-signage/2.jpg", "/images/digital-signage/3.jpg", "/images/digital-signage/4.jpg", "/images/digital-signage/5.jpg", "/images/digital-signage/6.jpg", "/images/digital-signage/7.jpg", "/images/digital-signage/8.jpg", "/images/digital-signage/9.jpg"],
      tags: ["Python", "Django", "JavaScript", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/Digital-Signage-Platform",
      featured: true,
      category: ['enterprise', 'web'],
      quickEval: 'github',
      complexity: 5,
    },
    // #13 - BI-as-a-Service (DESCE de #14)
    {
      title: t.projects.projectsList[9].title,
      description: t.projects.projectsList[9].description,
      images: ["/images/SaaS/1SaaS - 1.png", "/images/SaaS/1SaaS - 2.png", "/images/SaaS/1SaaS - 3.png", "/images/SaaS/1SaaS - 4.png", "/images/SaaS/1SaaS - 5.png", "/images/SaaS/1SaaS - 6.png", "/images/SaaS/1SaaS - 7.png"],
      tags: ["Python", "FastAPI", "React", "GPT-4", "Docker"],
      github: "https://github.com/LeonardoRFragoso/SaaS",
      featured: true,
      category: ['saas', 'ai', 'enterprise'],
      quickEval: 'github',
      complexity: 5,
    },
    // #14 - FinanceControl (DESCE de #13)
    {
      title: t.projects.projectsList[11].title,
      description: t.projects.projectsList[11].description,
      images: ["/images/FinanceControl/financecontrol1.png", "/images/FinanceControl/financecontrol2.png", "/images/FinanceControl/financecontrol5.png", "/images/FinanceControl/financecontrol6.png"],
      tags: ["Flutter", "Django REST", "Riverpod", "Mercado Pago", "JWT"],
      github: "https://github.com/LeonardoRFragoso/gerenciador-financeiro",
      featured: true,
      category: ['enterprise', 'web'],
      quickEval: 'github',
      complexity: 4,
    },

    // TIER 4: "EXPERIÊNCIA CORPORATIVA" - Projetos internos
    {
      title: t.projects.projectsList[0].title,
      description: t.projects.projectsList[0].description,
      images: ["/images/Pátio/1.jpg", "/images/Pátio/2.jpg", "/images/Pátio/3.jpg", "/images/Pátio/4.jpg", "/images/Pátio/5.jpg", "/images/Pátio/6.jpg"],
      tags: ["Python", "Django", "JavaScript", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/Patio",
      category: ['enterprise'],
      quickEval: 'github',
      complexity: 3,
    },
    {
      title: t.projects.projectsList[1].title,
      description: t.projects.projectsList[1].description,
      images: ["/images/não-conformidade/1.jpg", "/images/não-conformidade/2.jpg", "/images/não-conformidade/3.jpg", "/images/não-conformidade/4.jpg", "/images/não-conformidade/5.jpg", "/images/não-conformidade/6.jpg", "/images/não-conformidade/7.jpg", "/images/não-conformidade/8.jpg"],
      tags: ["Django", "Python", "JavaScript", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/nao-conformidade",
      category: ['enterprise'],
      quickEval: 'github',
      complexity: 4,
    },
    {
      title: t.projects.projectsList[2].title,
      description: t.projects.projectsList[2].description,
      images: ["/images/GR/1.jpg", "/images/GR/2.jpg", "/images/GR/3.jpg", "/images/GR/4.jpg", "/images/GR/5.jpg", "/images/GR/6.jpg", "/images/GR/7.jpg", "/images/GR/8.jpg", "/images/GR/9.jpg", "/images/GR/10.jpg", "/images/GR/11.jpg", "/images/GR/12.jpg"],
      tags: ["Python", "Django", "JavaScript", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/GR",
      category: ['enterprise'],
      quickEval: 'github',
      complexity: 4,
    },
    {
      title: t.projects.projectsList[3].title,
      description: t.projects.projectsList[3].description,
      images: ["/images/dash-multas/1.jpg", "/images/dash-multas/2.jpg", "/images/dash-multas/3.jpg", "/images/dash-multas/4.jpg", "/images/dash-multas/5.jpg", "/images/dash-multas/6.jpg", "/images/dash-multas/7.jpg", "/images/dash-multas/8.jpg", "/images/dash-multas/9.jpg"],
      tags: ["Streamlit", "Python", "Google Drive API", "Data Analysis"],
      github: "https://github.com/LeonardoRFragoso/DashboardMultas",
      category: ['enterprise'],
      quickEval: 'github',
      complexity: 3,
    },
  ];

  const allFilteredProjects = useMemo(() => {
    // Se filtro é 'all', exclui o ProFlow (flagship) pois já aparece na seção Hero
    if (activeFilter === 'all') return projects.filter(p => !p.flagship);
    return projects.filter(project => project.category.includes(activeFilter));
  }, [activeFilter, projects]);

  const filteredProjects = useMemo(() => {
    if (showAllProjects) return allFilteredProjects;
    return allFilteredProjects.slice(0, INITIAL_PROJECTS_COUNT);
  }, [allFilteredProjects, showAllProjects]);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t.projects.filterAll },
    { key: 'saas', label: t.projects.filterSaaS },
    { key: 'ecommerce', label: t.projects.filterEcommerce },
    { key: 'ai', label: t.projects.filterAI },
    { key: 'enterprise', label: t.projects.filterEnterprise },
    { key: 'web', label: t.projects.filterWeb },
  ];

  const getEvalBadge = (quickEval: string) => {
    const badges = {
      '2-3': { text: t.projects.evalTime2to3, color: 'from-green-400 to-emerald-500', icon: Zap },
      '3-4': { text: t.projects.evalTime3to4, color: 'from-blue-400 to-cyan-500', icon: Clock },
      '4-5': { text: t.projects.evalTime4to5, color: 'from-purple-400 to-pink-500', icon: Clock },
      '5-8': { text: t.projects.evalTime5to8, color: 'from-orange-400 to-red-500', icon: Award },
      'github': { text: t.projects.evalGithub, color: 'from-gray-400 to-gray-600', icon: Github },
    };
    return badges[quickEval as keyof typeof badges] || badges['github'];
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const openLinksModal = (project: Project) => {
    setSelectedProjectLinks(project);
    setShowLinksModal(true);
  };

  const closeLinksModal = () => {
    setShowLinksModal(false);
    setSelectedProjectLinks(null);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #09071a 0%, #0f0d24 50%, #09071a 100%)' }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.06),transparent_50%)]"></div>
        
        <motion.div
          className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-accent-500/15 to-cyan-500/15 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-400 to-cyan-400 mb-6"
            style={{
              filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))",
            }}
          >
            {t.projects.title}
          </motion.h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t.projects.subtitle}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cyan-400 font-semibold">{t.projects.subtitleHighlight}</span>
          </p>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-accent-500 via-purple-500 to-cyan-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Filtros */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center space-x-2 text-accent-400/80">
            <Filter className="w-5 h-5" />
            <span className="text-sm font-medium">Filtrar:</span>
          </div>
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-accent-500 via-purple-500 to-cyan-500 text-white shadow-lg shadow-accent-500/30'
                  : 'bg-dark-900/60 text-white/70 border border-accent-500/20 hover:border-accent-400/40 hover:text-accent-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Contador de projetos */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-white/60 text-sm">
            {t.projects.showingProjects} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cyan-400 font-bold">{filteredProjects.length}</span> {t.projects.of} {allFilteredProjects.length} {t.projects.projects}
          </p>
        </motion.div>

        {/* ProFlow Hero Section - Projeto Principal */}
        {activeFilter === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-dark-900 via-accent-500/10 to-dark-900 border-2 border-accent-400/40 shadow-2xl shadow-accent-500/20">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)]"></div>
              <motion.div
                className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-accent-500/20 to-cyan-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Left - Content */}
                <div className="flex flex-col justify-center space-y-6">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-black rounded-full flex items-center gap-2 shadow-lg shadow-amber-500/30">
                      <Rocket className="w-4 h-4" />
                      {t.projects.flagship?.badge || 'PROJETO PRINCIPAL'}
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold rounded-full flex items-center gap-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                      </span>
                      {t.projects.flagship?.online || 'ONLINE'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-300 to-cyan-300">
                    {projects[0].title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-lg leading-relaxed">
                    {projects[0].description}
                  </p>

                  {/* 4 Pillars */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-accent-500/10 border border-accent-500/20">
                      <Brain className="w-6 h-6 text-accent-400" />
                      <div>
                        <p className="text-white font-bold text-sm">{t.projects.flagship?.pillars?.ai?.title || 'ProFlow AI'}</p>
                        <p className="text-white/60 text-xs">{t.projects.flagship?.pillars?.ai?.desc || 'IA com GPT-4'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                      <Shield className="w-6 h-6 text-green-400" />
                      <div>
                        <p className="text-white font-bold text-sm">{t.projects.flagship?.pillars?.secure?.title || 'ProFlow Secure'}</p>
                        <p className="text-white/60 text-xs">{t.projects.flagship?.pillars?.secure?.desc || 'Escrow Anti-Calote'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <Star className="w-6 h-6 text-amber-400" />
                      <div>
                        <p className="text-white font-bold text-sm">{t.projects.flagship?.pillars?.score?.title || 'ProFlow Score'}</p>
                        <p className="text-white/60 text-xs">{t.projects.flagship?.pillars?.score?.desc || 'Reputação + KYC'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                      <TrendingUp className="w-6 h-6 text-cyan-400" />
                      <div>
                        <p className="text-white font-bold text-sm">{t.projects.flagship?.pillars?.path?.title || 'ProFlow Path'}</p>
                        <p className="text-white/60 text-xs">{t.projects.flagship?.pillars?.path?.desc || 'Onboarding Gamificado'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {projects[0].tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-accent-500/15 text-accent-300 border border-accent-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={projects[0].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 via-purple-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-accent-500/30 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5" />
                      {t.projects.flagship?.accessPlatform || 'Acessar Plataforma'}
                    </a>
                    <a
                      href={projects[0].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-dark-900/60 border-2 border-accent-400/30 text-white font-bold rounded-xl hover:border-accent-400/60 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      {t.projects.flagship?.viewCode || 'Ver Código'}
                    </a>
                    <button
                      onClick={() => openModal(projects[0])}
                      className="flex items-center gap-2 px-4 py-3 text-accent-400 hover:text-accent-300 transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                      <span className="font-medium">{t.projects.flagship?.gallery || 'Galeria'} ({projects[0].images.length} {t.projects.flagship?.photos || 'fotos'})</span>
                    </button>
                  </div>
                </div>

                {/* Right - Image */}
                <div className="relative">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden border-2 border-accent-400/20 shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={projects[0].images[0]}
                      alt={projects[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Complexity Badge */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg">
                      <span className="text-white/70 text-xs mr-1">{t.projects.flagship?.complexity || 'Complexidade'}:</span>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent-400 fill-accent-400" />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const evalBadge = getEvalBadge(project.quickEval);
              const EvalIcon = evalBadge.icon;

              return (
                <motion.div
                  key={`${project.title}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 ${
                    project.featured 
                      ? 'bg-gradient-to-br from-dark-900/90 via-accent-500/5 to-dark-900/90 border-2 border-accent-400/30' 
                      : 'bg-dark-900/60 border border-white/10'
                  } backdrop-blur-md shadow-2xl hover:shadow-accent-500/20`}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Badges superiores */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    {project.saas && (
                      <div className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold rounded-full flex items-center gap-1">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                        </span>
                        {t.projects.saas}
                      </div>
                    )}
                    {project.featured && !project.saas && (
                      <div className="px-3 py-1 bg-gradient-to-r from-accent-500 via-purple-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                        {t.projects.featured}
                      </div>
                    )}
                  </div>

                  {/* Badge Avaliação Rápida */}
                  <div className={`absolute top-4 right-4 z-20 flex items-center space-x-1 px-2 py-1 rounded-full backdrop-blur-sm ${
                    project.quickEval === 'github' 
                      ? 'bg-gray-900/80 border border-gray-600/50' 
                      : 'bg-black/70 border border-white/20'
                  }`}>
                    <EvalIcon className="w-3 h-3 text-white" />
                    <span className="text-white text-xs font-medium">{evalBadge.text}</span>
                  </div>

                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      onLoad={(e) => {
                        (e.target as HTMLImageElement).style.opacity = '1';
                      }}
                      style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    
                    {project.images.length > 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/70 text-white text-xs rounded-lg backdrop-blur-sm">
                        +{project.images.length - 1} {t.projects.photos}
                      </div>
                    )}

                    <button
                      onClick={() => openModal(project)}
                      className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      aria-label={`${t.projects.viewGallery} - ${project.title}`}
                    >
                      <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="h-5 w-5" />
                        <span>{t.projects.viewGallery}</span>
                      </div>
                    </button>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent-300 transition-colors flex-1">
                        {project.title}
                      </h3>
                      {/* Complexity Stars */}
                      <div className="flex items-center space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < project.complexity
                                ? 'text-accent-400 fill-accent-400'
                                : 'text-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-accent-500/10 text-accent-300 border border-accent-500/20 hover:bg-accent-500/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-500/10 text-accent-300 border border-accent-500/20">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-4 pt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-white hover:text-accent-400 transition-colors group/link"
                          aria-label={`${t.projects.code} - ${project.title}`}
                        >
                          <Github className="h-5 w-5 group-hover/link:scale-110 transition-transform" />
                          <span className="text-sm font-medium">{t.projects.code}</span>
                        </a>
                      )}
                      
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-2 transition-colors group/link ${
                            project.saas 
                              ? 'px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold rounded-lg hover:from-green-300 hover:to-emerald-400' 
                              : 'text-white hover:text-accent-400'
                          }`}
                          aria-label={`${t.projects.visitSite} - ${project.title}`}
                        >
                          <ExternalLink className="h-5 w-5 group-hover/link:scale-110 transition-transform" />
                          <span className="text-sm font-medium">{t.projects.visitSite}</span>
                        </a>
                      )}
                      
                      {project.whatsapp && (
                        <a
                          href={project.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:from-green-400 hover:to-green-500 transition-colors group/link"
                          aria-label={`${t.projects.whatsappContact} - ${project.title}`}
                        >
                          <MessageCircle className="h-5 w-5 group-hover/link:scale-110 transition-transform" />
                          <span className="text-sm font-medium">{t.projects.whatsappContact}</span>
                        </a>
                      )}
                    </div>
                    {project.demoLinks && project.demoLinks.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.demoLinks.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center space-x-1 transition-colors group/link ${
                              project.saas 
                                ? 'px-3 py-1.5 bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold rounded-lg hover:from-green-300 hover:to-emerald-400' 
                                : 'px-3 py-1.5 bg-accent-500/10 text-accent-300 text-xs font-medium rounded-lg border border-accent-500/20 hover:bg-accent-500/20'
                            }`}
                            aria-label={`${link.label} - ${project.title}`}
                          >
                            <ExternalLink className="h-3.5 w-3.5 group-hover/link:scale-110 transition-transform" />
                            <span>{link.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Botão Ver Mais / Ver Menos */}
        {allFilteredProjects.length > INITIAL_PROJECTS_COUNT && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-accent-500/10 via-purple-500/10 to-cyan-500/10 border-2 border-accent-400/30 hover:border-accent-400/60 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllProjects ? (
                <>
                  <ChevronUp className="w-5 h-5 text-accent-400 group-hover:text-accent-300 transition-colors" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cyan-400">
                    {t.projects.viewLess}
                  </span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 text-accent-400 group-hover:text-accent-300 transition-colors" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cyan-400">
                    {t.projects.viewMore}
                  </span>
                  <span className="px-2 py-1 bg-accent-500/20 text-accent-300 text-xs rounded-full">
                    +{allFilteredProjects.length - INITIAL_PROJECTS_COUNT}
                  </span>
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Modal for Multiple Apps Links */}
      <AnimatePresence>
        {showLinksModal && selectedProjectLinks && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={closeLinksModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-2xl w-full mx-4 bg-gradient-to-br from-dark-900/95 via-accent-500/5 to-dark-900/95 rounded-2xl border-2 border-accent-400/30 backdrop-blur-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLinksModal}
                className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center bg-dark-900/70 hover:bg-accent-500 text-white rounded-full transition-all duration-300 text-2xl font-bold"
                aria-label="Fechar"
              >
                ×
              </button>

              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent-500/20 to-cyan-500/20 flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-400">
                      {selectedProjectLinks.title}
                    </h3>
                    <p className="text-white/60 text-sm">{t.projects.multipleApps}</p>
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed mb-6">
                  {selectedProjectLinks.description}
                </p>

                <div className="space-y-3">
                  {selectedProjectLinks.demoLinks?.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 rounded-xl bg-dark-900/60 border-2 border-accent-500/20 hover:border-accent-400/60 hover:bg-accent-500/5 transition-all duration-300"
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                          <ExternalLink className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold group-hover:text-accent-300 transition-colors">
                            {link.label}
                          </h4>
                          <p className="text-white/50 text-xs">Clique para acessar</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ChevronRight className="w-5 h-5 text-accent-400" />
                      </motion.div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-accent-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span className="text-white/70 text-sm">
                        {selectedProjectLinks.demoLinks?.length} aplicações disponíveis
                      </span>
                    </div>
                    {selectedProjectLinks.github && (
                      <a
                        href={selectedProjectLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-dark-900/60 border border-accent-500/20 hover:border-accent-400/40 rounded-lg transition-colors text-white hover:text-accent-400"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">{t.projects.code}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for Image Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] bg-dark-900/80 rounded-2xl border border-accent-400/30 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center bg-dark-900/70 hover:bg-accent-500 text-white rounded-full transition-all duration-300"
                aria-label="Fechar galeria"
              >
                ×
              </button>

              <div className="relative bg-black/50">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  className="w-full max-h-[60vh] object-contain"
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-dark-900/70 hover:bg-accent-500 text-white rounded-full transition-all duration-300"
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-dark-900/70 hover:bg-accent-500 text-white rounded-full transition-all duration-300"
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/70 text-white rounded-lg backdrop-blur-sm">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-400">
                  {selectedProject.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                {selectedProject.images.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto py-2">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'border-accent-400 scale-110' 
                            : 'border-white/20 hover:border-accent-400/50'
                        }`}
                        aria-label={`Ver imagem ${index + 1}`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
