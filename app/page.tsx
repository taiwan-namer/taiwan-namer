"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Sparkles,
  Search,
  Wand2,
  Zap,
  Globe,
  Loader2,
  AlertCircle,
  ExternalLink,
  FileText,
  Copy,
  Heart,
  Share2,
} from "lucide-react";
import { PricingTable, CTAButton } from "@/components/BlogParts";
import { getGoLink } from "@/lib/redirect";
import { trackEvent } from "@/lib/analytics";

const FAVORITES_KEY = "taiwan-namer-favorites";

type DomainResult = {
  domain: string;
  meaning: string;
  name: string;
  price?: string;
};

/** 依網域後綴回傳新台幣參考價格 */
function getPriceByDomain(domain: string): string {
  const d = domain.toLowerCase().trim();
  if (d.endsWith(".ai")) return "NT$ 3,000 起";
  if (d.endsWith(".io")) return "NT$ 1,800 起";
  if (d.endsWith(".com.tw")) return "NT$ 900 起";
  if (d.endsWith(".tw")) return "NT$ 300 起";
  if (d.endsWith(".com")) return "NT$ 450 起";
  return "NT$ 600 起";
}

/** 判斷是否為台灣網域 (Namecheap 不支援) */
function isTwDomain(domain: string): boolean {
  const d = domain.toLowerCase().trim();
  return d.endsWith(".tw") || d.endsWith(".com.tw");
}

