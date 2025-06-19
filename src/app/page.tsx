import Image from 'next/image';

import { Activities, Careers, Header, Projects } from '@/components';
import SocialButtons from '@/components/SocialButtons';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  getActivities,
  getCareers,
  getProjects,
  productionOrigin,
  user,
} from '@/resources';
import { capitalizeFirstLetter } from '@/utils';

export default function Home() {
  const careers = getCareers();
  const projects = getProjects();
  const activities = getActivities();

  return (
    <>
      <Header />
      <main className='my-4 sm:my-0'>
        <div className='flex flex-col gap-12'>
          <section
            className='flex w-full flex-col gap-6 sm:gap-2'
            id='portfolio-head'
          >
            <div
              className='flex flex-col-reverse items-center justify-between gap-4 sm:flex-row'
              id='metadata'
            >
              <div className='flex flex-col items-center sm:items-start'>
                <h1
                  className='text-primary mb-3 text-4xl leading-normal font-bold'
                  id='name'
                >
                  {user.name}
                </h1>
                <h4 className='prose-2xl text-muted-foreground' id='job-title'>
                  {user.jobTitle}
                </h4>
                <SocialButtons
                  email={user.email}
                  githubUsername={user.githubUsername}
                  linkedinUsername={user.linkedinUsername}
                  productionOrigin={productionOrigin}
                />
              </div>
              <Image
                alt='avatar'
                className='size-40 rounded-full'
                height={160}
                id='avatar'
                src={user.avatar}
                width={160}
              />
            </div>
            <div
              className='text-muted-foreground mt-8 max-w-full text-xl font-medium'
              id='bio'
            >
              {user.bio}
            </div>
          </section>
          <section className='flex flex-col' id='portfolio-body'>
            <div className='flex flex-col gap-12'>
              <div className='flex flex-col gap-6' id='skills'>
                <h2 className='text-2xl font-bold'>Skills</h2>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  {Object.entries(user.skills).map(([title, skills]) => (
                    <Card key={title}>
                      <CardHeader>
                        <CardTitle>{capitalizeFirstLetter(title)}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className='flex flex-wrap gap-2'>
                          {skills.map(skill => (
                            <Badge key={skill} variant='secondary'>
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className='flex flex-col gap-6' id='careers'>
                <h2 className='text-2xl font-bold'>Careers</h2>
                <Careers careers={careers} />
              </div>
              <div className='flex flex-col gap-6' id='projects'>
                <h2 className='text-2xl font-bold'>Projects</h2>
                <Projects projects={projects} />
              </div>
              <div className='flex flex-col gap-6' id='activities'>
                <h2 className='text-2xl font-bold'>Activities</h2>
                <Activities activities={activities} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
