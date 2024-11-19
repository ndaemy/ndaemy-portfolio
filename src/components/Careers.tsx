import { MDXRemote } from "next-mdx-remote/rsc";

import type { Career } from "@/resources/careers";

interface CareersProps {
  careers: Career[];
}

export default function Careers({ careers }: CareersProps) {
  return (
    <ul className="prose flex max-w-none flex-col gap-4">
      {careers.map(career => (
        <li key={career.slug}>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-[200px_minmax(0,_1fr)] sm:gap-4">
            <div>
              <h3 className="prose-xl mt-1.5">{career.company}</h3>
              <p className="my-1">{career.position}</p>
              <p className="my-1">
                {career.startDate} - {career.endDate}
              </p>
            </div>
            <div className="leading-normal prose-p:my-2 prose-ul:mt-0.5 prose-li:my-1">
              <MDXRemote
                source={career.description}
                components={{
                  h4: ({ children }) => (
                    <h4 className="first-of-type:mt-2">{children}</h4>
                  ),
                }}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
