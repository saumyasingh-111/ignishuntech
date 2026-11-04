import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, Mail, Phone, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'Working Process', href: '#process' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'Web Design & Development', href: '#services' },
    { label: 'Social Media Management', href: '#services' },
    { label: 'Digital Marketing & Ads', href: '#services' },
    { label: 'Influencer Marketing', href: '#services' },
    { label: 'Branding & Creative', href: '#services' },
    { label: 'SEO & Content Strategy', href: '#services' },
  ];

  const currentYear = 2026;

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-200">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#home" className="inline-block focus-ring rounded-lg">
              <Logo size="md" />
            </a>

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Your end-to-end digital growth partner: web engineering, performance advertising, social
              media management, and creator campaigns, unified under one accountable roof.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-sky-600" />
                <span>Remote-first • Serving clients globally</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-600" />
                <a href="mailto:contact@ignishun.com" className="hover:text-sky-700 transition-colors">
                  contact@ignishun.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <a href="tel:+916386747596" className="hover:text-sky-700 transition-colors">
                  +91 63867 47596
                </a>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B192C]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-sky-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B192C]">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-sky-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Ignishun Tech &amp; Services. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@ignishun.com"
              className="hover:text-slate-800 transition-colors"
            >
              Privacy &amp; Terms
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              aria-label="Back to top"
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
