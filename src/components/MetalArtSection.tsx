import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, ArrowUpRight, Palette, CheckCircle2 } from 'lucide-react';
import { METAL_ART_ITEMS, type DivisionKey, type GalleryItem } from '../data/catalog';
import { WatermarkLayer } from './WatermarkLayer';

interface MetalArtSectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenQuote: (division?: DivisionKey, itemName?: string) => void;
}

const CATEGORIES = [
  'All Pieces',
  'Patriotic & Military',
  'Outdoors & Scenic',
  'Custom Painted & Quotes',
];

const FINISH_OPTIONS = [
  { name: 'Matte Black Powder Coat', swatch: 'bg-[#1a1a1d]', note: 'Most popular indoor/outdoor' },
  { name: 'Raw Steel + Clear Coat', swatch: 'bg-gradient-to-br from-[#8c929c] to-[#525861]', note: 'Industrial grind sheen' },
  { name: 'Custom Multi-Color Paint', swatch: 'bg-gradient-to-br from-emerald-500 via-amber-400 to-base-900', note: 'Hand-accented detail' },
  { name: 'Natural Rust Patina', swatch: 'bg-gradient-to-br from-[#8c4220] to-[#4a2110]', note: 'Rustic weathered ranch look' },
];

export function MetalArtSection({ onOpenLightbox, onOpenQuote }: MetalArtSectionProps) {
  const [activeCategory, setActiveCategory] = useState('All Pieces');

  const filteredItems =
    activeCategory === 'All Pieces'
      ? METAL_ART_ITEMS
      : METAL_ART_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="metal-art"
      className="relative overflow-hidden border-t border-base-200 bg-base-50 py-20 lg:py-28 scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-50" aria-hidden="true" />
      <WatermarkLayer variant="light" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-base-300 bg-white px-3.5 py-1 shadow-2xs">
              <span className="font-mono text-xs font-bold text-primary-600">SECTION 03</span>
              <span className="h-3 w-px bg-base-300" />
              <span className="text-xs font-semibold uppercase tracking-wider text-base-700">
                Custom Metal Art
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-base-950 sm:text-4xl lg:text-5xl">
              Precision-Cut Steel Art Built to Last Generations.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-base-600 sm:text-lg">
              Every detail — from fine eagle feathers and military crests to mountain pine lines and
              bespoke hand-painted plaques — is cut from heavy-gauge solid steel with razor-sharp
              CNC laser fidelity.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => onOpenQuote('metal-art', 'Custom Metal Art Commission')}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-primary-600/20 transition-all hover:bg-primary-700 hover:-translate-y-0.5 cursor-pointer"
            >
              Commission Custom Metal Art
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Interactive Category Filter Bar */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                  isSelected
                    ? 'text-white'
                    : 'border border-base-200 bg-white text-base-700 hover:border-base-300 hover:text-base-950'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="metal-art-filter-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-base-950"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Gallery Grid (All 5 Metal Art Photos cleanly framed) */}
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((piece, idx) => {
              // On desktop (6-col grid) when showing all 5 pieces:
              // Row 1: 2 wide feature cards (3 cols each)
              // Row 2: 3 balanced square/emblem cards (2 cols each)
              const colSpanClass =
                filteredItems.length === 5
                  ? idx < 2
                    ? 'lg:col-span-3'
                    : 'lg:col-span-2'
                  : filteredItems.length === 1
                    ? 'lg:col-span-4 lg:col-start-2'
                    : filteredItems.length === 2
                      ? 'lg:col-span-3'
                      : 'lg:col-span-2';

              const imageHeightClass =
                filteredItems.length === 5 && idx < 2 ? 'aspect-[16/10.5]' : 'aspect-[4/3.6]';

              return (
                <motion.article
                  layout
                  key={piece.id}
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-base-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-xl ${colSpanClass}`}
                >
                  {/* Artwork Viewport */}
                  <div
                    onClick={() => onOpenLightbox(piece)}
                    className={`relative w-full overflow-hidden bg-base-100 cursor-pointer ${imageHeightClass}`}
                  >
                    <img
                      src={piece.image}
                      alt={piece.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute top-3 left-3 rounded-md bg-base-950/85 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {piece.category}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenLightbox(piece);
                      }}
                      aria-label={`Inspect ${piece.title}`}
                      className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-base-900 shadow-sm transition-all hover:bg-primary-600 hover:text-white cursor-pointer"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                    </button>

                    {piece.dimensions && (
                      <div className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2.5 py-1 font-mono text-[10px] font-bold text-base-900 shadow-xs backdrop-blur-sm">
                        {piece.dimensions}
                      </div>
                    )}
                  </div>

                  {/* Artwork Details */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold text-base-950 group-hover:text-primary-600 transition-colors">
                      {piece.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-base-500">{piece.subtitle}</p>
                    <p className="mt-2.5 flex-1 text-xs leading-relaxed text-base-600">
                      {piece.description}
                    </p>

                    <div className="mt-4 space-y-1.5 border-t border-base-100 pt-3.5">
                      {piece.specs.slice(0, 2).map((spec) => (
                        <div key={spec} className="flex items-center gap-1.5 text-[11px] font-medium text-base-700">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary-600" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-1">
                      <button
                        type="button"
                        onClick={() => onOpenQuote('metal-art', piece.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-base-950 transition-colors hover:text-primary-600 cursor-pointer"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-primary-600" />
                        Order / Customize Piece
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onOpenLightbox(piece)}
                        className="text-xs font-semibold text-base-500 hover:text-base-950 cursor-pointer"
                      >
                        View Full
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Custom Finish Options Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-2xl border border-base-200 bg-white p-6 sm:p-7"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-primary-600">
                <Palette className="h-3.5 w-3.5" />
                Finishes &amp; Personalization
              </div>
              <h3 className="mt-1 font-display text-xl font-bold text-base-950">
                Any Size. Any Text. Built Your Way.
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-base-600">
                Personalize military emblems, ranch signs, or patriotic flags with family names,
                service dates, or custom color finishes.
              </p>
            </div>

            <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {FINISH_OPTIONS.map((fin) => (
                <div
                  key={fin.name}
                  className="flex items-center gap-3 rounded-xl border border-base-200 bg-base-50 p-3"
                >
                  <span
                    className={`h-8 w-8 shrink-0 rounded-full border border-base-300 shadow-inner ${fin.swatch}`}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-base-950">{fin.name}</p>
                    <p className="truncate text-[11px] text-base-500">{fin.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
