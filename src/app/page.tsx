import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { Activities, Careers, Projects } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getActivities,
  getCareers,
  getProjects,
  productionOrigin,
  user,
} from "@/resources";
import { capitalizeFirstLetter } from "@/utils";

export default function Home() {
  const careers = getCareers();
  const projects = getProjects();
  const activities = getActivities();

  return (
    <main>
      <div className="flex flex-col gap-12">
        <section
          id="portfolio-head"
          className="flex w-full flex-col gap-6 sm:gap-2"
        >
          <div
            id="metadata"
            className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row"
          >
            <div className="flex flex-col items-center sm:items-start">
              <h1
                id="name"
                className="text-primary mb-3 text-4xl leading-normal font-bold"
              >
                {user.name}
              </h1>
              <h4 id="job-title" className="prose-2xl text-muted-foreground">
                {user.jobTitle}
              </h4>
              <div id="links" className="mt-4 flex items-center gap-2">
                <Button
                  asChild
                  className="hidden print:block"
                  size="lg"
                  variant="outline"
                >
                  <a
                    href={productionOrigin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`mailto:${user.email}`}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={`https://github.com/${user.githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={`https://linkedin.com/in/${user.linkedinUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </Button>
              </div>
            </div>
            <Image
              id="avatar"
              src={user.avatar}
              alt="avatar"
              className="size-40 rounded-full"
              width={160}
              height={160}
            />
          </div>
          <div
            id="bio"
            className="text-muted-foreground mt-8 max-w-full text-xl font-medium"
          >
            {user.bio}
          </div>
        </section>
        <section id="portfolio-body" className="flex flex-col">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 id="skills" className="text-2xl font-bold">
                Skills
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {Object.entries(user.skills).map(([title, skills]) => (
                  <Card key={title}>
                    <CardHeader>
                      <CardTitle>{capitalizeFirstLetter(title)}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.map(skill => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 id="careers" className="text-2xl font-bold">
                Careers
              </h2>
              <div className="divider print:my-0" />
              <Careers careers={careers} />
            </div>
            <div>
              <h2 id="projects" className="text-2xl font-bold">
                Projects
              </h2>
              <div className="divider print:my-0" />
              <Projects projects={projects} />
            </div>
            <div>
              <h2 id="activities" className="text-2xl font-bold">
                Activities
              </h2>
              <div className="divider print:my-0" />
              <Activities activities={activities} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
