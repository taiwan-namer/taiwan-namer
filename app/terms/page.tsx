import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "服務條款 | 台式網域命名",
  description: "台式網域命名網站使用條款：使用本網站即表示您同意遵守以下條款。",
};

export default function TermsPage() {
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
          服務條款
        </h1>
        <p className="text-zinc-500 text-sm mb-10">最後更新：2026 年 2 月</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. 接受條款</h2>
            <p>
              使用台式網域命名（Taiwan Namer）網站（以下稱「本網站」）即表示您同意本服務條款。若您不同意本條款，請勿使用本網站。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. 服務說明</h2>
            <p>
              本網站提供 AI 網域命名建議、網域查價連結與架站相關教學內容，供一般使用者免費使用。我們保留隨時修改、暫停或終止部分或全部服務之權利，無須事先通知。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. 使用規範</h2>
            <p>
              您同意不得將本網站用於任何非法、侵權或違反公序良俗之目的；不得嘗試干擾、破壞或未經授權存取本網站或相關系統；不得大量自動化請求以致影響服務穩定性。我們有權在違反本條款時限制或終止您的存取。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. 智慧財產權</h2>
            <p>
              本網站之內容、版面設計、商標與程式（除另有標示或第三方授權外）為台式網域命名或相關權利人所有。除本條款或法律另有允許外，未經授權不得重製、改作、散布或商業利用。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. 免責聲明</h2>
            <p>
              本網站所提供之命名建議、教學內容與第三方連結（包括但不限於網域註冊商、主機商）僅供參考。我們不保證其正確性、完整性或適用於您的特定需求。您透過本網站連結至第三方網站所進行之交易或使用，概由您與該第三方負責，我們不負任何法律或契約責任。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. 聯盟與商業關係</h2>
            <p>
              本網站可能含有聯盟行銷連結；當您透過該等連結完成消費時，我們可能獲得推薦報酬。此不影響您與第三方商家之間的交易條件。詳細揭露請參閱我們的<Link href="/privacy" className="text-blue-400 hover:underline">隱私權政策</Link>。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. 準據法與爭議</h2>
            <p>
              本條款之解釋與適用以中華民國法律為準據法。因本條款或使用本網站所生之爭議，雙方同意以臺灣臺北地方法院為第一審管轄法院。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. 條款變更</h2>
            <p>
              我們得隨時修訂本服務條款，修訂後將於本頁公布並註明最後更新日期。您於修訂後繼續使用本網站，即視為接受修訂後之條款。
            </p>
          </section>

          <section>
            <p className="text-zinc-500 text-sm">
              若您對本服務條款有任何疑問，請透過<Link href="/contact" className="text-blue-400 hover:underline">聯絡我們</Link>與我們聯繫。
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
