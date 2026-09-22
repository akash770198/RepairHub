import { notFound } from "next/navigation";
import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import {
  ServiceDetail,
  ExtendedServiceItem,
  ServiceDetailLabels,
} from "@/app/components/ServiceDetail";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const servicesVariant = site.services;
  const allServicesRaw = servicesVariant.services;

  const service = allServicesRaw.find((s) => s.id === id) as
    | ExtendedServiceItem
    | undefined;

  if (!service) {
    notFound();
  }

  const allServices = allServicesRaw.map((s) => ({
    id: s.id,
    title: s.title,
    href: s.link.href,
  }));

  const detailPage = (
    servicesVariant as typeof servicesVariant & {
      detailPage?: {
        bannerTitle?: string;
        sidebarTitle: string;
        contactCard: ServiceDetailLabels["contactCard"];
        sections: ServiceDetailLabels["sections"];
      };
    }
  ).detailPage;

  const servicesCrumbLabel = detailPage?.bannerTitle ?? "Services";
  const labels: ServiceDetailLabels | undefined = detailPage
    ? {
        sidebarTitle: detailPage.sidebarTitle,
        contactCard: detailPage.contactCard,
        sections: detailPage.sections,
      }
    : undefined;

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

export function generateStaticParams() {
  const uniqueIds = Array.from(
    new Set(site.services.services.map((s) => s.id))
  );

  return uniqueIds.map((id) => ({ id }));
}
