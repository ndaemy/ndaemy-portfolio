import sortBy from "lodash/sortBy";
import { fileURLToPath } from "node:url";
import path from "path";

import { getMDXData } from "@/utils/mdx";

export interface Project {
  name: string;
  slug: string;
  description: string;
  technologies: string[];
  positions: string[];
  startDate: string;
  endDate?: string;
  demoUrl?: string;
  imageUrl: string;
  content: string;
}

export function getProjects(): Project[] {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const mdxData = getMDXData(dir);
  const sortedMdxData = sortBy(mdxData, [
    "metadata.startDate",
    "metadata.endDate",
  ]).reverse();

  return sortedMdxData.map(({ metadata, slug, content }) => ({
    name: metadata.name,
    slug,
    description: metadata.description,
    technologies: metadata.technologies,
    positions: metadata.positions,
    startDate: metadata.startDate,
    endDate: metadata.endDate,
    demoUrl: metadata.demoUrl,
    imageUrl: metadata.imageUrl,
    content,
  }));
}
