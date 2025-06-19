'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

const sections = [
  { name: 'Home', hash: '#portfolio-head' },
  { name: 'Careers', hash: '#careers' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Activities', hash: '#activities' },
];

type SectionName = (typeof sections)[number]['name'];

/**
 * 지금으로선 메인페이지 전용 header 임
 */
export default function Header() {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const matched = sections.find(s => s.hash === `#${id}`);
            if (matched) {
              setActiveSection(matched.name);
            }
          }
        }
      },
      {
        rootMargin: '0px 0px -80%',
        threshold: 0,
      },
    );

    const targets = sections
      .map(s => document.querySelector(s.hash))
      .filter(Boolean) as Element[];

    targets.forEach(el => observer.observe(el));

    return () => {
      targets.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <motion.header
      animate={{ y: 0, opacity: 1 }}
      className='bg-background/60 sticky top-10 z-20 mb-10 inline-flex w-fit! items-center gap-2 rounded-full border px-2 py-3 backdrop-blur-sm'
      initial={{ y: -100, opacity: 0 }}
    >
      <nav className='text-muted-foreground text-sm'>
        <ul className='flex sm:gap-5'>
          {sections.map(({ name, hash }) => (
            <li key={name}>
              <Link
                className={cn(
                  'hover:text-foreground relative px-4 py-2 transition-colors',
                  name === activeSection && 'text-foreground',
                )}
                href={hash}
                onClick={() => setActiveSection(name)}
              >
                {name}
                {name === activeSection && (
                  <motion.span
                    className='bg-muted absolute inset-0 -z-10 rounded-full'
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
