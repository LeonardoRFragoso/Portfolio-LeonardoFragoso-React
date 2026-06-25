import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Layers, Target, CheckCircle2, Cpu, BarChart3 } from "lucide-react";
import { useLanguage } from "../i18n";
import { trackEvent } from "../utils/analytics";

const projectLinks: Record<string, { github: string; demo?: string }> = {
  oraculo: {
    github: "https://github.com/LeonardoRFragoso/Oraculo",
    demo: "https://oraculo-ia.vercel.app",
  },
  proflow: {
    github: "https://github.com/LeonardoRFragoso/ProFlow",
    demo: "https://www.proflow.pro",
  },
  logiflow: {
    github: "https://github.com/LeonardoRFragoso/LogiFlow",
  },
};

const projectImages: Record<string, string> = {
  oraculo: "/images/oraculo/oraculo1.png",
  proflow: "/images/proflow/proflow.png",
  logiflow: "/images/LogiFlow/site-divulgacao/1.png",
};

export default function CaseStudy() {
  const { t, language } = useLanguage();
  const projectId = useMemo(() => window.location.hash.replace("#case/", "").trim(), []);
  const project = useMemo(() => t.featuredProjects.items.find((p) => p.id === projectId), [projectId, t.featuredProjects.items]);
  const links = projectLinks[projectId];
  const image = projectImages[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{language === 'pt' ? 'Case não encontrado' : 'Case study not found'}</h1>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300"
            onClick={() => window.location.hash = ""}
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'pt' ? 'Voltar ao portfólio' : 'Back to portfolio'}
          </a>
        </div>
      </div>
    );
  }

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #09071a 0%, #0f0d24 50%, #09071a 100%)' }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.a
          href="/"
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-white/70 hover:text-accent-400 transition-colors mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft className="w-4 h-4" />
          {language === 'pt' ? 'Voltar ao portfólio' : 'Back to portfolio'}
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold tracking-wider text-accent-400 uppercase border border-accent-400/30 px-3 py-1 rounded-full mb-4">
            {project.role}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-400 to-cyan-400 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {project.problem}
          </p>
        </motion.div>

        {image && (
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-white/10 mb-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={image}
              alt={project.title}
              width="1200"
              height="600"
              loading="eager"
              decoding="async"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <section className="p-6 rounded-2xl bg-dark-900/40 border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-accent-300 font-semibold">
                <Target className="w-5 h-5" />
                {t.featuredProjects.problem}
              </div>
              <p className="text-white/70 leading-relaxed">{project.problem}</p>
            </section>

            <section className="p-6 rounded-2xl bg-dark-900/40 border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-cyan-300 font-semibold">
                <Layers className="w-5 h-5" />
                {t.featuredProjects.solution}
              </div>
              <p className="text-white/70 leading-relaxed">{project.solution}</p>
            </section>

            <section className="p-6 rounded-2xl bg-dark-900/40 border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-green-300 font-semibold">
                <Cpu className="w-5 h-5" />
                {t.featuredProjects.architecture}
              </div>
              <p className="text-white/70 leading-relaxed">{project.architecture}</p>
            </section>

            <section className="p-6 rounded-2xl bg-dark-900/40 border border-white/10">
              <div className="flex items-center gap-2 mb-4 text-amber-300 font-semibold">
                <BarChart3 className="w-5 h-5" />
                {t.featuredProjects.keyResults}
              </div>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          </motion.div>

          <motion.aside
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-6 rounded-2xl bg-dark-900/60 border border-accent-400/20 sticky top-24">
              <h3 className="text-lg font-bold text-white mb-4">
                {language === 'pt' ? 'Avaliação Técnica' : 'Technical Evaluation'}
              </h3>
              <div className="space-y-3">
                {links?.demo && (
                  <a
                    href={links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-accent-500 via-purple-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-accent-500/30 transition-all duration-300"
                    onClick={() => trackEvent('project_demo_click', { project: project.title })}
                  >
                    <ExternalLink className="w-5 h-5" />
                    {language === 'pt' ? 'Ver Demo Online' : 'Live Demo'}
                  </a>
                )}
                {links?.github && (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-dark-900/60 border-2 border-accent-400/30 text-white font-bold rounded-xl hover:border-accent-400/60 transition-all duration-300"
                    onClick={() => trackEvent('project_github_click', { project: project.title })}
                  >
                    <Github className="w-5 h-5" />
                    {language === 'pt' ? 'Ver Código' : 'View Code'}
                  </a>
                )}
                <a
                  href="/#contact"
                  onClick={handleBack}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-500/10 border border-green-500/30 text-green-300 font-bold rounded-xl hover:bg-green-500/20 transition-all duration-300"
                >
                  {language === 'pt' ? 'Quero algo assim' : 'Want something similar'}
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-sm font-bold text-white/60 mb-3">
                  {language === 'pt' ? 'Stack' : 'Stack'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.architecture.split(' · ').map((tech, index) => (
                    <span key={index} className="px-2 py-1 rounded-full text-xs bg-accent-500/10 text-accent-300 border border-accent-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
