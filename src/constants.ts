import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  features?: string[];
  slug: string;
}

export interface Plan {
  id: string;
  title: string;
  slug: string;
  description: string;
  services: Service[];
}

export const PLANS: Plan[] = [
  {
    id: 'web-dev',
    title: 'Desarrollo Web',
    slug: 'desarrollo-web',
    description: 'Páginas estáticas construidas en código puro, garantizando máxima velocidad y SEO.',
    services: [
      { id: 'web-inicio', title: 'Web Inicio (Landing Única)', price: 'S/ 750.00', slug: 'web-inicio', description: 'Página estática construida en código puro, cero costo de hosting, 1 año de mantenimiento incluido.' },
      { id: 'web-landing-1', title: 'Web Inicio + 1 Landing Page', price: 'S/ 950.00', slug: 'web-inicio-1-landing', description: 'Estructura orientada a ventas: una página principal más una landing de conversión.' },
      { id: 'web-landing-2', title: 'Web Inicio + 2 Landing Pages', price: 'S/ 1,150.00', slug: 'web-inicio-2-landings', description: 'Ecosistema digital completo: página principal + dos landing pages para distintos objetivos.' },
      { id: 'migracion-wp', title: 'Migración WP a Código Puro', price: 'S/ 450.00', slug: 'migracion-wp', description: 'Optimización de velocidad extrema: convertimos sitios de WordPress a código limpio y ligero.' },
      { id: 'mantenimiento-1', title: 'Mantenimiento Anual (1 Repositorio)', price: 'S/ 150.00', slug: 'mantenimiento-anual-1', description: 'Actualizaciones de seguridad, respaldos y monitoreo para un proyecto.' },
      { id: 'mantenimiento-3', title: 'Mantenimiento Anual (3 Repositorios)', price: 'S/ 300.00', slug: 'mantenimiento-anual-3', description: 'Cobertura ampliada para hasta 3 repositorios con protección integral.' }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    slug: 'marketing-digital',
    description: 'Estrategias enfocadas en conversión y optimización de inversión publicitaria.',
    services: [
      { id: 'google-ads', title: 'Gestión Google Ads', price: 'S/ 450.00', slug: 'gestion-google-ads', description: 'Enfoque total en conversión y reducción de CPC. Ideal para captar clientes con alta intención de compra.' },
      { id: 'meta-ads', title: 'Gestión Meta Ads', price: 'S/ 450.00', slug: 'gestion-meta-ads', description: 'Gestión y optimización técnica utilizando el contenido visual entregado por la marca.' },
      { id: 'estrategia-meta', title: 'Estrategia Integral Meta Ads', price: 'S/ 1,150.00', slug: 'estrategia-integral-meta', description: 'Incluye rotación de creativos y producción de contenido con IA para potenciar el rendimiento.' }
    ]
  },
  {
    id: 'automation',
    title: 'Automatización y Ventas',
    slug: 'automatizacion-ventas',
    description: 'Bots inteligentes y sistemas de respuesta automática para WhatsApp Business.',
    services: [
      { id: 'bot-ventas', title: 'Bot Asistente de Ventas', price: 'S/ 300.00', slug: 'bot-asistente-ventas', description: 'Vendedor virtual inteligente para WhatsApp. IA conversacional que responde preguntas y califica clientes.' },
      { id: 'bot-ventas-pro', title: 'Bot Asistente de Ventas PRO', price: 'S/ 450.00', slug: 'bot-asistente-ventas-pro', description: 'Todo lo del Plan PRO, más capacidad de entender audios y responder con voz de alta calidad.' },
      { id: 'curso-bot', title: 'Curso: Crea tu Propio Bot', price: 'S/ 500.00', slug: 'curso-crea-tu-bot', description: 'Aprende a construir desde cero el mismo bot profesional que ofrecemos.' },
      { id: 'autorespuestas', title: 'Plan Autorespuestas WhatsApp', price: 'S/ 200.00', slug: 'plan-autorespuestas', description: 'Sistema automatizado de respuestas inmediatas para consultas frecuentes sin intervención humana.' }
    ]
  },
  {
    id: 'content',
    title: 'Creación de Contenido',
    slug: 'creacion-contenido',
    description: 'Producción masiva de video y audio con calidad premium usando IA.',
    services: [
      { id: 'youtube', title: 'Plan Youtube', price: 'S/ 550.00', slug: 'plan-youtube', description: '4 a 6 videos horizontales. Incluye guion, voz, edición y visuales generados por IA.' },
      { id: 'youtube-x2', title: 'Plan Youtube X2', price: 'S/ 800.00', slug: 'plan-youtube-x2', description: '8 a 12 videos horizontales. Todo incluido: guion, voz, edición y visuales con IA.' },
      { id: 'tiktok', title: 'Plan TikTok Orgánico', price: 'S/ 1,150.00', slug: 'plan-tiktok', description: '48 videos verticales. Estrategia de crecimiento orgánico masiva con guion y voz IA.' },
      { id: 'reciclaje', title: 'Plan TikTok + Youtube (Reciclaje)', price: 'S/ 400.00', slug: 'plan-reciclaje', description: 'Convertimos contenido largo en clips para TikTok o Reels.' },
      { id: 'podcast', title: 'Plan Spotify Podcast', price: 'S/ 200.00', slug: 'plan-podcast', description: '8 a 12 audios. Clonación de voz de alta fidelidad con tecnología Qwen TTS.' }
    ]
  },
  {
    id: 'course',
    title: 'Creación de Curso',
    slug: 'creacion-curso',
    description: 'Transformamos tu conocimiento en un curso online profesional.',
    services: [
      { id: 'curso-wizard', title: 'Plan Curso Wizard', price: 'S/ 1,100.00', slug: 'plan-curso-wizard', description: 'Incluye Landing Page de venta y producción completa de 8 a 12 videos del curso.' }
    ]
  }
];

export const CONTACT_INFO = {
  phone: '+51 936 574 554',
  phoneRaw: '51936574554',
  email: 'system.wizard56@gmail.com',
  address: 'Lima, Perú'
};
