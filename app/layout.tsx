import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "台味命名大師 | AI 幫你的品牌算個好命 (網域生成器)",
  description: "全台唯一！專懂台灣諧音梗、在地文化、算命筆畫的 AI 網域生成器。輸入關鍵字，自動生成好記的英文網域，並即時查詢 GoDaddy 與 Namecheap 價格。",
  keywords: [
    "公司命名", 
    "網域產生器", 
    "AI取名", 
    "諧音梗生成器", 
    "台灣品牌命名", 
    "Domain Name Generator", 
    "創業工具", 
    "GoDaddy比價", 
    "Namecheap推薦",
    "品牌算命"
  ],
  authors: [{ name: "羅老闆" }],
  openGraph: {
    title: "台味命名大師 - 用 AI 幫你的品牌算個好命",
    description: "不想燒腦想名字？讓 AI 幫你算筆畫、玩諧音，還能直接查網域有沒有人用！",
    url: "https://www.taiwannamer.com",
    siteName: "台味命名大師",
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
        className={`${notoSansTC.variable} font-sans antialiased bg-[#0a0a0a] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
