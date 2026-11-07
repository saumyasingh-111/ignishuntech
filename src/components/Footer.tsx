import React from 'react';
import { Logo } from './Logo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Approach', href: '#approach' },
    { label: 'Why Ignishun', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'Web Design & Engineering', href: '#services' },
    { label: 'Social Media Management', href: '#services' },
    { label: 'Digital Advertising & Paid Search', href: '#services' },
    { label: 'Creator & Influencer Marketing', href: '#services' },
    { label: 'Branding & Creative Identity', href: '#services' },
    { label: 'SEO & Search Strategy', href: '#services' },
  ];

  const currentYear = 2026;

  return (
    <footer className="bg-[#FAFAF8] border-t border-[#E8EAEC] py-16 sm:py-24 text-[#687580]">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E8EAEC]">
          
          {/* Logo & Narrative */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block focus-ring rounded-lg">
              <Logo size="md" />
            </a>
            <p className="text-sm text-[#687580] leading-relaxed max-w-sm pt-2">
              A unified digital growth and technology studio. We engineer custom web systems,
              performance acquisition, and brand presence under one accountable roof.
            </p>
            <div className="pt-2 text-xs text-[#687580] space-y-1">
              <div>contact@ignishun.com</div>
              <div>+91 63867 47596</div>
              <div>Remote-first • Worldwide delivery</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#202B35] block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#202B35] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#202B35] block">
              Capabilities
            </span>
            <ul className="space-y-2 text-xs">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#202B35] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Quiet Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#687580]">
          <div>
            &copy; {currentYear} Ignishun Tech &amp; Services. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#202B35] hover:text-[#526F87] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
