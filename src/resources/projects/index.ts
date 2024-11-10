import sortBy from "lodash/sortBy";
import { fileURLToPath } from "node:url";
import path from "path";

import { getMDXDataFromFile, getMDXDataInDir } from "@/utils";

export interface Project {
  name: string;
  slug: string;
  description: string;
  technologies: string[];
  positions: string[];
  startDate: string;
  endDate?: string;
  demoUrl?: string;
  thumbnailImage: string;
  images?: string[];
  content: string;
}

export function getProjects(): Project[] {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const mdxData = getMDXDataInDir(dir);
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
    thumbnailImage: metadata.thumbnailImage,
    images: metadata.images,
    content,
  }));
}

export function getProject(slug: string): Project {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(dir, `${slug}.mdx`);
  const { metadata, content } = getMDXDataFromFile(filePath);

  return {
    name: metadata.name,
    slug,
    description: metadata.description,
    technologies: metadata.technologies,
    positions: metadata.positions,
    startDate: metadata.startDate,
    endDate: metadata.endDate,
    demoUrl: metadata.demoUrl,
    thumbnailImage: metadata.thumbnailImage,
    images: metadata.images,
    content,
  };
}
