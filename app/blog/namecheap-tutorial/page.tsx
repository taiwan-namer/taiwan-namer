import Link from "next/link";
import { ArticleHeader, SectionTitle, StepBlock } from "@/components/BlogParts";
import { ArrowLeft } from "lucide-react";

// 與首頁一致：無 CJ 時連官網，之後可改為聯盟連結
// 聯盟網址 + 帶目的地的查詢連結（與首頁 GoDaddy 邏輯一致）
const NAMECHEAP_AFFILIATE_BASE = "https://www.tkqlhce.com/click-101646408-15083037";
const NAMECHEAP_SEARCH_URL = "https://www.namecheap.com/domains/registration/results/";
const NAMECHEAP_LINK = `${NAMECHEAP_AFFILIATE_BASE}?url=${encodeURIComponent(NAMECHEAP_SEARCH_URL)}`;

function NamecheapAffiliate({ children }: { children: React.ReactNode }) {
  return (
    <a href={NAMECHEAP_LINK} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
      {children}
    </a>
  );
}

export const metadata = {
  title: "2026 Namecheap 網域註冊教學：永久免費隱私保護、無陷阱結帳",
  description: "GoDaddy 以外的專業選擇。手把手教你在 Namecheap 買網域：免費 WhoisGuard、DNS 設定、進階安全與 FAQ。",
};

