import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';

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

  // Prevent background scroll when mobile menu is open
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
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 88;
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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5'
          : 'bg-[#FAFBFD]/90 backdrop-blur-sm border-b border-slate-200/40 py-5'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Prominent Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="focus-ring rounded-lg"
          aria-label="Ignishun Tech Home"
        >
          <Logo size="md" className="py-0.5" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
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
                className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-lg focus-ring ${
                  isActive
                    ? 'text-[#0284C7] font-semibold bg-sky-50/70'
                    : 'text-slate-600 hover:text-[#0B192C] hover:bg-slate-100/70'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#0284C7] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+916386747596"
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-slate-100/60"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span>+91 63867 47596</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-sky-700 active:bg-sky-800 transition-all duration-200 rounded-lg shadow-xs hover:shadow-sm focus-ring group"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 text-sky-300 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-[#0B192C] text-white hover:bg-sky-700 transition-colors"
          >
            Talk to Us
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus-ring"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden">
          <div className="bg-white border-b border-slate-200 px-6 py-6 shadow-xl max-h-[calc(100vh-73px)] overflow-y-auto">
            <div className="flex flex-col space-y-1 pb-6 border-b border-slate-100">
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
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-[#0284C7] bg-sky-50 font-semibold'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#0284C7]" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex flex-col space-y-2 text-sm text-slate-600 px-2">
                <a
                  href="mailto:contact@ignishun.com"
                  className="flex items-center gap-2.5 py-1 text-slate-700 hover:text-sky-700"
                >
                  <Mail className="w-4 h-4 text-sky-600" />
                  <span>contact@ignishun.com</span>
                </a>
                <a
                  href="tel:+916386747596"
                  className="flex items-center gap-2.5 py-1 text-slate-700 hover:text-sky-700"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>+91 63867 47596</span>
                </a>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[#0B192C] hover:bg-sky-700 rounded-lg shadow-sm transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 text-sky-300" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
