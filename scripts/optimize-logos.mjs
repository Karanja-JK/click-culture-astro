import sharp from "sharp";
import { optimize } from "svgo";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAW = join(__dirname, "..", "raw-images", "Company Logos");
const OUT = join(__dirname, "..", "src", "assets", "logos");

mkdirSync(OUT, { recursive: true });

// SVGs: optimize in place, keep as vectors
const svgs = [
  { in: "unilever-logo.svg", out: "unilever.svg" },
  { in: "chippercash-logo.svg", out: "chipper-cash.svg" },
  { in: "mac-cosmetics-logo.svg", out: "mac.svg" },
];

for (const { in: inFile, out: outFile } of svgs) {
  const raw = readFileSync(join(RAW, inFile), "utf8");
  const result = optimize(raw, {
    multipass: true,
    plugins: [
      "preset-default",
      { name: "removeViewBox", active: false },
    ],
  });
  writeFileSync(join(OUT, outFile), result.data, "utf8");
  console.log(`✓ ${outFile}  (${(raw.length / 1024).toFixed(1)}KB → ${(result.data.length / 1024).toFixed(1)}KB)`);
}

// PNGs: standardize height, convert to webp, preserve transparency
const rasters = [
  { in: "lintons-logo.png", out: "lintons.webp" },
  { in: "sheamoisture-logo.png", out: "shea-moisture.webp" },
  { in: "thefoodlibrary-logo.png", out: "food-library.webp" },
];

const TARGET_HEIGHT = 200; // exported large; marquee will display much smaller, this covers retina/2x-3x scaling

for (const { in: inFile, out: outFile } of rasters) {
  const inputPath = join(RAW, inFile);
  const outputPath = join(OUT, outFile);
  await sharp(inputPath)
    .resize({ height: TARGET_HEIGHT, withoutEnlargement: false })
    .webp({ quality: 90, alphaQuality: 100 }) // high alphaQuality: preserve transparency edges cleanly
    .toFile(outputPath);
  console.log(`✓ ${outFile}`);
}

console.log("\nDone. Output in src/assets/logos/");
