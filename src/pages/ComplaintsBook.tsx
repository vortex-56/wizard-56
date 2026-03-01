import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import SEO from '../components/SEO';

export default function ComplaintsBook() {
  const [form, setForm] = useState({
    nombre: '',
    dni: '',
    email: '',
    telefono: '',
    tipo: 'Producto',
    detalle: '',
    pedido: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*LIBRO DE RECLAMACIONES - WIZARD 56*%0A%0A` +
      `*Nombre:* ${form.nombre}%0A` +
      `*DNI:* ${form.dni}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Teléfono:* ${form.telefono}%0A` +
      `*Tipo:* ${form.tipo}%0A` +
      `*Detalle:* ${form.detalle}%0A` +
      `*Pedido/Servicio:* ${form.pedido}`;

    window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <SEO 
        title="Libro de Reclamaciones" 
        description="Formulario oficial del Libro de Reclamaciones de Wizard Fifty Six conforme a las normas de INDECOPI."
        path="/libro-de-reclamaciones"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Libro de <span className="text-yellow-400">Reclamaciones</span></h1>
          <p className="text-white/50">Conforme a lo establecido en el Código de Protección y Defensa del Consumidor.</p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900 border border-yellow-400/30 p-12 rounded-3xl text-center"
          >
            <CheckCircle2 className="text-yellow-400 w-20 h-20 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">¡Información Enviada!</h2>
            <p className="text-white/50 mb-8">
              Tu reclamo ha sido procesado y enviado a nuestro equipo vía WhatsApp. Nos pondremos en contacto contigo a la brevedad posible.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold"
            >
              Volver al Inicio
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-zinc-900 border border-white/10 p-8 md:p-12 rounded-3xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Nombre Completo</label>
                <input
                  required
                  type="text"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-400 outline-none transition-colors"
                  value={form.nombre}
                  onChange={e => setForm({...form, nombre: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">DNI / CE</label>
                <input
                  required
                  type="text"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-400 outline-none transition-colors"
                  value={form.dni}
                  onChange={e => setForm({...form, dni: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Email</label>
                <input
                  required
                  type="email"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-400 outline-none transition-colors"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Teléfono</label>
                <input
                  required
                  type="tel"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-400 outline-none transition-colors"
                  value={form.telefono}
                  onChange={e => setForm({...form, telefono: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Tipo de Reclamo</label>
              <select
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-400 outline-none transition-colors"
                value={form.tipo}
                onChange={e => setForm({...form, tipo: e.target.value})}
              >
                <option value="Producto">Producto</option>
                <option value="Servicio">Servicio</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Detalle del Reclamo / Queja</label>
              <textarea
                required
                rows={4}
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-400 outline-none transition-colors"
                value={form.detalle}
                onChange={e => setForm({...form, detalle: e.target.value})}
              ></textarea>
            </div>

            <div className="p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-xl flex items-start space-x-3">
              <AlertCircle className="text-yellow-400 shrink-0" size={20} />
              <p className="text-xs text-yellow-400/80 leading-relaxed">
                Al hacer clic en "Enviar Reclamo", se abrirá una ventana de WhatsApp con la información completada para su registro oficial.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:scale-[1.02] hover:shadow-[0_0_12px_#ff9d00] transition-all"
            >
              <Send size={20} />
              <span>Enviar Reclamo vía WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
