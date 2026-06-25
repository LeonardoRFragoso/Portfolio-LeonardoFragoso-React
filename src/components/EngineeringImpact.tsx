import { motion } from "framer-motion";
import { Building2, CreditCard, Users, Wifi, Bot, Workflow, Rocket, Shield } from "lucide-react";
import { useLanguage } from "../i18n";

const impactItems = [
  { icon: Building2, key: "enterprise" },
  { icon: CreditCard, key: "saas" },
  { icon: Users, key: "multitenant" },
  { icon: Wifi, key: "realtime" },
  { icon: Bot, key: "ai" },
  { icon: Workflow, key: "integrations" },
  { icon: Rocket, key: "production" },
  { icon: Shield, key: "security" },
];

export default function EngineeringImpact() {
  const { t } = useLanguage();
  const section = t.engineeringImpact;

  return (
    <section id="engineering-impact" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #0f0d24 50%, #0a0a1a 100%)' }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.04),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-400 to-cyan-400 mb-4">
            {section.title}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {section.subtitle}
          </p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-accent-500 via-purple-500 to-cyan-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactItems.map((item, index) => {
            const Icon = item.icon;
            const data = section.items[item.key as keyof typeof section.items];
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-dark-900/50 border border-white/10 hover:border-accent-400/40 backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-accent-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-300 transition-colors">
                    {data.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {data.description}
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
