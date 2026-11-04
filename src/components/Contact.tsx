import React, { useState } from 'react';
import { Mail, Phone, Globe, Clock, CheckCircle2, AlertCircle, Send } from 'lucide-react';

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
      errors.message = 'Please provide a short summary of your project or requirements.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Please provide a bit more detail (at least 10 characters).';
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
      // Spam honeypot tripped
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
          subject: `New enquiry from ${formData.name} via Ignishun Tech website`,
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
    <section id="contact" className="py-20 md:py-28 bg-[#FAFBFD] relative">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        {/* Contact Banner Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200/60 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Initiate Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B192C] leading-tight mb-4">
            Let's build something <span className="text-[#0284C7]">exceptional.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tell us about your project, current bottlenecks, and target milestones. Our team will review
            your inquiry and respond within one business day with an initial scope outline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info & SLA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
              <h3 className="text-base font-bold text-[#0B192C] mb-6">
                Direct Channels
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Business Enquiries
                    </span>
                    <a
                      href="mailto:contact@ignishun.com"
                      className="text-base font-bold text-[#0B192C] hover:text-sky-700 transition-colors"
                    >
                      contact@ignishun.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Direct Telephone
                    </span>
                    <a
                      href="tel:+916386747596"
                      className="text-base font-bold text-[#0B192C] hover:text-sky-700 transition-colors"
                    >
                      +91 63867 47596
                    </a>
                  </div>
                </div>

                {/* Operations */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Global Operations
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      Remote-first, serving clients worldwide
                    </span>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Response Timeline
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      Guaranteed reply within 24 business hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reassurance Card */}
            <div className="bg-[#F0F6FA] rounded-2xl border border-sky-200/70 p-6 text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-[#0B192C] block mb-1">
                Zero Pressure, Practical Scoping:
              </span>
              We review every request to understand your technical and commercial fit. If we aren't the
              right fit for your requirements, we will honestly tell you upfront.
            </div>

          </div>

          {/* Right Column: High-End Functional Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
            
            {status === 'success' ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B192C] mb-2">
                  Enquiry Transmitted Successfully
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you for reaching out to Ignishun Tech. A team lead will examine your project
                  scope and respond within one business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Honeypot for bot screening */}
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
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Your Name / Company <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 text-sm rounded-lg bg-slate-50 border transition-all ${
                        formErrors.name
                          ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20'
                          : 'border-slate-200 focus:border-sky-500 focus:bg-white'
                      } outline-none`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-600 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 text-sm rounded-lg bg-slate-50 border transition-all ${
                        formErrors.email
                          ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20'
                          : 'border-slate-200 focus:border-sky-500 focus:bg-white'
                      } outline-none`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-600 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Primary Area of Interest
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white outline-none cursor-pointer"
                  >
                    {services.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Estimated Budget */}
                <div>
                  <label
                    htmlFor="contact-budget"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Target Investment Range (Optional)
                  </label>
                  <select
                    id="contact-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white outline-none cursor-pointer"
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
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Project Details & Goals <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us about your project goals, current challenges, timeline, or links to your existing website..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 text-sm rounded-lg bg-slate-50 border transition-all ${
                      formErrors.message
                        ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20'
                        : 'border-slate-200 focus:border-sky-500 focus:bg-white'
                    } outline-none resize-y`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-rose-600 mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold text-white bg-[#0B192C] hover:bg-sky-700 active:bg-sky-800 disabled:opacity-60 transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer group"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Brief</span>
                      <Send className="w-4 h-4 text-sky-300 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Your information is held in strict confidence. Never shared or sold.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
