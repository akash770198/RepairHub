import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { BlogsContent } from "@/app/components/BlogsContent";

export default function BlogsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={site.blogsBanner} />
      <BlogsContent data={site.blogs} />
    </main>
  );
}
