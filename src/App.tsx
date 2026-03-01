import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import PlanDetail from './pages/PlanDetail';
import ServiceDetail from './pages/ServiceDetail';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ComplaintsBook from './pages/ComplaintsBook';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-black flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<AboutUs />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/libro-de-reclamaciones" element={<ComplaintsBook />} />
              <Route path="/planes/:planSlug" element={<PlanDetail />} />
              <Route path="/planes/:planSlug/:serviceSlug" element={<ServiceDetail />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </HelmetProvider>
  );
}
