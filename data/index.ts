import siteDataJson from "./site.json";

export const siteData = siteDataJson;
export default siteDataJson;

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type RepairHubSchema = typeof siteData.RepairHub;
export type RepairHubSections = RepairHubSchema["sections"];
export type RepairHubTemplateComponents = RepairHubSchema["templateComponents"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

const sec = siteData.RepairHub.sections;

// ── Strongly Typed Section Variant Data Models ──
export type RepairHubTopbar1Data = typeof sec.Topbar.variants.RepairHubTopbar1;
export type RepairHubHeader1Data = typeof sec.Header.variants.RepairHubHeader1;
export type RepairHubBanner1Data = typeof sec.Banner.variants.RepairHubBanner1;
export type RepairHubFeatures1Data = typeof sec.Features.variants.RepairHubFeatures1;
export type RepairHubAbout1Data = typeof sec.About.variants.RepairHubAbout1;
export type RepairHubServices1Data = typeof sec.Services.variants.RepairHubServices1;
export type RepairHubServicesGridData = typeof sec.Services.variants.RepairHubServicesGrid;
export type RepairHubServicesData = RepairHubServices1Data | RepairHubServicesGridData;
export type RepairHubTestimonials1Data = typeof sec.Testimonials.variants.RepairHubTestimonials1;
export type RepairHubBrands1Data = typeof sec.Brands.variants.RepairHubBrands1;
export type RepairHubStats1Data = typeof sec.Stats.variants.RepairHubStats1;
export type RepairHubStatsInlineData = typeof sec.Stats.variants.RepairHubStatsInline;
export type RepairHubStatsData = RepairHubStats1Data | RepairHubStatsInlineData;
export type RepairHubTeam1Data = typeof sec.Team.variants.RepairHubTeam1;
export type RepairHubTeamGridData = typeof sec.Team.variants.RepairHubTeamGrid;
export type RepairHubTeamData = RepairHubTeam1Data | RepairHubTeamGridData;
export type RepairHubFAQ1Data = typeof sec.FAQ.variants.RepairHubFAQ1;
export type RepairHubFooter1Data = typeof sec.Footer.variants.RepairHubFooter1;
export type AboutUsBannerData = typeof sec.PageBanner.variants.AboutUsBanner;
export type WhyChooseUsBannerData = typeof sec.PageBanner.variants.WhyChooseUsBanner;
export type TeamsBannerData = typeof sec.PageBanner.variants.TeamsBanner;
export type RepairServiceBannerData = typeof sec.PageBanner.variants.RepairServiceBanner;
export type BrandsBannerData = typeof sec.PageBanner.variants.BrandsBanner;
export type BookRepairBannerData = typeof sec.PageBanner.variants.BookRepairBanner;
export type PricingBannerData = typeof sec.PageBanner.variants.PricingBanner;
export type GalleryBannerData = typeof sec.PageBanner.variants.GalleryBanner;
export type TestimonialsBannerData = typeof sec.PageBanner.variants.TestimonialsBanner;
export type BlogsBannerData = typeof sec.PageBanner.variants.BlogsBanner;
export type FaqsBannerData = typeof sec.PageBanner.variants.FaqsBanner;
export type ContactBannerData = typeof sec.PageBanner.variants.ContactBanner;
export type RefundPolicyBannerData = typeof sec.PageBanner.variants.RefundPolicyBanner;
export type BlogDetailBannerData = typeof sec.PageBanner.variants.BlogDetailBanner;
export type PageBannerPayload = {
  title: string;
  breadcrumbs: { label: string; href: string }[];
  backgroundImage?: string;
};
export type PageBannerData =
  | AboutUsBannerData
  | WhyChooseUsBannerData
  | TeamsBannerData
  | RepairServiceBannerData
  | BrandsBannerData
  | BookRepairBannerData
  | PricingBannerData
  | GalleryBannerData
  | TestimonialsBannerData
  | BlogsBannerData
  | FaqsBannerData
  | ContactBannerData
  | RefundPolicyBannerData
  | BlogDetailBannerData
  | PageBannerPayload;
export type WhyChooseUs1Data = typeof sec.WhyChooseUs.variants.WhyChooseUs1;
export type FeatureCards1Data = typeof sec.FeatureCards.variants.FeatureCards1;
export type RepairHubGallery1Data = typeof sec.Gallery.variants.RepairHubGallery1;
export type RepairHubPricing1Data = typeof sec.Pricing.variants.RepairHubPricing1;
export type RepairHubFaqs1Data = typeof sec.Faqs.variants.RepairHubFaqs1;
export type RepairHubBlogs1Data = typeof sec.Blogs.variants.RepairHubBlogs1;
export type RepairHubContact1Data = typeof sec.Contact.variants.RepairHubContact1;
export type RepairHubCareer1Data = typeof sec.Career.variants.RepairHubCareer1;
export type RepairHubNotFound1Data = typeof sec.NotFound.variants.RepairHubNotFound1;

// Composite data shapes used by multi-source components
export type RepairHubHeaderBundle = {
  topbarData: RepairHubTopbar1Data;
  headerData: RepairHubHeader1Data;
};
export type RepairHubHeroBundle = {
  bannerData: RepairHubBanner1Data;
  featuresData: RepairHubFeatures1Data;
};

// Entity types derived from JSON arrays
export type RepairHubServiceItem = RepairHubServices1Data["services"][number];
export type RepairHubTeamMember = RepairHubTeam1Data["members"][number];
export type RepairHubBlogPost = RepairHubBlogs1Data["posts"][number];
export type RepairHubCareerJob = NonNullable<RepairHubCareer1Data["jobs"]>[number];
export type RepairHubFaqQuestion = RepairHubFaqs1Data["questions"][number];

// ── Flattened site map for standalone + dual-mode fallbacks ──
const siteMap = {
  topbar: sec.Topbar.variants.RepairHubTopbar1,
  header: sec.Header.variants.RepairHubHeader1,
  banner: sec.Banner.variants.RepairHubBanner1,
  features: sec.Features.variants.RepairHubFeatures1,
  about: sec.About.variants.RepairHubAbout1,
  services: sec.Services.variants.RepairHubServices1,
  servicesGrid: sec.Services.variants.RepairHubServicesGrid,
  testimonials: sec.Testimonials.variants.RepairHubTestimonials1,
  brands: sec.Brands.variants.RepairHubBrands1,
  stats: sec.Stats.variants.RepairHubStats1,
  statsInline: sec.Stats.variants.RepairHubStatsInline,
  team: sec.Team.variants.RepairHubTeam1,
  teamGrid: sec.Team.variants.RepairHubTeamGrid,
  faq: sec.FAQ.variants.RepairHubFAQ1,
  /** @deprecated use `faq` — kept for temporary compatibility */
  fAQ: sec.FAQ.variants.RepairHubFAQ1,
  footer: sec.Footer.variants.RepairHubFooter1,
  aboutUsBanner: sec.PageBanner.variants.AboutUsBanner,
  whyChooseUsBanner: sec.PageBanner.variants.WhyChooseUsBanner,
  teamsBanner: sec.PageBanner.variants.TeamsBanner,
  repairServiceBanner: sec.PageBanner.variants.RepairServiceBanner,
  brandsBanner: sec.PageBanner.variants.BrandsBanner,
  bookRepairBanner: sec.PageBanner.variants.BookRepairBanner,
  pricingBanner: sec.PageBanner.variants.PricingBanner,
  galleryBanner: sec.PageBanner.variants.GalleryBanner,
  testimonialsBanner: sec.PageBanner.variants.TestimonialsBanner,
  blogsBanner: sec.PageBanner.variants.BlogsBanner,
  faqsBanner: sec.PageBanner.variants.FaqsBanner,
  contactBanner: sec.PageBanner.variants.ContactBanner,
  refundPolicyBanner: sec.PageBanner.variants.RefundPolicyBanner,
  blogDetailBanner: sec.PageBanner.variants.BlogDetailBanner,
  whyChooseUs: sec.WhyChooseUs.variants.WhyChooseUs1,
  featureCards: sec.FeatureCards.variants.FeatureCards1,
  gallery: sec.Gallery.variants.RepairHubGallery1,
  pricing: sec.Pricing.variants.RepairHubPricing1,
  faqs: sec.Faqs.variants.RepairHubFaqs1,
  blogs: sec.Blogs.variants.RepairHubBlogs1,
  contact: sec.Contact.variants.RepairHubContact1,
  career: sec.Career.variants.RepairHubCareer1,
  notFound: sec.NotFound.variants.RepairHubNotFound1,
  RepairHub: siteData.RepairHub,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
