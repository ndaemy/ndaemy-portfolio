import sortBy from 'lodash/sortBy';
import { fileURLToPath } from 'node:url';
import path from 'path';

import { getMDXDataFromFile, getMDXDataInDir } from '@/utils';

export interface Project {
  name: string;
  slug: string;
  description: string;
  type: 'Development' | 'Idea';
  // Active: 운영중 / Legacy: 서비스 접속은 가능하지만 유지보수하고 있지 않음 / Discontinued: 서비스 종료됨
  status?: 'Active' | 'Legacy' | 'Discontinued';
  technologies?: string[];
  positions: string[];
  startDate: string;
  endDate?: string;
  demoUrl?: string;
  thumbnailImage: string;
  images?: { url: string; width: number; height: number }[];
  content: string;
}

export function getProjects(): Project[] {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const mdxData = getMDXDataInDir(dir);
  const sortedMdxData = sortBy(mdxData, [
    'metadata.endDate',
    'metadata.startDate',
  ]).reverse();

  return sortedMdxData.map(({ metadata, slug, content }) => ({
    name: metadata.name,
    slug,
    description: metadata.description,
    type: metadata.type,
    status: metadata.status,
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
    type: metadata.type,
    status: metadata.status,
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
