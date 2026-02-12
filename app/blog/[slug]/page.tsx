import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "文章不存在" };
  return {
    title: `${post.title} | 台式網域命名部落格`,
    description: post.description || post.title,
    openGraph: {
      title: post.title,
      description: post.description || post.title,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]" />
      </div>

      <header className="relative z-10 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <Link
            href="/blog"
            className="text-zinc-400 hover:text-white text-sm transition-colors"
          >
            ← 回部落格列表
          </Link>
        </div>
      </header>

      <article className="relative z-10 max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 mb-2">
          {post.title}
        </h1>
        {post.date && (
          <time className="text-zinc-500 text-sm">{post.date}</time>
        )}
        <div className="mt-8 blog-content-wrapper">
          <div className="blog-content">{content}</div>
        </div>
      </article>
    </div>
  );
}
