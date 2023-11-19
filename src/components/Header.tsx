import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-zinc-900/50 border-b border-zinc-800">
      <div className="flex items-center justify-between container mx-auto px-8 py-4">
        <Link className="text-sky-400 text-xl font-bold" href="/">
          Ndaemy
        </Link>
        <div className="flex gap-8">
          <a
            className="duration-200 text-zinc-400 hover:text-zinc-100"
            href={process.env.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="duration-200 text-zinc-400 hover:text-zinc-100"
            href={process.env.LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};
