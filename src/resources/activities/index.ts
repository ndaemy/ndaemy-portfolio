import sortBy from 'lodash/sortBy';
import { fileURLToPath } from 'node:url';
import path from 'path';

import { getMDXDataInDir } from '@/utils';

export interface Activity {
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
}

export function getActivities(): Activity[] {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const mdxData = getMDXDataInDir(dir);
  const sortedMdxData = sortBy(mdxData, ['metadata.order']);

  return sortedMdxData.map(({ metadata, slug, content }) => ({
    title: metadata.title,
    slug,
    subtitle: metadata.subtitle,
    description: content,
  }));
}
