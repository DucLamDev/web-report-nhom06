import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingActions } from "@/components/FloatingActions";
import { PageShell } from "@/components/PageShell";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Tech Monopoly Report",
  description: "A report on Big Tech monopoly and Vietnamese Super-apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-foreground flex min-h-screen overflow-hidden`}>
        <ScrollProgress />
        <Sidebar />
        <main className="flex-1 overflow-y-auto px-4 py-16 md:px-8 md:py-8 md:ml-64 w-full h-screen">
          <div className="max-w-7xl mx-auto">
            <PageShell>{children}</PageShell>
            <Footer />
          </div>
        </main>
        <FloatingActions />
      </body>
    </html>
  );
}
