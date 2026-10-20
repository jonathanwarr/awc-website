import { ImageResponse } from "next/og";

/* Replaces the AWC apple-touch-icon on preview pages. */

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16181B",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: "#E8B04B",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
