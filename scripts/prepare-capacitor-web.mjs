import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const webDir = path.join(rootDir, "web-build");

const filesToCopy = [
  "index.html",
  "styles.css",
  "app.js",
  "data.js",
  "manifest.webmanifest",
  "sw.js"
];

const dirsToCopy = ["assets"];

async function main() {
  await mkdir(webDir, { recursive: true });

  for (const file of filesToCopy) {
    await copyEntry(path.join(rootDir, file), path.join(webDir, file));
  }

  for (const dir of dirsToCopy) {
    await copyEntry(path.join(rootDir, dir), path.join(webDir, dir));
  }

  const entries = await readdir(webDir);
  console.log(`Prepared Capacitor web bundle in ${webDir}`);
  console.log(entries.join("\n"));
}

async function copyEntry(source, target) {
  const entry = await stat(source);

  if (entry.isDirectory()) {
    await mkdir(target, { recursive: true });
    const children = await readdir(source);
    for (const child of children) {
      await copyEntry(path.join(source, child), path.join(target, child));
    }
    return;
  }

  const content = await readFile(source);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, content);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
