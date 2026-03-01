import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { PLANS, CONTACT_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logo-footer.webp" 
                alt="Logo" 
                className="h-[68px] w-auto object-contain"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Servicios digitales con IA. Potenciamos tu negocio con tecnología de vanguardia desde Lima, Perú.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61587396593687" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-yellow-400/50 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/system.wizard56/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-yellow-400/50 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@system.wizard56" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-yellow-400/50 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Nuestros Planes</h4>
            <ul className="space-y-4">
              {PLANS.map((plan) => (
                <li key={plan.id}>
                  <Link to={`/planes/${plan.slug}`} className="text-white/50 hover:text-yellow-400 text-sm transition-colors">
                    {plan.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><Link to="/nosotros" className="text-white/50 hover:text-yellow-400 text-sm transition-colors">Nosotros</Link></li>
              <li><Link to="/contacto" className="text-white/50 hover:text-yellow-400 text-sm transition-colors">Contacto</Link></li>
              <li><a href="https://www.behance.net/vortex56" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-yellow-400 text-sm transition-colors">Portafolio</a></li>
              <li><Link to="/libro-de-reclamaciones" className="text-white/50 hover:text-yellow-400 text-sm transition-colors">Libro de Reclamaciones</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/50 text-sm">
                <Phone size={18} className="text-yellow-400 shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start space-x-3 text-white/50 text-sm">
                <Mail size={18} className="text-yellow-400 shrink-0" />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start space-x-3 text-white/50 text-sm">
                <MapPin size={18} className="text-yellow-400 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex justify-center items-center">
          <p className="text-white/30 text-xs">
            Wizard Fiftysix © 2026. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
