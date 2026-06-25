import { ArrowRight, Zap, Sparkles, Download, CheckCircle, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n";
import { trackEvent } from "../utils/analytics";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #09071a 0%, #0f0d24 50%, #09071a 100%)' }}
    >
      {/* Enhanced Background Effects - Tech Premium */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#6366f1_0.5px,transparent_0.5px),linear-gradient(to_bottom,#6366f1_0.5px,transparent_0.5px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        {/* Gradient Overlays - Tech Premium */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.12),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08),transparent_60%)]"></div>
      </div>

      {/* Geometric Shapes - Tech Premium */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/6 w-2 h-2 bg-accent-400 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/6 w-3 h-3 border border-cyan-400/50"
          animate={{
            rotate: [0, 360],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-1 h-16 bg-gradient-to-b from-purple-400/30 to-transparent"
          animate={{
            scaleY: [1, 0.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Enhanced Floating Particles - Tech Premium */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 3 === 0 ? 'w-2 h-2' : i % 3 === 1 ? 'w-1 h-1' : 'w-1.5 h-1.5'
            } ${
              i % 4 === 0 ? 'bg-accent-400' : 
              i % 4 === 1 ? 'bg-cyan-400' : 
              i % 4 === 2 ? 'bg-purple-400' : 'bg-accent-300'
            } rounded-full`}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0.3,
            }}
            animate={{
              y: [null, -30, 30, -20],
              x: [null, -20, 20, -10],
              opacity: [0.3, 0.8, 0.4, 0.9, 0.3],
              scale: [1, 1.2, 0.8, 1.1, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Enhanced Floating Orbs - Tech Premium */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-accent-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 0.8, 1.2, 1],
          opacity: [0.3, 0.6, 0.2, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-cyan-400/20 to-accent-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 0.8, 1.5, 1],
          opacity: [0.4, 0.1, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/6 w-32 h-32 bg-gradient-to-r from-purple-400/15 to-cyan-400/15 rounded-full blur-xl"
        animate={{
          scale: [0.8, 1.3, 1, 1.1],
          opacity: [0.2, 0.5, 0.1, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 min-h-[calc(100vh-8rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Profile Image - Left Side */}
          <motion.div
            className="order-1 lg:order-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Animated Ring Background - Tech Premium */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent-500 via-purple-500 to-cyan-500 opacity-75 blur-md"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Secondary Glow */}
              <motion.div
                className="absolute -inset-6 rounded-full bg-gradient-to-r from-accent-400/30 to-cyan-400/30 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Image Container */}
              <motion.div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent-400/50 shadow-2xl shadow-accent-500/20"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/Leo-Perfil.png"
                  alt="Leonardo Fragoso - Desenvolvedor Python Backend | Django · FastAPI · IA"
                  width="384"
                  height="384"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 25%' }}
                />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 via-transparent to-transparent" />
              </motion.div>
              
              {/* Decorative Elements - Tech Premium */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Zap className="w-full h-full text-cyan-400" />
              </motion.div>
              
              <motion.div
                className="absolute top-8 -left-4 w-6 h-6"
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <Sparkles className="w-full h-full text-purple-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            className="order-2 lg:order-2 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            {/* Badge Disponível para Oportunidades */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 shadow-lg shadow-green-500/10 mb-4"
            >
              <span className="relative flex h-2.5 w-2.5 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-semibold">{t.hero.availableBadge}</span>
            </motion.div>

            {/* Headline - Tech Premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/10 border border-accent-400/40 shadow-lg shadow-accent-500/10"
            >
              <Sparkles className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm text-accent-300 font-semibold tracking-wide uppercase">
                {t.hero.techPills}
              </span>
            </motion.div>

            {/* Name - Tech Premium */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-accent-400 to-cyan-400 bg-clip-text text-transparent">
                  Leonardo{" "}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-purple-400 font-black">Fragoso</span>
              </h1>
            </motion.div>

            {/* Main Value Proposition */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {t.hero.headline}
              </h2>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light">
                {t.hero.subheadline}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {t.hero.proofPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/70 border border-white/10 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white/90 font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Buttons - Tech Premium */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            >
              <motion.a
                href="https://wa.me/5521980292791?text=Olá%20Leonardo%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 py-4 flex-1 min-w-[160px] max-w-[280px] rounded-xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-400 hover:via-emerald-400 hover:to-teal-400 transition-all duration-500 shadow-xl hover:shadow-green-500/50 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label={t.hero.whatsappCta}
                onClick={() => trackEvent('cta_whatsapp_click', { location: 'hero' })}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <MessageCircle className="h-5 w-5 text-white mr-2 relative z-10" />
                <span className="font-bold text-white text-lg relative z-10">{t.hero.whatsappCta}</span>
                <ArrowRight className="h-5 w-5 text-white ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.a>

              <motion.a
                href="mailto:leonardorfragoso@gmail.com"
                className="group inline-flex items-center justify-center px-6 py-4 flex-1 min-w-[160px] max-w-[280px] rounded-xl bg-dark-900/70 backdrop-blur-xl border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-500 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label={t.hero.emailCta}
                onClick={() => trackEvent('cta_email_click', { location: 'hero' })}
              >
                <Mail className="h-5 w-5 text-white mr-2 relative z-10" />
                <span className="font-bold text-white text-lg relative z-10">{t.hero.emailCta}</span>
              </motion.a>

              <motion.a
                href="#projects"
                className="group inline-flex items-center justify-center px-6 py-4 flex-1 min-w-[160px] max-w-[280px] rounded-xl bg-dark-900/70 backdrop-blur-xl border-2 border-accent-400/40 hover:border-accent-400/80 hover:bg-accent-500/10 transition-all duration-500 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label={t.hero.viewProjects}
                onClick={() => trackEvent('cta_projects_click', { location: 'hero' })}
              >
                <span className="font-bold text-white text-lg group-hover:text-accent-300 transition-colors">
                  {t.hero.viewProjects}
                </span>
                <motion.div
                  className="ml-2 w-2.5 h-2.5 bg-gradient-to-r from-accent-400 to-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.a>

              <motion.a
                href={language === 'pt' ? '/Leonardo%20Fragoso%20_%20Desenvolvedor%20Python%20Backend.pdf' : '/Leonardo%20Fragoso%20_%20Python%20Backend%20Developer.pdf'}
                download
                className="group inline-flex items-center justify-center px-6 py-4 flex-1 min-w-[160px] max-w-[280px] rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border-2 border-green-400/40 hover:border-green-400/80 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-500 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label={t.hero.downloadCV}
                onClick={() => trackEvent('cta_download_cv_click', { location: 'hero' })}
              >
                <Download className="h-5 w-5 text-green-400 mr-2 group-hover:text-green-300 transition-colors" />
                <span className="font-bold text-green-400 text-lg group-hover:text-green-300 transition-colors">
                  {t.hero.downloadCV}
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}