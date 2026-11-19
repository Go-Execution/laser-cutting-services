import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Crosshair, Grid3X3, Flame } from 'lucide-react';
import type { DivisionKey } from '../data/catalog';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  activeSection: string;
  onScrollTo: (target: string) => void;
  onOpenQuote: (division?: DivisionKey, itemName?: string) => void;
}

const MAIN_LINKS = [
  { id: 'laser-cutting', label: 'Laser Cutting', num: '01', icon: Crosshair },
  { id: 'weld-tables', label: 'Weld Tables', num: '02', icon: Grid3X3 },
  { id: 'metal-art', label: 'Metal Art', num: '03', icon: Sparkles },
  { id: 'quote', label: 'Custom Quote', num: '04', icon: Flame },
];

export function Navbar({ activeSection, onScrollTo, onOpenQuote }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    onScrollTo(`#${id}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Scroll-linked Laser Beam Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary-600 via-primary-500 to-accent-400"
      />

      {/* Top Industrial Utility Ticker */}
      <div className="bg-base-950 text-base-300 border-b border-base-800/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-[11px] font-medium tracking-wider uppercase sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-base-200">IronGrid Metalworks</span>
            <span className="hidden text-base-500 sm:inline">•</span>
            <span className="hidden text-base-400 sm:inline">
              CNC Laser Cutting • Heavy-Duty Weld Tables • Custom Metal Art
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px] text-base-400">
            <span className="hidden md:inline text-accent-400">±0.005&quot; CNC TOLERANCE</span>
            <button
              type="button"
              onClick={() => onOpenQuote()}
              className="text-white hover:text-primary-400 transition-colors cursor-pointer"
            >
              FAST TURNAROUND QUOTES →
            </button>
          </div>
        </div>
      </div>

      {/* Primary Header (Texas Metal Works crisp white architectural bar) */}
      <div
        className={`w-full bg-white/95 backdrop-blur-md transition-shadow duration-300 border-b border-base-200 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
          {/* Custom Brand Logo */}
          <button
            type="button"
            onClick={() => onScrollTo('#top')}
            className="group flex items-center gap-3 focus:outline-none cursor-pointer"
            aria-label="IronGrid Metalworks Home"
          >
            <BrandLogo variant="light" size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden items-center gap-1 lg:flex">
            {MAIN_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'text-base-950'
                      : 'text-base-600 hover:bg-base-100 hover:text-base-950'
                  }`}
                >
                  <span className="mr-1.5 font-mono text-[11px] text-primary-600">
                    {item.num}
                  </span>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-x-3 -bottom-[17px] h-[2.5px] rounded-full bg-primary-600"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTA + Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenQuote()}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary-600/20 transition-all hover:bg-primary-700 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Request a Quote
              <ArrowUpRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-base-200 text-base-800 hover:bg-base-100 lg:hidden cursor-pointer"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Bar (TMW Signature Category Quick-Jump Bar) */}
      <div className="hidden border-b border-base-200 bg-base-50/95 backdrop-blur-md md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5">
            <span className="mr-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-base-400">
              Divisions:
            </span>
            <button
              type="button"
              onClick={() => handleNavClick('laser-cutting')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'laser-cutting'
                  ? 'bg-base-950 text-white shadow-xs'
                  : 'text-base-600 hover:bg-base-200/70 hover:text-base-950'
              }`}
            >
              <Crosshair className="h-3.5 w-3.5 text-primary-500" />
              Laser Cutting Services
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('weld-tables')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'weld-tables'
                  ? 'bg-base-950 text-white shadow-xs'
                  : 'text-base-600 hover:bg-base-200/70 hover:text-base-950'
              }`}
            >
              <Grid3X3 className="h-3.5 w-3.5 text-primary-500" />
              Weld Tables (4×6 &amp; 4×8)
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('metal-art')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'metal-art'
                  ? 'bg-base-950 text-white shadow-xs'
                  : 'text-base-600 hover:bg-base-200/70 hover:text-base-950'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-primary-500" />
              Custom Metal Art
            </button>
          </div>

          <div className="flex items-center gap-5 border-l border-base-200 pl-5 text-xs text-base-500">
            <span className="inline-flex items-center gap-1.5 font-medium text-base-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Accepting Custom Fabrication Orders
            </span>
            <span className="font-mono text-[11px] font-semibold text-base-600">
              DXF • DWG • CUSTOM BUILD
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-base-200 bg-white shadow-xl lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {MAIN_LINKS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-base-950 text-white'
                        : 'text-base-800 hover:bg-base-100'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-primary-500" />
                      {item.label}
                    </span>
                    <span className="font-mono text-xs opacity-60">{item.num}</span>
                  </button>
                );
              })}

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenQuote();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-4 py-3 text-sm font-semibold text-white hover:bg-primary-700 cursor-pointer"
                >
                  Request a Custom Quote
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
