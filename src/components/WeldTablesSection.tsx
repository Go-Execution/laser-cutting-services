import { motion } from 'framer-motion';
import {
  Grid3X3,
  Maximize2,
  ArrowUpRight,
  CheckCircle2,
  Wrench,
  Shield,
  Ruler,
  Layers,
} from 'lucide-react';
import {
  WELD_TABLE_ITEMS,
  WELD_TABLE_SPECS,
  type DivisionKey,
  type GalleryItem,
} from '../data/catalog';

interface WeldTablesSectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenQuote: (division?: DivisionKey, itemName?: string) => void;
}

const ENGINEERING_PILLARS = [
  {
    icon: Grid3X3,
    title: 'Full Top & Skirt Fixture Grid',
    desc: 'Precision CNC-cut 5/8" hole pattern across the top plate and all four perimeter skirts for effortless 3D clamping.',
  },
  {
    icon: Layers,
    title: 'Interlocking Egg-Crate Ribs',
    desc: 'Laser-cut tab-and-slot internal truss ribs distribute load evenly and lock the surface flat under heavy weld heat.',
  },
  {
    icon: Shield,
    title: 'Reinforced Corner Plates',
    desc: 'Heavy gusseted corner plates and square tubular legs anchor the frame for zero rack, wobble, or twist.',
  },
  {
    icon: Wrench,
    title: 'Shop-Ready Mobility',
    desc: 'Available with heavy-duty locking swivel casters so you can roll a full 4\'×8\' fixture table across the bay.',
  },
];

