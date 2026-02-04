import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { FileText } from "lucide-react";

export const metadata = {
  title: "部落格 | 台味命名大師",
  description: "網域、架站、WordPress 教學與主機推薦文章。",
};

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <header className="relative z-10 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="text-zinc-400 hover:text-white text-sm transition-colors"
          >
            ← 回首頁
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              部落格
            </span>
          </h1>
          <p className="text-zinc-500 text-sm mt-2">
            網域、架站與主機教學
          </p>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {posts.length === 0 ? (
          <div className="glass rounded-xl p-12 text-center border border-white/5">
            <FileText className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-500">尚無文章</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="glass rounded-xl p-5 block border border-white/5 hover:border-white/15 transition-colors group"
                >
                  <h2 className="font-semibold text-lg text-zinc-100 group-hover:text-violet-300 transition-colors">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-zinc-500 text-sm mt-2 line-clamp-2">
                      {post.description}
                    </p>
                  )}
                  {post.date && (
                    <p className="text-zinc-600 text-xs mt-3">{post.date}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
