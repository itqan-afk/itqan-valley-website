import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "إتقان فالي | حلول الأعمال والتطوير",
  description: "منتجات رقمية وحلول تطوير تساعد المنشآت على تنظيم الأداء والتشغيل وتحويل البيانات إلى إجراءات وقرارات واضحة.",
  openGraph: { title: "إتقان فالي | حلول الأعمال والتطوير", description: "نحوّل أعمالك إلى أنظمة أكثر وضوحًا وكفاءة.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "إتقان فالي - حلول الأعمال والتطوير" }], locale: "ar_SA", type: "website" },
  twitter: { card: "summary_large_image", title: "إتقان فالي", description: "حلول الأعمال والتطوير", images: ["/og.png"] },
  icons: { icon: "/itqan-icon.svg", shortcut: "/itqan-icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
