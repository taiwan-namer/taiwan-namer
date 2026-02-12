import Link from "next/link";
import { ArticleHeader, SectionTitle, StepBlock, CTAButton } from "@/components/BlogParts";
import { ArrowLeft } from "lucide-react";

const GO_BLUEHOST = "/go/bluehost";
const GO_GODADDY = "/go/godaddy";
const GO_NAMECHEAP = "/go/namecheap";

function Affiliate({ children }: { children: React.ReactNode }) {
  return (
    <Link href={GO_BLUEHOST} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
      {children}
    </Link>
  );
}

function GoDaddyAffiliate({ children }: { children: React.ReactNode }) {
  return (
    <Link href={GO_GODADDY} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 hover:underline">
      {children}
    </Link>
  );
}

function NamecheapAffiliate({ children }: { children: React.ReactNode }) {
  return (
    <Link href={GO_NAMECHEAP} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 hover:underline">
      {children}
    </Link>
  );
}

export const metadata = {
  title: "2026 年 WordPress 完整架站攻略：從網域到獲利一次搞懂",
  description: "自架網站完整教學：前言與架站三要素、網域主機策略、Bluehost 購買流程、一鍵安裝 WordPress、佈景主題與外掛、維護與變現、FAQ 結語。",
};

export default function WordPressCompleteGuidePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-blue-500/30 scroll-smooth">
      <nav className="sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/blog" className="flex items-center text-zinc-400 hover:text-white transition text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> 回部落格
          </Link>
          <div className="text-sm font-bold text-zinc-500">台式網域命名</div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <article className="lg:col-span-3 prose prose-invert prose-lg max-w-none">
            <ArticleHeader
              title="2026 年 WordPress 完整架站攻略：從網域到獲利一次搞懂"
              date="2026/02/09"
            />

            <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg my-6 text-sm text-blue-200">
              <p><strong>🔔 讀者權益聲明：</strong> 本文包含聯盟行銷連結。若您透過連結購買 Bluehost 主機，本站將獲得分潤獎金，這也是維持本站免費運作的動力，且<strong>不會</strong>增加您的購買成本。</p>
            </div>

            <div className="mb-12 text-zinc-300 leading-relaxed">
              <p className="text-zinc-300 mb-6 leading-relaxed">
                在社群媒體（IG、TikTok、FB）演算法變幻莫測的 2026 年，許多創作者與創業者發現：無論你有多少粉絲，只要平台一改規則，你的流量就可能一夜歸零。這就是為什麼「自架網站」在今年變得比以往任何時候都更加重要。
              </p>
            </div>

            {/* ========== 第一部分：前言 ========== */}
            <div id="part-1" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-16 mb-8 border-b border-white/10 pb-4">
                一、前言：2026 年為什麼你該擁有一個 WordPress 網站？
              </h2>

              <SectionTitle id="chapter-1">1. 自媒體與創業者的「數位房產」</SectionTitle>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-white">掌控權：</strong>你的網站是你唯一真正擁有的「數位資產」。你不用擔心被停權，也不用擔心演算法打壓。</li>
                <li><strong className="text-white">品牌形象：</strong>擁有專屬網域（例如 www.yourbrand.com）會讓合作夥伴與客戶對你的專業度評價提升一個檔次。</li>
              </ul>

              <SectionTitle id="chapter-2">2. WordPress.org vs. WordPress.com：別選錯了！</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">這是新手最常跌入的坑。請記住：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-blue-400">WordPress.org（本攻略教學內容）：</strong>這是「自主架站」。雖然需要自己買主機（如 <Affiliate>Bluehost</Affiliate>），但你可以安裝任何外掛、自訂外觀、放置廣告賺錢，擁有 100% 的自由度。</li>
                <li><strong className="text-white">WordPress.com：</strong>這是官方託管服務。雖然有免費版，但限制極多，想要功能全開反而比自己架站還貴。</li>
              </ul>

              <SectionTitle id="chapter-3">3. 架站三要素：一個好理解的比喻</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">架設網站就像在網路世界「蓋房子」，你需要這三樣東西：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-white">網域 (Domain)：</strong>你的「門牌地址」，如 google.com。</li>
                <li><strong className="text-white">主機 (Hosting)：</strong>你的「土地空間」，用來存放網站的文字與圖片。</li>
                <li><strong className="text-white">WordPress (CMS)：</strong>你的「房屋結構與裝潢」，幫你把內容漂漂亮亮地呈現出來。</li>
              </ul>

              <SectionTitle id="chapter-4">4. 2026 年的架站趨勢：效率至上</SectionTitle>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                以前架站需要懂程式碼，但現在透過 <Affiliate>Bluehost</Affiliate> 等主機商提供的「一鍵安裝」功能，你可以在 10 分鐘內就擁有一間漂亮的空屋，剩下的只是進去擺放家具（內容）而已。
              </p>
            </div>

            {/* ========== 第二部分：策略篇 ========== */}
            <div id="part-2" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                二、策略篇：網域與主機怎麼買最划算？
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                在開始刷卡前，你必須決定你的「門牌（網域）」要放在哪裡。2026 年的主流做法分為以下兩種，請根據你的需求選擇：
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">方案 A：一站式省錢法（強烈推薦新手！）</h3>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                直接購買 <Affiliate>Bluehost</Affiliate> 主機，由他們【免費贈送第一年網域】。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
                <li><strong className="text-green-400">優點：</strong>省錢（省下約 $15 美金）、省事（網域與主機自動連動）、快速（買完立刻就能開始安裝 WordPress）。</li>
                <li><strong className="text-zinc-400">缺點：</strong>第二年起網域續費恢復原價（通常比專業網域商貴一點點）。</li>
                <li><strong className="text-white">適合誰：</strong>第一次架站、想在 10 分鐘內完工的新手。</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">方案 B：資產分離管理法</h3>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                在專業網域商（如 <GoDaddyAffiliate>GoDaddy</GoDaddyAffiliate> 或 <NamecheapAffiliate>Namecheap</NamecheapAffiliate>）買網域，主機再另外租。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-green-400">優點：</strong>專業管理、轉移彈性（未來若想更換主機，網域資產依然獨立管理）。</li>
                <li><strong className="text-white"><NamecheapAffiliate>Namecheap</NamecheapAffiliate>：</strong>續約不漲價，且永久免費提供隱私保護。</li>
                <li><strong className="text-white"><GoDaddyAffiliate>GoDaddy</GoDaddyAffiliate>：</strong>中文介面最親民，首年促銷力度大。</li>
                <li><strong className="text-white">適合誰：</strong>已經有心儀網域、或未來打算管理多個網站的資深玩家。</li>
              </ul>
            </div>

            {/* ========== 第三部分：實戰篇 ========== */}
            <div id="part-3" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                三、實戰篇：Bluehost 購買與網域領取流程
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                為了讓效率最大化，以下我們以「方案 A」為例，示範如何領取免費網域並完成架站。
              </p>

              <SectionTitle id="chapter-5">步驟 1：進入 Bluehost 並選擇方案</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">進入官網後，點擊「Get Started」。</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-white">BASIC：</strong>適合只打算架 1 個網站的純新手。</li>
                <li><strong className="text-blue-400">CHOICE PLUS：</strong>CP 值最高，提供更好的備份與隱私功能。</li>
              </ul>

              <SectionTitle id="chapter-6">步驟 2：領取你的「免費網域」</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">在下一步畫面中，你會看到兩個選項：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-white">Create a new domain（建立新網域）：</strong>在這裡輸入你想要的網址，若是免費額度內，結帳金額會顯示為 $0。</li>
                <li><strong className="text-white">Use a domain you own：</strong>如果你已經在 GoDaddy 或 Namecheap 買過網域，請選這一項。</li>
              </ul>

              <SectionTitle id="chapter-7">步驟 3：結帳前的避坑指南（重要！）</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">在最後的結帳頁面（Package Extras），系統會預設勾選一些服務，請務必手動取消來省錢：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-white">Domain Privacy（網域隱私）：</strong>如果你選的方案沒送，建議加購。</li>
                <li><strong className="text-red-400">Codeguard / SiteLock：</strong>這些功能之後可以用免費的外掛取代，【建議勾掉】。</li>
              </ul>

              <SectionTitle id="chapter-8">步驟 4：填寫資料與刷卡</SectionTitle>
              <StepBlock step="01" title="使用 Google 帳號快速註冊" />
              <StepBlock step="02" title="填寫信用卡資訊完成支付" />
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-amber-400">注意：</strong>刷卡成功後，請立刻去信箱點擊「驗證連結」，這一步沒做，網域會無法運作。
              </p>
            </div>

            {/* ========== 第四部分：安裝篇 ========== */}
            <div id="part-4" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                四、安裝篇：一鍵啟動你的 WordPress
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                當你完成 <Affiliate>Bluehost</Affiliate> 的購買流程後，最神奇的部分來了：你不需要下載任何軟體，也不需要碰任何程式碼。Bluehost 的系統會自動引導你完成安裝。
              </p>

              <SectionTitle id="chapter-9">1. 登入 Bluehost 儀表板</SectionTitle>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li>結帳完成後，系統會要求你設定帳戶密碼。</li>
                <li>登入後，你會進入「Bluehost Portal」。</li>
                <li>系統通常會主動跳出「Create your website」的精靈導航。你可以選擇按照它的引導填寫，或者點擊「Skip this step」進入手動安裝模式。</li>
              </ul>

              <SectionTitle id="chapter-10">2. 一鍵安裝 WordPress 流程</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">如果你選擇手動或想重新安裝：</p>
              <StepBlock step="01" title="在左側選單點擊【My Sites】，點擊右上角【Create Site】" />
              <StepBlock step="02" title="選擇【WordPress】（這是最標準且功能最強大的選項）" />
              <StepBlock step="03" title="設定「網站標題」與「網站副標題」（之後在後台隨時可改）" />
              <StepBlock step="04" title="選擇網域：下拉選單選你剛才領取的那個免費網域" />
              <StepBlock step="05" title="取消勾選預裝外掛（WPForms、MonsterInsights 等建議先不勾，保持網站乾淨）" />
              <p className="text-zinc-300 mb-6 leading-relaxed" />

              <SectionTitle id="chapter-11">3. 獲取你的登入資訊（重要存檔！）</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">安裝完成後，系統會顯示：WordPress Admin URL（你的網址/wp-admin）、Username（預設通常是 Email）、Password（建議點擊顯示並立刻複製存進記事本）。</p>

              <SectionTitle id="chapter-12">4. 進入 WordPress 後台的首要任務</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">點擊「Log into WordPress」後，請優先做這三件事：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
                <li><strong className="text-white">修改語言：</strong>【Settings】→【General】→「Site Language」改為【繁體中文】；「Timezone」改為【UTC+8】（台北時間）。</li>
                <li><strong className="text-white">優化永久連結 (Permalinks)：</strong>【設定】→【永久連結】→改為【文章名稱 (Post name)】，有利 SEO。</li>
                <li><strong className="text-white">開啟 SSL 安全憑證：</strong>在 Bluehost 後台「Security」分頁，確認「SSL Certificate」為【ON】，網址就會是 https://。</li>
              </ul>

              <SectionTitle id="chapter-13">5. 為什麼推薦在 Bluehost 安裝？</SectionTitle>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-white">自動更新：</strong>Bluehost 會幫你監測 WordPress 核心程式碼，有安全更新時會自動處理。</li>
                <li><strong className="text-white">24/7 救援：</strong>若安裝過程中卡住，右下角 Live Chat 客服可以直接進後台協助。</li>
              </ul>
            </div>

            {/* ========== 第五部分：裝潢篇 ========== */}
            <div id="part-5" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                五、裝潢篇：佈景主題與必裝外掛推薦
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                現在你的房子（網站）已經蓋好了，但裡面還是空的。接下來我們要進行「內部裝修」與「家電安裝」。在 WordPress 中，這分別對應到「佈景主題」與「外掛」。
              </p>

              <SectionTitle id="chapter-14">1. 挑選佈景主題：美觀固然重要，速度才是關鍵</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">2026 年 Google 非常看重網站的加載速度。很多華麗的主題內含過多特效，反而會拖慢你的排名。</p>
              <h3 className="text-lg font-bold text-white mt-6 mb-3">推薦名單：新手不踩雷三劍客</h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
                <li><strong className="text-blue-400">Astra（首推）：</strong>極輕、極快，且有數百種「一鍵匯入」的模板。適合個人品牌、小型企業、電商網站。</li>
                <li><strong className="text-white">GeneratePress：</strong>代碼最乾淨的主題，追求極限速度選它就對了。適合部落客、純文字創作者。</li>
                <li><strong className="text-white">OceanWP：</strong>對電子商務（WooCommerce）支援度極佳，客製化彈性很大。</li>
              </ul>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                <strong className="text-white">如何安裝主題？</strong>【外觀】→【佈景主題】→【安裝主題】→搜尋上述名稱，安裝並啟用。啟用後可安裝該主題的「Starter Templates」外掛，直接匯入整套範本再替換文字圖片即可。
              </p>

              <SectionTitle id="chapter-15">2. 必裝外掛推薦</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">外掛就像手機的 App。建議維持在 10～15 個以內，不是裝越多越好。</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
                <li><strong className="text-green-400">SEO 優化：</strong>Rank Math（免費版功能就贏過 Yoast SEO，介面現代化）。</li>
                <li><strong className="text-green-400">網站加速：</strong>WP Rocket（付費）或 FlyingPress，做快取讓圖片與代碼加載更快。網站開啟超過 3 秒會損失約 50% 訪客。</li>
                <li><strong className="text-green-400">安全防護：</strong>Wordfence Security，阻擋惡意登入與掃描漏洞。</li>
                <li><strong className="text-green-400">備份工具：</strong>UpdraftPlus，多存一份在 Google Drive 或 Dropbox，萬一改壞了一鍵還原。</li>
                <li><strong className="text-green-400">頁面編輯器：</strong>Elementor 或 Spectra，用拖拉方式設計首頁；Spectra 配合 Astra 主題最佳。</li>
              </ul>

              <SectionTitle id="chapter-16">3. 新手常見的「裝潢陷阱」</SectionTitle>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li>不要安裝超過兩個同性質的外掛（例如裝了 Rank Math 就不要裝 Yoast），否則可能功能打架導致網站白屏。</li>
                <li>務必保持更新：WordPress 核心、主題、外掛有更新就定期點擊，補上安全漏洞。</li>
                <li>刪除不使用的外掛：停用後點擊「刪除」，不要留著佔空間。</li>
              </ul>
            </div>

            {/* ========== 第六部分：維護篇 ========== */}
            <div id="part-6" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                六、維護篇：網站上線後的日常管理與獲利起手式
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                恭喜！網站蓋好了、裝潢也完成了。但一個成功的網站並不是放著就會有流量。在 2026 年，一個專業的站長每天應關注以下重點：
              </p>

              <SectionTitle id="chapter-17">1. 數據監控：誰來過你的網站？</SectionTitle>
              <p className="text-zinc-300 mb-4 leading-relaxed">安裝「Site Kit by Google」外掛可一鍵串接：</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
                <li><strong className="text-white">Google Search Console (GSC)：</strong>告訴你讀者搜尋什麼關鍵字找到你、網站是否被收錄、哪些頁面載入太慢。</li>
                <li><strong className="text-white">Google Analytics 4 (GA4)：</strong>告訴你讀者看了多久、在哪一頁離開、訪客來自哪個國家或社群。</li>
              </ul>

              <SectionTitle id="chapter-18">2. 獲利起手式：如何透過 WordPress 賺錢？</SectionTitle>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
                <li><strong className="text-white">聯盟行銷：</strong>在文章中介紹真心推薦的產品（如 Bluehost、外掛或書籍），讀者透過專屬連結購買你可獲得佣金。寫「評測文」或「比較教學文」轉化率通常最高。</li>
                <li><strong className="text-white">Google AdSense：</strong>流量達一定規模（建議 20～30 篇優質文章後）可申請掛廣告，雖初期收入不多但是被動收入。</li>
                <li><strong className="text-white">專業服務或個人品牌：</strong>透過網站展示作品集、案例或專業知識，吸引顧問服務、設計接案或線上課程詢問。</li>
              </ul>

              <SectionTitle id="chapter-19">3. 站長的日常維護清單（必做 3 件事）</SectionTitle>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
                <li><strong className="text-white">定期備份：</strong>每月手動檢查 UpdraftPlus 備份是否成功上傳雲端。</li>
                <li><strong className="text-white">內容更新：</strong>Google 喜歡新鮮資訊，教學文介面改版請務必更新。</li>
                <li><strong className="text-white">檢查死連結：</strong>安裝 Broken Link Checker 或定期手動檢查，避免給讀者壞連結。</li>
              </ul>

              <SectionTitle id="chapter-20">4. 2026 年常見問題 (FAQ) 速查</SectionTitle>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
                <li><strong className="text-white">Bluehost 贈送的網域第二年要錢嗎？</strong>是的，第一年免費，第二年起按原價續費。若覺得貴可在到期前轉移到 Namecheap。</li>
                <li><strong className="text-white">網站突然掛掉怎麼辦？</strong>先關掉最後安裝的那個外掛，90% 問題是外掛衝突。</li>
                <li><strong className="text-white">需要天天發文嗎？</strong>2026 年「質量大於數量」，一週一篇完整、有深度、能解決問題的長文，效果遠比天天發廢文好。</li>
              </ul>
            </div>

            {/* ========== 第七部分：FAQ 與結語 ========== */}
            <div id="part-7" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-blue-400 mt-24 mb-8 border-b border-white/10 pb-4">
                七、常見問題 (FAQ) 與結語
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                在教學的最後，整理新手在架站首週最容易遇到的焦慮問題：
              </p>

              <div className="space-y-6 mb-6">
                <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800">
                  <h4 className="font-bold text-white mb-2">Q1：Bluehost 贈送的網域，第二年續約要多少錢？</h4>
                  <p className="text-zinc-400 text-sm">第一年 $0，第二年起恢復原價（約 $18～$22 美金）。若打算長期省錢，可在第一年快結束前將網域轉移到 Namecheap（續約約 $15 美金且含免費隱私）；想省事也可直接在 Bluehost 續約。</p>
                </div>
                <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800">
                  <h4 className="font-bold text-white mb-2">Q2：為什麼我的網站前台顯示「不安全」？</h4>
                  <p className="text-zinc-400 text-sm">代表 SSL（HTTPS）還沒生效。請到 Bluehost 後台「Security」確認 SSL 開關已開啟。新網域通常需 1～2 小時完成憑證核發。</p>
                </div>
                <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800">
                  <h4 className="font-bold text-white mb-2">Q3：網站改壞了、白屏怎麼辦？</h4>
                  <p className="text-zinc-400 text-sm">90% 白屏是外掛衝突或主題代碼錯誤。可透過 Bluehost 後台「進階管理」手動停用最近安裝的外掛，或用 UpdraftPlus 一鍵還原到昨天的備份。</p>
                </div>
                <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800">
                  <h4 className="font-bold text-white mb-2">Q4：WordPress 真的可以賺錢嗎？要多久才能看到收入？</h4>
                  <p className="text-zinc-400 text-sm">這是「累積資產」的過程，不是快速致富工具。通常認真發文 3～6 個月後 SEO 流量才會穩定。建議先累積 20 篇高質量文章，再考慮變現（廣告、聯盟行銷）。</p>
                </div>
              </div>
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
                <a href="#part-1" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200">一、前言</a>
                <a href="#part-2" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200">二、策略篇</a>
                <a href="#part-3" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200">三、實戰篇</a>
                <a href="#part-4" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200">四、安裝篇</a>
                <a href="#part-5" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200">五、裝潢篇</a>
                <a href="#part-6" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200">六、維護篇</a>
                <a href="#part-7" className="block text-zinc-400 hover:text-blue-400 transition hover:translate-x-1 duration-200">七、FAQ 與結語</a>
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
