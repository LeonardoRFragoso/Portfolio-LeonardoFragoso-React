import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight, Layers, Target, CheckCircle2 } from "lucide-react";
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
    demo: "https://logi-flow-wuhp.vercel.app",
  },
};

export default function FeaturedProjects() {
  const { t } = useLanguage();
  const { featuredProjects } = t;

  return (
    <section id="featured-projects" className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #09071a 0%, #0f0d24 50%, #09071a 100%)' }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.06),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-400 to-cyan-400 mb-4">
            {featuredProjects.title}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {featuredProjects.subtitle}
          </p>
        </motion.div>

        <div className="space-y-12">
          {featuredProjects.items.map((project, index) => {
            const links = projectLinks[project.id];
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                {/* Visual / Card */}
                <div className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-900/40 backdrop-blur-sm p-8 hover:border-accent-400/40 transition-all duration-500 shadow-2xl hover:shadow-accent-500/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-cyan-500/5"></div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold tracking-wider text-accent-400 uppercase border border-accent-400/30 px-3 py-1 rounded-full">
                            {project.role}
                          </span>
                          {links?.demo && (
                            <span className="px-2 py-1 bg-[#dcfce7] text-[#166534] border border-[#bbf7d0] text-xs font-bold rounded-full flex items-center gap-1">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16a34a]"></span>
                              </span>
                              ONLINE
                            </span>
                          )}
                        </div>
                        <Layers className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">
                        {project.title}
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5">
                          <div className="flex items-center gap-2 mb-2 text-accent-300 font-semibold">
                            <Target className="w-4 h-4" />
                            {featuredProjects.problem}
                          </div>
                          <p className="text-white/70 text-sm leading-relaxed">{project.problem}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5">
                          <div className="flex items-center gap-2 mb-2 text-green-400 font-semibold">
                            <CheckCircle2 className="w-4 h-4" />
                            {featuredProjects.solution}
                          </div>
                          <p className="text-white/70 text-sm leading-relaxed">{project.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-3">
                        {featuredProjects.architecture}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.architecture.split(' · ').map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-sm font-medium bg-accent-500/10 text-accent-300 border border-accent-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-3">
                        {featuredProjects.keyResults}
                      </h4>
                      <ul className="space-y-3">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-3 text-white/80">
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      {links.demo && (
                        <a
                          href={links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackEvent('project_demo_click', { project: project.title, location: 'featured_projects' })}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-accent-500/30 transition-all duration-300 hover:scale-105"
                        >
                          <ExternalLink className="w-5 h-5" />
                          {featuredProjects.viewDemo}
                        </a>
                      )}
                      <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('project_github_click', { project: project.title, location: 'featured_projects' })}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-dark-900/60 border-2 border-accent-400/30 text-white font-bold rounded-xl hover:border-accent-400/60 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                        {featuredProjects.viewCode}
                      </a>
                      <a
                        href={`#case/${project.id}`}
                        onClick={() => trackEvent('project_case_study_click', { project: project.title })}
                        className="inline-flex items-center gap-2 px-6 py-3 text-accent-400 hover:text-accent-300 font-bold transition-all duration-300 group"
                      >
                        {featuredProjects.caseStudy}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
