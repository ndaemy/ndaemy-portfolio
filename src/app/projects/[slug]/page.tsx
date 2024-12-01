import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

import Carousel from "@/components/Carousel";
import { getProject, getProjects } from "@/resources";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getProjects();

  return projects.map(project => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const { name, description, thumbnailImage } = getProject(slug);

  return {
    title: name,
    description,
    openGraph: {
      title: name,
      description,
      images: [thumbnailImage],
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = (await params).slug;
  const project = getProject(slug);

  return (
    <main className="prose flex flex-col items-center gap-12">
      {project.images && (
        <Carousel imageUrls={project.images} className="not-prose h-96 w-3/4" />
      )}
      <div className="flex w-full flex-col gap-4">
        <h1 className="prose-2xl mb-0 text-4xl font-bold">{project.name}</h1>
        <p className="prose-lg mt-0 text-xl text-base-content/80">
          {project.description}
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold">기간:</span>
            <span>{project.startDate}</span>
            <span>-</span>
            {project.endDate ? (
              <span>{project.endDate}</span>
            ) : (
              <span>Current</span>
            )}
          </div>
          <div className="grid grid-cols-[max-content_1fr] gap-2">
            <span className="font-semibold">역할:</span>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {project.positions.map(position => (
                <span key={position} className="badge badge-neutral my-1">
                  {position}
                </span>
              ))}
            </div>
          </div>
          {project.technologies && (
            <div className="grid grid-cols-[max-content_1fr] gap-2">
              <span className="font-semibold">사용 기술:</span>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {project.technologies.map(tech => (
                  <span key={tech} className="badge badge-neutral my-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <MDXRemote source={project.content} />
    </main>
  );
}
