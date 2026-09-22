import { notFound } from "next/navigation";
import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { BlogDetailContent } from "@/app/components/BlogDetailContent";

export function generateStaticParams() {
  return site.blogs.posts.map((post) => {
    const linkSlug = post.link ? post.link.split("/").pop() : post.id;
    return { slug: linkSlug };
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bannerData = site.blogDetailBanner;
  const allPosts = site.blogs.posts;

  const post = allPosts.find((p) => {
    const linkSlug = p.link ? p.link.split("/").pop() : p.id;
    return p.id === slug || linkSlug === slug;
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={bannerData} />
      <BlogDetailContent post={post} allPosts={allPosts} />
    </main>
  );
}
