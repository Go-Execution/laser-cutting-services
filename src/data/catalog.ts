export type DivisionKey = 'laser-cutting' | 'weld-tables' | 'metal-art';

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  division: DivisionKey;
  divisionLabel: string;
  category: string;
  image: string;
  dimensions?: string;
  material?: string;
  finish?: string;
  description: string;
  specs: string[];
  featured?: boolean;
}

export interface HeroSlide {
  id: DivisionKey;
  badge: string;
  title: string;
  caption: string;
  metricLabel: string;
  metricValue: string;
  image: string;
  anchor: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'weld-tables',
    badge: '02 • Weld Tables',
    title: '4\' × 8\' Precision Fixture Weld Table',
    caption: 'CNC laser-cut 5/8" hole grid top & full 4-sided skirts on locking shop casters.',
    metricLabel: 'Table Footprint',
    metricValue: '48" × 96"',
    image: '/images/weld-table-4x8.jpg',
    anchor: '#weld-tables',
  },
  {
    id: 'laser-cutting',
    badge: '01 • Laser Cutting Services',
    title: 'Custom Rolled & Laser-Cut Fire Rings',
    caption: 'Tight-tolerance CNC laser cutting for custom business logos, structural kits, and steel parts.',
    metricLabel: 'Cut Repeatability',
    metricValue: '±0.005"',
    image: '/images/laser-cut-fire-ring-custom.jpg',
    anchor: '#laser-cutting',
  },
  {
    id: 'metal-art',
    badge: '03 • Custom Metal Art',
    title: 'Patriotic & Wilderness Steel Wall Art',
    caption: 'Intricate CNC-cut heavy-gauge steel flags, military emblems, and custom painted plaques.',
    metricLabel: 'Steel Finish',
    metricValue: 'Powder Coat',
    image: '/images/metal-art-bigfoot-flag.jpg',
    anchor: '#metal-art',
  },
];

export const LASER_CUTTING_ITEMS: GalleryItem[] = [
  {
    id: 'laser-precision-beam',
    title: 'High-Precision CNC Laser Cutting',
    subtitle: 'Clean edges, narrow kerf, and zero-compromise repeatability',
    division: 'laser-cutting',
    divisionLabel: 'Laser Cutting Services',
    category: 'CNC Capabilities',
    image: '/images/laser-cut-hero.jpg',
    dimensions: 'Up to 5\' × 10\' Sheet Capacity',
    material: 'A36 Mild Steel • Stainless • Aluminum',
    finish: 'Dross-Free Raw Cut Edge',
    description:
      'From one-off custom brackets and tab-and-slot weldments to full production runs, our CNC laser platform translates DXF, DWG, and STEP files into crisp, weld-ready steel components.',
    specs: ['±0.005" Positioning Accuracy', 'Minimal Heat-Affected Zone', 'DXF / DWG / STEP Ready'],
    featured: true,
  },
  {
    id: 'fire-ring-pine-woods',
    title: 'Custom Branded Fire Ring — Pine Woods Electrical',
    subtitle: 'Heavy-gauge rolled steel with crisp backlit logo cutouts',
    division: 'laser-cutting',
    divisionLabel: 'Laser Cutting Services',
    category: 'Custom Fire Rings',
    image: '/images/laser-cut-fire-ring-custom.jpg',
    dimensions: 'Custom Diameter • 3/16" – 1/4" Steel',
    material: 'Heavy-Duty Carbon Steel',
    finish: 'High-Temp Matte Black Coat',
    description:
      'Custom CNC laser-cut lettering and lightning bolt accents rolled into a heavy-wall steel fire ring. Engineered to resist warping under extreme campfire heat while projecting razor-sharp firelight.',
    specs: ['Custom Business Logos & Text', 'Heavy-Wall Heat Resistance', 'Precision Rolled Cylinder'],
  },
  {
    id: 'fire-pit-valley-deer',
    title: 'Custom Laser-Cut Fire Pit — Valley Deer Farm',
    subtitle: 'Flanged rim steel fire pit cut for outdoor hospitality & ranches',
    division: 'laser-cutting',
    divisionLabel: 'Laser Cutting Services',
    category: 'Custom Fire Pits',
    image: '/images/laser-cut-fire-pit.jpg',
    dimensions: 'Custom Diameter & Height',
    material: 'Thick-Gauge Hot Rolled Steel',
    finish: 'High-Temp Finish or Natural Patina',
    description:
      'Built for ranches, backyards, and estates. Custom stencil typography laser-cut directly through thick steel sidewalls so flames illuminate your ranch, farm, or family name.',
    specs: ['Rolled Flanged Top Rim', 'Custom Stencil Typography', 'Built for Lifetime Outdoor Use'],
  },
];

