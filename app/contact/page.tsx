import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { ContactContent } from "@/app/components/ContactContent";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={site.contactBanner} />
      <ContactContent data={site.contact} />
    </main>
  );
}
