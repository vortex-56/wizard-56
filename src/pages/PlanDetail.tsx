import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { PLANS } from '../constants';
import SEO from '../components/SEO';

export default function PlanDetail() {
  const { planSlug } = useParams();
  const plan = PLANS.find(p => p.slug === planSlug);

  if (!plan) return <Navigate to="/" replace />;

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <SEO 
        title={plan.title} 
        description={plan.description}
        path={`/planes/${plan.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-white/50 hover:text-yellow-400 mb-12 transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          Volver al inicio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-32"
            >
              <img
                src="recurso01.webp"
                alt="Wizard"
                className="w-36 h-36 rounded-2xl object-contain bg-black"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {plan.title}
              </h1>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                {plan.description}
              </p>
              <div className="p-6 bg-[#000000] rounded-2xl border border-white/10">
                <h4 className="text-yellow-400 font-bold mb-4 uppercase tracking-widest text-xs">Ventaja Competitiva</h4>
                <p className="text-sm text-white/70 italic">
                  "Entregamos soluciones que eliminan costos fijos y garantizan la máxima velocidad de carga, mejorando directamente el SEO y la conversión."
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              {plan.services.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-[#000000] border border-white/10 rounded-3xl p-8 hover:border-yellow-400/30 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-yellow-400 font-mono text-sm">0{i + 1}</span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-white/50 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-yellow-400 font-bold text-xl">
                        {service.price}
                      </div>
                    </div>
                    <div className="shrink-0">
                      <Link
                        to={`/planes/${plan.slug}/${service.slug}`}
                        className="w-full md:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-xl font-bold transition-all group/btn"
                      >
                        Ver Detalles
                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