export function WeldTablesSection({ onOpenLightbox, onOpenQuote }: WeldTablesSectionProps) {
  const completeTables = WELD_TABLE_ITEMS.slice(0, 2); // 4x8 and 4x6
  const underframeStages = WELD_TABLE_ITEMS.slice(2); // corner plates, legs, painted

  return (
    <section
      id="weld-tables"
      className="relative border-t border-base-200 bg-white py-20 lg:py-28 scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header (Signature Texas Metal Works Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-base-200 bg-base-50 px-3.5 py-1">
              <span className="font-mono text-xs font-bold text-primary-600">SECTION 02</span>
              <span className="h-3 w-px bg-base-300" />
              <span className="text-xs font-semibold uppercase tracking-wider text-base-700">
                Welding Tables &amp; Underframes
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-base-950 sm:text-4xl lg:text-5xl">
              Pick Your Size, Start Building.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-base-600 sm:text-lg">
              Engineered like a true industrial fixture table from the ribs up. Every IronGrid
              4&apos;×6&apos; and 4&apos;×8&apos; weld table combines CNC laser-cut flatness,
              4-sided clamping skirts, and heavy-duty interlocking structural bracing.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => onOpenQuote('weld-tables', '4\' × 8\' Pro Series Weld Table')}
              className="inline-flex items-center gap-2 rounded-lg bg-base-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-600 hover:-translate-y-0.5 cursor-pointer"
            >
              Configure Your Weld Table
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Engineering Pillars Strip */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ENGINEERING_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="rounded-xl border border-base-200 bg-base-50/75 p-5 transition-colors hover:border-base-300 hover:bg-white"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 font-display text-sm font-bold text-base-950">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-base-600">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Flagship Complete Weld Tables: 4'x8' & 4'x6' */}
        <div className="grid gap-8 lg:grid-cols-12">
          {completeTables.map((table, idx) => {
            const isFlagship = idx === 0;
            return (
              <motion.article
                key={table.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-base-200 bg-white shadow-sm transition-all duration-300 hover:border-primary-500/50 hover:shadow-xl ${
                  isFlagship ? 'lg:col-span-7' : 'lg:col-span-5'
                }`}
              >
                <div
                  onClick={() => onOpenLightbox(table)}
                  className={`relative w-full overflow-hidden bg-base-100 cursor-pointer ${
                    isFlagship ? 'aspect-[4/3]' : 'aspect-[4/3] lg:aspect-[5/4.7]'
                  }`}
                >
                  <img
                    src={table.image}
                    alt={table.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="rounded-md bg-base-950/90 px-3 py-1 font-mono text-xs font-bold text-white backdrop-blur-sm">
                      {table.dimensions}
                    </span>
                    {isFlagship && (
                      <span className="rounded-md bg-primary-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                        Flagship Build
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenLightbox(table);
                    }}
                    aria-label={`Inspect ${table.title}`}
                    className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-base-900 shadow-sm transition-all hover:bg-primary-600 hover:text-white cursor-pointer"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-primary-600">
                    {table.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-2xl font-bold text-base-950">
                    {table.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-base-600">
                    {table.description}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-base-100 pt-5">
                    {table.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs font-medium text-base-800">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-600" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onOpenQuote('weld-tables', table.title)}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700 cursor-pointer"
                    >
                      Request Table Quote
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(table)}
                      className="inline-flex items-center justify-center rounded-lg border border-base-200 bg-base-50 px-4 py-3 text-sm font-semibold text-base-800 transition-colors hover:border-base-300 hover:bg-base-100 cursor-pointer"
                    >
                      Zoom
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Under the Hood: 3-Stage Structural Underframe Engineering Showcase */}
        <div className="mt-16 rounded-3xl border border-base-200 bg-base-50 p-6 sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-primary-600">
                <Ruler className="h-3.5 w-3.5" />
                Under the Hood • Structural Anatomy
              </p>
              <h3 className="mt-1.5 font-display text-2xl font-bold text-base-950 sm:text-3xl">
                Built Flat From the Underframe Up
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-base-600">
                Inspect the real steel architecture underneath our 4&apos;×8&apos; tables — from
                interlocking internal rib lattices and corner plates to gusseted tubular legs and
                painted delivery-ready underframes.
              </p>
            </div>
            <span className="font-mono text-xs font-semibold text-base-500">
              3 BUILD STAGES • CLICK TO INSPECT
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {underframeStages.map((stage, idx) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-base-200 bg-white transition-all hover:border-primary-500/50 hover:shadow-lg"
              >
                <div
                  onClick={() => onOpenLightbox(stage)}
                  className="relative aspect-[16/9] w-full overflow-hidden bg-base-900 cursor-pointer"
                >
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-base-950/85 px-2.5 py-1 font-mono text-[11px] font-bold text-white backdrop-blur-sm">
                    STAGE 0{idx + 1}
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenLightbox(stage);
                    }}
                    aria-label={`Inspect ${stage.title}`}
                    className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-base-900 transition-colors hover:bg-primary-600 hover:text-white cursor-pointer"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h4 className="font-display text-lg font-bold text-base-950">{stage.title}</h4>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-base-600">
                    {stage.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {stage.specs.map((spec) => (
                      <span
                        key={spec}
                        className="rounded bg-base-100 px-2 py-1 font-mono text-[10px] font-medium text-base-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Clean Specification Comparison Table (Texas Metal Works Technical Comparison Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-12 overflow-hidden rounded-2xl border border-base-200 bg-white"
        >
          <div className="border-b border-base-200 bg-base-950 px-6 py-4 text-white flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="font-display text-base font-bold">
                Weld Table Configuration Specifications
              </h3>
              <p className="text-xs text-base-400">
                Available fully welded, painted underframe, or CNC tab-and-slot DIY kit
              </p>
            </div>
            <span className="rounded-md bg-primary-600/20 border border-primary-500/40 px-2.5 py-1 font-mono text-[11px] font-semibold text-primary-300">
              CUSTOM SIZES ON REQUEST
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead>
                <tr className="border-b border-base-200 bg-base-50 font-mono text-[11px] uppercase tracking-wider text-base-500">
                  <th className="px-6 py-3.5 font-semibold">Series</th>
                  <th className="px-6 py-3.5 font-semibold">Dimensions</th>
                  <th className="px-6 py-3.5 font-semibold">Perimeter Skirt</th>
                  <th className="px-6 py-3.5 font-semibold">Internal Bracing</th>
                  <th className="px-6 py-3.5 font-semibold">Best For</th>
                  <th className="px-6 py-3.5 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-base-200">
                {WELD_TABLE_SPECS.map((row) => (
                  <tr
                    key={row.model}
                    className="transition-colors hover:bg-base-50/80"
                  >
                    <td className="px-6 py-4 font-display font-bold text-base-950">{row.model}</td>
                    <td className="px-6 py-4 font-mono text-xs font-semibold text-primary-600">
                      {row.size}
                    </td>
                    <td className="px-6 py-4 text-xs text-base-700">{row.skirtDepth}</td>
                    <td className="px-6 py-4 text-xs text-base-700">{row.bracing}</td>
                    <td className="px-6 py-4 text-xs text-base-600">{row.bestFor}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        type="button"
                        onClick={() => onOpenQuote('weld-tables', row.model)}
                        className="inline-flex items-center gap-1 rounded-md border border-base-300 bg-white px-3 py-1.5 text-xs font-semibold text-base-900 transition-colors hover:border-primary-600 hover:bg-primary-600 hover:text-white cursor-pointer"
                      >
                        Quote
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
