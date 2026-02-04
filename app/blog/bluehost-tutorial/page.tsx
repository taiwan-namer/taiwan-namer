import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// 引入我們剛剛做好的積木
import { ArticleHeader, SectionTitle, ProsCons, PricingTable, CTAButton, StepBlock } from "@/components/BlogParts";

export const metadata = {
  title: "2026 Bluehost 架站教學：新手 10 分鐘架設 WordPress (附折扣)",
  description: "最完整的 Bluehost 購買與架站教學。從網域選擇到 WordPress 安裝，手把手圖文教學。",
};

export default function BluehostPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-blue-500/30">
      
      {/* 頂部導航列 */}
      <nav className="sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/blog" className="flex items-center text-zinc-400 hover:text-white transition text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> 回部落格
          </Link>
          <div className="text-sm font-bold text-zinc-500">台味命名大師</div>
        </div>
      </nav>

      {/* 文章主體 */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        
        {/* 1. 標頭 */}
        <ArticleHeader 
          title="如何用 Bluehost 架設 WordPress 網站？(2026 最新完整教學)" 
          date="2026/02/04" 
        />

        {/* 2. 前言 & 優缺點 */}
        <div className="prose prose-invert prose-lg max-w-none text-zinc-300 leading-relaxed">
          <p>
            如果你想開始經營部落格、公司形象網站，或是個人作品集，<strong>Bluehost 絕對是目前對新手最友善的選擇。</strong>
          </p>
          <p>
            在這篇文章中，我將手把手教你如何從零開始，購買網域、設定主機，並安裝好你的第一個 WordPress 網站。不需要懂程式碼，只要跟著做，10 分鐘就能搞定。
          </p>
        </div>

        <ProsCons />

        {/* 3. 步驟教學區 */}
        <SectionTitle>第一步：選擇適合的方案</SectionTitle>
        <div className="text-zinc-300 mb-8">
          進入首頁後，點擊 <strong>Get Started</strong>，你會看到幾個不同的方案。很多新手會在這裡卡關，不知道該選哪一個。
        </div>

        <PricingTable />

        <div className="text-zinc-300 mt-8 mb-12">
          <p>
            💡 <strong>羅老闆建議：</strong> 直接選 <strong>Choice Plus</strong>。
            雖然 Basic 最便宜，但它只能架一個網站。等你做出一點成績後，一定會想開第二個站，到時候升級反而麻煩。而且 Choice Plus 送的「隱私保護」非常重要。
          </p>
        </div>

        <SectionTitle>第二步：設定網域 (Domain)</SectionTitle>
        
        <StepBlock step="01" title="輸入你想註冊的網址">
          <p>
            如果你還沒有網域，Bluehost 會免費送你一個。在 "Create a new domain" 的框框裡輸入你想好的名字（例如：my-awesome-shop.com）。
          </p>
          <p className="text-sm bg-zinc-900 p-4 rounded-lg border border-zinc-800">
            📌 <strong>小技巧：</strong> 如果想不到名字，可以用我們網站首頁的 <Link href="/" className="text-blue-400 hover:underline">AI 命名工具</Link> 幫你算一個好命的名字。
          </p>
        </StepBlock>

        <StepBlock step="02" title="填寫帳號資料">
          <p>
            這裡請務必填寫<strong>真實的英文資料</strong>。地址可以用中華郵政的翻譯功能查詢。
            Email 建議用 Gmail，這是以後你登入主機和收帳單最重要的方式。
          </p>
        </StepBlock>

        <StepBlock step="03" title="確認加購項目 (Package Extras)">
          <p>
            這裡充滿了陷阱！系統會預設幫你勾選很多不需要的加購項目（例如 SiteLock Security, SEO Tools）。
          </p>
          <p>
            <strong>請把所有勾勾都取消掉！</strong> 這些都可以之後在 WordPress 裝免費外掛取代，不需要現在花錢。
            唯一要注意的是 "Domain Privacy + Protection"，如果你選的是 Choice Plus 方案，這個會顯示 Free (免費)，那就留著。
          </p>
        </StepBlock>

        {/* 4. 最後召喚 */}
        <CTAButton />

      </article>
    </div>
  );
}