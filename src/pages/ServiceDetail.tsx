import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MessageSquare, Zap, ShieldCheck, Rocket } from 'lucide-react';
import { PLANS, CONTACT_INFO } from '../constants';
import SEO from '../components/SEO';

export default function ServiceDetail() {
  const { planSlug, serviceSlug } = useParams();
  const plan = PLANS.find(p => p.slug === planSlug);
  const service = plan?.services.find(s => s.slug === serviceSlug);

  if (!plan || !service) return <Navigate to="/" replace />;

  const whatsappMessage = encodeURIComponent(`Hola Wizard Fifty Six, estoy interesado en el servicio "${service.title}" del plan "${plan.title}". ¿Me podrían dar más información?`);

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <SEO 
        title={service.title} 
        description={service.description}
        path={`/planes/${plan.slug}/${service.slug}`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={`/planes/${plan.slug}`} className="inline-flex items-center text-white/50 hover:text-yellow-400 mb-12 transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          Volver a {plan.title}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#000000] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-center space-x-4">
              <img
                src="recurso01.webp"
                alt="Wizard"
                className="w-28 h-28 rounded-xl object-contain bg-black"
              />
              <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs">
                {plan.title}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12">
              <div className="bg-black/50 border border-white/5 px-6 py-4 rounded-2xl">
                <p className="text-white/40 text-xs uppercase font-bold tracking-widest mb-1">Inversión</p>
                <p className="text-3xl font-bold text-yellow-400">{service.price}</p>
              </div>
              <div className="flex-1 min-w-[200px]">
                <a
                  href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 bg-yellow-400 text-black px-8 py-5 rounded-2xl font-black text-lg hover:scale-105 hover:shadow-[0_0_12px_#ff9d00] transition-all"
                >
                  <MessageSquare size={24} />
                  <span>Contratar Ahora</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/5">
              <div className="space-y-3">
                <ShieldCheck className="text-yellow-400" size={32} />
                <h4 className="font-bold text-white">Garantía Wizard</h4>
                <p className="text-sm text-white/50">Soporte técnico y mantenimiento incluido en todos nuestros desarrollos.</p>
              </div>
              <div className="space-y-3">
                <Zap className="text-yellow-400" size={32} />
                <h4 className="font-bold text-white">Velocidad IA</h4>
                <p className="text-sm text-white/50">Optimizamos cada proceso con las mejores IAs del mercado.</p>
              </div>
              <div className="space-y-3">
                <Rocket className="text-yellow-400" size={32} />
                <h4 className="font-bold text-white">Escalabilidad</h4>
                <p className="text-sm text-white/50">Diseñado para crecer junto a tu negocio sin límites técnicos.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Services */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Otros servicios en este plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plan.services.filter(s => s.slug !== serviceSlug).slice(0, 2).map((s) => (
              <Link
                key={s.id}
                to={`/planes/${plan.slug}/${s.slug}`}
                className="bg-[#000000] border border-white/5 p-6 rounded-2xl hover:border-yellow-400/30 transition-all group"
              >
                <h3 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{s.title}</h3>
                <p className="text-sm text-white/50 line-clamp-2">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
