"use client";

import { useState } from "react";
import {
  Sparkles,
  Search,
  Wand2,
  Zap,
  Globe,
  CheckCircle2,
  XCircle,
  Loader2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

type DomainResult = {
  name: string;
  meaning: string;
  status: "available" | "taken";
};

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<DomainResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate() {
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
        setResults(data.domains);
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
      <nav className="relative z-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight">
              台味命名大師
            </span>
            <span className="text-zinc-500 text-sm font-normal">Taiwan Namer</span>
          </a>
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
          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
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
            {results && results.length > 0 && !loading && (
              <>
                <p className="text-zinc-500 text-sm mb-6">AI 算命結果 · 前往註冊商比價</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
                  {results.map((item, i) => {
                    const domain = item.name.replace(/^\s*https?:\/\//i, "").split("/")[0] || item.name;
                    const godaddyUrl = `https://www.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=${encodeURIComponent(domain)}`;
                    const namecheapUrl = `https://www.namecheap.com/domains/registration/results/?domain=${encodeURIComponent(domain)}`;
                    return (
                      <div
                        key={i}
                        className="glass rounded-xl p-5 text-left hover:border-white/15 transition-colors border border-white/5"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <span className="font-mono font-semibold text-violet-300 text-lg break-all">
                            {item.name}
                          </span>
                          {item.status === "available" ? (
                            <span className="flex items-center gap-1.5 text-emerald-400 text-sm shrink-0">
                              <CheckCircle2 className="w-4 h-4" />
                              可註冊
                            </span>
                          ) : (
                            <span className="flex items-center gap-1.5 text-red-400 text-sm shrink-0">
                              <XCircle className="w-4 h-4" />
                              已被註冊
                            </span>
                          )}
                        </div>
                        <p className="text-zinc-500 text-sm mb-4">{item.meaning}</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <a
                            href={godaddyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors min-h-[44px] sm:min-h-0"
                          >
                            <ExternalLink className="w-4 h-4 shrink-0" />
                            前往 GoDaddy 查價
                          </a>
                          <a
                            href={namecheapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium transition-colors min-h-[44px] sm:min-h-0"
                          >
                            <ExternalLink className="w-4 h-4 shrink-0" />
                            前往 Namecheap 查價
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
            {!loading && !error && !results?.length && (
              <>
                <p className="text-zinc-500 text-sm mb-6">搜尋結果範例 · 前往註冊商比價</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
                  <div className="glass rounded-xl p-5 text-left hover:border-white/15 transition-colors border border-white/5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="font-mono font-semibold text-violet-300 text-lg">WuCha.com</span>
                      <span className="flex items-center gap-1.5 text-emerald-400 text-sm shrink-0">
                        <CheckCircle2 className="w-4 h-4" />可註冊
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">無查 / 找茶</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a href="https://www.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=WuCha.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors min-h-[44px] sm:min-h-0">
                        <ExternalLink className="w-4 h-4 shrink-0" />前往 GoDaddy 查價
                      </a>
                      <a href="https://www.namecheap.com/domains/registration/results/?domain=WuCha.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium transition-colors min-h-[44px] sm:min-h-0">
                        <ExternalLink className="w-4 h-4 shrink-0" />前往 Namecheap 查價
                      </a>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-5 text-left hover:border-white/15 transition-colors border border-white/5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="font-mono font-semibold text-violet-300 text-lg">TeaMe.io</span>
                      <span className="flex items-center gap-1.5 text-emerald-400 text-sm shrink-0">
                        <CheckCircle2 className="w-4 h-4" />可註冊
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">挺你</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a href="https://www.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=TeaMe.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors min-h-[44px] sm:min-h-0">
                        <ExternalLink className="w-4 h-4 shrink-0" />前往 GoDaddy 查價
                      </a>
                      <a href="https://www.namecheap.com/domains/registration/results/?domain=TeaMe.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium transition-colors min-h-[44px] sm:min-h-0">
                        <ExternalLink className="w-4 h-4 shrink-0" />前往 Namecheap 查價
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
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

        {/* 裝飾用 Globe 圖示（可選） */}
        <div className="flex justify-center text-zinc-700/50 pt-8">
          <Globe className="w-8 h-8" />
        </div>
      </main>
    </div>
  );
}
