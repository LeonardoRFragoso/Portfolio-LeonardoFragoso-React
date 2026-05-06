import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import WhyHireMe from "./components/WhyHireMe";
import Results from "./components/Results";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import { useLanguage } from "./i18n";

function App() {
  const { t } = useLanguage();
  // Scroll suave para links de âncoras
  React.useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        event.preventDefault();
        const targetId = target.hash.slice(1); // Remove o '#' para capturar o ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const headerHeight = 80; // Altura fixa do cabeçalho
          const scrollPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden cursor-none md:cursor-none" style={{ background: 'linear-gradient(135deg, #09071a 0%, #0f0d24 50%, #09071a 100%)' }}>
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Background Effects - Tech Premium */}
      <div className="fixed inset-0 z-0">
        {/* Subtle animated grid */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#6366f1_0.5px,transparent_0.5px),linear-gradient(to_bottom,#6366f1_0.5px,transparent_0.5px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.04),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(6,182,212,0.03),transparent_50%)]"></div>
      </div>

      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="relative z-10">
        <Hero />
        
        {/* Seções com fundo sutil */}
        <div className="relative">
          {/* Subtle separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-accent-400/20 to-transparent"></div>
          <About />
        </div>

        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"></div>
          <TechStack />
        </div>

        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent"></div>
          <WhyHireMe />
        </div>
        
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-accent-400/20 to-transparent"></div>
          <Results />
        </div>
        
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-accent-400/20 to-transparent"></div>
          <Projects />
        </div>
        
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-accent-400/20 to-transparent"></div>
          <Contact />
        </div>
      </main>

      {/* Rodapé Premium */}
      <footer className="relative z-10 bg-dark-900/95 backdrop-blur-xl border-t border-accent-500/20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent-500/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo/Name */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-accent-400 to-cyan-400 bg-clip-text text-transparent">
                Leonardo Fragoso
              </h3>
              <p className="text-white/60 text-sm">
                {t.footer.description}
              </p>
              {/* Availability Badge */}
              <div className="inline-flex items-center px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-400 text-xs font-medium">{t.hero.availableBadge}</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Links Rápidos</h4>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="text-white/60 hover:text-accent-400 transition-colors text-sm">Sobre Mim</a>
                <a href="#projects" className="text-white/60 hover:text-accent-400 transition-colors text-sm">Projetos</a>
                <a href="#contact" className="text-white/60 hover:text-accent-400 transition-colors text-sm">Contato</a>
                <a 
                  href="/CV-Leonardo-Fragoso-2025.pdf" 
                  download 
                  className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV (PDF)
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Conecte-se</h4>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://github.com/LeonardoRFragoso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 text-white/60 hover:text-accent-400 transition-colors text-sm"
                  aria-label={t.footer.visitGithub}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub - @LeonardoRFragoso</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/leonardo-fragoso-921b166a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 text-white/60 hover:text-cyan-400 transition-colors text-sm"
                  aria-label={t.footer.visitLinkedin}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn - Leonardo Fragoso</span>
                </a>

                <a
                  href="mailto:leonardorfragoso@gmail.com"
                  className="group flex items-center space-x-2 text-white/60 hover:text-purple-400 transition-colors text-sm"
                  aria-label={t.footer.sendEmail}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>leonardorfragoso@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-400/30 to-transparent mb-6"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Leonardo Fragoso. {t.footer.copyright}
            </p>
            
            <div className="flex items-center space-x-1 text-white/50 text-sm">
              <span>{t.footer.madeWith}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cyan-400 animate-pulse">♥</span>
              <span>{t.footer.and}</span>
            </div>
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent"></div>
      </footer>
    </div>
  );
}

export default App;