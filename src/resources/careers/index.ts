import sortBy from "lodash/sortBy";
import { fileURLToPath } from "node:url";
import path from "path";

import { getMDXDataInDir } from "@/utils";

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
  const mdxData = getMDXDataInDir(dir);
  const sortedMdxData = sortBy(mdxData, [
    "metadata.startDate",
    "metadata.endDate",
  ]).reverse();

  return sortedMdxData.map(({ metadata, slug, content }) => ({
    company: metadata.company,
    slug,
    position: metadata.position,
    team: metadata.team,
    startDate: metadata.startDate,
    endDate: metadata.endDate,
    description: content,
  }));
}
