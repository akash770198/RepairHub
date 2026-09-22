import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { GalleryContent } from "@/app/components/GalleryContent";

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={site.galleryBanner} />
      <GalleryContent data={site.gallery} />
    </main>
  );
}
