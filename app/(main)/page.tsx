"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Wand2,
  Check,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { PricingTable, CTAButton } from "@/components/BlogParts";

const DEFAULT_KEYWORD = "珍珠奶茶、好運";

/** 首頁 Hero - 價值主張 + 搜尋 + CTA */
function HeroSection() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = keyword.trim() || DEFAULT_KEYWORD;
    trackEvent("generate", { keyword: q });
    router.push(`/results?q=${encodeURIComponent(q)}`);
  };

  return (
    <section className="text-center pt-12 pb-10 px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
        <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
          找個有台味的網域名稱
        </span>
      </h1>
      <p className="text-zinc-400 text-lg sm:text-xl max-w-xl mx-auto mb-8">
        讓你的品牌一秒被記住
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="輸入關鍵字（例：珍珠奶茶、好運）"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 placeholder:text-zinc-500 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
            />
          </div>
          <button
            type="submit"
            className="glow-btn flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 text-white font-semibold text-base whitespace-nowrap hover:from-violet-400 hover:to-violet-500 transition-all"
          >
            <Wand2 className="w-5 h-5" />
            開始免費算命 →
          </button>
        </div>
      </form>

      <p className="text-zinc-500 text-sm mt-6">
        💡 已幫助 1,200+ 品牌找到完美網域
      </p>
    </section>
  );
}

/** Trust Bar - 信任指標 + 合作夥伴 */
function TrustBar() {
  return (
    <section className="py-6 px-6 border-y border-white/5">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
        <span className="flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-500" />
          AI 智能命名
        </span>
        <span className="flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-500" />
          即時查價
        </span>
        <span className="flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-500" />
          一鍵購買
        </span>
        <span className="text-zinc-600">|</span>
        <span className="text-zinc-500">合作夥伴：</span>
        <span className="text-emerald-400 font-medium">GoDaddy</span>
        <span className="text-orange-400 font-medium">Namecheap</span>
      </div>
    </section>
  );
}

/** Preview Results - 範例結果，點擊可進入結果頁體驗 */
function PreviewResults() {
  const examples = [
    { domain: "ZhenHaoHe.com", name: "珍好喝", meaning: "諧音「真好喝」" },
    { domain: "TaiNaiCha.tw", name: "台奶茶", meaning: "台灣奶茶" },
    { domain: "HaoMangGuo.io", name: "好芒果", meaning: "好芒／好忙" },
  ];

  return (
    <section className="py-14 px-6">
      <h2 className="text-xl font-semibold text-center text-zinc-200 mb-8">
        看看別人都取了什麼名字？
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {examples.map(({ domain, name, meaning }) => (
          <Link
            key={domain}
            href={`/results?q=${encodeURIComponent(name)}`}
            className="glass rounded-xl px-5 py-4 border border-white/10 hover:border-violet-500/30 transition-all text-left min-w-[140px]"
          >
            <span className="font-mono font-semibold text-violet-300 block truncate">
              {domain}
            </span>
            <span className="text-zinc-500 text-sm">{meaning}</span>
          </Link>
        ))}
      </div>
      <p className="text-center text-zinc-500 text-sm mt-4">
        點擊範例可立即體驗 →
      </p>
    </section>
  );
}

/** How It Works - 三步驟 */
function HowItWorks() {
  const steps = [
    { num: "1", title: "輸入關鍵字", desc: "AI 生成台味命名建議" },
    { num: "2", title: "挑選網域", desc: "比價最划算" },
    { num: "3", title: "立即購買", desc: "架站教學" },
  ];

  return (
    <section className="py-14 px-6 border-t border-white/5">
      <h2 className="text-2xl font-semibold text-center text-zinc-200 mb-10">
        三步驟，網站上線
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map(({ num, title, desc }) => (
          <div
            key={num}
            className="glass rounded-2xl p-6 text-center border border-white/5"
          >
            <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mx-auto mb-4 text-violet-400 font-bold">
              {num}
            </div>
            <h3 className="font-semibold text-zinc-100 mb-1">{title}</h3>
            <p className="text-zinc-500 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Social Proof - 使用者見證 */
function Testimonials() {
  const items = [
    { quote: "三秒鐘就找到超台的名字！", author: "阿明老闆" },
    { quote: "比自己想破頭還要有創意", author: "小美設計師" },
  ];

  return (
    <section className="py-14 px-6 border-t border-white/5">
      <h2 className="text-2xl font-semibold text-center text-zinc-200 mb-10">
        他們都找到了完美網域
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {items.map(({ quote, author }) => (
          <blockquote
            key={author}
            className="glass rounded-xl p-6 border border-white/5"
          >
            <p className="text-zinc-300 mb-3">「{quote}」</p>
            <cite className="text-zinc-500 text-sm not-italic">— {author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

/** Blog Preview - 實用架站教學 */
function BlogPreview() {
  const posts = [
    { href: "/blog/bluehost-tutorial", title: "新手架站完整指南", icon: "📝" },
    { href: "/blog/godaddy-tutorial", title: "網域挑選秘訣", icon: "💡" },
    { href: "/blog/namecheap-tutorial", title: "Namecheap 避坑指南", icon: "🛡️" },
  ];

  return (
    <section className="py-14 px-6 border-t border-white/5">
      <h2 className="text-2xl font-semibold text-center text-zinc-200 mb-10">
        實用架站教學
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {posts.map(({ href, title, icon }) => (
          <Link
            key={href}
            href={href}
            className="glass rounded-2xl p-6 border border-white/5 hover:border-violet-500/30 transition-all group flex items-center gap-4"
          >
            <span className="text-2xl">{icon}</span>
            <span className="font-medium text-zinc-100 group-hover:text-violet-300 transition-colors">
              {title}
            </span>
            <ExternalLink className="w-4 h-4 text-zinc-500 ml-auto shrink-0" />
          </Link>
        ))}
      </div>
    </section>
  );
}

/** Bluehost 推廣區（名字取好了？下一步） */
function HostingSection() {
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            名字取好了？下一步就是架設網站！
          </h2>
          <p className="text-zinc-400">
            使用 Bluehost，不但穩定，現在透過下方連結申請還送您
            <span className="text-blue-400 font-bold mx-1">免費網域一年</span>。
          </p>
        </div>
        <PricingTable />
        <CTAButton />
      </div>
    </section>
  );
}

/** Footer CTA - 再次轉換機會 */
function FooterCTA() {
  return (
    <section className="py-16 px-6 border-t border-white/5">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          準備好為你的品牌命名了嗎？
        </h2>
        <Link
          href="/"
          className="glow-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 text-white font-semibold"
        >
          立即開始 <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PreviewResults />
      <HowItWorks />
      <Testimonials />
      <BlogPreview />
      <HostingSection />
      <FooterCTA />
    </>
  );
}
