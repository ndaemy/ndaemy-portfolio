import Image from "next/image";

import { user } from "@/config";

export default function Home() {
  return (
    <>
      <h1 id="name">{user.name}</h1>
      <h4 id="job-title">{user.jobTitle}</h4>
      <a href={`mailto:${user.email}`}>
        <button>Email</button>
      </a>
      <Image src={user.avatar} alt="avatar" width={200} height={200} />
      <div id="bio">{user.bio}</div>
    </>
  );
}
