import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

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
          <div className="flex flex-col min-h-screen overflow-x-clip">
            {children}
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
