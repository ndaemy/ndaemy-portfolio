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

  return <>Project Detail Page: {project.name}</>;
}
