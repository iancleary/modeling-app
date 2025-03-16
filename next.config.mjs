import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeShiki from '@shikijs/rehype';
import createMDX from '@next/mdx';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  transpilePackages: ['@stylexjs/open-props'],
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      remarkMath,
      remarkGfm
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
          theme: "github-dark-default",
          inline: 'tailing-curly-colon', // or other options
        },
      ],
    ],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)