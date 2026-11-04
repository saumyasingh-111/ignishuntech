import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Services } from './components/Services';
import { About } from './components/About';
import { Work } from './components/Work';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TechStack } from './components/TechStack';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { CtaBand } from './components/CtaBand';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Scroll listener for floating Back-To-Top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // IntersectionObserver for tracking current visible section
    const sectionIds = ['home', 'services', 'about', 'work', 'process', 'why-us', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { rootMargin: '-40% 0px -40% 0px' }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-[#0F172A] flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Full-width sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      <main className="flex-1">
        {/* Complete Hero Section Redesign */}
        <Hero />

        {/* Agency Capabilities Strip */}
        <TrustStrip />

        {/* Services — Complete Preserved Scope */}
        <Services />

        {/* Professional About Section */}
        <About />

        {/* Real Projects & Case Studies */}
        <Work />

        {/* 4-Step Disciplined Process */}
        <Process />

        {/* The Ignishun Advantage: Unified vs Fragmented */}
        <WhyChooseUs />

        {/* Technology & Capabilities */}
        <TechStack />

        {/* Verifiable Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* High-Impact Mid-Page CTA */}
        <CtaBand />

        {/* Professional Scoping & Enquiry Contact */}
        <Contact />
      </main>

      {/* Corporate Minimal Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0B192C] text-white shadow-lg hover:bg-sky-700 active:scale-95 transition-all duration-200 cursor-pointer focus-ring"
        >
          <ArrowUp className="w-5 h-5 text-sky-200" />
        </button>
      )}
    </div>
  );
}

export default App;
