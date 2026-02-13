import Link from "next/link";
import { ArticleHeader, SectionTitle, StepBlock } from "@/components/BlogParts";
import { ArrowLeft } from "lucide-react";

/** 保留文章內 GoDaddy 名稱顯示，不帶連結（聯盟未通過） */
function GoDaddyText({ children }: { children: React.ReactNode }) {
  return <span className="text-zinc-200">{children}</span>;
}

export const metadata = {
  title: "2026 GoDaddy 網域註冊教學：5 分鐘買到第一個網域（避坑指南）",
  description: "從搜尋網域、結帳避開加購陷阱，到 DNS 設定與續費安全，手把手教你用 GoDaddy 買網域。",
};

export default function GoDaddyTutorialPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-blue-500/30 scroll-smooth">
      <nav className="sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/blog" className="text-zinc-400 hover:text-white transition text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> 回部落格
          </Link>
          <div className="text-sm font-bold text-zinc-500">台式網域命名</div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <article className="lg:col-span-3 prose prose-invert prose-lg max-w-none">
            <ArticleHeader
              title="2026 GoDaddy 網域註冊教學：5 分鐘買到你的第一個網域（避坑指南）"
              date="2026/02/04"
            />

            <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg my-6 text-sm text-blue-200">
              <p><strong>🔔 讀者權益聲明：</strong> 本文包含聯盟行銷連結。若您透過連結購買，本站將獲得分潤，這不會增加您的成本，且有助於本站持續提供免費工具。</p>
            </div>

            {/* ========== 前言 ========== */}
            <div className="mb-12 text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-l-4 border-blue-500 pl-4">前言：為什麼選擇 GoDaddy？</h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                在 2026 年的今天，市面上雖然出現了許多新興的網域註冊商，但 <GoDaddyText>GoDaddy</GoDaddyText> 依然是許多新手踏入網路世界的第一站。這不僅是因為它是全球最大的網域供應商，更因為其介面的直覺性，讓即便完全不懂程式碼的人，也能在幾分鐘內擁有自己的網路門牌。
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">2026 年選擇 GoDaddy 的優缺點分析</h3>
              <p className="text-zinc-300 mb-4 leading-relaxed">在掏出信用卡之前，我們必須客觀審視這家老牌公司的特性：</p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-zinc-900/50 border border-green-500/20 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-green-400 mb-4">✓ 優點</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li><strong className="text-zinc-300">中文介面與客服：</strong>全中文操作流程，對台灣使用者非常友善。</li>
                    <li><strong className="text-zinc-300">超低首年優惠：</strong>經常能以不到一杯咖啡的價格買到熱門 .com 網域。</li>
                    <li><strong className="text-zinc-300">一站式整合：</strong>內建與 WordPress 或 Office 365 的快速串接，適合想省事的人。</li>
                  </ul>
                </div>
                <div className="bg-zinc-900/50 border border-red-500/20 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-red-400 mb-4">✕ 缺點（你需要注意的地方）</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li><strong className="text-zinc-300">續約價格昂貴：</strong>首年便宜，第二年後「恢復原價」通常高於平均。</li>
                    <li><strong className="text-zinc-300">結帳陷阱多：</strong>購物車會自動塞入隱私保護或主機方案，新手易多花冤枉錢。</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">註冊網域前的準備清單</h3>
              <p className="text-zinc-300 mb-4 leading-relaxed">為了確保你能在 5 分鐘內搞定，請先準備好以下三樣東西：</p>
              <StepBlock step="01" title="一個可用的電子信箱">
                用來驗證網域所有權（建議使用常用信箱，以免漏掉續費通知）。
              </StepBlock>
              <StepBlock step="02" title="海外刷卡信用卡">
                GoDaddy 為美商公司，建議使用有海外消費回饋的卡片。
              </StepBlock>
              <StepBlock step="03" title="心儀的名稱清單">
                最好準備 2～3 個備案，以防第一首選已被註冊。
              </StepBlock>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                這篇文章將跳過所有廢話，用最直接的圖解流程，帶你避開那些煩人的自動加購選項，成功買到你的第一個網域。
              </p>
            </div>

            {/* ========== 第一部分：第一步 ========== */}
            <div id="part-1" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-16 mb-8 border-b border-white/10 pb-4">
                第一步：搜尋並挑選你的完美網域
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                在進入 <GoDaddyText>GoDaddy</GoDaddyText> 官網後，第一件事就是透過搜尋框尋找你心儀的名稱。這步看似簡單，但其實藏著不少策略，挑錯了可能會影響你未來的品牌形象或荷包。
              </p>

              <SectionTitle id="chapter-1">1. 如何使用關鍵字搜尋？</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                在搜尋框輸入你的品牌名或關鍵字（例如：joyseedisland 或 wondervoyage）。
              </p>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                <strong className="text-blue-400">建議：</strong>盡量選擇<strong className="text-zinc-200">短小、好記、無特殊符號</strong>的字詞。
              </p>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-blue-400">技巧：</strong>如果首選名稱已被註冊，GoDaddy 會推薦變體（例如加個 -shop 或 .org），請務必謹慎挑選，避免讓用戶感到混淆。
              </p>

              <SectionTitle id="chapter-2">2. .com 還是 .tw？熱門後綴名分析</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">2026 年的網域選擇極多，常見選擇主要分為以下幾類：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-white">.com（國際通用）：</strong>權威性最高，適合有跨國野心或品牌經營。缺點是好名字幾乎都被搶光。</li>
                <li><strong className="text-white">.tw / .com.tw（台灣在地）：</strong>對台灣消費者信任感強，對台灣地區 SEO 有微幅幫助。</li>
                <li><strong className="text-white">.io / .me / .ai：</strong>適合科技新創或個人品牌，價格較高但能展現現代感。</li>
              </ul>

              <SectionTitle id="chapter-3">3. 避坑指南：小心過於昂貴的「溢價網域」</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                搜尋結果中有時會出現標價<strong className="text-zinc-200">數萬、甚至數十萬台幣</strong>的網域。這些是「溢價網域（Premium Domains）」，通常是已被他人持有並高價轉賣的熱門詞。
              </p>
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 my-6">
                <h4 className="font-bold text-white mb-2">💡 專業建議</h4>
                <p className="text-sm text-zinc-400">
                  除非你是大企業，否則請直接跳過。新手應專注在找尋「原價」網域（通常首年約台幣 $30～$500），將省下的預算投入網站內容開發。
                </p>
              </div>

              <SectionTitle id="chapter-4">4. 註冊前的最後檢查</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">在按下「加入購物車」之前，請先確認：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li>發音是否順口？（試著唸出聲，確認不會產生諧音誤會）</li>
                <li>拼字是否有誤？（網域一旦買錯，無法像衣服一樣更換尺寸）</li>
                <li>社交平台是否可用？（順便去 FB/IG 查一下同名的帳號是否還能申請）</li>
              </ul>
            </div>

            {/* ========== 第二部分：第二步 ========== */}
            <div id="part-2" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                第二步：購買流程拆解（避開自動加購陷阱）
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                挑選好網域並點擊「加入購物車」後，真正的考驗才開始。<GoDaddyText>GoDaddy</GoDaddyText> 會在結帳過程中推銷許多額外服務，以下是我的「省錢避坑」指南：
              </p>

              <SectionTitle id="chapter-5">1. 快速通關：點擊「繼續前往購物車」</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                選定網域後，系統通常會彈出詢問「全方位保護」或「基本保護」。
              </p>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-blue-400">新手建議：</strong>2026 年許多網域已包含基本隱私保護。若預算有限，可先選擇「不，謝謝」或最基本方案。除非經營大型企業，否則昂貴的「終極安全防護」在初期通常不必購買。
              </p>

              <SectionTitle id="chapter-6">2. 圖解：剔除不需要的額外加購</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">進入最後結帳頁面時，請務必檢查購物車清單，常見的「隱藏陷阱」包括：</p>
              <StepBlock step="01" title="專業電子郵件 (Microsoft 365)">
                系統常會預設勾選「免費試用一個月」，一個月後會自動扣款。若目前沒有收發品牌郵件的需求，請直接刪除。
              </StepBlock>
              <StepBlock step="02" title="網站架設器">
                GoDaddy 會推薦加購自建站工具。如果你打算之後使用 WordPress，這裡請務必取消勾選。
              </StepBlock>

              <SectionTitle id="chapter-7">3. 檢查註冊年限：1 年還是長期？</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                GoDaddy 的預設年限有時會跳到 2 年或 5 年。<strong className="text-blue-400">試水溫：</strong>請手動改為「1 年」，結帳金額會明顯降低。<strong className="text-blue-400">長期品牌：</strong>可先買 1 年，確認運作順利後隔年再開啟自動續費。
              </p>

              <SectionTitle id="chapter-8">4. 結帳與帳戶註冊</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">最後，點擊「準備好付款」：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
                <li><strong className="text-white">帳戶註冊：</strong>建議直接使用 Google 帳號快速連動，省去設定密碼的麻煩。</li>
                <li><strong className="text-white">填寫資料：</strong>姓名與地址請盡量使用英文（可至郵政官網查詢翻譯），網域註冊資料為國際公認，填寫中文有時會導致系統抓取錯誤。</li>
              </ul>
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 my-6">
                <h4 className="font-bold text-white mb-2">💡 專業小撇步</h4>
                <p className="text-sm text-zinc-400">
                  在結帳畫面的左下角通常有「輸入優惠代碼 (Promo Code)」欄位。購買前可搜尋 GoDaddy Coupon 2026，有時能多省 10%～30% 的費用！
                </p>
              </div>
            </div>

            {/* ========== 第三部分：第三步 ========== */}
            <div id="part-3" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                第三步：DNS 設定教學（讓網域連上網站）
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                買好網域後，你的網站並不會自動出現。這就像申請了門牌（網域），但還沒把它掛在房子（主機）上。這個「掛門牌」的過程，就是 DNS 設定。
              </p>

              <SectionTitle id="chapter-9">1. 什麼是 DNS？（秒懂圖解）</SectionTitle>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-white">網域 (Domain)：</strong>像是你的地址，例如 www.yourname.com。</li>
                <li><strong className="text-white">主機 (Hosting)：</strong>像是你的房子空間，存放照片、文章的地方。</li>
                <li><strong className="text-white">DNS：</strong>負責把「地址」導向「房子」的導航系統。</li>
              </ul>

              <SectionTitle id="chapter-10">2. 如何修改 Nameservers（名稱伺服器）</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                若使用外部主機（例如 Cloudways、Bluehost 或 SiteGround），通常需要修改 Nameservers。
              </p>
              <StepBlock step="01" title="登入 GoDaddy 後台">
                進入「我的產品」，找到你的網域，點擊「管理 DNS」。
              </StepBlock>
              <StepBlock step="02" title="變更名稱伺服器">
                下拉找到「名稱伺服器 (Nameservers)」區塊，點擊「變更」，選擇「輸入我自己的名稱伺服器」，並填入主機商提供的兩組網址（通常像 ns1.example.com）。
              </StepBlock>

              <SectionTitle id="chapter-11">3. 常見的 A 紀錄與 CNAME 設定</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">若只需簡單對應、不需更換整個 Nameservers，會用到：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
                <li><strong className="text-white">A 紀錄：</strong>最常用。將網域直接指向主機的 IP 位址（如 123.45.67.89）。</li>
                <li><strong className="text-white">CNAME 紀錄：</strong>將子網域（如 blog.yourname.com）指向另一個網址。</li>
              </ul>

              <SectionTitle id="chapter-12">4. 設定後為什麼沒反應？（生效時間解析）</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                新手最常問：「我明明設定好了，為什麼輸入網址還是看不到網站？」DNS 修改後需要時間傳播到全球伺服器。<strong className="text-blue-400">通常在 15 分鐘到 4 小時內</strong>會生效，極少數可能需要 24～48 小時。
              </p>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                <strong className="text-blue-400">檢查工具：</strong>可搜尋 DNS Checker 網站，輸入你的網域，看到全球都亮「綠色勾勾」就代表成功了。
              </p>
              <p className="text-amber-200/90 text-sm mb-6">
                ⚠ 在 DNS 生效前請不要重複瘋狂點擊變更，可能導致生效時間重新計算。設定完後去泡杯咖啡休息一下是最好的選擇。
              </p>
            </div>

            {/* ========== 第四部分：進階管理 ========== */}
            <div id="part-4" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                第四步：進階管理—續費與安全防護
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                買完網域並設定好 DNS 後，並非從此一勞永逸。為了確保品牌資產安全且不會意外遺失，請調整以下幾個關鍵設定。
              </p>

              <SectionTitle id="chapter-13">1. 開啟／關閉「自動續費」的時機</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                在 <GoDaddyText>GoDaddy</GoDaddyText> 後台，每筆網域預設通常是開啟「自動續費」的。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-green-400">建議開啟：</strong>若此網域是長期經營的品牌、公司官網，請務必保持開啟，避免因信用卡過期或忘記繳費導致網域被搶註。</li>
                <li><strong className="text-amber-400">建議關閉：</strong>若只是買來短期測試（如活動網站），建議手動關閉，以免一年後被自動扣款昂貴原價。</li>
              </ul>

              <SectionTitle id="chapter-14">2. 網域隱私保護 (Whois Privacy) 的重要性</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                若註冊時沒有加購隱私保護，你的姓名、電話、電子信箱會出現在公開的 Whois 資料庫中，可能導致大量推銷電話或垃圾信。在網域管理介面可查看「隱私保護」狀態。2026 年許多註冊商已將此列為標準配備。
              </p>

              <SectionTitle id="chapter-15">3. 網域鎖 (Domain Lock)：防止被惡意轉移</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                請確認網域狀態顯示為「已鎖定 (Locked)」。當網域鎖定時，任何人（包括你自己）都無法將網域轉移到其他註冊商；只有真的要搬家時才需手動解鎖。
              </p>

              <SectionTitle id="chapter-16">4. 兩步驟驗證 (2FA)：終極安全手段</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                網域是數位資產，價值可能隨品牌成長而增加。強烈建議前往帳戶設定開啟「兩步驟驗證」。即使駭客取得密碼，沒有手機驗證碼也無法竄改 DNS 或盜走網域。
              </p>
            </div>

            {/* ========== 第五部分：FAQ ========== */}
            <div id="part-5" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                第五步：常見問題 (FAQ)
              </h2>
              <p className="text-zinc-300 mb-8 leading-relaxed">
                新手在 GoDaddy 註冊網域後最常遇到的幾個「大坑」，希望能幫你省下與客服溝通的時間。
              </p>

              <div className="space-y-8">
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Q1：剛買完網域、設定好 DNS，為什麼網站還是打不開？</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A：請給它一點「擴散時間」。全球網路伺服器需要時間更新你的新門牌資訊。通常 15 分鐘內會生效，有時因所在地區電信商更新較慢需等 24 小時。小撇步：可試著用手機切換成 4G/5G 查看，通常比家用 Wi‑Fi 更快看到結果。
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Q2：第一年超便宜，但第二年續費變貴很多，怎麼辦？</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A：這是註冊商常見行銷策略。對策 1：若打算長期持有，可在第一年快到期前（約第 11 個月）將網域「轉移」到續費較便宜的註冊商（如 Cloudflare 或 Namecheap）。對策 2：第一年註冊時直接一次買 2～3 年，有時能鎖定較低平均價格。
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Q3：不小心買錯名稱，或者反悔了可以退款嗎？</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A：可以，但有嚴格時間限制。根據 GoDaddy 標準政策，新註冊網域通常要在<strong className="text-zinc-300"> 5 天（120 小時）內</strong>申請退款。若是「續費」的退款，通常只有 48 小時。若發現買錯字，請盡快聯繫線上中文客服處理。
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Q4：我需要加購 GoDaddy 推薦的「專業電子郵件」嗎？</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A：初期通常不需要。除非立刻需要 info@yourdomain.com 這類信箱來談生意，否則可先用免費 Gmail，等網站流量穩定後再考慮 Google Workspace 或 Zoho Mail。
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Q5：為什麼我會收到要求驗證電子郵件的信？不理會可以嗎？</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A：絕對不可以。根據 ICANN 規定，買完網域後必須點擊信中的驗證連結。若 15 天內沒驗證，網域會被暫時停用。請務必到收件匣（或垃圾郵件箱）找那封驗證信。
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-3">結語：擁有網域，只是品牌的第一步</h3>
                <p className="text-zinc-400 leading-relaxed">
                  恭喜你！到這裡你已經成功避開加購陷阱，並安全地啟動了專屬網域。2026 年是個人品牌與數位轉型加速的一年，擁有一個乾淨、好記的網域，就是你最重要的數位資產。
                </p>
              </div>
            </div>

            {/* CTA：引導使用本站工具 */}
            <div className="my-16 p-8 md:p-12 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-pink-500" />
              <h3 className="text-2xl font-bold text-white mb-4">準備好查詢或註冊網域了嗎？</h3>
              <p className="text-zinc-400 max-w-lg mx-auto">
                使用本站首頁的 AI 命名工具先發想好名字，再到註冊商官網查價與購買。
              </p>
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
                  第一步：搜尋並挑選網域
                </a>
                <a href="#chapter-1" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 關鍵字搜尋</a>
                <a href="#chapter-2" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 後綴分析</a>
                <a href="#chapter-3" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 溢價網域避坑</a>
                <a href="#chapter-4" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 註冊前檢查</a>

                <a href="#part-2" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200 mt-4">
                  第二步：購買流程（避開加購）
                </a>
                <a href="#chapter-5" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 前往購物車</a>
                <a href="#chapter-6" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 剔除額外加購</a>
                <a href="#chapter-7" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 註冊年限</a>
                <a href="#chapter-8" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 結帳與註冊</a>

                <a href="#part-3" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200 mt-4">
                  第三步：DNS 設定
                </a>
                <a href="#chapter-9" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 什麼是 DNS</a>
                <a href="#chapter-10" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ Nameservers</a>
                <a href="#chapter-11" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ A/CNAME 紀錄</a>
                <a href="#chapter-12" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 生效時間</a>

                <a href="#part-4" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200 mt-4">
                  第四步：進階管理
                </a>
                <a href="#chapter-13" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 自動續費</a>
                <a href="#chapter-14" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 隱私保護</a>
                <a href="#chapter-15" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 網域鎖</a>
                <a href="#chapter-16" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 兩步驟驗證</a>

                <a href="#part-5" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200 mt-4">
                  第五步：常見問題 FAQ
                </a>
              </nav>

              <div className="mt-8 p-5 bg-gradient-to-br from-violet-900/20 to-blue-900/20 rounded-xl border border-violet-500/20 text-center">
                <p className="text-xs text-violet-300 mb-2 uppercase tracking-wider">AI 命名工具</p>
                <div className="text-xl font-bold text-white mb-1">台式網域命名</div>
                <div className="text-xs text-zinc-400">首頁可免費產生網域建議</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
