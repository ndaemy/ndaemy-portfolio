import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { user } from "@/config";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center pt-20">
        <section className="mx-10 flex w-full max-w-screen-lg flex-col gap-4 md:mx-14">
          <div className="metadata flex w-full justify-between">
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
      </div>
    </main>
  );
}
