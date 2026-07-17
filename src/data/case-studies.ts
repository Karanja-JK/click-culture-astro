import type { StatDef } from "@/components/site/CaseStudyTemplate";
import chipperHero from "@/assets/case-studies/chipper/hero.webp";
import chipperGallery1 from "@/assets/case-studies/chipper/gallery-1.webp";
import chipperGallery2 from "@/assets/case-studies/chipper/gallery-2.webp";
import chipperGallery3 from "@/assets/case-studies/chipper/gallery-3.webp";
import chipperGallery4 from "@/assets/case-studies/chipper/gallery-4.webp";
import chipperGallery5 from "@/assets/case-studies/chipper/gallery-5.webp";
import chipperGallery6 from "@/assets/case-studies/chipper/gallery-6.webp";
import unileverHero from "@/assets/case-studies/unilever/hero.webp";
import unileverGallery1 from "@/assets/case-studies/unilever/gallery-1.webp";
import unileverGallery2 from "@/assets/case-studies/unilever/gallery-2.webp";
import unileverGallery3 from "@/assets/case-studies/unilever/gallery-3.webp";
import unileverGallery4 from "@/assets/case-studies/unilever/gallery-4.webp";
import unileverGallery5 from "@/assets/case-studies/unilever/gallery-5.webp";
import unileverGallery6 from "@/assets/case-studies/unilever/gallery-6.webp";
import lintonsHero from "@/assets/case-studies/lintons/hero.webp";
import lintonsGallery1 from "@/assets/case-studies/lintons/gallery-1.webp";
import lintonsGallery2 from "@/assets/case-studies/lintons/gallery-2.webp";
import lintonsGallery3 from "@/assets/case-studies/lintons/gallery-3.webp";
import lintonsGallery4 from "@/assets/case-studies/lintons/gallery-4.webp";
import lintonsGallery5 from "@/assets/case-studies/lintons/gallery-5.webp";
import foodLibraryHero from "@/assets/case-studies/food-library/hero.webp";
import intiGallery1 from "@/assets/case-studies/food-library/inti/gallery-1.webp";
import intiGallery2 from "@/assets/case-studies/food-library/inti/gallery-2.webp";
import intiGallery3 from "@/assets/case-studies/food-library/inti/gallery-3.webp";
import intiGallery4 from "@/assets/case-studies/food-library/inti/gallery-4.webp";
import intiGallery5 from "@/assets/case-studies/food-library/inti/gallery-5.webp";
import intiGallery6 from "@/assets/case-studies/food-library/inti/gallery-6.webp";
import intiGallery7 from "@/assets/case-studies/food-library/inti/gallery-7.webp";
import intiGallery8 from "@/assets/case-studies/food-library/inti/gallery-8.webp";
import intiGallery9 from "@/assets/case-studies/food-library/inti/gallery-9.webp";
import bambinoGallery1 from "@/assets/case-studies/food-library/bambino/gallery-1.webp";
import bambinoGallery2 from "@/assets/case-studies/food-library/bambino/gallery-2.webp";
import bambinoGallery3 from "@/assets/case-studies/food-library/bambino/gallery-3.webp";
import bambinoGallery4 from "@/assets/case-studies/food-library/bambino/gallery-4.webp";
import bambinoGallery5 from "@/assets/case-studies/food-library/bambino/gallery-5.webp";
import bambinoGallery6 from "@/assets/case-studies/food-library/bambino/gallery-6.webp";
import bambinoGallery7 from "@/assets/case-studies/food-library/bambino/gallery-7.webp";
import bambinoGallery8 from "@/assets/case-studies/food-library/bambino/gallery-8.webp";
import bambinoGallery9 from "@/assets/case-studies/food-library/bambino/gallery-9.webp";
import botanicaGallery1 from "@/assets/case-studies/food-library/botanica/gallery-1.webp";
import botanicaGallery2 from "@/assets/case-studies/food-library/botanica/gallery-2.webp";
import botanicaGallery3 from "@/assets/case-studies/food-library/botanica/gallery-3.webp";
import botanicaGallery4 from "@/assets/case-studies/food-library/botanica/gallery-4.webp";
import botanicaGallery5 from "@/assets/case-studies/food-library/botanica/gallery-5.webp";
import botanicaGallery6 from "@/assets/case-studies/food-library/botanica/gallery-6.webp";
import botanicaGallery7 from "@/assets/case-studies/food-library/botanica/gallery-7.webp";
import botanicaGallery8 from "@/assets/case-studies/food-library/botanica/gallery-8.webp";
import botanicaGallery9 from "@/assets/case-studies/food-library/botanica/gallery-9.webp";
import slateGallery1 from "@/assets/case-studies/food-library/slate/gallery-1.webp";
import slateGallery2 from "@/assets/case-studies/food-library/slate/gallery-2.webp";
import slateGallery3 from "@/assets/case-studies/food-library/slate/gallery-3.webp";
import slateGallery4 from "@/assets/case-studies/food-library/slate/gallery-4.webp";
import slateGallery5 from "@/assets/case-studies/food-library/slate/gallery-5.webp";
import slateGallery6 from "@/assets/case-studies/food-library/slate/gallery-6.webp";
import slateGallery7 from "@/assets/case-studies/food-library/slate/gallery-7.webp";
import slateGallery8 from "@/assets/case-studies/food-library/slate/gallery-8.webp";
import slateGallery9 from "@/assets/case-studies/food-library/slate/gallery-9.webp";

