import siteDataJson from "./site.json";

export const siteData = siteDataJson;

export type SectionProps<T = unknown> = {
  data?: T;
  className?: string;
};

export type RepairHubTopbar1Data = typeof siteData.RepairHub.sections.Topbar.variants.RepairHubTopbar1;
export type RepairHubHeader1Data = typeof siteData.RepairHub.sections.Header.variants.RepairHubHeader1;
export type RepairHubBanner1Data = typeof siteData.RepairHub.sections.Banner.variants.RepairHubBanner1;
export type RepairHubFeatures1Data = typeof siteData.RepairHub.sections.Features.variants.RepairHubFeatures1;
export type RepairHubAbout1Data = typeof siteData.RepairHub.sections.About.variants.RepairHubAbout1;
export type RepairHubServices1Data = typeof siteData.RepairHub.sections.Services.variants.RepairHubServices1;
export type RepairHubServicesGridData = typeof siteData.RepairHub.sections.Services.variants.RepairHubServicesGrid;
export type RepairHubTestimonials1Data = typeof siteData.RepairHub.sections.Testimonials.variants.RepairHubTestimonials1;
export type RepairHubBrands1Data = typeof siteData.RepairHub.sections.Brands.variants.RepairHubBrands1;
export type RepairHubStats1Data = typeof siteData.RepairHub.sections.Stats.variants.RepairHubStats1;
export type RepairHubStatsInlineData = typeof siteData.RepairHub.sections.Stats.variants.RepairHubStatsInline;
export type RepairHubTeam1Data = typeof siteData.RepairHub.sections.Team.variants.RepairHubTeam1;
export type RepairHubTeamGridData = typeof siteData.RepairHub.sections.Team.variants.RepairHubTeamGrid;
export type RepairHubFAQ1Data = typeof siteData.RepairHub.sections.FAQ.variants.RepairHubFAQ1;
export type RepairHubFooter1Data = typeof siteData.RepairHub.sections.Footer.variants.RepairHubFooter1;
export type AboutUsBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.AboutUsBanner;
export type WhyChooseUsBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.WhyChooseUsBanner;
export type TeamsBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.TeamsBanner;
export type RepairServiceBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.RepairServiceBanner;
export type BrandsBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.BrandsBanner;
export type BookRepairBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.BookRepairBanner;
export type PricingBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.PricingBanner;
export type GalleryBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.GalleryBanner;
export type TestimonialsBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.TestimonialsBanner;
export type BlogsBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.BlogsBanner;
export type FaqsBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.FaqsBanner;
export type ContactBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.ContactBanner;
export type RefundPolicyBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.RefundPolicyBanner;
export type BlogDetailBannerData = typeof siteData.RepairHub.sections.PageBanner.variants.BlogDetailBanner;
export type WhyChooseUs1Data = typeof siteData.RepairHub.sections.WhyChooseUs.variants.WhyChooseUs1;
export type FeatureCards1Data = typeof siteData.RepairHub.sections.FeatureCards.variants.FeatureCards1;
export type RepairHubGallery1Data = typeof siteData.RepairHub.sections.Gallery.variants.RepairHubGallery1;
export type RepairHubPricing1Data = typeof siteData.RepairHub.sections.Pricing.variants.RepairHubPricing1;
export type RepairHubFaqs1Data = typeof siteData.RepairHub.sections.Faqs.variants.RepairHubFaqs1;
export type RepairHubBlogs1Data = typeof siteData.RepairHub.sections.Blogs.variants.RepairHubBlogs1;
export type RepairHubContact1Data = typeof siteData.RepairHub.sections.Contact.variants.RepairHubContact1;
export type RepairHubCareer1Data = typeof siteData.RepairHub.sections.Career.variants.RepairHubCareer1;
export type RepairHubNotFound1Data = typeof siteData.RepairHub.sections.NotFound.variants.RepairHubNotFound1;

export const site = {
  topbar: siteData.RepairHub.sections.Topbar.variants.RepairHubTopbar1,
  header: siteData.RepairHub.sections.Header.variants.RepairHubHeader1,
  banner: siteData.RepairHub.sections.Banner.variants.RepairHubBanner1,
  features: siteData.RepairHub.sections.Features.variants.RepairHubFeatures1,
  about: siteData.RepairHub.sections.About.variants.RepairHubAbout1,
  services: siteData.RepairHub.sections.Services.variants.RepairHubServices1,
  servicesGrid: siteData.RepairHub.sections.Services.variants.RepairHubServicesGrid,
  testimonials: siteData.RepairHub.sections.Testimonials.variants.RepairHubTestimonials1,
  brands: siteData.RepairHub.sections.Brands.variants.RepairHubBrands1,
  stats: siteData.RepairHub.sections.Stats.variants.RepairHubStats1,
  statsInline: siteData.RepairHub.sections.Stats.variants.RepairHubStatsInline,
  team: siteData.RepairHub.sections.Team.variants.RepairHubTeam1,
  teamGrid: siteData.RepairHub.sections.Team.variants.RepairHubTeamGrid,
  fAQ: siteData.RepairHub.sections.FAQ.variants.RepairHubFAQ1,
  footer: siteData.RepairHub.sections.Footer.variants.RepairHubFooter1,
  aboutUsBanner: siteData.RepairHub.sections.PageBanner.variants.AboutUsBanner,
  whyChooseUsBanner: siteData.RepairHub.sections.PageBanner.variants.WhyChooseUsBanner,
  teamsBanner: siteData.RepairHub.sections.PageBanner.variants.TeamsBanner,
  repairServiceBanner: siteData.RepairHub.sections.PageBanner.variants.RepairServiceBanner,
  brandsBanner: siteData.RepairHub.sections.PageBanner.variants.BrandsBanner,
  bookRepairBanner: siteData.RepairHub.sections.PageBanner.variants.BookRepairBanner,
  pricingBanner: siteData.RepairHub.sections.PageBanner.variants.PricingBanner,
  galleryBanner: siteData.RepairHub.sections.PageBanner.variants.GalleryBanner,
  testimonialsBanner: siteData.RepairHub.sections.PageBanner.variants.TestimonialsBanner,
  blogsBanner: siteData.RepairHub.sections.PageBanner.variants.BlogsBanner,
  faqsBanner: siteData.RepairHub.sections.PageBanner.variants.FaqsBanner,
  contactBanner: siteData.RepairHub.sections.PageBanner.variants.ContactBanner,
  refundPolicyBanner: siteData.RepairHub.sections.PageBanner.variants.RefundPolicyBanner,
  blogDetailBanner: siteData.RepairHub.sections.PageBanner.variants.BlogDetailBanner,
  whyChooseUs: siteData.RepairHub.sections.WhyChooseUs.variants.WhyChooseUs1,
  featureCards: siteData.RepairHub.sections.FeatureCards.variants.FeatureCards1,
  gallery: siteData.RepairHub.sections.Gallery.variants.RepairHubGallery1,
  pricing: siteData.RepairHub.sections.Pricing.variants.RepairHubPricing1,
  faqs: siteData.RepairHub.sections.Faqs.variants.RepairHubFaqs1,
  blogs: siteData.RepairHub.sections.Blogs.variants.RepairHubBlogs1,
  contact: siteData.RepairHub.sections.Contact.variants.RepairHubContact1,
  career: siteData.RepairHub.sections.Career.variants.RepairHubCareer1,
  notFound: siteData.RepairHub.sections.NotFound.variants.RepairHubNotFound1,
};
