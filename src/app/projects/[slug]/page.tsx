import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
    <main className="flex flex-col items-center gap-12">
      {project.images && (
        <Carousel className="mx-6 md:mx-2">
          <CarouselContent>
            {project.images.map(image => (
              <CarouselItem
                key={image}
                className="basis-7/8 md:basis-3/4 lg:basis-2/3"
              >
                <img
                  src={image}
                  alt={project.name}
                  className="rounded-lg object-contain md:rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
      <div className="flex w-full flex-col gap-4">
        <h1 className="prose-2xl mb-0 text-4xl font-bold">{project.name}</h1>
        <p className="prose-lg text-base-content/80 mt-0 text-xl">
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
                <Badge key={position} variant="outline">
                  {position}
                </Badge>
              ))}
            </div>
          </div>
          {project.technologies && (
            <div className="grid grid-cols-[max-content_1fr] gap-2">
              <span className="font-semibold">사용 기술:</span>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="prose prose-zinc dark:prose-invert w-full max-w-full">
        <MDXRemote source={project.content} />
      </div>
    </main>
  );
}
