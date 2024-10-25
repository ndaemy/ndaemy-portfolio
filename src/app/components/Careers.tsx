import { MDXRemote } from "next-mdx-remote/rsc";

import type { Career } from "@/resources/careers";

interface CareersProps {
  careers: Career[];
}

export default function Careers({ careers }: CareersProps) {
  return (
    <ul className="prose max-w-none">
      {careers.map(career => (
        <li key={career.slug}>
          <div className="grid grid-cols-[200px_minmax(0,_1fr)] gap-4">
            <div>
              <h3 className="prose-xl mt-1.5">{career.company}</h3>
              <p className="my-1">{career.position}</p>
              <p className="my-1">
                {career.startDate} - {career.endDate}
              </p>
            </div>
            <div className="prose-p:mb-0.5 prose-p:mt-2 prose-ul:mt-0.5">
              <MDXRemote source={career.description} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
