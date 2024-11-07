interface BadgesWithTitleProps {
  title: string;
  badges: string[];
}

export default function BadgesWithTitle({
  title,
  badges,
}: BadgesWithTitleProps) {
  return (
    <div>
      <h3 className="prose prose-lg">{title}</h3>
      <ul className="mt-2 flex flex-wrap gap-2">
        {badges.map((badge, index) => (
          <li key={index} className="badge badge-neutral badge-lg">
            {badge}
          </li>
        ))}
      </ul>
    </div>
  );
}
