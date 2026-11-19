import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2, Crosshair, Grid3X3, Sparkles, Maximize2 } from 'lucide-react';
import { HERO_SLIDES, ALL_GALLERY_ITEMS, type DivisionKey, type GalleryItem } from '../data/catalog';

interface HeroProps {
  onScrollTo: (target: string) => void;
  onOpenQuote: (division?: DivisionKey, itemName?: string) => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export function Hero({ onScrollTo, onOpenQuote, onOpenLightbox }: HeroProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const showcaseY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const activeSlide = HERO_SLIDES[activeSlideIndex];

  const handlePreviewZoom = () => {
    const match = ALL_GALLERY_ITEMS.find((g) => g.image === activeSlide.image);
    if (match) onOpenLightbox(match);
  };

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-br from-base-950 via-base-950 to-base-800 text-white"
    >
      {/* TMW Signature Industrial Dot-Grid + Subtle Thermal Glow */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-45" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-primary-600/15 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-[-10%] h-[420px] w-[420px] rounded-full bg-accent-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Engineering Authority Copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-base-700 bg-base-900/75 px-3.5 py-1.5 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-primary-500" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-base-200">
                Precision Steel • Engineered Flat • Built to Last
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[54px] lg:leading-[1.06]"
            >
              Precision Laser Cutting,{' '}
              <span className="bg-gradient-to-r from-white via-base-200 to-accent-400 bg-clip-text text-transparent">
                Heavy-Duty Weld Tables
              </span>{' '}
              &amp; Custom Metal Art.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-base leading-relaxed text-base-300 sm:text-lg"
            >
              Engineered in heavy steel with CNC precision. Whether you need tight-tolerance
              laser-cut parts and custom fire rings, dead-flat 4&apos;×6&apos; &amp; 4&apos;×8&apos;
              fixture welding tables, or heirloom patriotic steel wall art — we cut and build it to
              outlast everything in your shop.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <button
                type="button"
                onClick={() => onScrollTo('#weld-tables')}
                className="group inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-500 hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Weld Tables
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="inline-flex items-center gap-2 rounded-lg border border-base-700 bg-base-900/70 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-base-500 hover:bg-base-800 cursor-pointer"
              >
                Request Custom Quote
                <ArrowUpRight className="h-4 w-4 text-accent-400" />
              </button>
            </motion.div>

            {/* 3 Quick-Jump Division Pills */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-8 grid grid-cols-3 gap-2.5 border-t border-base-800 pt-7"
            >
              {[
                { label: 'Laser Cutting', num: '01', anchor: '#laser-cutting', icon: Crosshair },
                { label: 'Weld Tables', num: '02', anchor: '#weld-tables', icon: Grid3X3 },
                { label: 'Metal Art', num: '03', anchor: '#metal-art', icon: Sparkles },
              ].map((div) => {
                const Icon = div.icon;
                return (
                  <button
                    key={div.num}
                    type="button"
                    onClick={() => onScrollTo(div.anchor)}
                    className="group flex flex-col items-start rounded-xl border border-base-800 bg-base-900/55 p-3 text-left transition-all hover:border-primary-500/60 hover:bg-base-900 cursor-pointer"
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold text-primary-500">
                        {div.num}
                      </span>
                      <Icon className="h-3.5 w-3.5 text-base-400 transition-colors group-hover:text-accent-400" />
                    </div>
                    <span className="mt-1.5 text-xs font-semibold text-white sm:text-sm">
                      {div.label}
                    </span>
                  </button>
                );
              })}
            </motion.div>

            {/* Precision Trust Specs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-base-400"
            >
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary-500" />
                CNC Laser Precision (±0.005&quot;)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary-500" />
                Interlocking Rib Underframes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary-500" />
                Custom Commercial &amp; Personal Runs
              </span>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3-Division Showcase Stage */}
          <motion.div
            style={{ y: showcaseY }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl border border-base-700/80 bg-base-900/80 p-2.5 shadow-2xl shadow-black/60 backdrop-blur-sm">
              {/* Top Industrial Frame Bar */}
              <div className="mb-2.5 flex items-center justify-between px-2 pt-1">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary-500" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-base-300">
                    {activeSlide.badge}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handlePreviewZoom}
                  className="inline-flex items-center gap-1 rounded-md border border-base-700 bg-base-800/80 px-2.5 py-1 text-[11px] font-medium text-base-300 hover:border-base-500 hover:text-white transition-colors cursor-pointer"
                >
                  <Maximize2 className="h-3 w-3" />
                  Inspect
                </button>
              </div>

              {/* Animated Visual Viewport */}
              <div
                onClick={handlePreviewZoom}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-base-950 cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide.image}
                    src={activeSlide.image}
                    alt={activeSlide.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </AnimatePresence>

                {/* Subtle bottom gradient overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-base-950/95 via-base-950/50 to-transparent" />

                {/* Floating Precision Spec Chip (Top Right) */}
                <div className="absolute top-3 right-3 rounded-lg border border-white/15 bg-base-950/80 px-3 py-2 text-right backdrop-blur-md">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-base-400">
                    {activeSlide.metricLabel}
                  </p>
                  <p className="font-mono text-sm font-bold text-accent-400">
                    {activeSlide.metricValue}
                  </p>
                </div>

                {/* Slide Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="flex items-end justify-between gap-4"
                    >
                      <div>
                        <h2 className="font-display text-lg font-bold text-white sm:text-xl">
                          {activeSlide.title}
                        </h2>
                        <p className="mt-1 line-clamp-2 text-xs text-base-300 sm:text-sm">
                          {activeSlide.caption}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onScrollTo(activeSlide.anchor);
                        }}
                        className="shrink-0 inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-xs font-bold text-base-950 transition-colors hover:bg-primary-600 hover:text-white cursor-pointer"
                      >
                        View
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Interactive Division Slide Switcher */}
              <div className="mt-2.5 grid grid-cols-3 gap-2">
                {HERO_SLIDES.map((slide, idx) => {
                  const isCurrent = idx === activeSlideIndex;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`group relative overflow-hidden rounded-lg border p-2 text-left transition-all cursor-pointer ${
                        isCurrent
                          ? 'border-primary-500 bg-base-800/90'
                          : 'border-base-800 bg-base-950/60 hover:border-base-600'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-9 w-11 shrink-0 rounded object-cover"
                        />
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] font-semibold uppercase text-primary-400">
                            0{idx + 1}
                          </p>
                          <p className="truncate text-xs font-semibold text-white">
                            {slide.id === 'weld-tables'
                              ? 'Weld Tables'
                              : slide.id === 'laser-cutting'
                                ? 'Laser Cutting'
                                : 'Metal Art'}
                          </p>
                        </div>
                      </div>
                      {isCurrent && (
                        <motion.div
                          layoutId="hero-slide-bar"
                          className="absolute inset-x-0 bottom-0 h-[2px] bg-primary-500"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
