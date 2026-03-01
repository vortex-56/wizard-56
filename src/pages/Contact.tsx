import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <SEO 
        title="Contacto" 
        description="Ponte en contacto con Wizard Fifty Six. Estamos en Lima, Perú, listos para ayudarte con tus proyectos de IA y desarrollo web."
        path="/contacto"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              Hablemos de tu <br /> <span className="text-yellow-400">Próximo Paso</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-lg">
              ¿Tienes un proyecto en mente? Nuestro equipo está listo para convertir tus ideas en realidades digitales impulsadas por IA.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                  <Phone className="text-yellow-400" size={24} />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase font-bold tracking-widest mb-1">Llámanos / WhatsApp</p>
                  <p className="text-white text-lg font-bold">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                  <Mail className="text-yellow-400" size={24} />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase font-bold tracking-widest mb-1">Email</p>
                  <p className="text-white text-lg font-bold">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                  <MapPin className="text-yellow-400" size={24} />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase font-bold tracking-widest mb-1">Ubicación</p>
                  <p className="text-white text-lg font-bold">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-zinc-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem]"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Nombre</label>
                <input
                  type="text"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:border-yellow-400 outline-none transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:border-yellow-400 outline-none transition-colors"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:border-yellow-400 outline-none transition-colors"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              <button
                type="button"
                onClick={() => window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}`, '_blank')}
                className="w-full bg-yellow-400 text-black py-5 rounded-xl font-black text-lg flex items-center justify-center space-x-3 hover:scale-[1.02] hover:shadow-[0_0_12px_#ff9d00] transition-all"
              >
                <MessageSquare size={24} />
                <span>Enviar vía WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
