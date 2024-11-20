import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { Activities, BadgesWithTitle, Careers, Projects } from "@/components";
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
                className="mb-3 text-4xl font-bold leading-normal text-primary"
              >
                {user.name}
              </h1>
              <h4 id="job-title" className="prose-2xl">
                {user.jobTitle}
              </h4>
              <div className="divider divider-neutral w-32 self-auto print:hidden" />
              <div id="links" className="flex items-center gap-4">
                <a
                  href={productionOrigin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden print:block"
                >
                  <button className="btn btn-link btn-lg h-fit min-h-0 px-0 py-4">
                    <FontAwesomeIcon icon={faGlobe} />
                    Portfolio
                  </button>
                </a>
                <span className="hidden print:inline">/</span>
                <a href={`mailto:${user.email}`}>
                  <button className="btn btn-link btn-lg h-fit min-h-0 px-0 py-4">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                  </button>
                </a>
                <span>/</span>
                <a
                  href={`https://github.com/${user.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-link btn-lg h-fit min-h-0 px-0 py-4">
                    <FontAwesomeIcon icon={faGithub} />
                    GitHub
                  </button>
                </a>
                <span>/</span>
                <a
                  href={`https://linkedin.com/in/${user.linkedinUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-link btn-lg h-fit min-h-0 px-0 py-4">
                    <FontAwesomeIcon icon={faLinkedin} />
                    LinkedIn
                  </button>
                </a>
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
          <div id="bio" className="prose prose-xl max-w-full">
            {user.bio}
          </div>
        </section>
        <section id="portfolio-body" className="flex flex-col">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2.5">
              <h2 id="skills" className="prose prose-2xl font-bold">
                Skills
              </h2>
              <div className="flex flex-col gap-4">
                {Object.keys(user.skills).map(key => (
                  <BadgesWithTitle
                    key={key}
                    title={capitalizeFirstLetter(key)}
                    badges={user.skills[key as keyof typeof user.skills]}
                  />
                ))}
              </div>
            </div>
            <div>
              <h2 id="careers" className="prose prose-2xl font-bold">
                Careers
              </h2>
              <div className="divider print:my-0" />
              <Careers careers={careers} />
            </div>
            <div>
              <h2 id="projects" className="prose prose-2xl font-bold">
                Projects
              </h2>
              <div className="divider print:my-0" />
              <Projects projects={projects} />
            </div>
            <div>
              <h2 id="activities" className="prose prose-2xl font-bold">
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
