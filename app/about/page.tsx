import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "關於我們 | 台味命名大師",
  description: "台味命名大師致力於提供免費的 AI 命名工具與架站教學，幫助台灣創業者降低門檻，從命名到架站一站完成。",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-blue-500/30 scroll-smooth">
      <nav className="sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-zinc-400 hover:text-white transition text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> 回首頁
          </Link>
          <div className="text-sm font-bold text-zinc-500">台味命名大師</div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          關於台味命名大師
        </h1>

        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p>
            台味命名大師（Taiwan Namer）是一個為台灣創業者與創作者打造的免費工具與內容平台。我們相信，好的品牌名稱與網域是事業的起點，但許多人在「取名」與「架站」這兩個關卡上卡關已久。
          </p>
          <p>
            我們致力於提供<strong className="text-zinc-200">免費的 AI 命名工具</strong>與<strong className="text-zinc-200">架站教學</strong>，結合台灣在地文化、諧音梗與實用的網域查詢功能，幫助你從發想名稱到查價、比價一氣呵成。同時，我們也提供從主機選擇到 WordPress 設定的圖文教學，降低從零到上線的門檻。
          </p>
          <p>
            無論你是個人創作者、小型工作室，或是正在規劃品牌的新創團隊，都歡迎使用我們的工具與文章，讓「命名」與「架站」不再成為阻礙你起步的高牆。
          </p>
        </div>
      </main>
    </div>
  );
}
