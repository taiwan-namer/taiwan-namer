import Link from "next/link";
import { Sparkles, FileText } from "lucide-react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden flex flex-col">
      {/* 背景漸層光暈 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-blue-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[300px] bg-pink-500/10 rounded-full blur-[80px]" />
      </div>

      <header className="relative z-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight leading-none">
                台式網域命名
              </span>
              <span className="text-zinc-500 text-xs font-normal tracking-wide">
                Taiwan Namer
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm font-medium text-zinc-400 hover:text-violet-300 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              教學文章
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-zinc-400 hover:text-violet-300 transition-colors"
            >
              關於
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10 flex-1">{children}</main>
    </div>
  );
}
