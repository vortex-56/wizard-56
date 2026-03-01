import { CONTACT_INFO } from '../constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366]/80 backdrop-blur-sm text-white p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      aria-label="Contactar por WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp"
        className="w-9 h-9 opacity-90"
        referrerPolicy="no-referrer"
      />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
        ¿En qué podemos ayudarte?
      </span>
    </a>
  );
}