export const LASER_MATERIALS = [
  {
    id: 'mild-steel',
    name: 'Carbon / A36 Steel',
    thickness: '20 ga up to 1/2" Plate',
    tolerance: '±0.005"',
    edgeQuality: 'Clean, weld-ready dross-free edge',
    applications: 'Weld table tops & ribs, structural gussets, fire rings, heavy brackets, custom signs',
  },
  {
    id: 'stainless',
    name: 'Stainless Steel (304 / 316)',
    thickness: '22 ga up to 3/8" Plate',
    tolerance: '±0.005"',
    edgeQuality: 'Bright nitrogen-assist oxide-free cut',
    applications: 'Food-grade fixtures, marine hardware, architectural panels, corrosion-proof emblems',
  },
  {
    id: 'aluminum',
    name: 'Aluminum (5052 / 6061)',
    thickness: '0.040" up to 1/4" Plate',
    tolerance: '±0.006"',
    edgeQuality: 'Smooth burr-minimal finish',
    applications: 'Lightweight enclosures, race & off-road mounts, signage backplates, custom panels',
  },
];

export const WELD_TABLE_ITEMS: GalleryItem[] = [
  {
    id: 'weld-table-4x8',
    title: '4\' × 8\' Pro Series Weld Table',
    subtitle: 'Full-shop fabrication flagship with 5/8" fixture grid & locking casters',
    division: 'weld-tables',
    divisionLabel: 'Weld Tables',
    category: 'Complete Tables',
    image: '/images/weld-table-4x8.jpg',
    dimensions: '48" × 96" (4\' × 8\')',
    material: 'Heavy-Plate CNC Laser-Cut Steel',
    finish: 'Raw Mill Steel + Locking Casters',
    description:
      'Our flagship 4\' × 8\' fabrication workhorse. Precision CNC-cut fixture hole grid across the entire top and 4-sided perimeter skirts lets you clamp complex frames dead-square from every angle.',
    specs: ['48" × 96" Work Surface', '4-Sided Clamping Skirts', 'Heavy-Duty Orange Locking Casters'],
    featured: true,
  },
  {
    id: 'weld-table-4x6',
    title: '4\' × 6\' Shop Series Weld Table',
    subtitle: 'Compact footprint with full pro-grade fixture hole density',
    division: 'weld-tables',
    divisionLabel: 'Weld Tables',
    category: 'Complete Tables',
    image: '/images/weld-table-4x6.jpg',
    dimensions: '48" × 72" (4\' × 6\')',
    material: 'Heavy-Plate CNC Laser-Cut Steel',
    finish: 'Shop-Ready Steel + Mobile Casters',
    description:
      'Ideal for home fabricators, race garages, and tight production bays. Delivers identical structural rigidity, perimeter clamping holes, and smooth rolling mobility in a 4\' × 6\' footprint.',
    specs: ['48" × 72" Work Surface', 'Full Top & Side Fixture Holes', 'Heavy-Duty Tubular Legs & Casters'],
    featured: true,
  },
  {
    id: 'weld-table-4x8-corner-plates',
    title: '4\' × 8\' Underframe & Corner Plates',
    subtitle: 'Interlocking egg-crate rib matrix for extreme flatness',
    division: 'weld-tables',
    divisionLabel: 'Weld Tables',
    category: 'Underframe Engineering',
    image: '/images/weld-table-4x8-underframe-corner-plates.jpg',
    dimensions: '48" × 96" Internal Rib Matrix',
    material: 'Laser-Cut Tab & Slot Steel Ribs',
    finish: 'Precision Welded Structural Steel',
    description:
      'Flatness starts underneath. Every 4\' × 8\' table is backed by an interlocking laser-cut rib lattice with weight-relief triangular trusses and thick reinforced corner plates to resist sag and welding heat distortion.',
    specs: ['Tab-and-Slot Egg-Crate Lattice', 'Heavy Corner Mounting Plates', 'Truss Weight-Relief Cutouts'],
  },
  {
    id: 'weld-table-4x8-legs',
    title: '4\' × 8\' Underframe with Tubular Legs',
    subtitle: 'Gusseted leg mounts engineered for multi-ton shop loads',
    division: 'weld-tables',
    divisionLabel: 'Weld Tables',
    category: 'Underframe Engineering',
    image: '/images/weld-table-4x8-legs.jpg',
    dimensions: '48" × 96" Structural Frame + Legs',
    material: 'Heavy Square Tubing & Plate Mounts',
    finish: 'Tack-Verified & Fully Welded',
    description:
      'Inverted shop view showcasing heavy-wall square steel legs bolted and welded to oversized load-spreading baseplates across the 4\' × 8\' chassis for rock-solid zero-wobble stability.',
    specs: ['Heavy-Wall Square Steel Legs', 'Oversized Bolt-On Base Plates', 'Perimeter Skirt Fixture Holes'],
  },
  {
    id: 'weld-table-4x8-painted',
    title: '4\' × 8\' Painted Underframe — Delivery Ready',
    subtitle: 'Industrial protective finish, crated and staged for transport',
    division: 'weld-tables',
    divisionLabel: 'Weld Tables',
    category: 'Finished & Ready to Ship',
    image: '/images/weld-table-4x8-underframe-painted.jpg',
    dimensions: '48" × 96" Coated Sub-Assembly',
    material: 'Coated Structural Steel Frame',
    finish: 'Matte Black Industrial Undercoat',
    description:
      'Every finished underframe receives thorough weld inspection and protective black underframe coating before being timber-skidded and staged for safe shop delivery or pickup.',
    specs: ['Corrosion-Resistant Black Undercoat', 'Full Weld & Squareness QC', 'Skid-Mounted Transport Prep'],
  },
];

