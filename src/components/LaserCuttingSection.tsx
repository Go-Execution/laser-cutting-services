import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Crosshair,
  Flame,
  Layers,
  FileCode2,
  Maximize2,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import {
  LASER_CUTTING_ITEMS,
  LASER_MATERIALS,
  type DivisionKey,
  type GalleryItem,
} from '../data/catalog';

interface LaserCuttingSectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenQuote: (division?: DivisionKey, itemName?: string) => void;
}

const CAPABILITIES = [
  {
    icon: Crosshair,
    title: 'Tight-Tolerance CNC Cuts',
    desc: 'Consistent ±0.005" repeatability with clean, dross-free edges ready straight for welding or powder coating.',
  },
  {
    icon: Layers,
    title: 'Tab-and-Slot Fabrication Kits',
    desc: 'Self-jigging interlocking steel parts that assemble dead-square and cut welding setup time in half.',
  },
  {
    icon: Flame,
    title: 'Custom Rolled Fire Rings & Pits',
    desc: 'Heavy-gauge steel cut with your ranch, business logo, or family name and rolled to endure years of fire.',
  },
  {
    icon: FileCode2,
    title: 'DXF / DWG / Concept to Cut',
    desc: 'Send print-ready CAD files or a rough sketch — we engineer clean cut paths for one-offs or production runs.',
  },
];

