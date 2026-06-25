import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n";
import { trackEvent } from "../utils/analytics";

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <section id="social-proof" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #09071a 0%, #0f0d24 50%, #09071a 100%)' }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.06),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-400 to-cyan-400 mb-4">
            {t.socialProof.title}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t.socialProof.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.socialProof.items.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => trackEvent('social_proof_card_click', { index, text: item.text })}
              >
                <div className="h-full p-8 rounded-2xl bg-dark-900/60 border border-white/10 backdrop-blur-md hover:border-accent-400/40 transition-all duration-500 hover:-translate-y-1 shadow-xl hover:shadow-accent-500/10 cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30">
                      <CheckCircle2 className="w-7 h-7 text-green-400" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-accent-400/30 to-transparent" />
                  </div>
                  <p className="text-lg text-white/95 font-semibold leading-relaxed mb-3">
                    {item.text}
                  </p>
                  <p className="text-sm text-accent-300/80 font-medium">
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
