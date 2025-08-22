import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeShiki from "@shikijs/rehype";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  // when importing mdx pages this is necessary for Next.js to recognize these files as importable
  // EVEN when you are not using mdx files within the app router directly
  // meaning, we need mdx here to import them as renderable components
  pageExtensions: ["mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  transpilePackages: [],
  // Uncomment the following line to ignore TypeScript build errors
  // For incremental adoption, you can set this to `true` to ignore TypeScript errors
  // typescript: {
  //   ignoreBuildErrors: true,
  // }
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/u/9398410?v=4"),
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      [remarkMath], // Adds support for math in markdown
      [remarkGfm], // Adds support for GitHub Flavored Markdown (GFM)
    ],
    rehypePlugins: [
      [
        /**
         * Adds support for math
         */
        rehypeKatex,
        {
          // https://katex.org/docs/options.html
          displayMode: true,
          output: "mathml",
        },
      ],
      [
        /**
         * Adds support for math
         */
        rehypeShiki,
        {
          // https://shiki.style/packages/rehype
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
          inline: "tailing-curly-colon", // or other options
          defaultColor: "light-dark()",
        },
      ],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