/** 取得 domain 的 TLD（如 .com, .tw, .com.tw） */
function getTld(domain: string): string {
  const lower = domain.toLowerCase().trim();
  if (lower.endsWith(".com.tw")) return ".com.tw";
  if (lower.endsWith(".com")) return ".com";
  if (lower.endsWith(".tw")) return ".tw";
  if (lower.endsWith(".io")) return ".io";
  if (lower.endsWith(".ai")) return ".ai";
  return "";
}

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<DomainResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const preferredTlds = [".com", ".tw"];
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(FAVORITES_KEY);
      setFavorites(raw ? JSON.parse(raw) : []);
    } catch {
      setFavorites([]);
    }
  }, []);

  const toggleFavorite = useCallback((domain: string) => {
    setFavorites((prev) => {
      const next = prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain];
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
      } catch {}
      trackEvent("favorite", { domain, action: next.includes(domain) ? "add" : "remove" });
      return next;
    });
  }, []);

  const copyDomain = useCallback((domain: string) => {
    navigator.clipboard.writeText(domain).catch(() => {});
    trackEvent("copy", { domain });
  }, []);

  const shareLink = useCallback((domain: string) => {
    const url = typeof window !== "undefined" ? `${window.location.origin}?domain=${encodeURIComponent(domain)}` : "";
    navigator.clipboard.writeText(url).catch(() => {});
    trackEvent("copy", { domain });
  }, []);

  async function handleGenerate() {
    trackEvent("generate", { keyword: keyword || "珍珠奶茶、好運" });
    setError(null);
    setResults(null);
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: keyword || "珍珠奶茶、好運" }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || `請求失敗 (${res.status})`);
        return;
      }
      if (Array.isArray(data?.domains)) {
        const sorted = [...data.domains].sort((a, b) => {
          const tldA = getTld(a.domain);
          const tldB = getTld(b.domain);
          const iA = preferredTlds.indexOf(tldA);
          const iB = preferredTlds.indexOf(tldB);
          if (iA === -1 && iB === -1) return 0;
          if (iA === -1) return 1;
          if (iB === -1) return -1;
          return iA - iB;
        });
        setResults(sorted);
      } else {
        setError("回傳格式錯誤");
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "連線失敗");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* 背景漸層光暈 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-blue-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[300px] bg-pink-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Navbar */}
      {/* Navbar - 更新版 (加入部落格連結) */}
      <nav className="relative z-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* 左邊 Logo */}
          <a href="/" className="flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight leading-none">
                台味命名大師
              </span>
              <span className="text-zinc-500 text-xs font-normal tracking-wide">Taiwan Namer</span>
            </div>
          </a>

          {/* 右邊選單 */}
          <div className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm font-medium text-zinc-400 hover:text-violet-300 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              教學文章
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24">
        {/* Hero Section */}
        <section className="text-center pt-12 pb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              用 AI 幫你的品牌算個好命
            </span>
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            全台唯一！專懂台灣諧音梗、在地文化、算命筆畫的網域生成器。
          </p>

          {/* 搜尋框 + CTA */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="輸入關鍵字（例：珍珠奶茶、好運）"
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 placeholder:text-zinc-500 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
                disabled={loading}
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="glow-btn flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 text-white font-semibold text-base whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Wand2 className="w-5 h-5" />
              )}
              {loading ? "算命中…" : "開始算命"}
            </button>
          </div>

          {/* 結果卡片區域 */}
          <div className="mt-14">
            {loading && (
              <div className="flex flex-col items-center justify-center gap-4 py-12">
                <Loader2 className="w-12 h-12 text-violet-400 animate-spin" />
                <p className="text-zinc-500 text-sm">AI 正在為你算命…</p>
              </div>
            )}
            {error && !loading && (
              <div className="glass rounded-xl p-4 max-w-2xl mx-auto flex items-center gap-3 text-red-400 border-red-500/30">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}
            
            {/* 🟢 AI 生成結果區塊 */}
            {results && results.length > 0 && !loading && (
              <>
                {/* Step 引導條 */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 text-sm">
                  <span className="text-violet-400 font-medium">選名</span>
                  <span className="text-zinc-600">→</span>
                  <span className="text-emerald-400 font-medium">查價</span>
                  <span className="text-zinc-600">→</span>
                  <span className="text-zinc-500">購買</span>
                  <span className="text-zinc-600">→</span>
                  <span className="text-zinc-500">架站</span>
                </div>
                <p className="text-zinc-500 text-sm mb-6">AI 算命結果 · 前往註冊商比價。如有網域不同需求請至註冊商新增，如 .TW 等。</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto items-stretch">
                  {results.map((item, i) => {
                    const domain = item.domain.replace(/^\s*https?:\/\//i, "").split("/")[0] || item.domain;
                    const showNamecheap = !isTwDomain(domain);
                    const isFav = favorites.includes(domain);

                    return (
                      <div
                        key={i}
                        className="h-full flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-white/15 transition-colors min-h-[260px]"
                      >
                        {/* 資訊區 */}
                        <div className="flex-1 min-h-0 p-6 flex flex-col bg-white/5 text-left">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <span className="font-mono font-semibold text-violet-300 text-xl break-all">
                              {item.domain}
                            </span>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                type="button"
                                onClick={() => copyDomain(domain)}
                                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition"
                                title="複製網域"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => toggleFavorite(domain)}
                                className={`p-1.5 rounded-lg transition ${isFav ? "text-red-400" : "text-zinc-400 hover:text-white hover:bg-white/10"}`}
                                title={isFav ? "取消收藏" : "收藏"}
                              >
                                <Heart className={`w-4 h-4 ${isFav ? "fill-current" : ""}`} />
                              </button>
                              <button
                                type="button"
                                onClick={() => shareLink(domain)}
                                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition"
                                title="複製分享連結"
                              >
                                <Share2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          {item.name && (
                            <p className="text-zinc-400 text-sm mb-0.5">{item.name}</p>
                          )}
                          {item.meaning && (
                            <p className="text-zinc-500 text-sm mb-4">{item.meaning}</p>
                          )}
                          <div className="mt-auto">
                            {item.price && (
                              <>
                                <p className="text-violet-200 font-semibold text-base">{item.price}</p>
                                <p className="text-zinc-500/70 text-xs mt-0.5" title="實際價格以註冊商為準">實際價格以註冊商為準</p>
                              </>
                            )}
                            <p className="text-zinc-500/80 text-xs mt-2">立即查價看最新價格</p>
                          </div>
                        </div>
                        {/* 行動區：站內 /go 跳轉 */}
                        <div className="flex-shrink-0 p-4 bg-black/20 border-t border-white/5 flex flex-col gap-3 min-h-[130px]">
                          <Link
                            href={getGoLink("godaddy", domain)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent("outbound_vendor", { vendor: "godaddy", domain })}
                            className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors min-h-[44px] ${!showNamecheap ? "flex-1" : ""}`}
                          >
                            <ExternalLink className="w-4 h-4 shrink-0" />
                            前往 GoDaddy 查價
                          </Link>
                          {showNamecheap && (
                            <Link
                              href={getGoLink("namecheap", domain)}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => trackEvent("outbound_vendor", { vendor: "namecheap", domain })}
                              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium transition-colors min-h-[44px]"
                            >
                              <ExternalLink className="w-4 h-4 shrink-0" />
                              前往 Namecheap 查價
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* 🟢 靜態範例區塊 (預設顯示) */}
            {!loading && !error && !results?.length && (
              <>
                <p className="text-zinc-500 text-sm mb-6">搜尋結果範例 · 前往註冊商比價</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
                  
                  {/* 範例 1 .com */}
                  <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-white/15 transition-colors min-h-[260px]">
                    <div className="flex-1 min-h-0 p-6 flex flex-col bg-white/5 text-left">
                      <span className="font-mono font-semibold text-violet-300 text-xl break-all block mb-1">WuCha.com</span>
                      <p className="text-zinc-400 text-sm mb-0.5">無茶 / 舞茶</p>
                      <p className="text-zinc-500 text-sm mb-4">無查／找茶，茶飲品牌感</p>
                      <div className="mt-auto">
                        <p className="text-violet-200 font-semibold text-base">{getPriceByDomain("WuCha.com")}</p>
                        <p className="text-zinc-500/70 text-xs mt-0.5" title="實際價格以註冊商為準">實際價格以註冊商為準</p>
                        <p className="text-zinc-500/80 text-xs mt-2">立即查價看最新價格</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 p-4 bg-black/20 border-t border-white/5 flex flex-col gap-3 min-h-[130px]">
                      <Link href={getGoLink("godaddy", "WuCha.com")} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors min-h-[44px]">
                        <ExternalLink className="w-4 h-4 shrink-0" />前往 GoDaddy 查價
                      </Link>
                      <Link href={getGoLink("namecheap", "WuCha.com")} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium transition-colors min-h-[44px]">
                        <ExternalLink className="w-4 h-4 shrink-0" />前往 Namecheap 查價
                      </Link>
                    </div>
                  </div>

                  {/* 範例 2 .tw */}
                  <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-white/15 transition-colors min-h-[260px]">
                    <div className="flex-1 min-h-0 p-6 flex flex-col bg-white/5 text-left">
                      <span className="font-mono font-semibold text-violet-300 text-xl break-all block mb-1">SongLa.tw</span>
                      <p className="text-zinc-400 text-sm mb-0.5">爽啦</p>
                      <p className="text-zinc-500 text-sm mb-4">諧音「爽啦」，傳達暢快感</p>
                      <div className="mt-auto">
                        <p className="text-violet-200 font-semibold text-base">{getPriceByDomain("SongLa.tw")}</p>
                        <p className="text-zinc-500/70 text-xs mt-0.5" title="實際價格以註冊商為準">實際價格以註冊商為準</p>
                        <p className="text-zinc-500/80 text-xs mt-2">立即查價看最新價格</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 p-4 bg-black/20 border-t border-white/5 flex flex-col gap-3 min-h-[130px]">
                      <Link href={getGoLink("godaddy", "SongLa.tw")} target="_blank" rel="noopener noreferrer" className="w-full flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors min-h-[44px]">
                        <ExternalLink className="w-4 h-4 shrink-0" />前往 GoDaddy 查價
                      </Link>
                    </div>
                  </div>

                  {/* 範例 3 .io */}
                  <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-white/15 transition-colors min-h-[260px]">
                    <div className="flex-1 min-h-0 p-6 flex flex-col bg-white/5 text-left">
                      <span className="font-mono font-semibold text-violet-300 text-xl break-all block mb-1">TeaMe.io</span>
                      <p className="text-zinc-400 text-sm mb-0.5">挺你</p>
                      <p className="text-zinc-500 text-sm mb-4">諧音「挺你」，好記又有梗</p>
                      <div className="mt-auto">
                        <p className="text-violet-200 font-semibold text-base">{getPriceByDomain("TeaMe.io")}</p>
                        <p className="text-zinc-500/70 text-xs mt-0.5" title="實際價格以註冊商為準">實際價格以註冊商為準</p>
                        <p className="text-zinc-500/80 text-xs mt-2">立即查價看最新價格</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 p-4 bg-black/20 border-t border-white/5 flex flex-col gap-3 min-h-[130px]">
                      <Link href={getGoLink("godaddy", "TeaMe.io")} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors min-h-[44px]">
                        <ExternalLink className="w-4 h-4 shrink-0" />前往 GoDaddy 查價
                      </Link>
                      <Link href={getGoLink("namecheap", "TeaMe.io")} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium transition-colors min-h-[44px]">
                        <ExternalLink className="w-4 h-4 shrink-0" />前往 Namecheap 查價
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Bluehost 推廣專區（名字取好了？下一步） */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">

            {/* 標題引導 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                名字取好了？下一步就是架設網站！
              </h2>
              <p className="text-zinc-400">
                使用 Bluehost，不但穩定，現在透過下方連結申請還送您
                <span className="text-blue-400 font-bold mx-1">免費網域一年</span>。
              </p>
            </div>

            {/* 呼叫價格表積木 */}
            <PricingTable />

            {/* 呼叫按鈕積木 */}
            <CTAButton />

          </div>
        </section>

        {/* Features 特色區塊 */}
        <section className="pt-20 pb-16">
          <h2 className="text-2xl font-semibold text-center text-zinc-200 mb-12">
            三大特色
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6 hover:border-white/15 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4 group-hover:bg-violet-500/30 transition-colors">
                <Search className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">
                台味靈魂，國際規格
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                雖然用台灣諧音梗（例：SongLa → 鬆啦），但生成的網域一律是<strong className="text-zinc-400">標準英文／羅馬拼音</strong>（如 SongLa.com），全球通用，絕非中文 Punycode。
              </p>
            </div>
            <div className="glass rounded-2xl p-6 hover:border-white/15 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Wand2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">
                算命學命名
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                結合五行八字與筆畫吉凶，取一個對事業、財運都有助益的網域；名稱仍為英文或拼音，方便國際使用。
              </p>
            </div>
            <div className="glass rounded-2xl p-6 hover:border-white/15 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">
                一鍵比價
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                即時檢查 .tw / .com / .io 等熱門後綴，一鍵前往 GoDaddy、Namecheap 查價比價，可註冊與價格一目了然。
              </p>
            </div>
          </div>
        </section>

        {/* 最新站長教學 (Latest Guides) */}
        <section className="pt-16 pb-20 border-t border-white/5">
          <h2 className="text-2xl font-semibold text-center text-zinc-200 mb-10">
            最新站長教學 (Latest Guides)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/blog/bluehost-tutorial"
              className="glass rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-all group block text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg text-zinc-100 mb-2 group-hover:text-blue-300 transition-colors">
                Bluehost 架站教學
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                新手 10 分鐘架設 WordPress，含主機方案選擇、網域申請與一鍵安裝。
              </p>
              <span className="inline-flex items-center gap-1 text-blue-400 text-sm font-medium mt-3">
                閱讀全文 <ExternalLink className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/blog/godaddy-tutorial"
              className="glass rounded-2xl p-6 border border-white/5 hover:border-emerald-500/30 transition-all group block text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                <FileText className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-lg text-zinc-100 mb-2 group-hover:text-emerald-300 transition-colors">
                GoDaddy 網域註冊
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                5 分鐘買到第一個網域，結帳避坑、DNS 設定與續費安全一次搞定。
              </p>
              <span className="inline-flex items-center gap-1 text-emerald-400 text-sm font-medium mt-3">
                閱讀全文 <ExternalLink className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/blog/namecheap-tutorial"
              className="glass rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition-all group block text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                <FileText className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="font-semibold text-lg text-zinc-100 mb-2 group-hover:text-orange-300 transition-colors">
                Namecheap 避坑指南
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                永久免費隱私保護、無陷阱結帳，老司機推薦的專業網域註冊商。
              </p>
              <span className="inline-flex items-center gap-1 text-orange-400 text-sm font-medium mt-3">
                閱讀全文 <ExternalLink className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </section>

        {/* 裝飾用 Globe 圖示（可選） */}
        <div className="flex justify-center text-zinc-700/50 pt-8">
          <Globe className="w-8 h-8" />
        </div>
      </main>
    </div>
  );
}