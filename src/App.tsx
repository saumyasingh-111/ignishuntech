import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'work', 'approach', 'why-us', 'contact'];
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
          { rootMargin: '-30% 0px -40% 0px' }
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
    <div className="min-h-screen bg-[#FAFAF8] text-[#202B35] flex flex-col font-sans selection:bg-[#E8F1F7] selection:text-[#202B35]">
      {/* Full-width elegant Navigation Bar */}
      <Navbar activeSection={activeSection} />

      <main className="flex-1">
        {/* Editorial Centered Hero with spacious composition */}
        <Hero />

        {/* Narrative About Section: Zero vendor fragmentation */}
        <About />

        {/* Minimal Editorial Services Directory with in-place deliverables */}
        <Services />

        {/* Alternating Case Studies with real results */}
        <Work />

        {/* Numbered 4-Step Approach */}
        <Process />

        {/* The Ignishun Model Comparison */}
        <WhyChooseUs />

        {/* Large Editorial Testimonials */}
        <Testimonials />

        {/* Good Questions / FAQ */}
        <Faq />

        {/* Clean, Airy Contact & Scoping Form */}
        <Contact />
      </main>

      {/* Quiet Corporate Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#202B35] text-white shadow-md hover:bg-[#151D24] active:scale-95 transition-all duration-200 cursor-pointer focus-ring"
        >
          <ArrowUp className="w-4 h-4 text-white/80" />
        </button>
      )}
    </div>
  );
}

export default App;
