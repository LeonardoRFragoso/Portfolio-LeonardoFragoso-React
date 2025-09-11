import React from "react";
import { Code2, Database, Globe, Server, BookOpen, Sparkles, Zap, Star, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
  { 
    icon: <Code2 />, 
    name: "Python & Frameworks", 
    description: "Django, Flask, FastAPI | APIs RESTful e automação de processos | Selenium, Pandas | Desenvolvimento back-end", 
    level: "Intermediário",
    featured: true 
  },
  { 
    icon: <Database />, 
    name: "Banco de Dados", 
    description: "PostgreSQL, SQLite, Firebase | Modelagem de dados e queries otimizadas | Experiência em projetos acadêmicos e profissionais", 
    level: "Intermediário"
  },
  { 
    icon: <Globe />, 
    name: "Frontend & Web", 
    description: "React, TypeScript, HTML5, CSS3, JavaScript ES6+ | Tailwind CSS, Framer Motion | Interfaces responsivas e modernas", 
    level: "Intermediário",
    featured: true 
  },
  { 
    icon: <Server />, 
    name: "DevOps & Ferramentas", 
    description: "Git/GitHub, Docker básico | Power BI para dashboards | Linux básico | Metodologias ágeis", 
    level: "Básico+"
  },
  { 
    icon: <Code2 />, 
    name: "Automação & Testing", 
    description: "Selenium WebDriver, web scraping | Automação de processos manuais | Testes unitários básicos com pytest", 
    level: "Intermediário"
  },
  { 
    icon: <Server />, 
    name: "Infraestrutura & TI", 
    description: "Windows Server, Active Directory | Suporte técnico avançado | Gestão de redes e VPN | Experiência sólida em TI", 
    level: "Avançado"
  },
];

const experienceData = [
  {
    title: "Desenvolvedor de Sistemas Junior",
    company: "iTracker Logística Inteligente",
    period: "dez 2024 - Presente",
    description: "Desenvolvimento de automação e extração de dados para otimização de processos logísticos. Foco em soluções Python para integração de sistemas.",
    featured: true,
  },
  {
    title: "Gerente de TI",
    company: "RWE Telemedicina e Diagnósticos", 
    period: "jan 2024 - jul 2024",
    description: "Coordenação de equipes de suporte técnico, infraestrutura e governança de TI. Responsável por operações diárias e implementação de melhorias nos processos.",
    featured: false,
  },
  {
    title: "Analista de Suporte de TI",
    company: "Experiência Corporativa",
    period: "nov 2023 - jul 2024",
    description: "Desenvolvimento back-end com Python, suporte técnico especializado e automação de processos. Experiência que contribuiu para a transição para área de desenvolvimento.",
    featured: false,
  },
];

const educationData = [
  {
    degree: "Gestão de Tecnologia da Informação",
    institution: "Estácio de Sá",
    link: "https://portal.estacio.br",
    year: "2016 - 2019",
    description: "Graduação com foco em gestão estratégica de TI, governança e processos",
    featured: true,
  },
  {
    degree: "Formação Python Developer",
    institution: "Rocketseat",
    link: "https://www.rocketseat.com.br",
    year: "abr 2024 - ago 2024",
    description: "Especialização avançada em Python, APIs, testes automatizados e boas práticas",
    certificate: "Certificado verificado",
    featured: true,
  },
  {
    degree: "Formação Full Stack",
    institution: "Rocketseat",
    link: "https://www.rocketseat.com.br", 
    year: "jun 2024 - set 2024",
    description: "React, Node.js, TypeScript, banco de dados e deploy em produção",
    certificate: "Certificado verificado",
    featured: true,
  },
  {
    degree: "Django Master Bootcamp",
    institution: "PyCode",
    link: "https://pycode.com.br",
    year: "abr 2024 - set 2024",
    description: "Django avançado, ORM otimizado, deploy AWS, cache Redis, Celery",
    certificate: "140h de carga horária",
  },
  {
    degree: "Formação Explorer",
    institution: "Rocketseat",
    link: "https://www.rocketseat.com.br",
    year: "abr 2024 - jul 2024", 
    description: "Fundamentos sólidos de programação, lógica e estruturas de dados",
    certificate: "Certificado verificado",
  },
  {
    degree: "Analista de Dados",
    institution: "Cubos Academy",
    link: "https://cubos.academy",
    year: "jan 2024 - set 2024",
    description: "Python para análise, Pandas, NumPy, visualização de dados, SQL avançado",
    certificate: "Projeto final aprovado",
  },
];

