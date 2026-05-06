import { useState, useEffect } from "react";
import { ArrowRight, Code2, Zap, Sparkles, Download, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n";

export default function Hero() {
  const { t } = useLanguage();
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % t.hero.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [t.hero.roles.length]);

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
                  alt="Leonardo Fragoso - Full Stack Developer"
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

            {/* Enhanced Tagline - Tech Premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-dark-900/70 backdrop-blur-xl border border-accent-400/40 shadow-lg hover:border-accent-400/60 transition-all duration-500 group"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 text-accent-400 mr-2" />
              </motion.div>
              <div className="relative h-5 min-w-[220px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    className="absolute inset-0 text-xs text-accent-300 tracking-wider font-semibold uppercase whitespace-nowrap"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {t.hero.roles[currentRole % t.hero.roles.length]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <motion.div
                className="ml-2 w-1.5 h-1.5 bg-cyan-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
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

            {/* Subtitle - Tech Premium */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed font-light">
                {t.hero.tagline}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cyan-400 font-bold">{t.hero.taglineHighlight}</span>{" "}
                {t.hero.taglineEnd}
              </p>
              
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent-400" />
                <Code2 className="w-6 h-6 text-accent-400" />
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400" />
              </div>
              
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                {t.hero.specialist}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cyan-400 font-semibold">{t.hero.techStack}</span>
              </p>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                <span className="text-accent-300/90">{t.hero.focusAreas}</span>
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                {t.hero.heroDescription}
              </p>
            </motion.div>

            {/* Buttons - Tech Premium */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
            >
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-accent-500 via-purple-500 to-cyan-500 hover:from-accent-400 hover:via-purple-400 hover:to-cyan-400 transition-all duration-500 shadow-xl hover:shadow-accent-500/50 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label={t.hero.viewProjects}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="font-bold text-white text-lg relative z-10">{t.hero.viewProjects}</span>
                <ArrowRight className="h-5 w-5 text-white ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-dark-900/70 backdrop-blur-xl border-2 border-accent-400/40 hover:border-accent-400/80 hover:bg-accent-500/10 transition-all duration-500 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label={t.hero.getInTouch}
              >
                <span className="font-bold text-white text-lg group-hover:text-accent-300 transition-colors">
                  {t.hero.getInTouch}
                </span>
                <motion.div
                  className="ml-2 w-2.5 h-2.5 bg-gradient-to-r from-accent-400 to-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.a>

              <motion.a
                href="/CV-Leonardo-Fragoso-2025.pdf"
                download
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border-2 border-green-400/40 hover:border-green-400/80 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-500 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label={t.hero.downloadCV}
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

      {/* Enhanced Scroll Indicator - Tech Premium */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-3"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-accent-400/60 rounded-full flex justify-center relative">
            <motion.div
              className="w-1.5 h-3 bg-gradient-to-b from-accent-400 to-cyan-400 rounded-full mt-2"
              animate={{
                y: [0, 10, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <span className="text-accent-300/80 text-xs font-medium uppercase tracking-wider">{t.hero.scroll}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}