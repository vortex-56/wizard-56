import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PLANS, cn } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled ? 'bg-black/90 backdrop-blur-md border-white/10 py-3' : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src="web.webp"
              alt="Logo"
              className="h-[68px] w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-white/70 hover:text-yellow-400 transition-colors">Inicio</Link>
            
            <div className="relative group">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center space-x-1 text-sm font-medium text-white/70 hover:text-yellow-400 transition-colors"
              >
                <span>Servicios</span>
                <ChevronDown size={14} />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                  >
                    {PLANS.map((plan) => (
                      <Link
                        key={plan.id}
                        to={`/planes/${plan.slug}`}
                        className="block px-4 py-3 text-sm text-white/70 hover:bg-yellow-400 hover:text-black transition-colors"
                      >
                        {plan.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/nosotros" className="text-sm font-medium text-white/70 hover:text-yellow-400 transition-colors">Nosotros</Link>
            
            <Link
              to="/contacto"
              className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 hover:shadow-[0_0_12px_#ff9d00] transition-all"
            >
              Contactar
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/" className="block px-3 py-4 text-lg font-medium text-white border-b border-white/5">Inicio</Link>
              <div className="py-4 border-b border-white/5">
                <p className="px-3 text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">Servicios</p>
                {PLANS.map((plan) => (
                  <Link
                    key={plan.id}
                    to={`/planes/${plan.slug}`}
                    className="block px-3 py-2 text-white/70 hover:text-yellow-400"
                  >
                    {plan.title}
                  </Link>
                ))}
              </div>
              <Link to="/nosotros" className="block px-3 py-4 text-lg font-medium text-white border-b border-white/5">Nosotros</Link>
              <div className="pt-4">
                <Link
                  to="/contacto"
                  className="block w-full text-center bg-yellow-400 text-black py-4 rounded-xl font-bold"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
