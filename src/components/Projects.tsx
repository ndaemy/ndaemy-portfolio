import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/resources/projects";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {projects.map(project => (
        <li key={project.slug}>
          <Link href={`/projects/${project.slug}`}>
            <div className="card bg-[oklch(27.4%_0.018_251.71)] shadow-xl transition hover:scale-105">
              <figure className="relative aspect-og">
                <Image
                  src={project.thumbnailImage}
                  alt={`${project.name} Image`}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="overflow-hidden object-cover"
                />
              </figure>
              <div className="card-body flex flex-col gap-3">
                <h3 className="card-title flex-wrap text-white">
                  {project.name}
                  {!project.endDate && (
                    <div className="badge badge-accent">진행중</div>
                  )}
                </h3>
                <p>{project.description}</p>
                <div className="card-actions justify-end pt-2">
                  {project.positions.map(position => (
                    <div key={position} className="badge badge-outline">
                      {position}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
