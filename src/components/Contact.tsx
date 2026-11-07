import React, { useState } from 'react';
import { Mail, Phone, Globe, Clock, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design & Development',
    budget: '$5,000 - $15,000',
    message: '',
    botcheck: false,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Web Design & Development',
    'Social Media Management',
    'Digital Marketing & Advertising',
    'Influencer Marketing',
    'Branding & Creative Identity',
    'SEO & Content Strategy',
    'End-to-End Full Service Growth',
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $35,000',
    '$35,000+',
    'Flexible / Let us discuss',
  ];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Please provide your name or business name.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please provide a brief note about your project.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Please provide a bit more context (at least 10 characters).';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    if (formData.botcheck) {
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '619081e1-73d0-49de-9057-5f3c0527499a',
          subject: `New enquiry from ${formData.name} via Ignishun Tech`,
          from_name: 'Ignishun Tech Website',
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget_range: formData.budget,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          service: 'Web Design & Development',
          budget: '$5,000 - $15,000',
          message: '',
          botcheck: false,
        });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage(
        'Submission could not be completed automatically. Please email our team directly at contact@ignishun.com.'
      );
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-[#F3F5F6] border-t border-[#E8EAEC]">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Direct Inquiries and Philosophy */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#687580] block mb-3">
                Let's Talk
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal text-[#202B35] tracking-tight leading-[1.12] mb-6">
                Tell us about your{' '}
                <span className="font-editorial italic text-[#526F87]">
                  project.
                </span>
              </h2>
              <p className="text-base text-[#687580] leading-relaxed">
                Whether redesigning a flagship digital platform, structuring customer acquisition, or
                scaling creator partnerships, we would love to learn more about your goals.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4 border-t border-[#E8EAEC]">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#526F87]" />
                <a
                  href="mailto:contact@ignishun.com"
                  className="text-sm font-medium text-[#202B35] hover:text-[#526F87] transition-colors"
                >
                  contact@ignishun.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#526F87]" />
                <a
                  href="tel:+916386747596"
                  className="text-sm font-medium text-[#202B35] hover:text-[#526F87] transition-colors"
                >
                  +91 63867 47596
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#687580]">
                <Globe className="w-4 h-4 text-[#526F87]" />
                <span>Remote-first • Serving clients worldwide</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#687580]">
                <Clock className="w-4 h-4 text-[#526F87]" />
                <span>Typical response within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Airy Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E8EAEC] p-8 sm:p-12 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            
            {status === 'success' ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8F1F7] text-[#526F87] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-normal text-[#202B35] mb-2">
                  Message Transmitted
                </h3>
                <p className="text-sm text-[#687580] max-w-sm mx-auto mb-6">
                  Thank you for reaching out. A team lead will review your scope and get in touch within
                  one business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2 rounded-full text-xs font-semibold bg-[#202B35] text-white hover:bg-[#151D24] transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  checked={formData.botcheck}
                  onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#687580] mb-2"
                    >
                      Name or Company
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 text-sm rounded-xl bg-[#FAFAF8] border transition-colors ${
                        formErrors.name
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-[#E8EAEC] focus:border-[#526F87] focus:bg-white'
                      } outline-none`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-600 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#687580] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 text-sm rounded-xl bg-[#FAFAF8] border transition-colors ${
                        formErrors.email
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-[#E8EAEC] focus:border-[#526F87] focus:bg-white'
                      } outline-none`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-600 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#687580] mb-2"
                  >
                    Primary Focus
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-[#FAFAF8] border border-[#E8EAEC] focus:border-[#526F87] focus:bg-white outline-none cursor-pointer"
                  >
                    {services.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Investment Range */}
                <div>
                  <label
                    htmlFor="contact-budget"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#687580] mb-2"
                  >
                    Target Budget (Optional)
                  </label>
                  <select
                    id="contact-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-[#FAFAF8] border border-[#E8EAEC] focus:border-[#526F87] focus:bg-white outline-none cursor-pointer"
                  >
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#687580] mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us a bit about your current goals, timeline, or links to your existing presence..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-[#FAFAF8] border transition-colors ${
                      formErrors.message
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-[#E8EAEC] focus:border-[#526F87] focus:bg-white'
                    } outline-none resize-y`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-rose-600 mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-full text-sm font-semibold bg-[#202B35] text-white hover:bg-[#151D24] active:bg-black transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <ArrowUpRight className="w-4 h-4 text-white/70" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-[#687580]">
                  Your communication is treated with strict professional confidentiality.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
