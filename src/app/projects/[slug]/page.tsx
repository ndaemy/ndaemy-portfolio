import { MDXRemote } from "next-mdx-remote/rsc";

import Carousel from "@/components/Carousel";
import { getProject, getProjects } from "@/resources";

export async function generateStaticParams() {
  const projects = getProjects();

  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const project = getProject(slug);

  return (
    <main className="prose flex flex-col items-center">
      {project.images && (
        <Carousel imageUrls={project.images} className="not-prose h-96 w-3/4" />
      )}
      <MDXRemote source={project.content} />
    </main>
  );
}
