import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Approach', href: '#approach', id: 'approach' },
    { label: 'Why Ignishun', href: '#why-us', id: 'why-us' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8EAEC] py-3.5 shadow-[0_1px_8px_rgba(0,0,0,0.02)]'
          : 'bg-[#FAFAF8]/80 backdrop-blur-xs border-b border-transparent py-5'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Prominent Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="focus-ring rounded-lg shrink-0"
          aria-label="Ignishun Tech Home"
        >
          <Logo size="md" />
        </a>

        {/* Minimal Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9 text-[14px]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`transition-colors duration-200 focus-ring py-1 ${
                  isActive
                    ? 'text-[#202B35] font-semibold'
                    : 'text-[#687580] hover:text-[#202B35]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold bg-[#202B35] text-white hover:bg-[#151D24] transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.08)] group focus-ring"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center md:hidden gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#202B35] text-white"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#202B35] hover:text-black rounded-lg transition-colors focus-ring"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[76px] bg-[#202B35]/20 backdrop-blur-xs z-40 md:hidden">
          <div className="bg-[#FAFAF8] border-b border-[#E8EAEC] px-6 py-8 shadow-xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-lg font-medium text-[#202B35] hover:text-[#526F87] transition-colors py-1 border-b border-[#E8EAEC]/60"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-8 mt-4 flex flex-col space-y-3">
              <a
                href="mailto:contact@ignishun.com"
                className="text-xs text-[#687580]"
              >
                contact@ignishun.com
              </a>
              <a
                href="tel:+916386747596"
                className="text-xs text-[#687580]"
              >
                +91 63867 47596
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="w-full mt-2 py-3 rounded-full text-center text-sm font-semibold bg-[#202B35] text-white"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