const SkillCard = ({ 
  icon, 
  name, 
  description, 
  level,
  featured = false 
}: { 
  icon: JSX.Element; 
  name: string; 
  description: string;
  level?: string;
  featured?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`group relative p-8 rounded-2xl transition-all duration-500 ${
      featured 
        ? 'bg-gradient-to-br from-black/90 via-yellow-400/5 to-black/90 border-2 border-yellow-400/30' 
        : 'bg-black/60 border border-white/10'
    } backdrop-blur-md shadow-2xl hover:shadow-yellow-400/20`}
  >
    {/* Level Badge */}
    {level && (
      <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold rounded-full">
        {level}
      </div>
    )}

    {/* Icon with Glow Effect */}
    <div className="relative mb-6">
      <motion.div
        className="w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-400/20 to-amber-500/20 flex items-center justify-center group-hover:from-yellow-400/30 group-hover:to-amber-500/30 transition-colors duration-500"
        whileHover={{ rotate: 5 }}
      >
        {React.cloneElement(icon, { 
          className: "h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" 
        })}
      </motion.div>
      
      {/* Sparkle Effect */}
      <motion.div
        className="absolute -top-1 -right-1"
        animate={{
          scale: [0, 1, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      >
        <Sparkles className="w-4 h-4 text-yellow-400/70" />
      </motion.div>
    </div>

    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
      {name}
    </h3>
    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 text-sm">
      {description}
    </p>

    {/* Hover Effect Border */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-amber-500/10 blur-xl"></div>
    </div>
  </motion.div>
);

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  featured = false,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  featured?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`group relative p-8 rounded-2xl transition-all duration-500 ${
      featured 
        ? 'bg-gradient-to-br from-black/90 via-yellow-400/5 to-black/90 border-2 border-yellow-400/30' 
        : 'bg-black/60 border border-white/10'
    } backdrop-blur-md shadow-2xl hover:shadow-yellow-400/20`}
  >
    {/* Featured Badge */}
    {featured && (
      <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold rounded-full">
        ATUAL
      </div>
    )}

    {/* Icon */}
    <div className="relative mb-6">
      <motion.div
        className="w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-400/20 to-amber-500/20 flex items-center justify-center group-hover:from-yellow-400/30 group-hover:to-amber-500/30 transition-colors duration-500"
        whileHover={{ rotate: 5 }}
      >
        <TrendingUp className="h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
      </motion.div>
    </div>

    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
      {title}
    </h4>
    <p className="text-yellow-400 font-semibold mb-1">{company}</p>
    <p className="text-white/60 text-sm mb-3">{period}</p>
    <p className="text-white/70 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const EducationCard = ({
  degree,
  institution,
  link,
  year,
  description,
  certificate,
  featured = false,
}: {
  degree: string;
  institution: string;
  link: string;
  year: string;
  description?: string;
  certificate?: string;
  featured?: boolean;
}) => (
  <motion.a
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -8, scale: 1.02 }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative block p-8 rounded-2xl transition-all duration-500 ${
      featured 
        ? 'bg-gradient-to-br from-black/90 via-yellow-400/5 to-black/90 border-2 border-yellow-400/30' 
        : 'bg-black/60 border border-white/10'
    } backdrop-blur-md shadow-2xl hover:shadow-yellow-400/20`}
  >
    {/* Featured Badge */}
    {featured && (
      <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold rounded-full">
        DESTAQUE
      </div>
    )}

    {/* Icon with Animation */}
    <div className="relative mb-6">
      <motion.div
        className="w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-400/20 to-amber-500/20 flex items-center justify-center group-hover:from-yellow-400/30 group-hover:to-amber-500/30 transition-colors duration-500"
        whileHover={{ rotate: 5 }}
      >
        {featured ? (
          <Award className="h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
        ) : (
          <BookOpen className="h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
        )}
      </motion.div>
      
      {/* Star Effect */}
      <motion.div
        className="absolute -top-1 -right-1"
        animate={{
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      >
        <Star className="w-4 h-4 text-yellow-400/70" />
      </motion.div>
    </div>

    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
      {degree}
    </h4>
    <p className="text-yellow-400 font-semibold mb-1 group-hover:text-yellow-300 transition-colors duration-300">
      {institution}
    </p>
    <p className="text-white/60 text-sm mb-2">{year}</p>
    
    {description && (
      <p className="text-white/70 text-sm mb-2 leading-relaxed">{description}</p>
    )}
    
    {certificate && (
      <p className="text-yellow-400/80 text-xs font-medium">{certificate}</p>
    )}

    {/* Hover Effect */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-amber-500/10 blur-xl"></div>
    </div>
  </motion.a>
);

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.06),transparent_50%)]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-3">
          <div className="h-full w-full bg-[linear-gradient(to_right,#fbbf24_0.3px,transparent_0.3px),linear-gradient(to_bottom,#fbbf24_0.3px,transparent_0.3px)] bg-[size:4rem_4rem] animate-pulse-slow"></div>
        </div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 ${
              i % 2 === 0 ? 'bg-yellow-400' : 'bg-amber-400'
            } rounded-full`}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0.4,
            }}
            animate={{
              y: [null, -20, 20],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            Sobre Mim
          </motion.h2>
          
          {/* Decorative Line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p
            className="text-xl text-white/80 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 font-bold text-2xl">
              Desenvolvedor Full Stack
            </span>{" "}
            em crescimento, com trajetória sólida iniciada na{" "}
            <span className="text-yellow-400 font-semibold">gestão de TI e infraestrutura</span>. 
            Atualmente{" "}
            <span className="text-yellow-400 font-semibold">Desenvolvedor de Sistemas Junior</span> na iTracker Logística,
            com experiência anterior como{" "}
            <span className="text-yellow-400 font-semibold">Gerente de TI</span> coordenando equipes técnicas.
            Especializo-me em{" "}
            <span className="text-yellow-400 font-semibold">Python, Django, Flask e React</span>, 
            com foco em{" "}
            <span className="text-yellow-400 font-semibold">automação de processos e extração de dados</span>. 
            Minha combinação única de{" "}
            <span className="text-yellow-400 font-semibold">visão de negócios e habilidades técnicas</span>{" "}
            me permite criar soluções completas que atendem necessidades reais, desde APIs robustas até interfaces intuitivas.
          </motion.p>
        </motion.div>

        <div className="space-y-20">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.h3
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Experiência Profissional
              </motion.h3>
              
              <div className="flex items-center justify-center space-x-6 mb-8">
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <TrendingUp className="w-6 h-6 text-yellow-400" />
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ExperienceCard {...exp} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.h3
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Stack Tecnológico
              </motion.h3>
              
              <div className="flex items-center justify-center space-x-6 mb-8">
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Zap className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.h3
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Formação & Certificações
              </motion.h3>
              
              <div className="flex items-center justify-center space-x-6 mb-8">
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Award className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <EducationCard {...edu} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <motion.div
          className="my-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <motion.div
              className="w-3/4 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: '75%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}