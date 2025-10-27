import type { Config } from "prettier";

const config: Config = {
  singleAttributePerLine: true,
  bracketSameLine: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],

  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
};

export default config;
