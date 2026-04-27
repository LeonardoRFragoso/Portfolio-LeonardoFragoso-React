import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, MessageCircle, Star, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

const ContactCard = ({ 
  icon, 
  title, 
  action, 
  href, 
  target, 
  color = 'accent'
}: {
  icon: JSX.Element;
  title: string;
  action: string;
  href: string;
  target?: string;
  color?: 'accent' | 'cyan' | 'purple';
}) => {
  const colorClasses = {
    accent: 'from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 shadow-accent-500/20 hover:shadow-accent-500/40',
    cyan: 'from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 shadow-cyan-500/20 hover:shadow-cyan-500/40',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 shadow-purple-500/20 hover:shadow-purple-500/40',
  };

  return (
    <motion.a
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      className={`group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${colorClasses[color]} shadow-lg transition-all duration-300`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`${action} - ${title}`}
    >
      <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
        {React.cloneElement(icon, { 
          className: "h-6 w-6 text-white" 
        })}
      </div>
      <div className="flex-1">
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-white/80 text-sm">{action}</p>
      </div>
      <Send className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
    </motion.a>
  );
};

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const mailtoLink = `mailto:leonardorfragoso@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      }, 1000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  const contactMethods = [
    {
      icon: <Mail />,
      title: t.contact.email.title,
      action: t.contact.email.action,
      href: "mailto:leonardorfragoso@gmail.com",
      color: 'accent' as const,
    },
    {
      icon: <Github />,
      title: t.contact.github.title,
      action: t.contact.github.action,
      href: "https://github.com/LeonardoRFragoso",
      target: "_blank",
      color: 'purple' as const,
    },
    {
      icon: <Linkedin />,
      title: t.contact.linkedin.title,
      action: t.contact.linkedin.action,
      href: "https://www.linkedin.com/in/leonardo-fragoso-921b166a/",
      target: "_blank",
      color: 'cyan' as const,
    },
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #09071a 0%, #0f0d24 50%, #09071a 100%)' }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(6,182,212,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(168,85,247,0.06),transparent_50%)]"></div>
        
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#6366f1_0.3px,transparent_0.3px),linear-gradient(to_bottom,#6366f1_0.3px,transparent_0.3px)] bg-[size:4rem_4rem]"></div>
        </div>
      </div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-accent-500/15 to-purple-500/15 rounded-full blur-2xl"
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
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/12 to-accent-500/12 rounded-full blur-xl"
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 3 === 0 ? 'w-1.5 h-1.5' : i % 3 === 1 ? 'w-1 h-1' : 'w-2 h-2'
            } ${
              i % 3 === 0 ? 'bg-accent-400' : i % 3 === 1 ? 'bg-cyan-400' : 'bg-purple-400'
            } rounded-full`}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0.4,
            }}
            animate={{
              y: [null, -25, 25],
              x: [null, -15, 15],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-400 to-cyan-400 mb-6"
            style={{
              filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))",
            }}
          >
            {t.contact.title}
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t.contact.subtitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-purple-400 to-cyan-400 font-bold">
                {t.contact.subtitleHighlight}
              </span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <motion.div
                className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium text-sm">{t.contact.availability}</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2 px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Clock className="w-5 h-5 text-accent-400" />
                <span className="text-accent-400 font-medium text-sm">{t.contact.responseTime}</span>
              </motion.div>
            </div>
            
            <div className="flex items-center justify-center space-x-6 mt-8">
              <motion.div
                className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent-400"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MessageCircle className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <motion.div
                className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Cards de Contato Rápido */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ContactCard {...method} />
            </motion.div>
          ))}
        </motion.div>

        {/* Formulário de Contato */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 rounded-2xl bg-dark-900/40 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {t.contact.formTitle}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-2">
                    {t.contact.formName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900/60 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-accent-400/60 focus:ring-1 focus:ring-accent-400/30 transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                    {t.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900/60 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-accent-400/60 focus:ring-1 focus:ring-accent-400/30 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/70 text-sm font-medium mb-2">
                  {t.contact.formSubject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900/60 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-accent-400/60 focus:ring-1 focus:ring-accent-400/30 transition-all"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-900/60 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-accent-400/60 focus:ring-1 focus:ring-accent-400/30 transition-all resize-none"
                  placeholder="Descreva seu projeto ou dúvida..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full px-6 py-3.5 bg-gradient-to-r from-accent-500 via-purple-500 to-cyan-500 hover:from-accent-400 hover:via-purple-400 hover:to-cyan-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: formStatus === 'sending' ? 1 : 1.01 }}
                whileTap={{ scale: formStatus === 'sending' ? 1 : 0.99 }}
              >
                {formStatus === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>{t.contact.formSending}</span>
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>{t.contact.formSuccess}</span>
                  </>
                ) : formStatus === 'error' ? (
                  <span>{t.contact.formError}</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t.contact.formSend}</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.p
            className="text-lg text-white/70 max-w-2xl mx-auto"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {t.contact.footer}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cyan-400 font-semibold">{t.contact.opportunities}</span> {t.contact.and}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">{t.contact.collaborations}</span>
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Star className="w-8 h-8 text-accent-400/50" />
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Star className="w-8 h-8 text-cyan-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
