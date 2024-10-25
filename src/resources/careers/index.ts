import { fileURLToPath } from "node:url";
import path from "path";

import { getMDXData } from "@/utils/mdx";

export interface Career {
  company: string;
  slug: string;
  position: string;
  team?: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export function getCareers(): Career[] {
  const dir = path.dirname(fileURLToPath(import.meta.url));

  const mdxData = getMDXData(dir).sort((a, b) => {
    if (a.metadata.startDate !== b.metadata.startDate) {
      return a.metadata.startDate < b.metadata.startDate ? -1 : 1;
    }
    return a.metadata.endDate < b.metadata.endDate ? -1 : 1;
  });

  return mdxData.map(({ metadata, slug, content }) => ({
    company: metadata.company,
    slug,
    position: metadata.position,
    team: metadata.team,
    startDate: metadata.startDate,
    endDate: metadata.endDate,
    description: content,
  }));
}
