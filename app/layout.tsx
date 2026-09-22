import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { site } from "@/data";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RepairHub - Expert Mobile Repair Solutions",
  description: "Screen Replacement, Battery Fix, Software Issue or Any Damage – We've Got You Covered.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <div className="flex min-h-screen flex-col overflow-x-clip">
            <Header data={{ topbarData: site.topbar, headerData: site.header }} />
            <div className="flex flex-1 flex-col">{children}</div>
            <Footer data={site.footer} />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
