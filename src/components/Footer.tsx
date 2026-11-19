import { ArrowUp } from 'lucide-react';
import type { DivisionKey } from '../data/catalog';
import { BrandLogo } from './BrandLogo';
import { WatermarkLayer } from './WatermarkLayer';

interface FooterProps {
  onScrollTo: (target: string) => void;
  onOpenQuote: (division?: DivisionKey, itemName?: string) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export function Footer({ onScrollTo, onOpenQuote }: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t border-base-200 bg-white text-base-700">
      <WatermarkLayer variant="light" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <button
              type="button"
              onClick={() => onScrollTo('#top')}
              className="group inline-flex text-left focus:outline-none cursor-pointer"
              aria-label="Back to Top"
            >
              <BrandLogo variant="light" size="lg" />
            </button>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-base-600">
              Precision CNC laser cutting services, heavy-duty 4&apos;×6&apos; &amp; 4&apos;×8&apos;
              fixture weld tables, and custom steel metal art engineered for lifelong durability.
            </p>
          </div>

          {/* 3 Divisions */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-base-950">
              Fabrication Divisions
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('#laser-cutting')}
                  className="hover:text-primary-600 transition-colors cursor-pointer"
                >
                  01 • Laser Cutting Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('#weld-tables')}
                  className="hover:text-primary-600 transition-colors cursor-pointer"
                >
                  02 • Weld Tables &amp; Underframes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('#metal-art')}
                  className="hover:text-primary-600 transition-colors cursor-pointer"
                >
                  03 • Custom Metal Art
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-base-950">
              Custom Fabrication
            </h4>
            <p className="mt-4 text-sm text-base-600">
              Need a custom DXF laser quote, a 4&apos;×8&apos; shop fixture table, or personalized
              steel wall art?
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="rounded-lg bg-primary-600 px-4 py-2 text-xs font-semibold text-white hover:bg-primary-700 transition-colors cursor-pointer"
              >
                Request Custom Quote
              </button>
              <button
                type="button"
                onClick={() => onScrollTo('#top')}
                className="inline-flex items-center gap-1 rounded-lg border border-base-200 bg-base-50 px-3.5 py-2 text-xs font-semibold text-base-800 hover:bg-base-100 transition-colors cursor-pointer"
              >
                Back to Top
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-base-200 pt-6 text-xs text-base-500 sm:flex-row">
          <p>© {CURRENT_YEAR} IronGrid Metalworks. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            PRECISION CNC LASER • WELD TABLES • CUSTOM STEEL ART
          </p>
        </div>
      </div>
    </footer>
  );
}
