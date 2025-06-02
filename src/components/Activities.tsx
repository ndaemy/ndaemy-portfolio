import { MDXRemote } from "next-mdx-remote/rsc";

import type { Activity } from "@/resources";

interface ActivitiesProps {
  activities: Activity[];
}

export default function Activities({ activities }: ActivitiesProps) {
  return (
    <ul className="prose flex max-w-none flex-col gap-4">
      {activities.map(activity => (
        <li key={activity.slug}>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-4 print:block">
            <div>
              <h3 className="prose-xl mt-1.5">{activity.title}</h3>
              <p className="my-1">{activity.subtitle}</p>
            </div>
            <div className="leading-normal prose-p:my-2 prose-ul:mt-0.5 prose-li:my-1">
              <MDXRemote
                source={activity.description}
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
