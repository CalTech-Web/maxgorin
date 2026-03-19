import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Max Gorin - EMS Entrepreneur & Community Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #2a4d7a 50%, #152d4a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 8,
          }}
        >
          Max Gorin
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#d4a843",
            marginBottom: 24,
          }}
        >
          EMS Entrepreneur & Community Leader
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#94a3b8",
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Founder of LifeLine Ambulance | 19+ Years of EMS Leadership | Los Angeles County
        </div>
      </div>
    ),
    { ...size }
  );
}
