import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PLANS } from '../constants';
import SEO from '../components/SEO';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <SEO 
        title="Agencia Digital con IA" 
        description="Wizard Fifty Six es tu socio estratégico en Lima para bots de WhatsApp, desarrollo web de alto rendimiento y marketing digital con IA."
      />

      <HeroSlider />

      {/* Plans Grid */}
      <section className="py-24" id="servicios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nuestros <span className="text-yellow-400">Planes</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Soluciones integrales diseñadas para escalar tu presencia digital con la potencia de la Inteligencia Artificial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-yellow-400/50 transition-all"
              >
                <div className="absolute top-0 -right-4 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                  <img 
                    src="/recurso02.svg" 
                    alt="" 
                    className="w-[60px] h-[60px] text-yellow-400 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#ff9d00] -rotate-90"
                    style={{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(67%) saturate(538%) hue-rotate(359deg) brightness(103%) contrast(101%) drop-shadow(0 0 6px #ff9d00) drop-shadow(0 0 12px #ff9d00)' }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-white/50 mb-8 line-clamp-2">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {plan.services.slice(0, 3).map((service) => (
                    <li key={service.id} className="flex items-center text-sm text-white/70">
                      <CheckCircle2 className="text-yellow-400 mr-2 shrink-0" size={16} />
                      <span className="truncate">{service.title}</span>
                    </li>
                  ))}
                  {plan.services.length > 3 && (
                    <li className="text-xs text-yellow-400 font-bold uppercase tracking-tighter">
                      + {plan.services.length - 3} servicios adicionales
                    </li>
                  )}
                </ul>
                <Link
                  to={`/planes/${plan.slug}`}
                  className="inline-flex items-center text-yellow-400 font-bold group-hover:translate-x-2 transition-transform"
                >
                  Explorar Plan <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-yellow-400 text-black overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-black h-full" />
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">
            ¿Listo para automatizar <br /> tu éxito?
          </h2>
          <p className="text-xl mb-12 font-medium max-w-2xl mx-auto">
            Únete a las empresas que ya están ahorrando tiempo y dinero con nuestras soluciones de IA.
          </p>
          <Link
            to="/contacto"
            className="bg-black text-white px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform inline-block"
          >
            Hablar con un Experto
          </Link>
        </div>
      </section>
    </div>
  );
}
