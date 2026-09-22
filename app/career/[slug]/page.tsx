import { notFound } from "next/navigation";
import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { CareerDetailContent } from "@/app/components/CareerDetailContent";

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const careerData = site.career;

  const job = careerData.jobs?.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  const otherJobs = careerData.jobs?.filter((j) => j.slug !== slug) || [];

  const bannerData = {
    title: "Career Detail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Career", href: "/career" },
      { label: "Career Detail", href: `/career/${slug}` },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <PageBanner data={bannerData} />
      <CareerDetailContent
        job={job}
        sidebar={careerData.sidebar}
        otherJobs={otherJobs}
      />
    </main>
  );
}
