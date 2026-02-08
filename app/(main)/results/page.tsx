"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Loader2,
  AlertCircle,
  ExternalLink,
  Copy,
  Heart,
  Share2,
  Search,
  Rocket,
} from "lucide-react";
import { getGoLink } from "@/lib/redirect";
import { trackEvent } from "@/lib/analytics";
import { PricingTable, CTAButton } from "@/components/BlogParts";

const FAVORITES_KEY = "taiwan-namer-favorites";
const DEFAULT_KEYWORD = "珍珠奶茶、好運";

type DomainResult = {
  domain: string;
  meaning: string;
  name: string;
  price?: string;
};

function getPriceByDomain(domain: string): string {
  const d = domain.toLowerCase().trim();
  if (d.endsWith(".ai")) return "NT$ 3,000 起";
  if (d.endsWith(".io")) return "NT$ 1,800 起";
  if (d.endsWith(".com.tw")) return "NT$ 900 起";
  if (d.endsWith(".tw")) return "NT$ 300 起";
  if (d.endsWith(".com")) return "NT$ 450 起";
  return "NT$ 600 起";
}

function isTwDomain(domain: string): boolean {
  const d = domain.toLowerCase().trim();
  return d.endsWith(".tw") || d.endsWith(".com.tw");
}

function getTld(domain: string): string {
  const lower = domain.toLowerCase().trim();
  if (lower.endsWith(".com.tw")) return ".com.tw";
  if (lower.endsWith(".com")) return ".com";
  if (lower.endsWith(".tw")) return ".tw";
  if (lower.endsWith(".io")) return ".io";
  if (lower.endsWith(".ai")) return ".ai";
  return "";
}

const PREFERRED_TLDS = [".com", ".tw"];

function ResultsContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.trim() || DEFAULT_KEYWORD;

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<DomainResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(FAVORITES_KEY);
      setFavorites(raw ? JSON.parse(raw) : []);
    } catch {
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    setError(null);
    setLoading(true);
    setResults([]);

    (async () => {
      try {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ keyword: q }),
        });
        const data = await res.json();

        if (cancelled) return;
        if (!res.ok) {
          setError(data?.error || `請求失敗 (${res.status})`);
          return;
        }
        if (Array.isArray(data?.domains)) {
          const sorted = [...data.domains].sort((a, b) => {
            const tldA = getTld(a.domain);
            const tldB = getTld(b.domain);
            const iA = PREFERRED_TLDS.indexOf(tldA);
            const iB = PREFERRED_TLDS.indexOf(tldB);
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
        if (!cancelled) setError(e instanceof Error ? e.message : "連線失敗");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [q]);

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
    const url =
      typeof window !== "undefined"
        ? `${window.location.origin}/results?q=${encodeURIComponent(q)}&domain=${encodeURIComponent(domain)}`
        : "";
    navigator.clipboard.writeText(url).catch(() => {});
    trackEvent("copy", { domain });
  }, [q]);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-10 pb-24">
      {/* SearchSummary */}
      <div className="mb-8">
        <p className="text-zinc-400 text-sm mb-2">
          你搜尋的是：<span className="text-violet-300 font-medium">「{q}」</span>
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-violet-400 transition-colors"
        >
          <Search className="w-4 h-4" />
          重新搜尋
        </Link>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center gap-4 py-16">
          <Loader2 className="w-12 h-12 text-violet-400 animate-spin" />
          <p className="text-zinc-500 text-sm">AI 正在為你算命…</p>
        </div>
      )}

      {error && !loading && (
        <div className="glass rounded-xl p-4 flex items-center gap-3 text-red-400 border-red-500/30 mb-8">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {!loading && !error && results.length > 0 && (
        <>
          <p className="text-zinc-300 text-lg mb-8">
            🎉 為你找到 {results.length} 個超台的網域名稱！
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {results.map((item, i) => {
              const domain = item.domain.replace(/^\s*https?:\/\//i, "").split("/")[0] || item.domain;
              const showNamecheap = !isTwDomain(domain);
              const isFav = favorites.includes(domain);
              const isRecommended = i === 0;

              return (
                <div
                  key={item.domain}
                  className={`h-full flex flex-col rounded-2xl overflow-hidden border transition-colors min-h-[280px] ${
                    isRecommended
                      ? "border-amber-500/40 shadow-lg shadow-amber-500/10 bg-white/[0.06]"
                      : "border-white/10 hover:border-white/15 bg-white/5"
                  }`}
                >
                  <div className="flex-1 min-h-0 p-6 flex flex-col text-left">
                    {isRecommended && (
                      <span className="inline-flex items-center gap-1 text-amber-400 text-sm font-medium mb-3">
                        🏆 最推薦
                      </span>
                    )}
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="font-mono font-bold text-violet-300 text-xl break-all">
                        {item.domain}
                      </span>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => copyDomain(domain)}
                          className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition"
                          title="複製"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleFavorite(domain)}
                          className={`p-2 rounded-lg transition ${
                            isFav ? "text-red-400" : "text-zinc-400 hover:text-white hover:bg-white/10"
                          }`}
                          title={isFav ? "取消收藏" : "收藏"}
                        >
                          <Heart className={`w-4 h-4 ${isFav ? "fill-current" : ""}`} />
                        </button>
                        <button
                          type="button"
                          onClick={() => shareLink(domain)}
                          className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition"
                          title="分享"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    {item.name && (
                      <p className="text-zinc-400 text-sm mb-0.5">{item.name}</p>
                    )}
                    {item.meaning && (
                      <p className="text-zinc-500 text-sm mb-4">寓意：{item.meaning}</p>
                    )}
                    <div className="mt-auto">
                      {item.price && (
                        <p className="text-violet-200 font-semibold text-base">
                          💰 首年只要 {item.price}
                        </p>
                      )}
                      <p className="text-zinc-500/70 text-xs mt-0.5">
                        實際價格以註冊商為準
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 p-4 bg-black/20 border-t border-white/5 flex flex-col gap-3">
                    <Link
                      href={getGoLink("godaddy", domain)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("outbound_vendor", { vendor: "godaddy", domain })}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors min-h-[44px]"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0" />
                      🛒 GoDaddy 立即查價
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
                        💳 Namecheap 比價
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* HostingBanner - 專業提示 */}
      {!loading && results.length > 0 && (
        <section className="mt-14 pt-10 border-t border-white/5">
          <div className="glass rounded-2xl p-6 md:p-8 border border-white/10 text-center">
            <h3 className="text-lg font-semibold text-zinc-100 mb-2">
              💡 選好網域了？別忘了需要主機才能上線！
            </h3>
            <p className="text-zinc-500 text-sm mb-6">
              推薦 Bluehost，首年優惠送免費網域一年。
            </p>
            <Link
              href="/go/bluehost"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
            >
              <Rocket className="w-5 h-5" />
              查看推薦主機方案 - 限時優惠
            </Link>
          </div>
        </section>
      )}

      {/* Favorites 收藏清單 */}
      {favorites.length > 0 && (
        <section className="mt-10 pt-8 border-t border-white/5">
          <h3 className="text-sm font-medium text-zinc-400 mb-3">
            📌 你的收藏清單 ({favorites.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {favorites.slice(0, 5).map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 text-sm font-mono"
              >
                {d}
              </span>
            ))}
            {favorites.length > 5 && (
              <span className="text-zinc-500 text-sm">+{favorites.length - 5} 更多</span>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center gap-4 py-16">
          <Loader2 className="w-12 h-12 text-violet-400 animate-spin" />
          <p className="text-zinc-500 text-sm">載入中…</p>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
