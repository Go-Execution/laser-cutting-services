import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import type { DivisionKey } from '../data/catalog';

interface QuoteModalProps {
  isOpen: boolean;
  initialDivision?: DivisionKey;
  initialItem?: string;
  onClose: () => void;
}

interface QuoteModalBodyProps {
  initialDivision?: DivisionKey;
  initialItem?: string;
  onClose: () => void;
}

function QuoteModalBody({ initialDivision, initialItem, onClose }: QuoteModalBodyProps) {
  const [division, setDivision] = useState<DivisionKey>(initialDivision ?? 'weld-tables');
  const [itemRef, setItemRef] = useState(initialItem ?? '');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 12 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-base-200 bg-white shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-base-200 bg-base-950 px-6 py-4 text-white">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary-400">
            IronGrid Fabrication Desk
          </p>
          <h3 className="font-display text-lg font-bold">Request a Custom Quote</h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Quote Modal"
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-base-800 text-base-300 hover:bg-primary-600 hover:text-white transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="p-6">
        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h4 className="mt-3 font-display text-xl font-bold text-base-950">
              Request Sent!
            </h4>
            <p className="mt-2 text-sm text-base-600">
              We&apos;ve received your inquiry for{' '}
              <span className="font-semibold text-base-950">
                {itemRef || division.replace('-', ' ')}
              </span>
              . We&apos;ll follow up at <span className="font-semibold">{email}</span> shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 rounded-lg bg-base-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 transition-colors cursor-pointer"
            >
              Back to Showcase
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-base-700">Division</label>
              <select
                value={division}
                onChange={(e) => setDivision(e.target.value as DivisionKey)}
                className="mt-1 w-full rounded-lg border border-base-300 bg-base-50 px-3 py-2.5 text-sm font-medium text-base-900 focus:border-primary-600 focus:outline-none"
              >
                <option value="laser-cutting">01 • Laser Cutting Services</option>
                <option value="weld-tables">02 • Weld Tables (4&apos;×6&apos; / 4&apos;×8&apos;)</option>
                <option value="metal-art">03 • Custom Metal Art</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-base-700">
                Project / Product Reference
              </label>
              <input
                type="text"
                value={itemRef}
                onChange={(e) => setItemRef(e.target.value)}
                placeholder="e.g. 4' × 8' Pro Weld Table or Custom Fire Ring"
                className="mt-1 w-full rounded-lg border border-base-300 bg-white px-3 py-2.5 text-sm text-base-900 focus:border-primary-600 focus:outline-none"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-base-700">Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1 w-full rounded-lg border border-base-300 bg-white px-3 py-2.5 text-sm text-base-900 focus:border-primary-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-base-700">Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-base-300 bg-white px-3 py-2.5 text-sm text-base-900 focus:border-primary-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-base-700">
                Dimensions, Quantity &amp; Finish Notes *
              </label>
              <textarea
                rows={3}
                required
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share steel thickness, dimensions, custom text, or caster/finish preferences..."
                className="mt-1 w-full rounded-lg border border-base-300 bg-white px-3 py-2.5 text-sm text-base-900 focus:border-primary-600 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors cursor-pointer"
            >
              <Send className="h-4 w-4" />
              Submit Quote Request
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}

export function QuoteModal({ isOpen, initialDivision, initialItem, onClose }: QuoteModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-base-950/80 p-4 backdrop-blur-sm"
          data-lenis-prevent
        >
          <QuoteModalBody
            key={`${initialDivision ?? 'default'}-${initialItem ?? ''}`}
            initialDivision={initialDivision}
            initialItem={initialItem}
            onClose={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
