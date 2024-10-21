import { fileURLToPath } from "node:url";
import path from "path";

import { getMDXData } from "@/utils/mdx";

export function getCareers() {
  const dir = path.dirname(fileURLToPath(import.meta.url));

  return getMDXData(dir).sort((a, b) => {
    if (a.metadata.startDate !== b.metadata.startDate) {
      return a.metadata.startDate < b.metadata.startDate ? -1 : 1;
    }
    return a.metadata.endDate < b.metadata.endDate ? -1 : 1;
  });
}
