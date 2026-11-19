import { useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DivisionStrip } from './components/DivisionStrip';
import { LaserCuttingSection } from './components/LaserCuttingSection';
import { WeldTablesSection } from './components/WeldTablesSection';
import { MetalArtSection } from './components/MetalArtSection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { QuoteModal } from './components/QuoteModal';
import type { DivisionKey, GalleryItem } from './data/catalog';

const SECTION_IDS = ['laser-cutting', 'weld-tables', 'metal-art', 'quote'];

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const [activeSection, setActiveSection] = useState<string>('laser-cutting');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [quoteModalState, setQuoteModalState] = useState<{
    open: boolean;
    division?: DivisionKey;
    item?: string;
  }>({ open: false });

  // Initialize Lenis buttery-smooth inertial scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pause background smooth scroll when a modal is open
  useEffect(() => {
    if (!lenisRef.current) return;
    if (lightboxItem || quoteModalState.open) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [lightboxItem, quoteModalState.open]);

  // Active section scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-28% 0px -48% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = useCallback((target: string) => {
    if (target === '#top') {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const el = document.querySelector(target);
    if (el instanceof HTMLElement) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -108, duration: 1.25 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleOpenQuote = useCallback((division?: DivisionKey, itemName?: string) => {
    setQuoteModalState({ open: true, division, item: itemName });
  }, []);

  return (
    <div className="min-h-screen bg-white text-base-950">
      <Navbar
        activeSection={activeSection}
        onScrollTo={handleScrollTo}
        onOpenQuote={handleOpenQuote}
      />

      <main>
        <Hero
          onScrollTo={handleScrollTo}
          onOpenQuote={handleOpenQuote}
          onOpenLightbox={setLightboxItem}
        />

        <DivisionStrip onScrollTo={handleScrollTo} />

        {/* Section 1: Laser Cutting Services */}
        <LaserCuttingSection
          onOpenLightbox={setLightboxItem}
          onOpenQuote={handleOpenQuote}
        />

        {/* Section 2: Weld Tables */}
        <WeldTablesSection
          onOpenLightbox={setLightboxItem}
          onOpenQuote={handleOpenQuote}
        />

        {/* Section 3: Metal Art */}
        <MetalArtSection
          onOpenLightbox={setLightboxItem}
          onOpenQuote={handleOpenQuote}
        />

        {/* Closing Quote CTA */}
        <QuoteSection onScrollTo={handleScrollTo} />
      </main>

      <Footer onScrollTo={handleScrollTo} onOpenQuote={handleOpenQuote} />

      {/* Full-Resolution Image Inspector */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onSelect={setLightboxItem}
        onOpenQuote={handleOpenQuote}
      />

      {/* Pre-filled Quote Modal */}
      <QuoteModal
        isOpen={quoteModalState.open}
        initialDivision={quoteModalState.division}
        initialItem={quoteModalState.item}
        onClose={() => setQuoteModalState((prev) => ({ ...prev, open: false }))}
      />
    </div>
  );
}
