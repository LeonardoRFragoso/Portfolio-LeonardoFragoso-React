import { motion } from "framer-motion";
import { TrendingUp, Users, Code2, Briefcase, CheckCircle } from "lucide-react";
import { useLanguage } from "../i18n";

const iconMap: { [key: string]: React.ElementType } = {
  chart: TrendingUp,
  users: Users,
  code: Code2,
  briefcase: Briefcase,
};

export default function WhyHireMe() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #09071a 0%, #0f0d24 50%, #09071a 100%)' }}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.06),transparent_50%)]"></div>
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
          <motion.h2
            className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-green-400 to-emerald-400 mb-4"
            style={{
              filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))",
            }}
          >
            {t.about.whyHireMe?.title || "Por que me contratar?"}
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t.about.whyHireMe?.subtitle || "Diferenciais que fazem a diferença"}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(t.about.whyHireMe?.items || []).map((item, index) => {
            const Icon = iconMap[item.icon] || CheckCircle;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-dark-900/80 via-green-500/5 to-dark-900/80 border border-green-500/20 backdrop-blur-sm hover:border-green-400/40 transition-all duration-500 h-full">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500 blur-xl"></div>
                  
                  {/* Icon */}
                  <motion.div
                    className="relative w-14 h-14 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-6 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-colors duration-500"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <Icon className="w-7 h-7 text-green-400" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Check mark */}
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-5 h-5 text-green-400/50 group-hover:text-green-400 transition-colors duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold text-lg transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Vamos Conversar</span>
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
