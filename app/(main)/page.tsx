"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Wand2,
  Check,
  ArrowRight,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { getGoLink } from "@/lib/redirect";
import { PricingTable } from "@/components/BlogParts";

const NAMEBIO_URL = "https://namebio.com/";

const DEFAULT_KEYWORD = "珍珠奶茶、好運";

/** 首頁 Hero - 價值主張 + 搜尋 + CTA（強化關鍵字輸入與產生結果引導） */
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
      <p className="text-zinc-400 text-lg sm:text-xl max-w-xl mx-auto mb-2">
        讓你的品牌一秒被記住
      </p>
      <p className="text-zinc-500 text-sm mb-8 max-w-lg mx-auto">
        輸入品牌關鍵字，AI 立即產生 6 個網域建議，可一鍵查價、收藏、前往註冊
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <label htmlFor="hero-keyword" className="sr-only">
          輸入品牌或產品關鍵字
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
            <input
              id="hero-keyword"
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="輸入關鍵字（例：珍珠奶茶、好運、咖啡廳）"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border-2 border-white/10 placeholder:text-zinc-500 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-base"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="glow-btn flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 text-white font-semibold text-base whitespace-nowrap hover:from-violet-400 hover:to-violet-500 transition-all min-h-[52px]"
          >
            <Wand2 className="w-5 h-5 shrink-0" />
            免費產生 6 個網域建議 →
          </button>
        </div>
        <p className="text-zinc-500 text-xs mt-3 text-center">
          按 Enter 或點擊按鈕後，將跳轉至結果頁，可立即查價與收藏
        </p>
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
        <Link href="/go/godaddy" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-medium hover:text-emerald-300 hover:underline transition-colors" onClick={() => trackEvent("outbound_vendor", { vendor: "godaddy", source: "trustbar" })}>GoDaddy</Link>
        <Link href="/go/namecheap" target="_blank" rel="noopener noreferrer" className="text-orange-400 font-medium hover:text-orange-300 hover:underline transition-colors" onClick={() => trackEvent("outbound_vendor", { vendor: "namecheap", source: "trustbar" })}>Namecheap</Link>
        <Link href="/go/bluehost" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-medium hover:text-blue-300 hover:underline transition-colors" onClick={() => trackEvent("outbound_vendor", { vendor: "bluehost", source: "trustbar" })}>Bluehost</Link>
      </div>
    </section>
  );
}

/** 價值錨點區塊 - 你知道買網域也能賺錢？ */
function ValueAnchorSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewTracked = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (viewTracked.current) return;
        if (entries[0]?.isIntersecting) {
          viewTracked.current = true;
          trackEvent("value_anchor_view", {});
        }
      },
      { threshold: 0.2, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToSearchAndFocus = () => {
    trackEvent("value_anchor_cta_click", {});
    const input = document.getElementById("hero-keyword");
    if (input) {
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => (input as HTMLInputElement).focus(), 400);
    }
  };

  const examples = [
    { domain: "KuBeh.com", price: "NT$139,354", desc: "台味諧音域名曾以高價成交", descFirst: true, vendor: "godaddy" as const },
    { domain: "hourwolf.com", price: "NT$75,237", desc: "創意英文組合，買家高價收購", descFirst: true, vendor: "godaddy" as const },
    { domain: "asecurity.xyz", price: "US$2,000", desc: "簡短關鍵字域名在市場有價", descFirst: true, vendor: "namecheap" as const },
    { domain: "delete.net", price: "US$45,000", desc: "單字 .net 稀缺性高易成交", descFirst: true, vendor: "namecheap" as const },
  ];

  return (
    <section ref={sectionRef} className="py-14 px-6">
      <h2 className="text-xl font-semibold text-center text-zinc-200 mb-2">
        你知道買網域也能賺錢？
      </h2>
      <p className="text-center text-zinc-500 text-sm mb-10 max-w-xl mx-auto">
        好域名不是花費，是資產。很多 .com 曾以高價成交
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
        {examples.map(({ domain, price, desc, descFirst, vendor }) => (
          <div
            key={domain}
            className="glass rounded-xl px-4 py-5 border border-white/10 text-center"
          >
            <span className="font-mono font-semibold text-violet-300 block truncate text-sm sm:text-base mb-1">
              {domain}
            </span>
            {descFirst ? (
              <>
                <p className="text-zinc-500 text-xs sm:text-sm leading-snug mb-3">
                  {desc}
                </p>
                {vendor === "godaddy" ? (
                  <Link
                    href={getGoLink("godaddy", domain)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("outbound_vendor", { vendor: "godaddy", domain })}
                    className="w-full inline-flex items-center justify-center px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors min-h-[48px]"
                  >
                    GoDaddy {price}
                  </Link>
                ) : (
                  <Link
                    href={getGoLink("namecheap", domain)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("outbound_vendor", { vendor: "namecheap", domain })}
                    className="w-full inline-flex items-center justify-center px-4 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold transition-colors min-h-[48px]"
                  >
                    Namecheap {price}
                  </Link>
                )}
              </>
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={scrollToSearchAndFocus}
          className="glow-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 text-white font-semibold text-base hover:from-violet-400 hover:to-violet-500 transition-all min-h-[52px] w-full sm:w-auto"
        >
          <Search className="w-5 h-5 shrink-0" />
          立即查我的域名
        </button>
        <a
          href={NAMEBIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("value_anchor_examples_click", {})}
          className="text-zinc-500 text-sm hover:text-zinc-400 underline underline-offset-2 transition-colors"
        >
          查看更多成交案例
        </a>
      </div>
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

/** Blog Preview - 實用架站教學（擷取文章內標題） */
function BlogPreview() {
  const posts = [
    { href: "/blog/bluehost-tutorial", title: "如何用 Bluehost 架設 WordPress 網站？" },
    { href: "/blog/godaddy-tutorial", title: "GoDaddy 網域註冊教學" },
    { href: "/blog/namecheap-tutorial", title: "Namecheap 網域註冊教學" },
    { href: "/blog/wordpress-complete-guide-2026", title: "2026 WordPress 完整架站攻略" },
  ];

  return (
    <section className="py-14 px-6 border-t border-white/5">
      <h2 className="text-2xl font-semibold text-center text-zinc-200 mb-10">
        實用架站教學
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {posts.map(({ href, title }) => (
          <Link
            key={href}
            href={href}
            className="glass rounded-2xl p-6 border border-white/5 hover:border-violet-500/30 transition-all group flex items-center justify-center text-center"
          >
            <span className="font-medium text-zinc-100 group-hover:text-violet-300 transition-colors">
              {title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/** Bluehost 推廣區（聯盟導流經 /go，點擊可追蹤） */
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
        <div className="my-16 p-8 md:p-12 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          <h3 className="text-2xl font-bold text-white mb-4">準備好開始架站了嗎？</h3>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            現在透過下方連結申請，享有獨家 3 折優惠 (70% OFF)，並且包含免費網域一年。
          </p>
          <Link
            href="/go/bluehost"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("outbound_vendor", { vendor: "bluehost" })}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-900/50 group-hover:shadow-blue-600/20"
          >
            領取 Bluehost 優惠 <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
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
      <ValueAnchorSection />
      <HowItWorks />
      <BlogPreview />
      <HostingSection />
      <FooterCTA />
    </>
  );
}
