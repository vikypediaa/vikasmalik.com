import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Vikas Malik · Growth marketer and AI builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "assets/og-headshot.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "64px 80px",
        background: "#F4EFE6",
        color: "#1D2420",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 28,
          maxWidth: 640,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 3,
            color: "#2F5D46",
            fontWeight: 700,
          }}
        >
          VIKAS MALIK
        </div>
        <div
          style={{
            fontSize: 68,
            lineHeight: 1.05,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <span>I help small businesses&nbsp;</span>
          <span style={{ color: "#2F5D46", fontStyle: "italic" }}>
            win more customers
          </span>
          <span>&nbsp;with AI.</span>
        </div>
        <div style={{ fontSize: 24, color: "#4A504B" }}>vikasmalik.com</div>
      </div>
      <img
        src={src}
        width={340}
        height={420}
        alt=""
        style={{
          borderRadius: "200px 200px 24px 24px",
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
    </div>,
    size,
  );
}
