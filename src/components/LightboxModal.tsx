import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ALL_GALLERY_ITEMS, type DivisionKey, type GalleryItem } from '../data/catalog';
import { WatermarkLayer } from './WatermarkLayer';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
  onOpenQuote: (division?: DivisionKey, itemName?: string) => void;
}

export function LightboxModal({ item, onClose, onSelect, onOpenQuote }: LightboxModalProps) {
  const currentIndex = item ? ALL_GALLERY_ITEMS.findIndex((i) => i.id === item.id) : -1;

  const goPrev = () => {
    if (currentIndex < 0) return;
    const prevIndex = (currentIndex - 1 + ALL_GALLERY_ITEMS.length) % ALL_GALLERY_ITEMS.length;
    onSelect(ALL_GALLERY_ITEMS[prevIndex]);
  };

  const goNext = () => {
    if (currentIndex < 0) return;
    const nextIndex = (currentIndex + 1) % ALL_GALLERY_ITEMS.length;
    onSelect(ALL_GALLERY_ITEMS[nextIndex]);
  };

  useEffect(() => {
    if (!item) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-base-950/92 p-4 backdrop-blur-md sm:p-6"
          data-lenis-prevent
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-base-700 bg-base-900 shadow-2xl lg:flex-row"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Preview"
              className="absolute top-3 right-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-base-950/80 text-white transition-colors hover:bg-primary-600 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Image Display */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-black p-4 sm:p-6 lg:min-h-[520px]">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[55vh] w-auto max-w-full rounded-lg object-contain lg:max-h-[80vh]"
              />
              <WatermarkLayer variant="dark" zIndexClass="z-10" />

              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous Image"
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-base-950/80 text-white transition-colors hover:bg-primary-600 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next Image"
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-base-950/80 text-white transition-colors hover:bg-primary-600 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-base-950/80 px-3 py-1 font-mono text-[11px] text-base-300">
                {currentIndex + 1} / {ALL_GALLERY_ITEMS.length}
              </div>
            </div>

            {/* Specs Sidebar */}
            <div className="flex w-full shrink-0 flex-col justify-between overflow-y-auto border-t border-base-800 bg-base-900 p-6 text-white lg:w-[340px] lg:border-t-0 lg:border-l">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary-400">
                  {item.divisionLabel}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-xs text-base-400">{item.subtitle}</p>

                <p className="mt-4 text-sm leading-relaxed text-base-300">{item.description}</p>

                <div className="mt-5 space-y-2.5 rounded-xl border border-base-800 bg-base-950/70 p-4 text-xs">
                  {item.dimensions && (
                    <div className="flex justify-between gap-2">
                      <span className="text-base-400">Size</span>
                      <span className="font-mono font-semibold text-white text-right">
                        {item.dimensions}
                      </span>
                    </div>
                  )}
                  {item.material && (
                    <div className="flex justify-between gap-2">
                      <span className="text-base-400">Material</span>
                      <span className="font-medium text-base-200 text-right">{item.material}</span>
                    </div>
                  )}
                  {item.finish && (
                    <div className="flex justify-between gap-2">
                      <span className="text-base-400">Finish</span>
                      <span className="font-medium text-base-200 text-right">{item.finish}</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 space-y-1.5">
                  {item.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs text-base-200">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary-500" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-base-800">
                <button
                  type="button"
                  onClick={() => {
                    const div = item.division;
                    const title = item.title;
                    onClose();
                    onOpenQuote(div, title);
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500 cursor-pointer"
                >
                  Request Quote for This
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