export default function NamecheapTutorialPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-blue-500/30 scroll-smooth">
      <nav className="sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/blog" className="text-zinc-400 hover:text-white transition text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> 回部落格
          </Link>
          <div className="text-sm font-bold text-zinc-500">台味命名大師</div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <article className="lg:col-span-3 prose prose-invert prose-lg max-w-none">
            <ArticleHeader
              title="2026 Namecheap 網域註冊教學：永久免費隱私保護、無陷阱結帳"
              date="2026/02/04"
            />

            <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg my-6 text-sm text-blue-200">
              <p><strong>🔔 讀者權益聲明：</strong> 本文包含聯盟行銷連結。若您透過連結購買，本站將獲得分潤，這不會增加您的成本，且有助於本站持續提供免費工具。</p>
            </div>

            {/* ========== 前言 ========== */}
            <div className="mb-12 text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-l-4 border-blue-500 pl-4">前言：為什麼老司機都推 Namecheap？</h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                如果你剛開始接觸架站，一定聽過 GoDaddy。但如果你去問那些經營網站多年的「老司機」，他們很可能會告訴你另一個名字：<NamecheapAffiliate>Namecheap</NamecheapAffiliate>。原因很簡單——許多註冊商第一年給你極低的「入坑價」，隔年續約時價格往往翻倍；更別提結帳時自動勾選、每年多收幾百塊台幣的「網域隱私保護」。
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">GoDaddy vs. Namecheap 對決</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-zinc-700 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-zinc-800/80">
                      <th className="text-left p-3 text-zinc-300 font-semibold">項目</th>
                      <th className="text-left p-3 text-zinc-300 font-semibold">GoDaddy</th>
                      <th className="text-left p-3 text-green-400 font-semibold">Namecheap</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    <tr className="border-t border-zinc-700">
                      <td className="p-3">隱私保護 (Whois)</td>
                      <td className="p-3">通常需額外付費加購</td>
                      <td className="p-3 text-green-400">【永久免費】提供</td>
                    </tr>
                    <tr className="border-t border-zinc-700">
                      <td className="p-3">續約價格</td>
                      <td className="p-3">恢復原價後通常較高</td>
                      <td className="p-3 text-green-400">價格透明且相對穩定</td>
                    </tr>
                    <tr className="border-t border-zinc-700">
                      <td className="p-3">操作介面</td>
                      <td className="p-3">廣告與加購選項較多，新手易點錯</td>
                      <td className="p-3 text-green-400">介面簡潔、專業，無過度推銷</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Namecheap 的核心優勢：不玩數字遊戲</h3>
              <ul className="space-y-3 text-zinc-300 mb-6">
                <li><strong className="text-zinc-200">永久免費隱私保護：</strong>在其他平台要隱藏真實姓名、電話，每年可能多花 $300～$500 台幣。在 Namecheap，這項服務是標配，永久 $0 元。</li>
                <li><strong className="text-zinc-200">續約不亂漲：</strong>Namecheap 不會用「首年超低價」誘捕用戶，隔年再狠宰一筆。</li>
                <li><strong className="text-zinc-200">無推銷結帳：</strong>購物車非常乾淨，不會在結帳時塞進一堆不需要的方案。</li>
              </ul>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                無論你是想省錢的部落客、剛起步的小資創業家，Namecheap 都是讓你買得安心、放著省心的選擇。
              </p>
            </div>

            {/* ========== 第一步：準備工作 ========== */}
            <div id="part-1" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-16 mb-8 border-b border-white/10 pb-4">
                第一步：準備工作—註冊前你需要知道的事
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                在正式刷卡之前，請先花 1 分鐘確認以下三件事，避免買錯網域或付錯錢。
              </p>

              <SectionTitle id="chapter-1">1. 檢查網域：如何在 Namecheap 快速搜尋</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                <NamecheapAffiliate>Namecheap</NamecheapAffiliate> 的搜尋引擎很強大，但也可能讓你眼花繚亂。
              </p>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                <strong className="text-blue-400">搜尋技巧：</strong>在搜尋框輸入品牌名時，建議直接帶後綴（例如輸入 <code className="bg-white/10 px-1.5 py-0.5 rounded">joyseed.com</code> 而非只輸入 joyseed），系統會優先顯示該後綴的狀態。
              </p>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-blue-400">Beast Mode（野獸模式）：</strong>若有大量名稱想一次檢查，可使用搜尋框旁邊的 Beast Mode，一次輸入幾十個備選名稱，節省時間。
              </p>

              <SectionTitle id="chapter-2">2. 認識 2026 網域續費行情</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                Namecheap 雖然佛心，但「註冊價」與「續約價」通常不同，請務必點擊搜尋結果下方的「View Details」查看：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
                <li><strong className="text-white">.com：</strong>首年通常約 $9～10 美金，隔年續費約 $14～16 美金。</li>
                <li><strong className="text-white">.net / .org：</strong>續約價格通常比 .com 高一點點。</li>
              </ul>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-blue-400">省錢提醒：</strong>雖然首年有折扣，Namecheap 的續約價在業界仍屬於非常穩定且合理的水平。
              </p>

              <SectionTitle id="chapter-3">3. 準備好海外消費工具</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">Namecheap 是美國公司，結帳前請確保：</p>
              <StepBlock step="01" title="信用卡">
                需具備「海外線上刷卡」功能。建議使用有 3% 以上海外消費回饋的卡片，直接抵銷手續費還有賺。
              </StepBlock>
              <StepBlock step="02" title="PayPal">
                若不想在國外網站留下刷卡資料，Namecheap 對 PayPal 支援度極高，非常推薦使用。
              </StepBlock>
              <StepBlock step="03" title="身分資料">
                準備好姓名、地址的【英文翻譯】（可上郵政官網查詢），註冊帳號時會用到。
              </StepBlock>
            </div>

            {/* ========== 第二步：手把手註冊流程 ========== */}
            <div id="part-2" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                第二步：手把手教學—Namecheap 註冊流程（超佛心無陷阱）
              </h2>

              <SectionTitle id="chapter-4">步驟 1：進入官網並搜尋網域</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                進入 <NamecheapAffiliate>Namecheap</NamecheapAffiliate> 首頁後，直接在中間的大搜尋框輸入你想買的網址。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-green-400">綠色打勾：</strong>代表可以購買。</li>
                <li><strong className="text-zinc-400">TAKEN：</strong>代表已被註冊。</li>
                <li><strong className="text-amber-400">PREMIUM：</strong>代表該網域非常昂貴（可能是轉賣價），新手請直接跳過。</li>
              </ul>

              <SectionTitle id="chapter-5">步驟 2：確認購物車與「免費隱私保護」</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                點擊網域旁的購物車圖示後，進入結帳清單（View Cart），請確認以下兩項：
              </p>
              <StepBlock step="01" title="Domain Registration（網域註冊）">
                先選擇「1 Year」即可。
              </StepBlock>
              <StepBlock step="02" title="Domain Privacy（網域隱私）">
                這就是 WhoisGuard，能隱藏你的個人資料。狀態請確認為【Enabled】，價格應顯示【$0.00 / FREE FOREVER】（永久免費）。★ 這是 Namecheap 完勝 GoDaddy 的地方，千萬別關掉它！
              </StepBlock>

              <SectionTitle id="chapter-6">步驟 3：避開不必要的加購（小資省錢重點）</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">往下捲動會看到一堆加購選項，為了節省預算，建議【全部不要勾選】：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-white">PremiumDNS（進階解析）：</strong>一般網站不需要，基礎版就夠快。</li>
                <li><strong className="text-white">SSL Certificate：</strong>若之後要用 WordPress 或特定主機，通常都有免費的，這裡不用買。</li>
                <li><strong className="text-white">VPN、Email Hosting：</strong>可等網站做起來後再說。</li>
              </ul>

              <SectionTitle id="chapter-7">步驟 4：輸入優惠碼與註冊帳號</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                在右側 Promo Code 欄位可嘗試搜尋當月優惠碼（例如 NEWCOM5），能再省下一點小錢。
              </p>
              <p className="text-zinc-300 mb-4 leading-relaxed">點擊「Confirm Order」後，若沒有帳號，系統會要求建立：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-white">使用者名稱：</strong>建議用英文，這也是之後的登入帳號。</li>
                <li><strong className="text-white">基本資料：</strong>請填寫【真實英文資料】，地址可至郵局網站翻譯。</li>
              </ul>

              <SectionTitle id="chapter-8">步驟 5：完成支付與郵件驗證</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">選擇付款方式：支援信用卡、PayPal 或比特幣。</p>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-amber-200">★ 重點：</strong>付款完成後，信箱會收到驗證信。請務必點擊信中的驗證連結！若 15 天內沒點，網域會被停用。
              </p>
            </div>

            {/* ========== 第三步：DNS 設定 ========== */}
            <div id="part-3" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                第三步：DNS 設定教學—快速連結你的網站
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                買好網域後，最後一個技術大關就是將它「指向」你的主機，網站才能正式被看見。
              </p>

              <SectionTitle id="chapter-9">1. 登入後台並尋找網域</SectionTitle>
              <StepBlock step="01" title="進入網域清單">
                登入 Namecheap，點擊左側選單的【Domain List】（網域清單）。
              </StepBlock>
              <StepBlock step="02" title="管理網域">
                在剛買好的網域右側，點擊綠色的【MANAGE】（管理）按鈕。
              </StepBlock>

              <SectionTitle id="chapter-10">2. 修改名稱伺服器 (Nameservers)</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">若使用外部主機（例如 SiteGround、Bluehost、Cloudways）：</p>
              <StepBlock step="01" title="切換為 Custom DNS">
                在畫面上方找到【NAMESERVERS】區塊，將下拉選單從「Namecheap BasicDNS」改為【Custom DNS】。
              </StepBlock>
              <StepBlock step="02" title="填入主機商網址">
                在下方的欄位中，填入主機商提供的兩組網址（例如 ns1.yourhost.com、ns2.yourhost.com），點擊右邊綠色勾勾儲存。
              </StepBlock>

              <SectionTitle id="chapter-11">3. 使用 A 紀錄指向（適合特定架站平台）</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">若不更換 Nameservers，只需設定 A 紀錄：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li>點擊上方橫式標籤【Advanced DNS】。</li>
                <li>在「Host Records」區塊點擊「ADD NEW RECORD」。</li>
                <li>選擇「A Record」，Host 填「@」，Value 填主機的「IP 位址」。</li>
                <li>點擊綠色勾勾儲存。</li>
              </ul>

              <SectionTitle id="chapter-12">4. 靜候生效（DNS Propagation）</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                <strong className="text-blue-400">不要急：</strong>設定完成後，全球網路需要時間更新。通常 30 分鐘內生效，最長可能需要 24～48 小時。
              </p>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-blue-400">檢查工具：</strong>可搜尋「DNS Checker」，輸入網址，若全球地圖都亮綠燈就代表成功了！
              </p>
            </div>

            {/* ========== 第四步：進階管理 ========== */}
            <div id="part-4" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                第四步：進階管理—守護你的數位資產
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                買完網域並開通後，最後一步是做好安全防護。網域是網站的靈魂，一旦被盜或忘記續約，損失會非常慘重。
              </p>

              <SectionTitle id="chapter-13">1. 開啟兩步驟驗證 (2FA)——必做！</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                <NamecheapAffiliate>Namecheap</NamecheapAffiliate> 提供的帳號防護非常嚴密，建議立刻開啟：點擊左側選單【Profile】→【Security】，找到「Two-Factor Authentication」點擊「Manage」，建議使用 Google Authenticator 或簡訊驗證。
              </p>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                ★ 這樣即使別人偷到你的密碼，也無法登入後台偷走你的網域。
              </p>

              <SectionTitle id="chapter-14">2. 設定自動續約 (Auto-Renew)</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                為避免因忙碌或沒收信而導致網域過期被搶註：回到【Domain List】，找到你的網域，將「AUTO-RENEW」按鈕撥向【ON】（顯示為綠色），並確認信用卡資料有效。
              </p>

              <SectionTitle id="chapter-15">3. 網域轉移技巧 (Transfer)</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">若你在 GoDaddy 有網域，且受夠了昂貴續費：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li>在 GoDaddy 後台解鎖網域並取得「授權碼 (Auth Code)」。</li>
                <li>到 Namecheap 點擊頂部【Transfer】，輸入網址。</li>
                <li>支付一年轉移費用（通常包含一年續約），網域就會搬家到 Namecheap，開始享有免費隱私保護。</li>
              </ul>

              <SectionTitle id="chapter-16">4. 保持「網域鎖 (Domain Lock)」開啟</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                Namecheap 預設會開啟 Registrar Lock。只要這個鎖是開啟的，任何人都無法私自將你的網域轉移走。除非你要搬家，否則請保持鎖定狀態。
              </p>
            </div>

            {/* ========== 第五步：FAQ + 結語 ========== */}
            <div id="part-5" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                第五步：常見問題 (FAQ)
              </h2>
              <p className="text-zinc-300 mb-8 leading-relaxed">
                新手在使用 Namecheap 時最常問的四個問題，幫助你快速排除障礙。
              </p>

              <div className="space-y-8">
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Q1：Namecheap 的客服是真人嗎？好找嗎？</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    他們提供 24/7 的【Live Chat 線上客服】。雖然是英文溝通，但用詞通常很簡單。可使用 Google 翻譯將問題貼過去，處理速度非常快，是新手的一大後盾。
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Q2：為什麼我的隱私保護顯示 $0.00？真的是永久免費嗎？</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    是的！這是 Namecheap 的招牌服務（Domain Privacy）。只要網域還在 Namecheap，這項服務就不會收錢，幫你省下每年約 $10～15 美金的額外開銷。
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Q3：付款後多久可以開始用？（解析速度測試）</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    購買是【即時生效】的。但 DNS 解析（讓網址連上網站）通常需要 30 分鐘到 4 小時不等。若剛買完打不開網站，請先去喝杯咖啡，這是正常現象。
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Q4：支援哪些付款方式？</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    信用卡 (Visa, Mastercard, Amex 等)、PayPal（最推薦，安全且方便）、加密貨幣（如 Bitcoin），對隱私要求極高的人很方便。
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-3">結語：選擇一個對新手最友善的起點</h3>
                <p className="text-zinc-400 leading-relaxed">
                  相較於 GoDaddy 的強烈推銷感，Namecheap 給人一種「安靜、專業且透明」的感覺。雖然介面是英文，但只要照著這篇教學走，你就能省下隱私保護的錢，還能獲得一個穩定的數位家園。2026 年是經營個人品牌最好的時機，現在就去註冊你的專屬網域吧！
                </p>
              </div>
            </div>

            {/* Namecheap CTA（與首頁一致） */}
            <div className="my-16 p-8 md:p-12 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500" />
              <h3 className="text-2xl font-bold text-white mb-4">準備好註冊網域了嗎？</h3>
              <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                前往 Namecheap 搜尋網域、享有永久免費隱私保護，或使用本站首頁的 AI 命名工具先發想好名字再查。
              </p>
              <a
                href={NAMECHEAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-900/50"
              >
                前往 Namecheap 查詢網域 →
              </a>
            </div>
          </article>

          {/* 右側懸浮目錄 (Sticky TOC) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 p-6 border-l border-white/10 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-r-xl">
              <h4 className="font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-6 bg-blue-500 mr-3 rounded-full" />
                目錄索引
              </h4>
              <nav className="space-y-2 text-sm">
                <a href="#part-1" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200">
                  第一步：準備工作
                </a>
                <a href="#chapter-1" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 搜尋網域</a>
                <a href="#chapter-2" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 續費行情</a>
                <a href="#chapter-3" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 海外消費工具</a>

                <a href="#part-2" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200 mt-4">
                  第二步：註冊流程
                </a>
                <a href="#chapter-4" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 搜尋網域</a>
                <a href="#chapter-5" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 購物車與隱私</a>
                <a href="#chapter-6" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 避開加購</a>
                <a href="#chapter-7" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 優惠碼與帳號</a>
                <a href="#chapter-8" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 支付與驗證</a>

                <a href="#part-3" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200 mt-4">
                  第三步：DNS 設定
                </a>
                <a href="#chapter-9" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 登入與網域</a>
                <a href="#chapter-10" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ Nameservers</a>
                <a href="#chapter-11" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ A 紀錄</a>
                <a href="#chapter-12" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 生效時間</a>

                <a href="#part-4" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200 mt-4">
                  第四步：進階管理
                </a>
                <a href="#chapter-13" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 2FA</a>
                <a href="#chapter-14" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 自動續約</a>
                <a href="#chapter-15" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 網域轉移</a>
                <a href="#chapter-16" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 網域鎖</a>

                <a href="#part-5" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200 mt-4">
                  第五步：常見問題 FAQ
                </a>
              </nav>

              <div className="mt-8 p-5 bg-gradient-to-br from-orange-900/20 to-amber-900/20 rounded-xl border border-orange-500/20 text-center">
                <p className="text-xs text-orange-300 mb-2 uppercase tracking-wider">Domain Search</p>
                <div className="text-xl font-bold text-white mb-1">Namecheap 查價</div>
                <div className="text-xs text-zinc-400 mb-4">永久免費隱私保護 · 與首頁 AI 命名搭配</div>
                <a href={NAMECHEAP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full bg-orange-500 hover:bg-orange-400 text-white text-xs font-bold py-3 rounded-lg transition shadow-lg shadow-orange-900/30">
                  前往 Namecheap
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
