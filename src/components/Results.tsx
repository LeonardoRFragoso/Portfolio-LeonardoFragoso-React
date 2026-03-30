import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, Rocket } from "lucide-react";
import { useLanguage } from "../i18n";

const iconMap = {
  0: TrendingUp,
  1: Clock,
  2: Users,
  3: Rocket,
};

export default function Results() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.08),transparent_50%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-amber-500 mb-4">
            {t.results?.title || "Resultados Comprovados"}
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t.results?.subtitle || "Números que demonstram impacto real"}
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(t.results?.items || []).map((item, index) => {
            const Icon = iconMap[index as keyof typeof iconMap] || TrendingUp;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-black/80 via-yellow-400/5 to-black/80 border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-500 h-full">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 to-amber-500/0 group-hover:from-yellow-400/10 group-hover:to-amber-500/10 transition-all duration-500 blur-xl"></div>
                  
                  {/* Icon */}
                  <motion.div
                    className="relative w-14 h-14 rounded-xl bg-gradient-to-r from-yellow-400/20 to-amber-500/20 flex items-center justify-center mb-6 group-hover:from-yellow-400/30 group-hover:to-amber-500/30 transition-colors duration-500"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <Icon className="w-7 h-7 text-yellow-400" />
                  </motion.div>

                  {/* Metric */}
                  <motion.div
                    className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mb-3"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  >
                    {item.metric}
                  </motion.div>

                  {/* Description */}
                  <p className="text-white/90 font-medium mb-2 leading-tight">
                    {item.description}
                  </p>

                  {/* Context */}
                  <p className="text-sm text-yellow-400/70">
                    {item.context}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
