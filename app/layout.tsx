import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "إتقان فالي | للتطوير وحلول الأعمال",
  description: "نحوّل الخبرة إلى أثر واضح عبر التطوير المهني، وقياس الأداء، وصناعة القرار، وهندسة التشغيل.",
  openGraph: { title: "إتقان فالي | للتطوير وحلول الأعمال", description: "نحوّل الخبرة إلى أثر واضح.", images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "إتقان فالي - للتطوير وحلول الأعمال" }], locale: "ar_SA", type: "website" },
  twitter: { card: "summary_large_image", title: "إتقان فالي", description: "للتطوير وحلول الأعمال", images: ["/og-v2.png"] },
  icons: { icon: "/itqan-mark-open.png?v=1", shortcut: "/itqan-mark-open.png?v=1", apple: "/itqan-mark-open.png?v=1" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><head><link rel="preconnect" href="https://cdn.jsdelivr.net" /><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dawod/thmanyah-font-web/sans.css" /></head><body>{children}</body></html>;
}
