import React, { useState, useEffect } from "react";
import { ArrowRight, Code2, Sparkles, Star, Zap } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center bg-black pt-16 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_right,#fbbf24_0.5px,transparent_0.5px),linear-gradient(to_bottom,#fbbf24_0.5px,transparent_0.5px)] bg-[size:3rem_3rem] animate-pulse-slow"></div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/8 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.12),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.08),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.05),transparent_60%)]"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/6 w-2 h-2 bg-yellow-400 rotate-45"
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
          className="absolute bottom-1/3 right-1/6 w-3 h-3 border border-yellow-400/50"
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
          className="absolute top-1/2 right-1/4 w-1 h-16 bg-gradient-to-b from-yellow-400/30 to-transparent"
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

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 3 === 0 ? 'w-2 h-2' : i % 3 === 1 ? 'w-1 h-1' : 'w-1.5 h-1.5'
            } ${
              i % 4 === 0 ? 'bg-yellow-400' : 
              i % 4 === 1 ? 'bg-amber-400' : 
              i % 4 === 2 ? 'bg-yellow-300' : 'bg-amber-300'
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

      {/* Enhanced Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400/15 to-amber-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 0.8, 1.2, 1],
          opacity: [0.3, 0.7, 0.2, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full blur-2xl"
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
        className="absolute top-1/2 left-1/6 w-24 h-24 bg-gradient-to-r from-yellow-300/10 to-amber-400/10 rounded-full blur-xl"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Enhanced Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-black/60 backdrop-blur-xl border-2 border-yellow-400/30 mb-8 shadow-2xl hover:border-yellow-400/50 transition-all duration-500 group"
          >
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
              <Sparkles className="h-6 w-6 text-yellow-400 mr-4" />
            </motion.div>
            <div className="relative h-6 w-48 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  className="absolute inset-0 text-base text-yellow-300 tracking-widest font-bold uppercase text-center"
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
              className="ml-4 w-2 h-2 bg-yellow-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Enhanced Name with Fixed Visibility */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            {/* Subtle Glow Background - Reduced intensity */}
            <motion.div
              className="absolute inset-0 text-5xl sm:text-6xl lg:text-7xl font-black text-yellow-400/8 blur-2xl"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Leonardo Fragoso
            </motion.div>
            
            {/* Main Text - Fixed visibility for "Fragoso" */}
            <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              {/* Leonardo com gradiente normal */}
              <span className="bg-gradient-to-r from-white via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Leonardo{" "}
              </span>
              
              {/* Fragoso com efeitos simplificados para garantir visibilidade */}
              <span className="inline-block relative">
                {/* Versão com cor sólida como fallback */}
                <span className="text-yellow-400 font-black">
                  Fragoso
                </span>
                
                {/* Versão com gradiente sobreposta */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Fragoso
                </motion.span>
                
                {/* Decorative Star - Positioned Better */}
                <motion.div
                  className="absolute -top-4 -right-4 w-5 h-5 sm:-top-6 sm:-right-6 sm:w-6 sm:h-6"
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Star className="w-full h-full text-yellow-400/70" />
                </motion.div>
              </span>
            </h1>
          </motion.div>

          {/* Enhanced Subtitle with Layered Effects */}
          <motion.div
            className="space-y-6 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <div className="relative">
              <p className="text-2xl sm:text-3xl text-white/95 max-w-5xl mx-auto leading-relaxed font-light">
                {t.hero.tagline}{" "}
                <motion.span
                  className="relative font-bold"
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  {/* Fallback sólido */}
                  <span className="text-yellow-400">{t.hero.taglineHighlight}</span>
                  
                  {/* Gradiente animado sobreposto */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {t.hero.taglineHighlight}
                  </motion.span>
                  
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <Zap className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                </motion.span>{" "}
                {t.hero.taglineEnd}
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-6">
              <motion.div
                className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Code2 className="w-8 h-8 text-yellow-400" />
              </motion.div>
              <motion.div
                className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
            </div>
            
            <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              {t.hero.specialist}{" "}
              <span className="text-yellow-400 font-semibold">{t.hero.techStack}</span> {t.hero.focusOn}{" "}
              <span className="text-yellow-400 font-semibold">{t.hero.focusAreas}</span>
            </p>
          </motion.div>

          {/* Enhanced Premium Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center pt-12 pb-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            <motion.a
              href="#projects"
              className="group relative inline-flex items-center px-12 py-6 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-400 transition-all duration-700 shadow-2xl hover:shadow-yellow-400/60 transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Ver projetos"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/60 to-amber-500/60 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              
              <span className="relative font-bold text-black text-xl tracking-wide">{t.hero.viewProjects}</span>
              <motion.div
                className="relative ml-4"
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="h-7 w-7 text-black" />
              </motion.div>
              
              {/* Sparkle Effects */}
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
                  delay: 0.5,
                }}
              >
                <Sparkles className="w-4 h-4 text-black/50" />
              </motion.div>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="group inline-flex items-center px-12 py-6 rounded-2xl bg-black/70 backdrop-blur-xl border-2 border-yellow-400/40 hover:border-yellow-400/80 hover:bg-yellow-400/10 transition-all duration-700 shadow-xl hover:shadow-yellow-400/30 transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Entrar em contato"
            >
              <span className="font-bold text-white text-xl group-hover:text-yellow-300 transition-colors tracking-wide">
                {t.hero.getInTouch}
              </span>
              <motion.div
                className="ml-4 w-3 h-3 bg-yellow-400 rounded-full"
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
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator - Posicionado bem abaixo dos botões */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
          <div className="w-6 h-10 border-2 border-yellow-400/60 rounded-full flex justify-center relative">
            <motion.div
              className="w-1.5 h-3 bg-yellow-400 rounded-full mt-2"
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
          <span className="text-yellow-400/80 text-xs font-medium uppercase tracking-wider">{t.hero.scroll}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}