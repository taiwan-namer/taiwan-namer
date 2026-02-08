import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getStats } from "@/lib/clicks";

export default function AdminClicksPage() {
  const stats = getStats();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-zinc-400 hover:text-white transition text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> 回首頁
          </Link>
          <span className="text-sm font-bold text-zinc-500">點擊統計</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          站外連結點擊統計（/go/*）
        </h1>

        {!stats ? (
          <p className="text-zinc-500">無法載入統計（請確認 API /api/clicks/stats 可用）</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
              <div className="glass rounded-xl p-4 border border-white/5">
                <p className="text-zinc-500 text-sm">總點擊</p>
                <p className="text-2xl font-bold text-white">{stats.total}</p>
              </div>
              <div className="glass rounded-xl p-4 border border-white/5">
                <p className="text-zinc-500 text-sm">GoDaddy</p>
                <p className="text-2xl font-bold text-emerald-400">{stats.byVendor?.godaddy ?? 0}</p>
              </div>
              <div className="glass rounded-xl p-4 border border-white/5">
                <p className="text-zinc-500 text-sm">Namecheap</p>
                <p className="text-2xl font-bold text-orange-400">{stats.byVendor?.namecheap ?? 0}</p>
              </div>
              <div className="glass rounded-xl p-4 border border-white/5">
                <p className="text-zinc-500 text-sm">Bluehost</p>
                <p className="text-2xl font-bold text-blue-400">{stats.byVendor?.bluehost ?? 0}</p>
              </div>
            </div>

            <h2 className="text-lg font-semibold text-white mb-4">最近 100 筆</h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5 text-left">
                    <th className="p-3 text-zinc-400 font-medium">時間</th>
                    <th className="p-3 text-zinc-400 font-medium">廠商</th>
                    <th className="p-3 text-zinc-400 font-medium">網域</th>
                    <th className="p-3 text-zinc-400 font-medium">來源</th>
                  </tr>
                </thead>
                <tbody>
                  {(stats.recent ?? []).map((r, i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="p-3 text-zinc-500">{r.timestamp}</td>
                      <td className="p-3 text-zinc-300">{r.vendor}</td>
                      <td className="p-3 text-zinc-300 font-mono">{r.domain || "—"}</td>
                      <td className="p-3 text-zinc-500 truncate max-w-[200px]">{r.referrer || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
