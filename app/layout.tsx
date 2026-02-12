import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "台式網域命名",
  url: "https://www.taiwannamer.com",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taiwannamer.com"),
  title: {
    default: "台式網域命名 | AI 幫你的品牌算個好命 (網域生成與架站攻略)",
    template: "%s | 台式網域命名",
  },
  description:
    "全台唯一結合在地諧音梗與命理的 AI 網域生成器。不只幫你取好名，還教你用 Bluehost、Namecheap 快速架站，開啟你的創業之路。",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "48x48", type: "image/png" },
      { url: "/logo.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "impact-site-verification": "7f43056d-bae8-400e-a6fc-4737172460c9",
  },
  keywords: [
    "公司命名",
    "網域",
    "網域賺錢",
    "網域產生器",
    "AI取名",
    "諧音梗生成器",
    "台灣品牌命名",
    "Domain Name Generator",
    "創業工具",
    "GoDaddy比價",
    "Namecheap推薦",
    "品牌算命",
  ],
  openGraph: {
    title: "台式網域命名 | AI 幫你的品牌算個好命 (網域生成與架站攻略)",
    description:
      "全台唯一結合在地諧音梗與命理的 AI 網域生成器。不只幫你取好名，還教你用 Bluehost、Namecheap 快速架站，開啟你的創業之路。",
    url: "https://www.taiwannamer.com",
    siteName: "台式網域命名",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="dark">
      <body
        className={`${notoSansTC.variable} font-sans antialiased bg-[#0a0a0a] text-zinc-100 flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <div className="flex-1 flex flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
