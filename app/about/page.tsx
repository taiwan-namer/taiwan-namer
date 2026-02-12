import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "關於我們 | 台式網域命名",
  description: "台式網域命名致力於提供免費的 AI 命名工具與架站教學，幫助台灣創業者降低門檻，從命名到架站一站完成。",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-blue-500/30 scroll-smooth">
      <nav className="sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-zinc-400 hover:text-white transition text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> 回首頁
          </Link>
          <div className="text-sm font-bold text-zinc-500">台式網域命名</div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          關於台式網域命名
        </h1>

        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p>
            我是 <strong className="text-zinc-200">CHING YEN LO</strong>，一名台灣的網頁開發者。在做專案與接案的過程中，我發現很多創業者卡在「取名字」和「架網站」的第一步——不是想不到好名字，就是不知道從哪裡開始架站。
          </p>
          <p>
            所以有了 Taiwan Namer。這不是一個冷冰冰的 AI 工具，而是我希望能幫助台灣品牌走向國際的起點：用諧音梗、在地文化與筆畫邏輯幫你發想網域，再一鍵連到 GoDaddy、Namecheap 查價，以及用 Bluehost 教學帶你從零架好 WordPress。
          </p>
          <p>
            <strong className="text-zinc-200">Real person, real developer.</strong> 如果你在用這個網站，背後是一個真的在寫 code、在維護內容的人。歡迎用到你的專案或品牌上，有想法也歡迎從聯絡頁跟我說。
          </p>
        </div>
      </main>
    </div>
  );
}
