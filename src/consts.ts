import type { Site, Page, Links, Socials } from '@/types';

// Global
export const SITE: Site = {
  TITLE: 'Ndaemy Blog',
  DESCRIPTION:
    '프로덕트를 만들면서 쓰는 이런저런 글을 올리는 블로그입니다',
  AUTHOR: 'ndaemy',
};

// Work Page
// TODO: 추후에 Career 로 바꿀 예정
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
};

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: '프로덕트를 만들면서 쓰는 이런저런 글을 올리는 블로그입니다',
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: '참여했던 프로젝트 리스트입니다',
};

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
};

// Links
export const LINKS: Links = [
  {
    TEXT: 'Home',
    HREF: '/',
  },
  {
    TEXT: 'Work',
    HREF: '/work',
  },
  {
    TEXT: 'Blog',
    HREF: '/blog',
  },
  {
    TEXT: 'Projects',
    HREF: '/projects',
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'yuyaebean@gmail.com',
    HREF: 'mailto:yuyaebean@gmail.com',
  },
  {
    NAME: 'GitHub',
    ICON: 'github',
    TEXT: 'ndaemy',
    HREF: 'https://github.com/ndaemy',
  },
  {
    NAME: 'LinkedIn',
    ICON: 'linkedin',
    TEXT: '유예빈',
    HREF: 'https://www.linkedin.com/in/ndaemy/',
  },
];
