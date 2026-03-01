import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../constants';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  cta: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Bots de WhatsApp con IA",
    subtitle: "Automatización Inteligente",
    description: "Vendedores virtuales 24/7 que califican leads y cierran ventas automáticamente sin intervención humana.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1920",
    link: "/planes/automatizacion-ventas/bot-asistente-ventas",
    cta: "Ver Demo"
  },
  {
    id: 2,
    title: "Desarrollo Web de Alto Rendimiento",
    subtitle: "Velocidad Extrema",
    description: "Páginas construidas en código puro para un SEO impecable y una experiencia de usuario inigualable.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
    link: "/planes/desarrollo-web",
    cta: "Ver Planes"
  },
  {
    id: 3,
    title: "Marketing Digital Estratégico",
    subtitle: "Resultados Reales",
    description: "Maximizamos tu ROI con campañas optimizadas en Google y Meta Ads usando inteligencia artificial.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1920",
    link: "/planes/marketing-digital",
    cta: "Empezar Ahora"
  },
  {
    id: 4,
    title: "Creación de Contenido Masivo",
    subtitle: "Calidad Premium",
    description: "Videos y audios generados con IA para dominar TikTok, YouTube y Spotify a una fracción del costo.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920",
    link: "/planes/creacion-contenido",
    cta: "Ver Catálogo"
  },
  {
    id: 5,
    title: "Crea tu Propio Curso Online",
    subtitle: "Escala tu Conocimiento",
    description: "Te ayudamos a producir, empaquetar y vender tu curso con tecnología de punta.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1920",
    link: "/planes/creacion-curso",
    cta: "Lanzar Curso"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="h-full w-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 z-20 flex items-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl"
              >
                <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest rounded mb-2">
                  {slides[current].subtitle}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                  {slides[current].title.split(' ').map((word, i) => (
                    <span key={i} className={word.toLowerCase() === 'ia' ? 'text-yellow-400' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-base md:text-lg text-white/70 mb-6 leading-relaxed">
                  {slides[current].description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={slides[current].link}
                    className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold flex items-center group hover:scale-105 hover:shadow-[0_0_12px_#ff9d00] transition-all text-sm"
                  >
                    {slides[current].cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-10 right-10 z-30 flex space-x-4">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-10 z-30 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-1 transition-all duration-300 rounded-full",
              current === i ? "w-8 bg-yellow-400" : "w-4 bg-white/30"
            )}
          />
        ))}
      </div>
    </div>
  );
}
