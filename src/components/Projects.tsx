import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Project } from '@/resources/projects';

interface Props {
  projects: Project[];
}

export default function Projects({ projects }: Props) {
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {projects.map(project => (
        <li key={project.slug}>
          <Link className='h-full' href={`/projects/${project.slug}`}>
            <Card className='h-full justify-between'>
              <CardHeader>
                <div className='aspect-og relative mb-4 w-full'>
                  <Image
                    alt={`${project.name} Image`}
                    className='overflow-hidden rounded-md object-cover'
                    fill
                    sizes='(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw'
                    src={project.thumbnailImage}
                  />
                </div>
                <CardTitle className='flex items-center gap-2'>
                  {project.name}
                  {!project.endDate && (
                    <Badge className='badge badge-accent'>Ongoing</Badge>
                  )}
                  {project.type === 'Idea' && (
                    <Badge variant='secondary'>Idea only</Badge>
                  )}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className='flex flex-col items-start gap-2'>
                <div className='flex flex-wrap gap-2'>
                  {project.positions.map(position => (
                    <Badge key={position} variant='outline'>
                      {position}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
