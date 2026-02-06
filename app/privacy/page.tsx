import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "隱私權政策 | 台味命名大師",
  description: "台味命名大師隱私權政策：我們如何收集、使用與保護您的個人資料，以及聯盟行銷揭露說明。",
};

export default function PrivacyPage() {
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
          隱私權政策
        </h1>
        <p className="text-zinc-500 text-sm mb-10">最後更新：2026 年 2 月</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. 適用範圍</h2>
            <p>
              本隱私權政策適用於台味命名大師（Taiwan Namer）網站（以下稱「本網站」）所收集、使用與保護的個人資料。使用本網站即表示您同意本政策所載之內容。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. 我們收集的資訊</h2>
            <p>
              我們可能透過以下方式收集資訊：您在本網站輸入的關鍵字（例如用於 AI 命名建議）、造訪頁面與點擊行為等技術性資料。我們不會要求您註冊帳號即可使用核心的命名與查價功能；若未來新增註冊或訂閱功能，我們會另行說明所收集的欄位與用途。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. 資訊的使用方式</h2>
            <p>
              我們使用所收集的資訊以提供與改進命名建議、網域查詢與網站體驗，以及分析流量與使用情形（例如透過匿名化數據）。我們不會將您的個人資料出售給第三方。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Cookie 與類似技術</h2>
            <p>
              本網站可能使用 Cookie 或類似技術以維持 session、記住偏好或進行流量分析。您可透過瀏覽器設定管理或停用 Cookie，惟部分功能可能因此受影響。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. 第三方服務</h2>
            <p>
              本網站可能嵌入或連結至第三方服務（例如網域註冊商、主機商或分析工具）。這些第三方有其自身的隱私權政策，我們建議您於使用其服務前查閱相關說明。
            </p>
          </section>

          <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-3">6. Affiliate Disclosure（聯盟行銷揭露）</h2>
            <p className="mb-4">
              本網站參與聯盟行銷計畫。當您透過本網站上的特定連結前往合作商家並完成消費時，我們可能獲得推薦佣金，且不會因此向您收取額外費用。
            </p>
            <p className="mb-4">
              例如，本站含有<strong className="text-zinc-200"> Bluehost</strong> 等主機與網域相關的聯盟連結。我們僅推薦我們認為對讀者有幫助的產品或服務，聯盟關係不影響我們在文章與教學中的內容撰寫立場。
            </p>
            <p>
              若您對本政策或聯盟連結有任何疑問，歡迎透過<Link href="/contact" className="text-blue-400 hover:underline ml-1">聯絡我們</Link>頁面與我們聯繫。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. 資料安全與保留</h2>
            <p>
              我們採取合理之技術與組織措施保護所持有之資料。資料保留期間將依營運與法律需求而定，並於不再需要時刪除或匿名化。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. 您的權利</h2>
            <p>
              依適用法律，您可能享有查詢、更正、刪除或限制處理個人資料等權利。若您欲行使相關權利，請透過聯絡我們頁面提出請求。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. 政策變更</h2>
            <p>
              我們可能不定期更新本隱私權政策，更新後將於本頁註明最後更新日期。繼續使用本網站即視為接受修訂後之政策。
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
