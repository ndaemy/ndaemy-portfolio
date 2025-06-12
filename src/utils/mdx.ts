import fs, { type PathLike } from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface MDXData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata: { [key: string]: any };
  slug: string;
  content: string;
}

/**
 * Get all MDX filenames in a directory
 *
 * e.g. getMDXFilenames("content") -> ["file1.mdx", "file2.mdx"]
 */
function getMDXFilenames(dir: PathLike): string[] {
  if (!fs.existsSync(dir)) {
    throw new Error(`Directory not found: ${dir}`);
  }

  return fs.readdirSync(dir).filter(file => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: PathLike) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return matter(rawContent);
}

/**
 * Get all MDX data in a directory
 * @param dir The directory to search for MDX files. e.g. "/Users/username/content"
 */
export function getMDXDataInDir(dir: string): MDXData[] {
  const mdxFiles = getMDXFilenames(dir);

  return mdxFiles.map(file => {
    const { data, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata: data,
      slug,
      content,
    };
  });
}

/**
 * Get MDX data from a single file
 * @param filePath The path to the MDX file. e.g. "/Users/username/content/file1.mdx"
 */
export function getMDXDataFromFile(filePath: string): MDXData {
  const { data, content } = readMDXFile(filePath);
  const slug = path.basename(filePath, path.extname(filePath));

  return {
    metadata: data,
    slug,
    content,
  };
}
