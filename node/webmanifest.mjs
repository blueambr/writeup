import { readFileSync, writeFile } from "fs";
import { resolve } from "path";

const websiteConfig = JSON.parse(
  readFileSync(resolve("./src/configs/website.config.json")),
);

const webmanifest = {
  name: websiteConfig.title,
  short_name: websiteConfig.title,
  display: "standalone",
  theme_color: websiteConfig.webmanifest.themeColor,
  background_color: websiteConfig.webmanifest.bgColor,
  icons: [
    {
      src: websiteConfig.webmanifest.androidTouchIcon,
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: websiteConfig.webmanifest.androidSplashIcon,
      sizes: "512x512",
      type: "image/png",
    },
  ],
};
const webmanifestPath = resolve("./public/manifest.webmanifest");

writeFile(webmanifestPath, JSON.stringify(webmanifest, null, 2), (error) => {
  if (error) {
    console.error("❌ Webmanifest creation failed:", error);

    return;
  }

  console.info("✅ Webmanifest created successfully:", webmanifestPath);
});
