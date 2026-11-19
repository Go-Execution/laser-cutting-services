import { motion } from 'framer-motion';
import { ArrowRight, Crosshair, Grid3X3, Sparkles } from 'lucide-react';

interface DivisionStripProps {
  onScrollTo: (target: string) => void;
}

const DIVISIONS = [
  {
    number: '01',
    id: '#laser-cutting',
    kicker: 'Precision CNC Cutting',
    title: 'Laser Cutting Services',
    description:
      'Tight-tolerance sheet & plate cutting, tab-and-slot fabrication kits, and custom rolled fire rings & branded fire pits.',
    image: '/images/laser-cut-fire-ring-custom.jpg',
    stat: '±0.005" Accuracy',
    icon: Crosshair,
  },
  {
    number: '02',
    id: '#weld-tables',
    kicker: 'Pro Fabrication Systems',
    title: 'Heavy-Duty Weld Tables',
    description:
      '4\'×6\' and 4\'×8\' CNC fixture tables engineered with interlocking egg-crate underframes, corner plates, and locking casters.',
    image: '/images/weld-table-4x8.jpg',
    stat: '4\'×6\' & 4\'×8\' Builds',
    icon: Grid3X3,
  },
  {
    number: '03',
    id: '#metal-art',
    kicker: 'Patriotic & Custom Decor',
    title: 'Custom Metal Art',
    description:
      'Heirloom CNC-cut American flags, U.S. Army & Marine Corps emblems, wilderness silhouettes, and painted quote plaques.',
    image: '/images/metal-art-bigfoot-flag.jpg',
    stat: 'Heirloom Steel',
    icon: Sparkles,
  },
];

export function DivisionStrip({ onScrollTo }: DivisionStripProps) {
  return (
    <section className="relative border-b border-base-200 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header (TMW "Configure Your Setup" Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600">
            Three Core Fabrication Divisions
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-base-950 sm:text-4xl">
            Build Exactly What You Need
          </h2>
          <p className="mt-3 text-base text-base-600">
            Every project runs through the same disciplined execution: CAD-verified geometry,
            precision CNC laser cutting, and heavy-gauge steel built to last.
          </p>
        </motion.div>

        {/* 3 Division Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {DIVISIONS.map((div, index) => {
            const Icon = div.icon;
            return (
              <motion.button
                key={div.number}
                type="button"
                onClick={() => onScrollTo(div.id)}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-base-200 bg-base-50 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-500/50 hover:bg-white hover:shadow-xl hover:shadow-base-950/5 cursor-pointer"
              >
                {/* Top Laser Accent Bar on Hover */}
                <span className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-primary-600 to-accent-500 transition-transform duration-300 group-hover:scale-x-100" />

                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-base-900">
                  <img
                    src={div.image}
                    alt={div.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-950/75 via-base-950/10 to-transparent" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-base-950/80 px-2.5 py-1 font-mono text-xs font-bold text-white backdrop-blur-md">
                    <span className="text-primary-500">{div.number}</span>
                    <span>/ 03</span>
                  </div>
                  <div className="absolute right-3 bottom-3 rounded-md border border-white/15 bg-base-950/75 px-2.5 py-1 font-mono text-[11px] font-semibold text-accent-400 backdrop-blur-md">
                    {div.stat}
                  </div>
                </div>

                {/* Copy */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600">
                    <Icon className="h-3.5 w-3.5" />
                    {div.kicker}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-base-950 group-hover:text-primary-600 transition-colors">
                    {div.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-base-600">
                    {div.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-base-950 group-hover:text-primary-600 transition-colors">
                    Jump to Section
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
