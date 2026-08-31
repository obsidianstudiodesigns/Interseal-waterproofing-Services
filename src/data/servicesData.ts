import { ServiceItem, Testimonial, FAQItem, BeforeAfterItem } from '../types';
import saGuttersImg from '../assets/images/sa_gutters_house_1788188245947.jpg';
import saRoofSheetsImg from '../assets/images/sa_roof_sheets_1788188261181.jpg';
import saRoofRepairsImg from '../assets/images/sa_roof_repairs_1788188276892.jpg';
import saCeilingImg from '../assets/images/sa_ceiling_repair_1788188290829.jpg';
import saPlasterSkimImg from '../assets/images/sa_plaster_skim_1788188307266.jpg';
import saTeamPaintingImg from '../assets/images/sa_team_painting_1788188322200.jpg';
import saTreeFellingImg from '../assets/images/sa_tree_felling_1788188338987.jpg';
import saTorchonImg from '../assets/images/sa_torchon_waterproof_1788188355160.jpg';
import saLiquidRubberImg from '../assets/images/sa_liquid_rubber_1788188372243.jpg';

export const COMPANY_PHONE = '064 038 9839';
export const COMPANY_PHONE_RAW = '0640389839';
export const WHATSAPP_INTL = '27640389839';
export const COMPANY_EMAIL = 'info@intersealwaterproofing.co.za';
export const COMPANY_AREAS = 'Gauteng, Pretoria, Centurion, Johannesburg, Midrand, Sandton & East Rand';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'concrete-roofs',
    title: 'Concrete Roofs Waterproofing',
    shortDesc: 'Double-layer torch-on membranes, flat slab sealing & complete ponding water protection.',
    fullDesc: 'Expert waterproofing for flat concrete roofs, balconies, and deck slabs using premium high-tensile 4mm torch-on polyester-reinforced bitumen membranes. We treat concrete cracks, apply deep-penetrating primers, and ensure optimal drainage slopes.',
    category: 'waterproofing',
    popular: true,
    image: saTorchonImg,
    features: [
      'Heavy-duty 4mm SABS torch-on membrane',
      'Bitumen primer & expansion joint sealing',
      'Ponding water elimination & leveling',
      'UV protective silver / acrylic top coat',
      'Up to 10-Year Workmanship Warranty',
    ],
  },
  {
    id: 'roof-sheets',
    title: 'Roof Sheets Waterproofing',
    shortDesc: 'Complete weatherproofing for IBR, Corrugated & Klip-Lok metal sheeting in SA climate.',
    fullDesc: 'Specialized sealing for residential and industrial metal roofs. We seal overlapping sheet joints with reinforced membrane systems, replace rusted roofing screws with bonded EPDM washers, and apply rust converter and anti-corrosion barrier coatings.',
    category: 'roofing',
    popular: true,
    image: saRoofSheetsImg,
    features: [
      'Lap joint & ridge cap membrane sealing',
      'Roof screw replacement with sealed washers',
      'Industrial rust neutralization & conversion',
      'Full elastomeric roof coating available',
      'Prevent roof sheet lifting & wind driven rain',
    ],
  },
  {
    id: 'chromadek-gutters',
    title: 'Chromadek & Galvanized Gutters',
    shortDesc: 'Seamless modern gutters, box gutters, downpipes & custom rainwater systems for SA homes.',
    fullDesc: 'Custom roll-formed seamless Chromadek and heavy-duty galvanized steel gutter installations and repairs. Designed to resist corrosion, prevent overflow damage to your foundation, and withstand harsh weather seasons.',
    category: 'gutters',
    popular: true,
    image: saGuttersImg,
    features: [
      'Continuous seamless Chromadek gutters',
      'Galvanized & PVC downpipe installations',
      'Fascia & barge board replacement',
      'Gutter leak repairs, realignment & cleaning',
      'Available in multiple architectural colors',
    ],
  },
  {
    id: 'roof-repairs',
    title: 'Roof Repairs & New Installations',
    shortDesc: 'Tile replacement, ridge capping re-bedding, leak detection & complete new roofs.',
    fullDesc: 'Comprehensive residential and commercial roofing solutions. From fixing persistent roof leaks, replacing cracked roof tiles, re-bedding ridge caps with bonding mortar, to installing complete new timber or steel roof structures.',
    category: 'roofing',
    popular: true,
    image: saRoofRepairsImg,
    features: [
      'Emergency roof leak diagnostics & repairs',
      'Broken & shifted tile replacement',
      'Cement mortar ridge capping re-pointing',
      'New roof structural construction & trusses',
      'Flashings, valleys & chimney weather-sealing',
    ],
  },
  {
    id: 'ceiling-installations',
    title: 'Ceiling Installations & Repairs',
    shortDesc: 'Rhino board, PVC ceilings, knotty pine & water damage repairs.',
    fullDesc: 'Professional ceiling design, brand-new installations, and emergency restoration. We replace sagging, moldy, or collapsed water-damaged ceiling boards with modern plasterboard or moisture-resistant PVC ceilings with designer cornices.',
    category: 'site-services',
    image: saCeilingImg,
    features: [
      'Rhino board ceiling & skimmed finishes',
      'Low-maintenance waterproof PVC ceilings',
      'Knotty pine & timber ceiling paneling',
      'Water-damaged sagging ceiling replacement',
      'Cove cornices, polystyrene trims & downlights',
    ],
  },
  {
    id: 'walls-plastering',
    title: 'Walls Plastering & Skimming',
    shortDesc: 'Ultra-smooth rhinolite skimming, exterior plastering & crack bridging.',
    fullDesc: 'High-precision interior skimming and exterior plastering. Transform rough, uneven brickwork or dated walls into silky-smooth modern surfaces ready for painting, plus heavy-duty exterior weather-proof plastering.',
    category: 'painting-plastering',
    image: saPlasterSkimImg,
    features: [
      'Interior Rhinolite skimming to mirror finish',
      'Exterior sand-cement plastering & patching',
      'Structural crack bridging & mesh repair',
      'Rising damp & moisture plaster treatments',
      'Clean edge finishing and reveals',
    ],
  },
  {
    id: 'walls-painting',
    title: 'Interior & Exterior Painting',
    shortDesc: 'Full professional painting teams for exterior walls, roofs & interior finishes.',
    fullDesc: 'Premium residential and commercial painting using top-tier acrylics, waterproof elastomeric wall coatings, and UV-resistant roof paints. Includes deep pressure washing, sugar soap preparation, undercoats, and two durable finish coats.',
    category: 'painting-plastering',
    image: saTeamPaintingImg,
    features: [
      'High-durability weather-guard exterior paint',
      'Smooth, washable interior wall finishes',
      'Roof spray painting (Tiles & Sheet metal)',
      'Damp-seal primers and antifungal coatings',
      'Flawless color matching and clean lines',
    ],
  },
  {
    id: 'tree-felling',
    title: 'Tree Felling & Rubble Removal',
    shortDesc: 'Safe branch trimming over roofs, tree removals & fast site rubble clearing.',
    fullDesc: 'Protect your roof structure from dangerous overhanging branches, falling leaves clogging gutters, and aggressive root systems. We provide safe tree felling, branch lopping, de-stumping, and fast site clearing with prompt rubble disposal.',
    category: 'site-services',
    image: saTreeFellingImg,
    features: [
      'Safe removal of dangerous overhanging branches',
      'Complete tree felling and stump grinding',
      'Building rubble, garden refuse & site clearing',
      'Fully equipped team with safety rigging',
      'Clean site handover upon job completion',
    ],
  },
  {
    id: 'torch-on-waterproofing',
    title: 'Torch-On Waterproofing',
    shortDesc: 'Specialized 4mm thermofused bitumen membrane for flat roofs, parapets & balconies.',
    fullDesc: 'The gold standard for concrete roofs and commercial buildings. Applied by certified flame-torch operators for a seamless, 100% impenetrable seal.',
    category: 'waterproofing',
    image: saTorchonImg,
    features: [
      'Thermofused modified bitumen membrane',
      'Full surface adhesion with no air pockets',
      'Ideal for heavy rainfall and zero-pitch roofs',
      'Parapet wall top wrapping and flashing',
    ],
  },
  {
    id: 'liquid-rubber',
    title: 'Liquid Rubber Waterproofing',
    shortDesc: 'Seamless, highly flexible elastomeric membrane for complex roof contours.',
    fullDesc: 'Advanced cold-applied liquid rubber coating that cures into a continuous rubberized membrane with up to 900% elongation, resisting UV degradation, acid rain, and substrate shifts.',
    category: 'waterproofing',
    image: saLiquidRubberImg,
    features: [
      'Continuous joint-free elastomeric skin',
      'Exceptional UV resistance & thermal flexibility',
      'Ideal for box gutters, flashings & corrugated roofs',
      'Eco-friendly, solvent-free formulation',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Johan Van Der Merwe',
    location: 'Centurion',
    service: 'Concrete Roof Torch-On Waterproofing',
    rating: 5,
    comment: 'Interseal did an incredible job waterproofing our flat concrete roof after years of recurring leaks during heavy summer storms. The torch-on membrane application is flawless. Highly professional team and clean site!',
    date: 'February 2026',
  },
  {
    id: '2',
    name: 'Nomsa Sithole',
    location: 'Midrand',
    service: 'Chromadek Gutters & Roof Painting',
    rating: 5,
    comment: 'Replaced our old leaking gutters with modern charcoal Chromadek gutters and repainted our tile roof. The house looks brand new! Fast quote on WhatsApp and completed on schedule. Excellent service.',
    date: 'January 2026',
  },
  {
    id: '3',
    name: 'David Kruger',
    location: 'Pretoria East',
    service: 'Roof Sheet Waterproofing & Ceiling Repairs',
    rating: 5,
    comment: 'Prompt response when our warehouse IBR roof had multiple screw leaks. They sealed all sheet laps, replaced screws, and repaired the water damaged office ceiling. Reliable and fair pricing.',
    date: 'December 2025',
  },
  {
    id: '4',
    name: 'Sipho Mabasa',
    location: 'Johannesburg North',
    service: 'Wall Skimming & Painting',
    rating: 5,
    comment: 'Skimmed and painted our entire home interior. The rhinolite finish is glass-smooth. Great attention to detail and zero mess left behind. 10/10 recommend Interseal!',
    date: 'January 2026',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How quickly can I get a free quote for my roof or waterproofing?',
    answer: 'We provide same-day free quotations! You can call or WhatsApp us directly at 064 038 9839 or use our online quote calculator. For most properties, we perform a prompt on-site assessment to accurately measure and inspect the issue before providing a transparent written quote with zero obligation.',
  },
  {
    question: 'What is the difference between Torch-On and Liquid Rubber waterproofing?',
    answer: 'Torch-On waterproofing is a 4mm thick, heat-fused bitumen membrane reinforced with polyester, making it the most durable solution for flat concrete roofs, balconies, and parapets. Liquid Rubber is an elastomeric liquid coating ideal for corrugated roof sheets, complex corners, flashing joints, and box gutters where a seamless paint-on membrane is best.',
  },
  {
    question: 'Do you offer a warranty on your waterproofing and roof work?',
    answer: 'Yes! All our professional waterproofing and roofing installations come with a comprehensive workmanship and material guarantee (ranging from 3 to 10 years depending on the selected system). We also provide routine maintenance inspections.',
  },
  {
    question: 'Can you install Chromadek gutters in custom colors to match my roof?',
    answer: 'Yes! Our seamless roll-formed Chromadek gutters are available in popular architectural shades including Charcoal, Anthracite, White, Heritage Green, and Dark Brown, perfectly complementing your roof tiles or sheets.',
  },
  {
    question: 'Do you handle emergency storm leak repairs?',
    answer: 'Yes, we understand that sudden storm leaks can cause devastating damage to ceilings, furniture, and electrical fittings. We offer fast priority call-outs for urgent roof leaks across Gauteng.',
  },
  {
    question: 'What areas do you service?',
    answer: 'We service all residential, commercial, and industrial properties across Pretoria, Centurion, Midrand, Johannesburg, Sandton, Randburg, East Rand, West Rand, and surrounding regions.',
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  {
    id: 'case-1',
    title: 'Flat Concrete Roof Waterproofing',
    service: 'Dual-Layer Torch-on Bitumen System',
    description: 'Eliminated chronic pooling water and internal ceiling damp with heavy-duty 4mm torch-on membrane and silver protective UV shield.',
    beforeImg: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'case-2',
    title: 'Corroded Gutters to Modern Chromadek',
    service: 'Seamless Charcoal Gutter Installation',
    description: 'Replaced rusted sagging steel gutters with modern continuous Chromadek gutters and high-flow downpipes.',
    beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
];
