import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "posts");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  [key: string]: unknown;
};

export type Post = PostMeta & {
  content: string;
};

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => getSlugFromFilename(f));
}

export function getPostBySlug(slug: string): Post | null {
  const extensions = [".md", ".mdx"];
  for (const ext of extensions) {
    const filePath = path.join(POSTS_DIR, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: (data.title as string) || slug,
        description: (data.description as string) || "",
        date: data.date as string | undefined,
        ...data,
        content,
      };
    }
  }
  return null;
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null)
    .map(({ content: _, ...meta }) => meta);
  return posts.sort((a, b) => {
    const dateA = a.date || "";
    const dateB = b.date || "";
    return dateB.localeCompare(dateA);
  });
}
