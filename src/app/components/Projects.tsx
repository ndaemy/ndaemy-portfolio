import Image from "next/image";

import type { Project } from "@/resources/projects";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {projects.map(project => (
        <li key={project.slug} className="card shadow-xl">
          <figure className="aspect-og relative">
            <Image
              src={project.imageUrl}
              alt={`${project.name} Image`}
              fill
              className="overflow-hidden object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title flex-wrap">
              {project.name}
              {!project.endDate && (
                <div className="badge badge-accent">진행중</div>
              )}
            </h3>
            <p>{project.description}</p>
            <div className="card-actions justify-end">
              {project.positions.map(position => (
                <div key={position} className="badge badge-neutral">
                  {position}
                </div>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
