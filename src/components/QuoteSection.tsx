import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Crosshair, Grid3X3, Sparkles, Send } from 'lucide-react';
import type { DivisionKey } from '../data/catalog';

interface QuoteSectionProps {
  onScrollTo: (target: string) => void;
}

export function QuoteSection({ onScrollTo }: QuoteSectionProps) {
  const [division, setDivision] = useState<DivisionKey>('weld-tables');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-gradient-to-br from-base-950 via-base-950 to-base-800 py-20 text-white lg:py-28 scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary-600/15 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-base-700 bg-base-900/75 px-3.5 py-1">
              <span className="h-2 w-2 rounded-full bg-primary-500" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-base-200">
                Start Your Project
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
              Ready to Cut Steel? Let&apos;s Execute Your Build.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-base-300">
              Send us your DXF dimensions, choose a 4&apos;×6&apos; or 4&apos;×8&apos; weld table
              configuration, or describe your custom metal art piece. We&apos;ll respond quickly
              with clear pricing and lead times.
            </p>

            <div className="mt-8 space-y-3.5 border-t border-base-800 pt-7">
              {[
                'Direct shop-to-customer pricing with zero middlemen',
                'DXF, DWG, STEP, or napkin-sketch concept support',
                'Custom sizes, finishes, and nationwide pallet prep',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-base-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { label: '01 Laser Cutting', href: '#laser-cutting' },
                { label: '02 Weld Tables', href: '#weld-tables' },
                { label: '03 Metal Art', href: '#metal-art' },
              ].map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => onScrollTo(link.href)}
                  className="inline-flex items-center gap-1 rounded-lg border border-base-700 bg-base-900/70 px-3 py-1.5 text-xs font-semibold text-base-300 transition-colors hover:border-base-500 hover:text-white cursor-pointer"
                >
                  {link.label}
                  <ArrowRight className="h-3 w-3" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-base-700/80 bg-base-900/85 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white">
                    Quote Request Received
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm text-base-300">
                    Thanks, <span className="font-semibold text-white">{name || 'there'}</span>! Your{' '}
                    <span className="font-semibold text-accent-400">
                      {division === 'laser-cutting'
                        ? 'Laser Cutting Services'
                        : division === 'weld-tables'
                          ? 'Weld Table'
                          : 'Custom Metal Art'}
                    </span>{' '}
                    request has been logged. Our fabrication team will reach out shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setDetails('');
                    }}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg border border-base-700 bg-base-950 px-5 py-2.5 text-xs font-semibold text-white hover:border-primary-500 transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-base-400">
                      1. Select Division
                    </label>
                    <div className="mt-2.5 grid grid-cols-3 gap-2.5">
                      {[
                        { id: 'laser-cutting' as DivisionKey, label: 'Laser Cutting', icon: Crosshair },
                        { id: 'weld-tables' as DivisionKey, label: 'Weld Tables', icon: Grid3X3 },
                        { id: 'metal-art' as DivisionKey, label: 'Metal Art', icon: Sparkles },
                      ].map((opt) => {
                        const Icon = opt.icon;
                        const active = division === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setDivision(opt.id)}
                            className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border px-3 py-3 text-xs font-semibold transition-all cursor-pointer ${
                              active
                                ? 'border-primary-500 bg-primary-600/15 text-white shadow-sm'
                                : 'border-base-700 bg-base-950/60 text-base-400 hover:border-base-500 hover:text-white'
                            }`}
                          >
                            <Icon className={`h-4 w-4 ${active ? 'text-primary-400' : 'text-base-500'}`} />
                            <span>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="quote-name" className="block text-xs font-semibold text-base-300">
                        Your Name *
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Miller"
                        className="mt-1.5 w-full rounded-lg border border-base-700 bg-base-950 px-3.5 py-2.5 text-sm text-white placeholder:text-base-500 focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-email" className="block text-xs font-semibold text-base-300">
                        Email Address *
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@shopworks.com"
                        className="mt-1.5 w-full rounded-lg border border-base-700 bg-base-950 px-3.5 py-2.5 text-sm text-white placeholder:text-base-500 focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quote-phone" className="block text-xs font-semibold text-base-300">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 234-5678"
                      className="mt-1.5 w-full rounded-lg border border-base-700 bg-base-950 px-3.5 py-2.5 text-sm text-white placeholder:text-base-500 focus:border-primary-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-details" className="block text-xs font-semibold text-base-300">
                      Project Specs, Size &amp; Material Details *
                    </label>
                    <textarea
                      id="quote-details"
                      rows={4}
                      required
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="e.g., Interested in a 4'×8' Weld Table with locking casters, custom fire ring with company name, or 24-inch US Army steel emblem..."
                      className="mt-1.5 w-full rounded-lg border border-base-700 bg-base-950 px-3.5 py-2.5 text-sm text-white placeholder:text-base-500 focus:border-primary-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-500 cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    Send Custom Quote Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
