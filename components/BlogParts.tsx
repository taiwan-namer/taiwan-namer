import Link from "next/link";
import { Check, X, ExternalLink, ArrowRight } from "lucide-react";

// 1. 文章標頭 (Title & Meta)
export function ArticleHeader({ title, date, author }: { title: string; date: string; author?: string }) {
  return (
    <header className="mb-12 text-center relative z-10">
      <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
        官方推薦教學
      </div>
      <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
        {title}
      </h1>
      <div className="flex items-center justify-center space-x-4 text-sm text-zinc-500">
        {author ? <><span className="flex items-center"><div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center text-xs text-white font-bold mr-2">{author[0]}</div> {author}</span><span>•</span></> : null}
        <span>{date}</span>
      </div>
    </header>
  );
}

// 2. 章節標題 (Section Title)，可選 id 供目錄錨點使用
export function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-white flex items-center border-l-4 border-blue-500 pl-4 scroll-mt-28">
      {children}
    </h2>
  );
}

// 3. 優缺點分析框 (Pros & Cons)
export function ProsCons() {
  return (
    <div className="my-12 grid md:grid-cols-2 gap-6 relative z-10">
      <div className="bg-zinc-900/50 border border-green-500/20 p-6 rounded-2xl backdrop-blur-sm">
        <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center">
          <Check className="w-5 h-5 mr-2" /> 值得推薦
        </h3>
        <ul className="space-y-3 text-zinc-300 text-sm">
          <li className="flex gap-2"><span className="text-green-500">✓</span> WordPress 官方認證推薦</li>
          <li className="flex gap-2"><span className="text-green-500">✓</span> 介面簡單，一鍵安裝 WP</li>
          <li className="flex gap-2"><span className="text-green-500">✓</span> 首年免費送網域 (省 $15)</li>
        </ul>
      </div>
      <div className="bg-zinc-900/50 border border-red-500/20 p-6 rounded-2xl backdrop-blur-sm">
        <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center">
          <X className="w-5 h-5 mr-2" /> 注意事項
        </h3>
        <ul className="space-y-3 text-zinc-300 text-sm">
          <li className="flex gap-2"><span className="text-red-500">✕</span> 續約價格會恢復原價</li>
          <li className="flex gap-2"><span className="text-red-500">✕</span> 後台全英文 (可裝翻譯外掛)</li>
        </ul>
      </div>
    </div>
  );
}

// 4. 價格表 (Pricing Table)
export function PricingTable() {
  return (
    <div className="my-12 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl bg-[#0f0f0f] relative z-10">
       <div className="bg-zinc-900/80 p-3 text-center border-b border-zinc-800 text-sm text-zinc-400">
        Bluehost 熱門方案比較
      </div>
      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
        {/* Basic */}
        <div className="p-8 text-center group hover:bg-zinc-900/50 transition">
          <div className="text-zinc-500 font-medium mb-2">Basic</div>
          <div className="text-3xl font-bold text-white mb-1">$2.95</div>
          <div className="text-xs text-zinc-600 mb-6">/月 (原價 $9.99)</div>
          <ul className="text-sm text-zinc-400 space-y-3 text-left mb-8">
            <li className="flex">✓ 1 個網站</li>
            <li className="flex">✓ 10GB 儲存空間</li>
          </ul>
        </div>
        
        {/* Choice Plus (Hero) */}
        <div className="p-8 text-center bg-blue-900/10 relative">
          <div className="absolute top-0 left-0 w-full bg-blue-600 text-white text-[10px] py-1 font-bold tracking-wider">推薦</div>
          <div className="text-blue-400 font-bold mb-2 mt-4">Choice Plus</div>
          <div className="text-4xl font-bold text-white mb-1">$5.45</div>
          <div className="text-xs text-blue-200/50 mb-6">/月 (CP值最高)</div>
          <ul className="text-sm text-zinc-300 space-y-3 text-left mb-8 font-medium">
            <li className="flex text-white">✓ 無限個網站</li>
            <li className="flex text-white">✓ 40GB 儲存空間</li>
            <li className="flex text-blue-300">✓ 免費網域隱私</li>
            <li className="flex text-blue-300">✓ 自動備份系統</li>
          </ul>
        </div>

        {/* Online Store */}
        <div className="p-8 text-center group hover:bg-zinc-900/50 transition">
          <div className="text-zinc-500 font-medium mb-2">Online Store</div>
          <div className="text-3xl font-bold text-white mb-1">$9.95</div>
          <div className="text-xs text-zinc-600 mb-6">/月 (電商專用)</div>
          <ul className="text-sm text-zinc-400 space-y-3 text-left mb-8">
            <li className="flex">✓ 包含 Choice Plus</li>
            <li className="flex">✓ 電商外掛模組</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// 5. 行動呼籲按鈕 (CTA)
export function CTAButton() {
  return (
    <div className="my-16 p-8 md:p-12 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl text-center relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <h3 className="text-2xl font-bold text-white mb-4">準備好開始架站了嗎？</h3>
      <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
        現在透過下方連結申請，享有獨家 3 折優惠 (70% OFF)，並且包含免費網域一年。
      </p>
      <Link 
        href="/go/bluehost" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-900/50 group-hover:shadow-blue-600/20"
      >
        領取 Bluehost 優惠 <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  );
}

// 6. 步驟區塊 (Step Block)
export function StepBlock({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div className="my-12 pl-6 border-l-2 border-zinc-800 hover:border-blue-500/50 transition-colors">
      <div className="text-blue-500 font-mono text-sm tracking-wider mb-2">STEP {step}</div>
      <h3 className="text-xl font-bold text-zinc-100 mb-4">{title}</h3>
      <div className="text-zinc-400 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}