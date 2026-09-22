import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { RefundPolicyContent } from "@/app/components/RefundPolicyContent";

export default function RefundPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={site.refundPolicyBanner} />
      <RefundPolicyContent />
    </main>
  );
}
