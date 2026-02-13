import Link from "next/link";
import { Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* 左側：Logo 與簡介 */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors w-fit">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg tracking-tight leading-none">台式網域命名</span>
                <span className="text-zinc-500 text-xs font-normal tracking-wide">Taiwan Namer</span>
              </div>
            </Link>
            <p className="mt-4 text-zinc-500 text-sm leading-relaxed max-w-xs">
              幫助台灣創業者從命名到架站的起點
            </p>
          </div>

          {/* 中間：快速連結 */}
          <div>
            <h3 className="text-zinc-300 font-semibold text-sm uppercase tracking-wider mb-4">快速連結</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                  首頁
                </Link>
              </li>
              <li>
                <Link href="/blog/bluehost-tutorial" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                  Bluehost 教學
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                  資源推薦
                </Link>
              </li>
            </ul>
          </div>

          {/* 右側：公司與法律 */}
          <div>
            <h3 className="text-zinc-300 font-semibold text-sm uppercase tracking-wider mb-4">公司與法律</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                  聯絡我們
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                  隱私權政策
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                  服務條款
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部 Affiliate Disclosure（FTC Clear and Conspicuous）＋ Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center space-y-3">
          <p className="text-zinc-300 text-sm max-w-2xl mx-auto">
            Affiliate Disclosure: This site contains affiliate links (e.g. Namecheap, Bluehost). We may earn a commission when you make a purchase at no extra cost to you. This helps us keep the site free. See our <Link href="/privacy" className="text-zinc-200 underline hover:text-white">Privacy Policy</Link> for details.
          </p>
          <p className="text-zinc-600 text-sm">
            Copyright © 2026 Taiwan Namer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
