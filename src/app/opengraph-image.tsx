import { ImageResponse } from "next/og";

export const alt = "Herizon Society";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, rgba(26,26,26,1) 0%, rgba(45,45,45,1) 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: "-0.04em",
          }}
        >
          <span style={{ color: "#FF7477" }}>HER</span>
          <span>IZON</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 28, color: "#FF7477", textTransform: "uppercase", letterSpacing: "0.24em" }}>
            Confidence. Leadership. Community.
          </div>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700, maxWidth: 900 }}>
            Helping Girls Discover What&apos;s Possible
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.4, color: "rgba(255,255,255,0.75)", maxWidth: 900 }}>
            A community for girls ages 12 to 18 built around mentorship, real-world experiences, and lasting confidence.
          </div>
        </div>
      </div>
    ),
    size
  );
}
