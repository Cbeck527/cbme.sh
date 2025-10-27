// @ts-check
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },

    imageService: "cloudflare",
  }),
  vite: { plugins: [tailwindcss()] },
  integrations: [react()],
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "TX-02",
        cssVariable: "--font-tx02",
        variants: [
          {
            weight: 100,
            style: "normal",
            src: ["./src/assets/fonts/TX-02-Thin.woff2"],
          },
          {
            weight: 100,
            style: "oblique",
            src: ["./src/assets/fonts/TX-02-Thin-Oblique.woff2"],
          },
          {
            weight: 200,
            style: "normal",
            src: ["./src/assets/fonts/TX-02-ExtraLight.woff2"],
          },
          {
            weight: 200,
            style: "oblique",
            src: ["./src/assets/fonts/TX-02-ExtraLight-Oblique.woff2"],
          },
          {
            weight: 300,
            style: "normal",
            src: ["./src/assets/fonts/TX-02-Light.woff2"],
          },
          {
            weight: 300,
            style: "oblique",
            src: ["./src/assets/fonts/TX-02-Light-Oblique.woff2"],
          },

          {
            weight: 350,
            style: "normal",
            src: ["./src/assets/fonts/TX-02-SemiLight.woff2"],
          },
          {
            weight: 350,
            style: "oblique",
            src: ["./src/assets/fonts/TX-02-SemiLight-Oblique.woff2"],
          },
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/TX-02-Regular.woff2"],
          },
          {
            weight: 400,
            style: "oblique",
            src: ["./src/assets/fonts/TX-02-Oblique.woff2"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/TX-02-Medium.woff2"],
          },
          {
            weight: 500,
            style: "oblique",
            src: ["./src/assets/fonts/TX-02-Medium-Oblique.woff2"],
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/TX-02-SemiBold.woff2"],
          },
          {
            weight: 600,
            style: "oblique",
            src: ["./src/assets/fonts/TX-02-SemiBold-Oblique.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/TX-02-Bold.woff2"],
          },
          {
            weight: 700,
            style: "oblique",
            src: ["./src/assets/fonts/TX-02-Bold-Oblique.woff2"],
          },
          {
            weight: 800,
            style: "normal",
            src: ["./src/assets/fonts/TX-02-ExtraBold.woff2"],
          },
          {
            weight: 800,
            style: "oblique",
            src: ["./src/assets/fonts/TX-02-ExtraBold-Oblique.woff2"],
          },
          {
            weight: 900,
            style: "normal",
            src: ["./src/assets/fonts/TX-02-Black.woff2"],
          },
          {
            weight: 900,
            style: "oblique",
            src: ["./src/assets/fonts/TX-02-Black-Oblique.woff2"],
          },
        ],
      },
    ],
  },
});
