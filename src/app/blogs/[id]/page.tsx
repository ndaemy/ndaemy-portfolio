import { notFound } from 'next/navigation';

import { getBlogPost, getBlogPosts } from '@/resources/blogs';

interface Props {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const blogPosts = getBlogPosts();

  return blogPosts.map(blogPost => ({ id: blogPost.id }));
}

export default async function BlogPost({ params }: Props) {
  const id = (await params).id;
  const blogPost = getBlogPost(id);

  if (!blogPost) {
    notFound();
  }

  return <div>{blogPost.title}</div>;
}
