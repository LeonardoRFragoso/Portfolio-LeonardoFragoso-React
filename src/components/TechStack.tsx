import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

interface TechItem {
  name: string;
  level: number;
  category: string;
}

const techStackData: TechItem[] = [
  // Backend
  { name: "Python", level: 95, category: "backend" },
  { name: "Django", level: 90, category: "backend" },
  { name: "FastAPI", level: 85, category: "backend" },
  { name: "Flask", level: 80, category: "backend" },
  { name: "Go", level: 60, category: "backend" },
  // Frontend
  { name: "React", level: 80, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Vue.js", level: 70, category: "frontend" },
  { name: "TailwindCSS", level: 85, category: "frontend" },
  // Database
  { name: "PostgreSQL", level: 85, category: "database" },
  { name: "MySQL", level: 80, category: "database" },
  { name: "Redis", level: 70, category: "database" },
  { name: "MongoDB", level: 65, category: "database" },
  // DevOps
  { name: "Docker", level: 75, category: "devops" },
  { name: "Linux", level: 85, category: "devops" },
  { name: "Git", level: 90, category: "devops" },
  { name: "AWS", level: 60, category: "devops" },
];

const categoryLabels: { [key: string]: { pt: string; en: string } } = {
  backend: { pt: "Back-end", en: "Back-end" },
  frontend: { pt: "Front-end", en: "Front-end" },
  database: { pt: "Banco de Dados", en: "Database" },
  devops: { pt: "DevOps & Cloud", en: "DevOps & Cloud" },
};

const getLevelLabel = (level: number, lang: string) => {
  if (level >= 85) return lang === 'pt' ? 'Expert' : 'Expert';
  if (level >= 70) return lang === 'pt' ? 'Avançado' : 'Advanced';
  if (level >= 50) return lang === 'pt' ? 'Intermediário' : 'Intermediate';
  return lang === 'pt' ? 'Básico' : 'Basic';
};

const getLevelColor = (level: number) => {
  if (level >= 85) return 'from-green-400 to-emerald-500';
  if (level >= 70) return 'from-accent-400 to-purple-500';
  if (level >= 50) return 'from-cyan-400 to-blue-500';
  return 'from-gray-400 to-gray-500';
};

export default function TechStack() {
  const { language } = useLanguage();
  const lang = language;

  const categories = ['backend', 'frontend', 'database', 'devops'];

  return (
    <section className="relative py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #09071a 0%, #0f0d24 50%, #09071a 100%)' }}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06),transparent_50%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-purple-400 to-cyan-400 mb-4">
            {lang === 'pt' ? 'Proficiência Técnica' : 'Technical Proficiency'}
          </h3>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-accent-500 via-purple-500 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* Tech Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              className="p-6 rounded-2xl bg-dark-900/40 border border-accent-500/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
                {categoryLabels[category][lang as 'pt' | 'en']}
              </h4>
              
              <div className="space-y-4">
                {techStackData
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white/90 font-medium text-sm">{tech.name}</span>
                        <span className="text-xs text-accent-300/80">{getLevelLabel(tech.level, lang)}</span>
                      </div>
                      <div className="h-2 bg-dark-900/60 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${getLevelColor(tech.level)} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
