import { ImageResponse } from "next/og";

import { user } from "@/resources/user";

export const alt = `${user.name} 포트폴리오`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  const SUITMedium = fetch(
    "https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/static/otf/SUIT-Medium.otf",
  ).then(res => res.arrayBuffer());
  const SUITBold = fetch(
    "https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/static/otf/SUIT-Bold.otf",
  ).then(res => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {}
        <img
          src={user.avatar}
          alt="avatar"
          width={240}
          height={240}
          style={{
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#e4e4e7", fontSize: 84, fontWeight: 700 }}>
            {user.name}
          </p>
          <p style={{ color: "#9f9fa9", fontSize: 60, fontWeight: 500 }}>
            {user.jobTitle}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "SUIT",
          data: await SUITMedium,
          style: "normal",
          weight: 500,
        },
        {
          name: "SUIT",
          data: await SUITBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
