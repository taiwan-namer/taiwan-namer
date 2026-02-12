import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "聯絡我們 | 台式網域命名",
  description: "如有合作、建議或詢問，歡迎透過 email 與台式網域命名聯絡。",
};

export default function ContactPage() {
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
          聯絡我們
        </h1>

        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p>
            感謝你對台式網域命名的關注。若你有任何建議、合作邀約或使用上的問題，歡迎與我們聯繫。
          </p>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-zinc-200 mb-2">聯繫方式</h2>
            <p className="text-zinc-400 text-sm mb-2">
              如有合作需求、媒體採訪或一般詢問，請寄信至：
            </p>
            <a
              href="mailto:t26647250@gmail.com"
              className="text-blue-400 hover:text-blue-300 font-medium break-all"
            >
              t26647250@gmail.com
            </a>
            <p className="text-zinc-300 text-sm mt-4 font-medium">
              We typically reply to all inquiries within 24 hours.
            </p>
            <p className="text-zinc-500 text-sm mt-1">
              我們會盡可能在合理時間內回覆每一封來信。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
