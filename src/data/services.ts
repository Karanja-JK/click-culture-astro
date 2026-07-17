import type { LucideIcon } from "lucide-react";
import { Brain, Cog, Sparkles, TrendingUp } from "lucide-react";

export type ServicePoint = { lead: string; detail: string };
export type ServiceDef = {
  name: string;
  slug: string;
  tagline: string;
  icon: LucideIcon;
  points: ServicePoint[];
  isLight: boolean;
};

export const SERVICES: ServiceDef[] = [
  {
    name: "Strategy and Thinking",
    slug: "strategy",
    icon: Brain,
    tagline: "We build the thinking behind every platform, message, and decision.",
    isLight: false,
    points: [
      {
        lead: "Social media & platform strategy",
        detail:
          "Platform-native plans built around where your buyers actually spend time, not where everyone else posts.",
      },
      {
        lead: "Brand positioning & messaging",
        detail:
          "A clear, differentiated market position that makes your brand the obvious choice in a crowded category.",
      },
      {
        lead: "Buyer psychology frameworks",
        detail:
          "Decision-making models that align every creative decision with how your audience actually thinks and buys.",
      },
    ],
  },
  {
    name: "360 Account Management",
    slug: "account-management",
    icon: Cog,
    tagline: "We take ownership of every account, every day, end to end.",
    isLight: true,
    points: [
      {
        lead: "Social Media Management",
        detail:
          "Consistent, on-brand presence across every platform, with publishing, engagement, and moderation handled end-to-end.",
      },
      {
        lead: "Community Management",
        detail:
          "Active community building that turns followers into advocates, with conversations, responses, and relationships managed daily.",
      },
      {
        lead: "Reporting",
        detail:
          "Clear, commercial reporting that ties every metric back to business outcomes, not vanity numbers.",
      },
    ],
  },
  {
    name: "Content",
    slug: "content",
    icon: Sparkles,
    tagline: "Direction and visuals that make your brand impossible to ignore.",
    isLight: false,
    points: [
      {
        lead: "Creative Direction",
        detail:
          "The visual and conceptual thinking that makes your content instantly recognisable, and impossible to look past.",
      },
      {
        lead: "Photography and Videography",
        detail:
          "High-quality visual assets produced for platform performance, built for results, not just aesthetics.",
      },
    ],
  },
  {
    name: "Conversion and Growth",
    slug: "conversion-growth",
    icon: TrendingUp,
    tagline: "We turn attention into pipeline, and pipeline into revenue.",
    isLight: true,
    points: [
      {
        lead: "Ad Management, Strategy and Optimization",
        detail:
          "Live campaigns monitored and tuned daily, with budgets, bids, and creative rotations adjusted for compounding returns.",
      },
      {
        lead: "Email Marketing",
        detail:
          "Sequences that nurture leads into buyers and buyers into repeat customers, running 24/7 without manual effort.",
      },
    ],
  },
];