export type CaseStudyRecord = {
  slug: string;
  featured: boolean;
  // Work index card fields
  client: string;
  descriptor: string;
  metric: string;
  tag: string;
  initials: string;
  tone: "blue" | "dark" | "soft";
  // Homepage card overrides (only when different from work index)
  featuredClient?: string;
  featuredMetric?: string;
  // Case study page
  subBrands: string;
  tagline: string;
  challenge: string;
  whatWeDid: Array<{ lead: string; body: string }>;
  results: StatDef[];
  heroImage?: string;
  gallery?: string[];
  galleryGroups?: Array<{ name: string; images: string[] }>;
};

export const CASE_STUDIES: CaseStudyRecord[] = [
  {
    slug: "food-library",
    featured: true,
    client: "The Food Library Group",
    featuredClient: "Food Library Group",
    descriptor: "INTI · Meso · Bambino · Botanica × Mercado · Slate · Mercado",
    metric: "24–72h sell-out speed · 3× event booking increase",
    featuredMetric: "Sold out in 24–72h, repeatedly",
    tag: "F&B",
    initials: "FL",
    tone: "blue",
    subBrands: "INTI · Meso · Bambino · Botanica × Mercado · Slate · Mercado",
    tagline:
      "Six restaurant concepts with genuine quality and no commercial story. We fixed that.",
    challenge:
      "The Food Library Group was running six distinct restaurant concepts, each with real quality behind it, but marketing them on offers and discounts rather than desire. Their content was active but not persuasive. Events went underpromoted. There was no demand engine, only noise.",
    whatWeDid: [
      {
        lead: "Killed weak promotional offers and replaced them with demand-led concepts",
        body: "Including Unlimited Sushi, framed as a must-have experience, not a discount.",
      },
      {
        lead: "Developed localized cocktail and menu storytelling",
        body: "Tailored to Nairobi tastes and occasions, giving each venue a distinct voice.",
      },
      {
        lead: "Built a teaser-to-booking sequence",
        body: "Engineered urgency and sell-out conditions before each event launched.",
      },
      {
        lead: "Created distinct creative direction per venue",
        body: "Preventing brand blur across the six-concept portfolio.",
      },
    ],
    results: [
      { value: 72, prefix: "24–", suffix: "h", label: "Sell-out speed" },
      { value: 3, suffix: "×", label: "Event booking increase" },
      { value: 50, prefix: "30–", suffix: "%", label: "Booking inquiry growth" },
      { value: 35, prefix: "25–", suffix: "%", label: "Ad spend reduction" },
    ],
    heroImage: foodLibraryHero,
    galleryGroups: [
      {
        name: "INTI",
        images: [
          intiGallery1,
          intiGallery2,
          intiGallery3,
          intiGallery4,
          intiGallery5,
          intiGallery6,
          intiGallery7,
          intiGallery8,
          intiGallery9,
        ],
      },
      {
        name: "Bambino",
        images: [
          bambinoGallery1,
          bambinoGallery2,
          bambinoGallery3,
          bambinoGallery4,
          bambinoGallery5,
          bambinoGallery6,
          bambinoGallery7,
          bambinoGallery8,
          bambinoGallery9,
        ],
      },
      {
        name: "Botanica",
        images: [
          botanicaGallery1,
          botanicaGallery2,
          botanicaGallery3,
          botanicaGallery4,
          botanicaGallery5,
          botanicaGallery6,
          botanicaGallery7,
          botanicaGallery8,
          botanicaGallery9,
        ],
      },
      {
        name: "Slate",
        images: [
          slateGallery1,
          slateGallery2,
          slateGallery3,
          slateGallery4,
          slateGallery5,
          slateGallery6,
          slateGallery7,
          slateGallery8,
          slateGallery9,
        ],
      },
    ],
  },
  {
    slug: "lintons",
    featured: true,
    client: "Lintons Beauty World",
    descriptor: "MAC · Shea Moisture · Note Cosmetics · Black Opal Kenya",
    metric: "+80% organic reach · 5× campaign sales",
    tag: "Beauty",
    initials: "LB",
    tone: "soft",
    subBrands: "MAC · Shea Moisture · Note Cosmetics · Black Opal Kenya",
    tagline:
      "Global beauty brands, underperforming locally. We made them commercially relevant.",
    challenge:
      "Lintons was stocking strong global brands but local content wasn't driving purchase. Paid media was optimized for reach, not conversion. E-commerce was a massively underused revenue channel. The gap between brand awareness and transaction was wide.",
    whatWeDid: [
      {
        lead: "Rebuilt paid media from reach-focused to conversion-focused",
        body: "Optimizing for purchase intent at every funnel stage.",
      },
      {
        lead: "Engineered demand through tutorial content and product storytelling",
        body: "Connected global brand equity to local occasion and aspiration.",
      },
      {
        lead: "Managed DMs as a direct, high-intent sales channel",
        body: "Turning social conversation into committed revenue.",
      },
      {
        lead: "Unlocked e-commerce as a primary revenue stream",
        body: "With dedicated launch campaigns and product sequencing.",
      },
    ],
    results: [
      { value: 80, prefix: "+", suffix: "%", label: "Organic reach lift" },
      { value: 5, suffix: "×", label: "Campaign sales" },
      { value: 25, prefix: "+", suffix: "%", label: "E-commerce revenue growth" },
      { value: 35, prefix: "+", suffix: "%", label: "Cost efficiency gain" },
    ],
    heroImage: lintonsHero,
    gallery: [
      lintonsGallery1,
      lintonsGallery2,
      lintonsGallery3,
      lintonsGallery4,
      lintonsGallery5,
    ],
  },
  {
    slug: "unilever",
    featured: true,
    client: "Unilever",
    descriptor: "Sunlight · Geisha · Royco · Axe · Pepsodent · Vaseline · Even & Lovely",
    metric: "Posting adherence 40%→95% · reach +120%",
    tag: "FMCG",
    initials: "UL",
    tone: "dark",
    subBrands: "Sunlight · Geisha · Royco · Axe · Pepsodent · Vaseline · Even & Lovely",
    tagline:
      "Seven brands, no unified rhythm. We built the structure that made them all move.",
    challenge:
      "Unilever's portfolio needed discipline across social channels, distinct brand voices, cohesive monthly calendars, and an influencer strategy that scaled systematically rather than opportunistically. Posting adherence was at 40%. Engagement wasn't compounding.",
    whatWeDid: [
      {
        lead: "Built tailored monthly content calendars for each of the seven brands",
        body: "Creating operational rhythm where there was inconsistency.",
      },
      {
        lead: "Developed distinct creative direction per category",
        body: "Household care, personal care, and grooming, preventing brand blur across the portfolio.",
      },
      {
        lead: "Pushed platform-optimized, short-form video-first formats",
        body: "Meeting audiences where attention lives.",
      },
      {
        lead: "Structured a scalable influencer programme",
        body: "Executing 12+ creator campaigns with performance tracking and real distribution metrics.",
      },
    ],
    results: [
      { value: 95, suffix: "%", label: "Posting adherence" },
      { value: 120, prefix: "+", suffix: "%", label: "Reach increase" },
      { value: 6.8, decimals: 1, suffix: "%", label: "Engagement rate" },
      { value: 12, prefix: "+", label: "Creator campaigns executed" },
    ],
    heroImage: unileverHero,
    gallery: [
      unileverGallery1,
      unileverGallery2,
      unileverGallery3,
      unileverGallery4,
      unileverGallery5,
      unileverGallery6,
    ],
  },
  {
    slug: "chipper-cash",
    featured: true,
    client: "Chipper Cash",
    descriptor: "Pan-African mobile money",
    metric: "+95% app downloads · retention 22%→61%",
    featuredMetric: "+95% app downloads · 2.5× conversion",
    tag: "Fintech",
    initials: "CC",
    tone: "blue",
    subBrands: "",
    tagline:
      "In crowded fintech, we turned content into downloads, and downloads into retention.",
    challenge:
      "Chipper Cash needed accelerated growth in a market full of noise. Content was inconsistent, engagement wasn't converting into active app usage, and the goal was measurable: real downloads and long-term retention, not vanity reach.",
    whatWeDid: [
      {
        lead: "Structured content around three clear pillars",
        body: "Financial education, lifestyle relevance, and cultural moments, giving every post a commercial job to do.",
      },
      {
        lead: "Deployed influencers as performance partners, not awareness vehicles",
        body: "Real use-case content with trackable conversion intent.",
      },
      {
        lead: "Sharpened messaging to lead with what Chipper Cash does for real life",
        body: "Not just what it is, but closing the gap between awareness and app activation.",
      },
    ],
    results: [
      { value: 110, prefix: "+", suffix: "%", label: "Engagement growth" },
      { value: 95, prefix: "+", suffix: "%", label: "App download surge" },
      { value: 61, suffix: "%", label: "User retention rate" },
      { value: 4.6, decimals: 1, suffix: "%", label: "Conversion rate" },
    ],
    heroImage: chipperHero,
    gallery: [
      chipperGallery1,
      chipperGallery2,
      chipperGallery3,
      chipperGallery4,
      chipperGallery5,
      chipperGallery6,
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudyRecord {
  const record = CASE_STUDIES.find((c) => c.slug === slug);
  if (!record) throw new Error(`No case study found for slug: ${slug}`);
  return record;
}
