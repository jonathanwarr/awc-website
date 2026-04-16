import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const logoPath = join(root, "public", "logo-512.svg");
const logoSvg = readFileSync(logoPath);

await sharp(logoSvg, { density: 400 })
  .resize(140, 140)
  .extend({
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png()
  .toFile(join(root, "src", "app", "apple-icon.png"));

console.log("wrote src/app/apple-icon.png");

const ogBg = "#FFFFFF";

const logoInner = logoSvg
  .toString()
  .replace(/<\?xml[^?]*\?>/, "")
  .replace(/<svg[^>]*>/, "")
  .replace(/<\/svg>/, "");

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="${ogBg}"/>
  <g transform="translate(344, 59) scale(1.0)" fill="none">
    ${logoInner}
  </g>
</svg>`;

await sharp(Buffer.from(ogSvg), { density: 150 })
  .png()
  .toFile(join(root, "src", "app", "opengraph-image.png"));

console.log("wrote src/app/opengraph-image.png");
