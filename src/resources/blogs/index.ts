import { fileURLToPath } from "node:url";
import path from "path";

import { getMDXDataInDir, sha256 } from "@/utils";

export interface BlogPost {
  title: string;
  description: string;
  publishedAt?: string;
  slug: string;
  id: string;
  content: string;
}

export function getBlogPosts(): BlogPost[] {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const mdxData = getMDXDataInDir(dir);
  const publishedPosts = mdxData.filter(
    ({ metadata: { publishedAt } }) => !!publishedAt,
  );

  return publishedPosts.map(
    ({ metadata: { title, description, publishedAt }, slug, content }) => ({
      title,
      description,
      publishedAt,
      slug,
      // blog id 는 slug 를 sha256 hash 한 값의 앞 6자리로 한다.
      id: sha256(slug).slice(0, 6),
      content,
    }),
  );
}

export function getBlogPost(id: string): BlogPost | undefined {
  // blog id 가 dynamic 하게 생성되기 때문에 모든 blog post 를 불러와서 찾는다.
  const blogPosts = getBlogPosts();
  return blogPosts.find(blogPost => blogPost.id === id);
}
