import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

const TestimonialCard = ({
  name,
  role,
  company,
  text,
  rating,
  index,
}: {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group relative p-8 rounded-2xl bg-gradient-to-br from-black/90 via-yellow-400/5 to-black/90 border-2 border-yellow-400/20 backdrop-blur-md shadow-2xl hover:shadow-yellow-400/30 hover:border-yellow-400/40 transition-all duration-500"
  >
    <motion.div
      className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg"
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      <Quote className="w-6 h-6 text-black" />
    </motion.div>

    <div className="flex items-center mb-4 mt-4">
      {[...Array(rating)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
        >
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        </motion.div>
      ))}
    </div>

    <p className="text-white/80 leading-relaxed mb-6 text-base italic group-hover:text-white/95 transition-colors duration-300">
      "{text}"
    </p>

    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400/30 to-amber-500/30 flex items-center justify-center border-2 border-yellow-400/40">
        <span className="text-yellow-400 font-bold text-lg">
          {name.charAt(0)}
        </span>
      </div>
      <div>
        <h4 className="text-white font-bold group-hover:text-yellow-300 transition-colors duration-300">
          {name}
        </h4>
        <p className="text-white/60 text-sm">
          {role}
        </p>
        <p className="text-yellow-400/80 text-xs font-medium">
          {company}
        </p>
      </div>
    </div>

    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-amber-500/10 blur-xl"></div>
    </div>
  </motion.div>
);

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.08),transparent_50%)]"></div>
        
        <div className="absolute inset-0 opacity-3">
          <div className="h-full w-full bg-[linear-gradient(to_right,#fbbf24_0.3px,transparent_0.3px),linear-gradient(to_bottom,#fbbf24_0.3px,transparent_0.3px)] bg-[size:4rem_4rem] animate-pulse-slow"></div>
        </div>
      </div>

      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-2xl"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-amber-500 mb-6"
            style={{
              filter: "drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))",
            }}
          >
            {t.testimonials.title}
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t.testimonials.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
