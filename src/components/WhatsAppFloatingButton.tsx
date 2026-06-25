import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n";
import { trackEvent } from "../utils/analytics";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '5521999999999';

export default function WhatsAppFloatingButton() {
  const { t } = useLanguage();
  const message = encodeURIComponent(t.floatingWhatsApp.message);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={t.floatingWhatsApp.tooltip}
      onClick={() => trackEvent('cta_whatsapp_click', { location: 'floating_button' })}
    >
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-white text-gray-900 text-xs font-semibold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden sm:block">
        {t.floatingWhatsApp.tooltip}
        <div className="absolute top-full right-5 w-2 h-2 bg-white transform rotate-45" />
      </div>

      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-10" />

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300">
        <MessageCircle className="w-7 h-7" />
      </div>
    </motion.a>
  );
}
