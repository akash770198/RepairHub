import React from "react";
import data from "@/data/site.json";
import { PageBanner } from "@/app/components/PageBanner";
import { ServiceDetail, ExtendedServiceItem } from "@/app/components/ServiceDetail";
import { notFound } from "next/navigation";

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const siteData = data.RepairHub;
  const { id } = await params;
  
  const servicesVariant = siteData.sections.Services.variants.RepairHubServices1;
  const allServicesRaw = servicesVariant.services;
  
  const service = allServicesRaw.find((s: any) => s.id === id) as ExtendedServiceItem | undefined;

  if (!service) {
    notFound();
  }

  // Create a list of all services for the sidebar menu
  const allServices = allServicesRaw.map((s: any) => ({
    id: s.id,
    title: s.title,
    href: s.link.href,
  }));

  // Read labels from JSON; banner/breadcrumb use this service's title
  const detailPage = (servicesVariant as any).detailPage;
  const servicesCrumbLabel = detailPage?.bannerTitle ?? "Services";
  const labels = detailPage ? {
    sidebarTitle: detailPage.sidebarTitle,
    contactCard: detailPage.contactCard,
    sections: detailPage.sections,
  } : undefined;

  const bannerData = {
    title: service.title,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: servicesCrumbLabel, href: "/services" },
      { label: service.title, href: service.link?.href ?? `/services/${id}` },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={bannerData} />
      
      <ServiceDetail service={service} allServices={allServices} labels={labels} />
    </main>
  );
}

// Generate static params for all services
export function generateStaticParams() {
  const siteData = data.RepairHub;
  const services = siteData.sections.Services.variants.RepairHubServices1.services;
  
  const uniqueIds = Array.from(new Set(services.map((s: any) => s.id)));
  
  return uniqueIds.map((id) => ({
    id: id,
  }));
}
