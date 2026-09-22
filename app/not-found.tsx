import type { Metadata } from "next";
import { site } from "@/data";
import { NotFoundContent } from "@/app/components/NotFoundContent";

export const metadata: Metadata = {
  title: site.notFound.meta.title,
  description: site.notFound.meta.description,
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <NotFoundContent data={site.notFound} />
    </main>
  );
}
