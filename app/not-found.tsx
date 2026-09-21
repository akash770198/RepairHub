import React from "react";
import type { Metadata } from "next";
import data from "@/data/site.json";
import { NotFoundContent } from "@/app/components/NotFoundContent";

const notFoundData = data.RepairHub.sections.NotFound.variants.RepairHubNotFound1;

export const metadata: Metadata = {
  title: notFoundData.meta.title,
  description: notFoundData.meta.description,
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <NotFoundContent data={notFoundData} />
    </main>
  );
}
