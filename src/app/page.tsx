import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { user } from "@/config";
import BadgesWithTitle from "@/app/components/BadgesWithTitle";

export default function Home() {
  return (
    <main>
      <div className="mx-10 flex flex-col items-center gap-12 pt-20 *:w-full *:max-w-screen-lg md:mx-14">
        <section id="portfolio-head" className="flex w-full flex-col gap-4">
          <div id="metadata" className="flex justify-between">
            <div>
              <div>
                <h1
                  id="name"
                  className="text-4xl font-bold leading-normal text-primary"
                >
                  {user.name}
                </h1>
                <h4 id="job-title" className="prose-2xl">
                  {user.jobTitle}
                </h4>
              </div>
              <div className="divider divider-neutral w-32" />
              <div id="links" className="flex items-center gap-4">
                <a href={`mailto:${user.email}`}>
                  <button className="btn btn-link btn-lg px-0">
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
                  <button className="btn btn-link btn-lg px-0">
                    <FontAwesomeIcon icon={faGithub} />
                    GitHub
                  </button>
                </a>
              </div>
            </div>
            <Image
              id="avatar"
              src={user.avatar}
              alt="avatar"
              className="h-40 w-40 rounded-full"
              width={160}
              height={160}
            />
          </div>
          <div id="bio" className="prose prose-xl max-w-full">
            {user.bio}
          </div>
        </section>
        <section id="portfolio-body" className="flex flex-col">
          <div className="flex flex-col gap-2.5">
            <h2 className="prose prose-2xl font-bold">Skills</h2>
            <div className="flex flex-col gap-2">
              <BadgesWithTitle
                title="Languages"
                badges={user.skills.languages}
              />
              <BadgesWithTitle title="Frontend" badges={user.skills.frontend} />
              <BadgesWithTitle title="Backend" badges={user.skills.backend} />
              <BadgesWithTitle title="Etc" badges={user.skills.etc} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
