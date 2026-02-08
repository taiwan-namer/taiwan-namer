import Link from "next/link";
import { ArticleHeader, SectionTitle, ProsCons, PricingTable, CTAButton, StepBlock } from "@/components/BlogParts";
import { ArrowLeft } from "lucide-react";

const GO_BLUEHOST = "/go/bluehost";

function Affiliate({ children }: { children: React.ReactNode }) {
  return (
    <Link href={GO_BLUEHOST} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
      {children}
    </Link>
  );
}

export const metadata = {
  title: "2026 Bluehost 架站教學：新手 10 分鐘架設 WordPress (附折扣)",
  description: "最完整的 Bluehost 購買與架站教學。從網域選擇到 WordPress 安裝，手把手圖文教學。",
};

export default function BluehostPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-blue-500/30 scroll-smooth">
      <nav className="sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/blog" className="flex items-center text-zinc-400 hover:text-white transition text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> 回部落格
          </Link>
          <div className="text-sm font-bold text-zinc-500">台味命名大師</div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <article className="lg:col-span-3 prose prose-invert prose-lg max-w-none">
            <ArticleHeader
              title="如何用 Bluehost 架設 WordPress 網站？(2026 最新完整教學)"
              date="2026/02/04"
            />

            <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg my-6 text-sm text-blue-200">
              <p><strong>🔔 讀者權益聲明：</strong> 本文包含聯盟行銷連結。若您透過連結購買 Bluehost 主機，本站將獲得分潤獎金，這也是維持本站免費運作的動力，且<strong>不會</strong>增加您的購買成本。</p>
            </div>

            <div className="mb-12 text-zinc-300 leading-relaxed">
              <p className="text-zinc-300 mb-6 leading-relaxed">
                如果你想開始經營部落格、公司形象網站，或是個人作品集，<strong className="text-blue-400"><Affiliate>Bluehost</Affiliate> 絕對是目前對新手最友善的選擇。</strong>
                在這篇文章中，我將手把手教你如何從零開始，購買網域、設定主機，並安裝好你的第一個 WordPress 網站。
              </p>
            </div>

            <ProsCons />

            {/* ========== 第一部分 ========== */}
            <div id="part-1" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-16 mb-8 border-b border-white/10 pb-4">
                第一部分：主機申請與環境佈置
              </h2>

              <SectionTitle id="chapter-1">第 1 章：選擇最適合的 2026 方案</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                在開始架站之前，選對「地基」是最關鍵的一步。<Affiliate>Bluehost</Affiliate> 在 2026 年對其共享主機方案進行了大幅度的優化，現在的方案不僅包含存儲空間，更深度整合了 AI 網站優化工具。以下是針對不同需求的創作者建議：
              </p>
              <PricingTable />
              <h3 className="text-xl font-bold text-white mt-8 mb-4">1.1 Basic 方案（適合單一站點新手）</h3>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                如果你目前只打算經營一個部落格（例如專注於一個特定的利基市場），Basic 方案提供 10GB 的 SSD 存儲與基本的 AI 助理功能，是預算有限時的最優選。
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">1.2 Choice Plus 方案（2026 年性價比最高）</h3>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                這是目前最受歡迎的方案。除了可以架設多個網站外，它還包含了<strong className="text-blue-400">自動備份（Daily Backups）</strong>與<strong className="text-blue-400">網域隱私保護</strong>。對於想要長期經營、擔心資料遺失的創作者來說，這個方案能幫你省下額外購買外掛的費用。
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">1.3 Pro 方案（適合高流量或商業用途）</h3>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                若你的網站預期會有大量的高解析度圖片或影音（例如旅遊、攝影部落格），Pro 方案提供的優化 CPU 效能與專屬 IP，能確保網站在高峰期依然流暢。
              </p>
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 my-8">
                <h4 className="font-bold text-white mb-2">💡 小撇步</h4>
                <p className="text-sm text-zinc-400">
                  2026 年的搜尋引擎對網站速度（Core Web Vitals）要求極高，如果預算允許，直上 Choice Plus 能在未來的 SEO 優化上省下不少力氣。
                </p>
              </div>

              <SectionTitle id="chapter-2">第 2 章：網域（Domain）申請</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                網域就是你的網路地址（例如 yourname.com）。<Affiliate>Bluehost</Affiliate> 持續為新用戶提供<strong className="text-blue-400">「首年免費網域」</strong>的優惠，這是在這家主機商架站的一大優勢。
              </p>
              <p className="text-zinc-300 mb-4 leading-relaxed">在申請網域時，請遵循以下 2026 年的命名原則：</p>
              <StepBlock step="01" title="優先選擇 .com">
                儘管現在有許多新奇的後綴（如 .ai, .tech），但 .com 在大眾心目中的權威感與記憶度依然是第一名。
              </StepBlock>
              <StepBlock step="02" title="品牌化優於關鍵字">
                過去流行用長串關鍵字當網域，現在建議使用簡短、好記、具有個人特色的名稱。
              </StepBlock>
              <StepBlock step="03" title="避免符號">
                盡量不要在網域中使用連字號（-），這會增加輸入錯誤的機率。
              </StepBlock>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-blue-400">操作提醒：</strong>在註冊流程中，如果你還沒想好名稱，可以選擇「I&apos;ll create my domain later」，先跳過此步驟進行付費，等網站架構大致完成後，再回來領取你的免費網域。
              </p>

              <SectionTitle id="chapter-3">第 3 章：帳單資訊與隱私設定</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                進入結帳頁面時，你會看到除了主機費用外的許多「額外加購（Package Extras）」。在 2026 年，許多功能其實已經可以透過 WordPress 的免費外掛取代，聰明的配置能幫你省下不少錢。
              </p>
              <StepBlock step="01" title="填寫帳單資訊">
                請確保 Email 地址正確，因為這將是你接收主機管理憑證與重設密碼的唯一管道。
              </StepBlock>
              <StepBlock step="02" title="網域隱私保護（Domain Privacy + Protection）：一定要勾選！">
                如果不勾選，你的姓名、電話與地址會被公開在 WHOIS 資料庫中，導致你每天接到接不完的推銷電話或垃圾信件。若你選擇 Choice Plus 以上方案，此項通常已內含。
              </StepBlock>
              <StepBlock step="03" title="SiteLock Security：建議取消">
                除非你是經營高度敏感的電商網站，否則初期的部落格可以透過 WordPress 內部的免費安全外掛（如 Wordfence）來達成基本防護。
              </StepBlock>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-blue-400">付款週期：</strong>通常一次購買 36 個月（3 年）的平均月費最便宜。考慮到架站是一個長期投資，選擇 12 或 36 個月是最常見的做法。
              </p>
            </div>

            {/* ========== 第二部分 ========== */}
            <div id="part-2" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4" id="part-2-head">
                第二部分：WordPress 一鍵安裝（新版介面）
              </h2>

              <SectionTitle id="chapter-4">第 4 章：Websites 儀表板初探</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                在 2026 年，<Affiliate>Bluehost</Affiliate> 徹底簡化了後台結構。當你完成帳戶申請後，進入的首個頁面不再是混亂的 cPanel，而是直觀的 Websites 儀表板。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-white">集中式管理：</strong>所有的 WordPress 站點現在都統一在左側選單的「Websites」標籤下。你可以在這裡一眼看到網站的運行狀態、更新提醒以及安全性評分。</li>
                <li><strong className="text-white">一鍵添加：</strong>點擊右上角的「Add Website」即可開始安裝。2026 版的安裝程式會自動偵測你的環境並配置資料庫，你只需要設定網站名稱與登入帳號，剩下的技術活都由系統代勞。</li>
                <li><strong className="text-white">站長筆記：</strong>如果你打算同時經營多個項目，這個新版界面能讓你快速切換不同站點的後台，效率極高。</li>
              </ul>

              <SectionTitle id="chapter-5">第 5 章：AI 智能架站助理</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                這是 2026 年架站流程中最具革命性的功能。當你點擊安裝 WordPress 後，系統會跳出 AI Site Creator (WonderSuite) 詢問視窗。
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">5.1 需求分析</h3>
              <p className="text-zinc-300 mb-4 leading-relaxed">AI 會詢問三個關鍵問題：網站類型（部落格、電商或形象站）、品牌描述以及偏好的風格。</p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">5.2 自動佈局</h3>
              <p className="text-zinc-300 mb-4 leading-relaxed">基於你的回答，AI 會自動生成三組完全不同的佈景設計（Layouts）。這些設計並非隨機，而是參考了 2026 年最流行的網頁審美與使用者行為。</p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">5.3 WonderBlocks 整合</h3>
              <p className="text-zinc-300 mb-4 leading-relaxed">透過 AI 生成的網站會直接內建 WonderBlocks 工具。這意味著你不需要學習複雜的程式碼，只要用「拖拉」的方式，就能像玩積木一樣完成首頁配置。</p>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-blue-400">操作提示：</strong>如果你已經有現成的 Logo（.png 或 .jpg，5MB 以下），在 AI 安裝階段上傳，它會自動根據 Logo 的配色來設定全站的視覺色調。
              </p>

              <SectionTitle id="chapter-6">第 6 章：SSL 安全憑證與網域對接</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                一個沒有「鎖頭」標誌的網站，在 2026 年幾乎無法獲得 Google 的信任。<Affiliate>Bluehost</Affiliate> 提供的<strong className="text-blue-400">免費 Let&apos;s Encrypt SSL 憑證</strong>現在是自動化配置的，但仍有幾個步驟需要確認：
              </p>
              <StepBlock step="01" title="激活狀態">
                在 Websites 儀表板中，找到你的站點並點擊「Manage」，進入「Security」分頁。
              </StepBlock>
              <StepBlock step="02" title="自動驗證">
                如果顯示「Not Secure」，請點擊 SSL 卡片中的「Run AutoSSL」。這通常會在幾分鐘內完成域名驗證。
              </StepBlock>
              <StepBlock step="03" title="網域對接">
                如果你是直接在 <Affiliate>Bluehost</Affiliate> 申請的網域，系統會自動幫你對接（A Record 自動指向）。如果你是使用外部網域（如 Godaddy），請確保將 Nameservers 指向 Bluehost。
              </StepBlock>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-red-400">安全性警告：</strong>請務必在開始撰寫內容前確認 HTTPS 已經生效。若在網站半成品時才更改 SSL，可能會產生「混合內容（Mixed Content）」錯誤，導致圖片無法顯示。
              </p>
            </div>

            {/* ========== 第三部分 ========== */}
            <div id="part-3" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                第三部分：後台優化與中文介面設定
              </h2>

              <SectionTitle id="chapter-7">第 7 章：切換繁體中文介面</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                剛安裝完 WordPress 時，預設後台通常是全英文介面。別擔心，WordPress 內建了強大的多國語言支援，只需 30 秒即可切換：
              </p>
              <StepBlock step="01" title="進入設定">
                在左側選單點擊「Settings」（齒輪圖示），接著選擇「General」。
              </StepBlock>
              <StepBlock step="02" title="更改語言">
                找到「Site Language」下拉選單，向上捲動找到「繁體中文」（注意：選單通常會先顯示目前的語言，往下或往上找就能看到中文）。
              </StepBlock>
              <StepBlock step="03" title="調整時區">
                在同一個頁面找到「Timezone」。台灣用戶建議選擇「UTC+8」或直接輸入「Taipei」，這能確保你的文章預約發佈時間是準確的。
              </StepBlock>
              <StepBlock step="04" title="儲存設定">
                點擊最下方的「Save Changes」。頁面重新整理後，你會發現整個後台都變成親切的中文了！
              </StepBlock>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-blue-400">小撇步：</strong>如果你發現切換後部分外掛仍顯示英文，可以到「儀表板」&gt;「更新」頁面，檢查是否有「翻譯更新」可以下載。
              </p>

              <SectionTitle id="chapter-8">第 8 章：清理預設外掛與主題</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <Affiliate>Bluehost</Affiliate> 為了方便新手，在安裝時會預裝一些合作外掛。但在 2026 年，網站速度就是競爭力，我們應該保持環境精簡。
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">8.1 刪除不必要的外掛</h3>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                進入「外掛」&gt;「已安裝的外掛」。除了 Bluehost 官方插件（用於管理主機功能）外，像是 Hello Dolly 或一些暫時用不到的測試外掛建議先「停用」並「刪除」。
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">8.2 精簡主題</h3>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                進入「外觀」&gt;「佈景主題」。WordPress 預設會保留過去幾年的官方主題（如 Twenty Twenty-Four 等）。建議只保留一個「目前使用中」的主題與一個「官方預備主題」，其餘刪除，這能減少主機掃描檔案的負擔並提升安全性。
              </p>

              <SectionTitle id="chapter-9">第 9 章：設定永久連結（Permalink）</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                這是對 SEO（搜尋引擎優化）影響最大的一個步驟。預設的網址格式通常帶有日期或亂碼（例如 ?p=123），這對 Google 並不友善。
              </p>
              <StepBlock step="01" title="進入連結設定">
                點擊「設定」&gt;「永久連結」。
              </StepBlock>
              <StepBlock step="02" title="選擇「文章名稱」">
                在 2026 年，絕大多數的部落客與 SEO 專家都建議選擇<strong className="text-blue-400">「文章名稱 (Post name)」</strong>格式。
              </StepBlock>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                <strong className="text-blue-400">優點：</strong>網址會變成 yourdomain.com/sample-post/。這種格式簡短、易讀，且包含關鍵字，能有效提升搜尋排名。
              </p>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                <strong className="text-blue-400">自定義 Slug：</strong>設定完成後，未來在寫文章時，記得將網址代稱（Slug）改為英文或與內容相關的單字，避免使用中文（中文網址在分享時會變成一串混亂的百分比符號）。
              </p>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-blue-400">2026 專家建議：</strong>如果你的網站內容具有強烈的時效性（如新聞、即時評論），才考慮保留日期格式；否則，使用「文章名稱」能讓你的舊文章看起來永遠保持新鮮。
              </p>
            </div>

            {/* ========== 第四部分 ========== */}
            <div id="part-4" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                第四部分：正式上線前哨站
              </h2>

              <SectionTitle id="chapter-10">第 10 章：關閉 Coming Soon 模式</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                在 2026 年的 <Affiliate>Bluehost</Affiliate> 環境中，預設安裝完 WordPress 後，系統會自動開啟一個「Coming Soon（即將上線）」的暫存頁面。這讓你在後台編輯時，路人不會看到你還沒排版好的「工地現場」。
              </p>
              <p className="text-zinc-300 mb-4 leading-relaxed font-medium">如何正式推向大眾：</p>
              <StepBlock step="01" title="檢查儀表板">
                在 WordPress 後台的最上方選單，你會看到一個橙色或藍色的「Coming Soon Active」提示標籤。
              </StepBlock>
              <StepBlock step="02" title="一鍵上線">
                進入「<Affiliate>Bluehost</Affiliate>」主選單 &gt;「Home」，找到「Launch your site」區塊。
              </StepBlock>
              <StepBlock step="03" title="確認發布">
                點擊「Launch your site」按鈕。當按鈕變為「Your site is live」時，全世界的讀者就能透過網址正式訪問你的部落格了。
              </StepBlock>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-blue-400">小提醒：</strong>上線後，建議用手機或是開啟瀏覽器的「無痕分頁」測試一下，確保圖片、文字與選單在不同裝置上都能正常顯示。
              </p>

              <SectionTitle id="chapter-11">第 11 章：基礎備援與安全性設定</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                網站上線後，最大的威脅來自惡意機器人的掃描與主機突發狀況。在 2026 年，我們不需要複雜的技術，只需做好以下三件事：
              </p>
              <StepBlock step="01" title="啟用兩步驟驗證 (2FA)">
                這是防止帳號被盜的最強手段。你可以透過 Wordfence 或 Jetpack 等外掛，要求登入時必須輸入手機驗證碼。
              </StepBlock>
              <StepBlock step="02" title="確認自動備份頻率">
                若你使用的是 Choice Plus 以上方案，請至 <Affiliate>Bluehost</Affiliate> 控制台確認 CodeGuard 已經開始每日運行。若是 Basic 方案，建議安裝 UpdraftPlus 外掛，並將備份目的地設定在你的 Google Drive 或 Dropbox，確保「雞蛋不放在同一個籃子裡」。
              </StepBlock>
              <StepBlock step="03" title="隱藏 WordPress 版本資訊">
                為了防止駭客針對特定漏洞進行攻擊，建議使用安全外掛隱藏你的 WordPress 版本號。
              </StepBlock>
            </div>

            <CTAButton />
          </article>

          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 p-6 border-l border-white/10 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-r-xl">
              <h4 className="font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-6 bg-blue-500 mr-3 rounded-full" />
                目錄索引
              </h4>
              <nav className="space-y-2 text-sm">
                <a href="#part-1" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200">
                  第一部分：主機申請與環境佈置
                </a>
                <a href="#chapter-1" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 第 1 章：選擇最適合的 2026 方案</a>
                <a href="#chapter-2" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 第 2 章：網域申請</a>
                <a href="#chapter-3" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 第 3 章：帳單資訊與隱私設定</a>

                <a href="#part-2" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200 mt-4">
                  第二部分：WordPress 一鍵安裝
                </a>
                <a href="#chapter-4" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 第 4 章：Websites 儀表板初探</a>
                <a href="#chapter-5" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 第 5 章：AI 智能架站助理</a>
                <a href="#chapter-6" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 第 6 章：SSL 安全憑證與網域對接</a>

                <a href="#part-3" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200 mt-4">
                  第三部分：後台優化與中文介面
                </a>
                <a href="#chapter-7" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 第 7 章：切換繁體中文介面</a>
                <a href="#chapter-8" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 第 8 章：清理預設外掛與主題</a>
                <a href="#chapter-9" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 第 9 章：設定永久連結</a>

                <a href="#part-4" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200 mt-4">
                  第四部分：正式上線前哨站
                </a>
                <a href="#chapter-10" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 第 10 章：關閉 Coming Soon 模式</a>
                <a href="#chapter-11" className="block pl-4 text-zinc-500 hover:text-blue-300 transition">└ 第 11 章：基礎備援與安全性設定</a>
              </nav>

              <div className="mt-8 p-5 bg-gradient-to-br from-blue-900/20 to-violet-900/20 rounded-xl border border-blue-500/20 text-center">
                <p className="text-xs text-blue-300 mb-2 uppercase tracking-wider">Limited Offer</p>
                <div className="text-xl font-bold text-white mb-1">3 折優惠中</div>
                <div className="text-xs text-zinc-400 mb-4">送免費網域一年</div>
                <Link href={GO_BLUEHOST} target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-3 rounded-lg transition shadow-lg shadow-blue-900/30 text-center">
                  領取優惠連結
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