export const WELD_TABLE_SPECS = [
  {
    model: '4\' × 6\' Shop Series',
    size: '48" × 72"',
    skirtDepth: '6" Perimeter Skirt',
    holeGrid: '2" Center-to-Center Grid',
    bracing: 'Interlocking Tab-and-Slot Rib Matrix',
    mobility: '4× Locking Industrial Casters / Leveling Feet',
    bestFor: 'Garage fab shops, prototyping, TIG & MIG stations',
  },
  {
    model: '4\' × 8\' Pro Series',
    size: '48" × 96"',
    skirtDepth: '6" Full 4-Sided Skirt',
    holeGrid: '2" Center-to-Center Grid',
    bracing: 'Heavy Egg-Crate Truss Ribs + Corner Plates',
    mobility: 'Heavy-Duty Locking Casters or Fixed Plates',
    bestFor: 'Full chassis fab, heavy weldments, commercial shops',
  },
  {
    model: 'DIY Kit / Custom Size',
    size: 'Custom Dimensions',
    skirtDepth: 'Custom Skirt Height',
    holeGrid: '5/8" or Custom Hole Spacing',
    bracing: 'CNC Tab-and-Slot Ready-to-Weld Kit',
    mobility: 'Optional Leg & Caster Hardware Pack',
    bestFor: 'Fabricators wanting to weld & save on freight',
  },
];

