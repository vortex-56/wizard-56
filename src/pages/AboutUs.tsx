import { motion } from 'framer-motion';
import { Zap, Target, Eye, Users } from 'lucide-react';
import SEO from '../components/SEO';

export default function AboutUs() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <SEO 
        title="Nosotros" 
        description="Conoce a Wizard Fifty Six, la agencia líder en Lima que integra Inteligencia Artificial en procesos de negocio para maximizar resultados."
        path="/nosotros"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4 block">Nuestra Historia</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              Transformando el <br /> <span className="text-yellow-400">Futuro Digital</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed mb-8">
              En Wizard Fifty Six, no solo construimos sitios web o gestionamos anuncios; creamos ecosistemas inteligentes. Nacimos en Lima con la misión de democratizar el acceso a la Inteligencia Artificial para empresas de todos los tamaños.
            </p>
            <p className="text-white/50 text-lg leading-relaxed">
              Nuestro enfoque se basa en la eficiencia extrema. Eliminamos los costos innecesarios de las agencias tradicionales y nos centramos en lo que realmente importa: tu conversión y crecimiento orgánico.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Equipo Wizard 56" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-yellow-400 p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-black font-black text-4xl mb-1">100%</p>
              <p className="text-black/70 font-bold uppercase tracking-widest text-xs">Enfoque en IA</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Target className="text-yellow-400" size={40} />,
              title: "Misión",
              desc: "Potenciar negocios peruanos mediante la integración estratégica de IA, reduciendo costos operativos y maximizando el impacto digital."
            },
            {
              icon: <Eye className="text-yellow-400" size={40} />,
              title: "Visión",
              desc: "Ser un sistema referente en automatización inteligente en Latinoamérica, liderando la transición hacia un mercado digital más eficiente."
            },
            {
              icon: <Users className="text-yellow-400" size={40} />,
              title: "Valores",
              desc: "Transparencia total, innovación constante y compromiso absoluto con los resultados medibles de nuestros clientes."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 border border-white/10 p-10 rounded-[2rem] hover:border-yellow-400/30 transition-all"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
