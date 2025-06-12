'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

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

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className='bg-background/60 sticky top-10 z-20 mb-10 inline-flex w-fit! items-center gap-2 rounded-full border px-2 py-3 backdrop-blur-sm'
    >
      <nav className='text-muted-foreground text-sm'>
        <ul className='flex sm:gap-5'>
          {sections.map(({ name, hash }) => (
            <li key={name}>
              <Link
                href={hash}
                className={cn(
                  'hover:text-foreground relative px-4 py-2 transition-colors',
                  name === activeSection && 'text-foreground',
                )}
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