export const METAL_ART_ITEMS: GalleryItem[] = [
  {
    id: 'art-bigfoot-flag',
    title: 'Bigfoot & Distressed American Flag',
    subtitle: 'Mountain ridge, evergreen forest & Sasquatch silhouette in steel',
    division: 'metal-art',
    divisionLabel: 'Metal Art',
    category: 'Outdoors & Scenic',
    image: '/images/metal-art-bigfoot-flag.jpg',
    dimensions: 'Custom Sizes (24" – 48" Wide)',
    material: 'Heavy-Gauge CNC Laser-Cut Steel',
    finish: 'Textured Matte Black Powder Coat',
    description:
      'A fan-favorite statement piece fusing a rugged distressed American flag with alpine mountain peaks, pine trees, and Bigfoot striding across the foreground. Precision-cut in a single solid sheet of steel.',
    specs: ['Single-Piece Laser Cutout', 'Indoor / Outdoor Weather-Resistant Coat', 'Hidden Wall Stand-Off Ready'],
    featured: true,
  },
  {
    id: 'art-flag-eagle',
    title: 'American Flag with Eagle Head',
    subtitle: '15" × 10" precision-cut patriotic steel wall display',
    division: 'metal-art',
    divisionLabel: 'Metal Art',
    category: 'Patriotic & Military',
    image: '/images/metal-art-flag-eagle.jpg',
    dimensions: '15" × 10" (Custom Sizes Available)',
    material: '14 ga / 16 ga Cold-Rolled Steel',
    finish: 'Satin Black / Raw Steel Clear Coat',
    description:
      'Flowing Stars and Stripes merged seamlessly with a finely detailed bald eagle portrait. Crisp CNC laser piercing captures every feather line and star point cleanly.',
    specs: ['15" × 10" Signature Size', 'Fine Feather & Star Detailing', 'Available Raw or Powder Coated'],
  },
  {
    id: 'art-us-marine',
    title: 'United States Marine Corps Emblem',
    subtitle: 'Circular Eagle, Globe & Anchor steel wall medallion',
    division: 'metal-art',
    divisionLabel: 'Metal Art',
    category: 'Patriotic & Military',
    image: '/images/metal-art-us-marine.jpg',
    dimensions: '18" / 24" / 30" Diameter',
    material: 'Heavy-Gauge Solid Steel',
    finish: 'Matte Black Powder Coat',
    description:
      'Honoring United States Marines with razor-sharp CNC-cut typography, dual stars, and the iconic Eagle, Globe, and Anchor silhouette. Ideal for shops, offices, garages, and veteran gifts.',
    specs: ['Precision Cut Lettering & Globe', 'Durable Matte Black Finish', 'Custom Name / Rank Add-Ons'],
  },
  {
    id: 'art-us-army',
    title: 'United States Army Seal',
    subtitle: 'Detailed circular U.S. Army crest laser-cut steel plaque',
    division: 'metal-art',
    divisionLabel: 'Metal Art',
    category: 'Patriotic & Military',
    image: '/images/metal-art-us-army.jpg',
    dimensions: '18" / 24" / 30" Diameter',
    material: 'Heavy-Gauge Solid Steel',
    finish: 'Matte Black Powder Coat',
    description:
      'Intricate laser-cut rendition of the United States Army emblem featuring delicate olive branches, arrows, star burst, and bold circular border crafted to heirloom standards.',
    specs: ['Ultra-Fine Feather & Branch Cuts', 'Heavy-Gauge No-Flex Steel', 'Ready to Mount Indoors or Out'],
  },
  {
    id: 'art-wonderful-world',
    title: '"What a Wonderful World" Tree of Life Plaque',
    subtitle: 'Custom dual-tone painted Tree of Life & lyric stencil sign',
    division: 'metal-art',
    divisionLabel: 'Metal Art',
    category: 'Custom Painted & Quotes',
    image: '/images/metal-art-wonderful-world.jpg',
    dimensions: 'Custom Square / Rectangular Plaque',
    material: 'Laser-Cut Steel + Layered Backplate',
    finish: 'White Gloss + Hand-Accented Green & Gold',
    description:
      'Bespoke multi-finish metal wall art pairing a hand-accented emerald and gold Celtic Tree of Life medallion with crisp laser-stenciled lyrics: "I see trees of green, red roses too... What a wonderful world."',
    specs: ['Custom Quotes & Family Lyrics', 'Multi-Color Hand-Finished Accents', 'Layered Dimensional Depth'],
  },
];

export const ALL_GALLERY_ITEMS: GalleryItem[] = [
  ...LASER_CUTTING_ITEMS,
  ...WELD_TABLE_ITEMS,
  ...METAL_ART_ITEMS,
];
