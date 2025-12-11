import { useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "Sistema de Gestão Pátio",
      description: "Sistema completo para gestão de pátios e estacionamentos com controle de vagas em tempo real, relatórios gerenciais, dashboard analítico e interface responsiva. Desenvolvido com arquitetura MVC e APIs REST.",
      images: [
        "/images/Pátio/1.jpg",
        "/images/Pátio/2.jpg",
        "/images/Pátio/3.jpg",
        "/images/Pátio/4.jpg",
        "/images/Pátio/5.jpg",
        "/images/Pátio/6.jpg"
      ],
      tags: ["Python", "Django", "JavaScript", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/Patio",
      featured: true,
    },
    {
      title: "Sistema de Gestão de Não-Conformidades",
      description: "Sistema robusto para gestão de não-conformidades com workflow de aprovação multinível, notificações automáticas, relatórios PDF, dashboard executivo com KPIs e histórico completo de ações corretivas.",
      images: [
        "/images/não-conformidade/1.jpg",
        "/images/não-conformidade/2.jpg",
        "/images/não-conformidade/3.jpg",
        "/images/não-conformidade/4.jpg",
        "/images/não-conformidade/5.jpg",
        "/images/não-conformidade/6.jpg",
        "/images/não-conformidade/7.jpg",
        "/images/não-conformidade/8.jpg"
      ],
      tags: ["Django", "Python", "JavaScript", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/nao-conformidade",
      featured: true,
    },
    {
      title: "Sistema GR - Gestão de Recursos",
      description: "Sistema ERP para gestão de recursos empresariais com módulos de inventário, alocação de ativos, controle de manutenção, relatórios gerenciais automatizados e dashboard interativo com métricas de performance.",
      images: [
        "/images/GR/1.jpg",
        "/images/GR/2.jpg",
        "/images/GR/3.jpg",
        "/images/GR/4.jpg",
        "/images/GR/5.jpg",
        "/images/GR/6.jpg",
        "/images/GR/7.jpg",
        "/images/GR/8.jpg",
        "/images/GR/9.jpg",
        "/images/GR/10.jpg",
        "/images/GR/11.jpg",
        "/images/GR/12.jpg"
      ],
      tags: ["Python", "Django", "JavaScript", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/GR",
      featured: true,
    },
    {
      title: "Dashboard de Multas - Streamlit",
      description: "Dashboard interativo para análise de multas de trânsito com ETL automatizado, integração Google Drive, visualizações dinâmicas (Plotly/Altair), filtros avançados e exportação de relatórios personalizados.",
      images: [
        "/images/dash-multas/1.jpg",
        "/images/dash-multas/2.jpg",
        "/images/dash-multas/3.jpg",
        "/images/dash-multas/4.jpg",
        "/images/dash-multas/5.jpg",
        "/images/dash-multas/6.jpg",
        "/images/dash-multas/7.jpg",
        "/images/dash-multas/8.jpg",
        "/images/dash-multas/9.jpg"
      ],
      tags: ["Streamlit", "Python", "Google Drive API", "Data Analysis"],
      github: "https://github.com/LeonardoRFragoso/DashboardMultas",
    },
    {
      title: "Sistema para Andaimes Pini",
      description: "Sistema empresarial customizado para locação de equipamentos com controle de estoque, gestão de contratos, faturamento automático, relatórios financeiros e dashboard gerencial com indicadores de negócio.",
      images: [
        "/images/project5.png",
        "/images/project5-2.png",
        "/images/project5-3.png",
        "/images/project5-4.png"
      ],
      tags: ["Flask", "React", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/AndaimesPini_Project",
      featured: true,
    },
    {
      title: "Sistema de Monitoramento TVs ICTSI",
      description: "Sistema de digital signage para terminal portuário com gerenciamento de displays informativos, agendamento de conteúdo, monitoramento em tempo real, integração com sistemas operacionais e painel administrativo.",
      images: [
        "/images/Tvs-ICTSI/1.jpg",
        "/images/Tvs-ICTSI/2.jpg",
        "/images/Tvs-ICTSI/3.jpg",
        "/images/Tvs-ICTSI/4.jpg",
        "/images/Tvs-ICTSI/5.jpg",
        "/images/Tvs-ICTSI/6.jpg",
        "/images/Tvs-ICTSI/7.jpg",
        "/images/Tvs-ICTSI/8.jpg",
        "/images/Tvs-ICTSI/9.jpg"
      ],
      tags: ["Python", "Django", "JavaScript", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/Tvs-ICTSI",
    },
  ];

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

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/3 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,191,36,0.04),transparent_50%)]"></div>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-2xl"
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
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-amber-500 mb-6"
            style={{
              filter: "drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))",
            }}
          >
            Projetos
          </motion.h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explorando ideias através do código e criando{" "}
            <span className="text-yellow-400 font-semibold">soluções inovadoras</span>
          </p>
          
          {/* Decorative line */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { 
                duration: 0.8, 
                staggerChildren: 0.2 
              } 
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{ 
                hidden: { opacity: 0, y: 50 }, 
                visible: { opacity: 1, y: 0 } 
              }}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 ${
                project.featured 
                  ? 'bg-gradient-to-br from-black/90 via-yellow-400/5 to-black/90 border-2 border-yellow-400/30' 
                  : 'bg-black/60 border border-white/10'
              } backdrop-blur-md shadow-2xl hover:shadow-yellow-400/20`}
              whileHover={{ scale: 1.02 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold rounded-full">
                  DESTAQUE
                </div>
              )}

              {/* Project Image */}
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
                
                {/* Image counter */}
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-black/70 text-white text-xs rounded-lg backdrop-blur-sm">
                    +{project.images.length - 1} fotos
                  </div>
                )}

                {/* View Gallery Button */}
                <button
                  onClick={() => openModal(project)}
                  className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <div className="flex items-center space-x-2 px-4 py-2 bg-yellow-400/90 text-black font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="h-5 w-5" />
                    <span>Ver Galeria</span>
                  </div>
                </button>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-400/10 text-yellow-300 border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors group/link"
                    aria-label={`Repositório no GitHub para ${project.title}`}
                  >
                    <Github className="h-5 w-5 group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Código</span>
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors group/link"
                    >
                      <ExternalLink className="h-5 w-5 group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
              className="relative max-w-5xl max-h-[90vh] bg-black/80 rounded-2xl border border-yellow-400/30 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center bg-black/70 hover:bg-yellow-400 text-white hover:text-black rounded-full transition-all duration-300"
              >
                ×
              </button>

              {/* Image Display */}
              <div className="relative">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover"
                />
                
                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/70 hover:bg-yellow-400 text-white hover:text-black rounded-full transition-all duration-300"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/70 hover:bg-yellow-400 text-white hover:text-black rounded-full transition-all duration-300"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/70 text-white rounded-lg backdrop-blur-sm">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400">
                  {selectedProject.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                {/* Image Thumbnails */}
                {selectedProject.images.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto py-2">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'border-yellow-400 scale-110' 
                            : 'border-white/20 hover:border-yellow-400/50'
                        }`}
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