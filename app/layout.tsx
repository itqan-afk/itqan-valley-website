import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "إتقان فالي | حلول الأعمال والتطوير",
  description: "خدمات تطوير مهني للباحثين عن عمل والموظفين، ومنتجات وحلول أداء وتشغيل لأصحاب الأعمال والمنشآت.",
  openGraph: { title: "إتقان فالي | التطوير المهني وحلول الأعمال", description: "نتقن حضورك المهني ونطوّر طريقة عملك.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "إتقان فالي - التطوير المهني وحلول الأعمال" }], locale: "ar_SA", type: "website" },
  twitter: { card: "summary_large_image", title: "إتقان فالي", description: "التطوير المهني وحلول الأعمال", images: ["/og.png"] },
  icons: { icon: "/itqan-icon.svg", shortcut: "/itqan-icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