export function LaserCuttingSection({ onOpenLightbox, onOpenQuote }: LaserCuttingSectionProps) {
  const [selectedMaterialId, setSelectedMaterialId] = useState(LASER_MATERIALS[0].id);
  const selectedMaterial =
    LASER_MATERIALS.find((m) => m.id === selectedMaterialId) ?? LASER_MATERIALS[0];

  const heroLaser = LASER_CUTTING_ITEMS[0];
  const customProjects = LASER_CUTTING_ITEMS.slice(1);

  return (
    <section
      id="laser-cutting"
      className="relative overflow-hidden bg-gradient-to-br from-base-950 via-base-950 to-base-900 py-20 text-white lg:py-28 scroll-mt-28"
    >
      {/* Industrial Dot-Grid + Subtle Crimson Beam Glow */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-35" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-500/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary-600/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-base-700 bg-base-900/80 px-3.5 py-1">
              <span className="font-mono text-xs font-bold text-primary-500">SECTION 01</span>
              <span className="h-3 w-px bg-base-700" />
              <span className="text-xs font-semibold uppercase tracking-wider text-base-300">
                Laser Cutting Services
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Precision Cuts Start Here.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-base-300 sm:text-lg">
              High-accuracy CNC laser cutting for structural steel components, custom branded fire
              rings, heavy brackets, and commercial fabrication. Clean edges, minimal kerf, and
              rock-solid repeatability from prototype to production.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onOpenQuote('laser-cutting', 'Custom CNC Laser Cutting Job')}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-500 hover:-translate-y-0.5 cursor-pointer"
            >
              Quote a Laser Cut Job
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Main Split Feature: Precision Laser Visual + Capabilities & Material Matrix */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          {/* Left: Dramatic Laser Prism Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div
              onClick={() => onOpenLightbox(heroLaser)}
              className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-base-800 bg-black shadow-2xl cursor-pointer"
            >
              <div className="relative flex-1 overflow-hidden">
                <img
                  src={heroLaser.image}
                  alt={heroLaser.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Animated Laser Scanline Sweep */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent via-primary-500/25 to-transparent animate-laser-scan"
                  aria-hidden="true"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/20 to-transparent" />

                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-black/75 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-accent-400 backdrop-blur-md">
                  <Crosshair className="h-3.5 w-3.5 text-primary-500" />
                  CNC Optical Precision
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenLightbox(heroLaser);
                  }}
                  aria-label="Inspect Laser Cutting Visual"
                  className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/70 text-white opacity-85 transition-all hover:bg-primary-600 hover:border-primary-500 hover:opacity-100 cursor-pointer"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              <div className="border-t border-base-800 bg-base-950/95 p-6">
                <h3 className="font-display text-xl font-bold text-white">{heroLaser.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-base-400">
                  {heroLaser.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {heroLaser.specs.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-md border border-base-700 bg-base-900 px-2.5 py-1 font-mono text-[11px] text-base-200"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: 4 Capability Cards + Interactive Material Matrix */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {CAPABILITIES.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="group rounded-2xl border border-base-800 bg-base-900/65 p-5 backdrop-blur-sm transition-all hover:border-primary-500/50 hover:bg-base-900"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-base-700 bg-base-950 text-primary-500 transition-colors group-hover:border-primary-500/40 group-hover:bg-primary-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-white">
                      {cap.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-base-400">{cap.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Interactive Material & Spec Inspector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl border border-base-800 bg-base-900/75 p-5 sm:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accent-400">
                    Cutting Spec Sheet
                  </p>
                  <h3 className="mt-0.5 font-display text-lg font-bold text-white">
                    Materials &amp; Tolerance Capabilities
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 rounded-xl bg-base-950 p-1 border border-base-800">
                  {LASER_MATERIALS.map((mat) => {
                    const active = mat.id === selectedMaterialId;
                    return (
                      <button
                        key={mat.id}
                        type="button"
                        onClick={() => setSelectedMaterialId(mat.id)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                          active
                            ? 'bg-primary-600 text-white shadow-sm'
                            : 'text-base-400 hover:text-white'
                        }`}
                      >
                        {mat.name.split(' ')[0]}
                      </button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMaterial.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="mt-5 grid gap-3 sm:grid-cols-3"
                >
                  <div className="rounded-xl border border-base-800 bg-base-950/75 p-3.5">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-base-400">
                      Gauge / Plate Range
                    </p>
                    <p className="mt-1 font-mono text-sm font-bold text-white">
                      {selectedMaterial.thickness}
                    </p>
                  </div>
                  <div className="rounded-xl border border-base-800 bg-base-950/75 p-3.5">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-base-400">
                      Position Tolerance
                    </p>
                    <p className="mt-1 font-mono text-sm font-bold text-accent-400">
                      {selectedMaterial.tolerance}
                    </p>
                  </div>
                  <div className="rounded-xl border border-base-800 bg-base-950/75 p-3.5">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-base-400">
                      Edge Finish
                    </p>
                    <p className="mt-1 text-xs font-semibold text-base-200">
                      {selectedMaterial.edgeQuality}
                    </p>
                  </div>
                  <div className="sm:col-span-3 flex items-start gap-2 rounded-xl border border-base-800/80 bg-base-950/50 px-4 py-3 text-xs text-base-300">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                    <span>
                      <strong className="text-white">Common Builds:</strong>{' '}
                      {selectedMaterial.applications}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Custom Laser-Cut Steel Showcase: Fire Ring & Fire Pit */}
        <div className="mt-14">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary-400">
                Featured Custom Laser-Cut Projects
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                Custom Fire Rings, Branded Fire Pits &amp; Rolled Steel
              </h3>
            </div>
            <p className="text-sm text-base-400">
              Click any project to inspect cut detail at full resolution
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {customProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="group overflow-hidden rounded-2xl border border-base-800 bg-base-900/75 transition-all duration-300 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-black/50"
              >
                <div
                  onClick={() => onOpenLightbox(project)}
                  className="relative aspect-[16/11] w-full overflow-hidden bg-base-950 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-950/90 via-base-950/15 to-transparent" />
                  <div className="absolute top-3.5 left-3.5 rounded-md border border-white/15 bg-base-950/80 px-3 py-1 font-mono text-[11px] font-semibold uppercase text-accent-400 backdrop-blur-md">
                    {project.category}
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenLightbox(project);
                    }}
                    aria-label={`Inspect ${project.title}`}
                    className="absolute top-3.5 right-3.5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-base-950/80 text-white transition-all hover:bg-primary-600 cursor-pointer"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h4 className="font-display text-xl font-bold text-white">{project.title}</h4>
                    <p className="mt-1 text-sm text-base-300">{project.subtitle}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-relaxed text-base-300">{project.description}</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {project.specs.map((spec) => (
                      <div
                        key={spec}
                        className="flex items-center gap-1.5 rounded-lg border border-base-800 bg-base-950/70 px-2.5 py-2 text-xs text-base-200"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary-500" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-base-800 pt-4">
                    <span className="font-mono text-xs text-base-400">{project.material}</span>
                    <button
                      type="button"
                      onClick={() => onOpenQuote('laser-cutting', project.title)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-base-700 bg-base-950 px-3.5 py-2 text-xs font-semibold text-white transition-all hover:border-primary-500 hover:bg-primary-600 cursor-pointer"
                    >
                      Order Similar Custom Cut
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
