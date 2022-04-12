/*
 * Add support for YAML, TOML, and other frontmatter
 * https://github.com/remarkjs/remark-frontmatter
 */
import remarkFrontmatter from 'remark-frontmatter';
import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  }
})

// https://nextjs.org/docs/api-reference/next.config.js/exportPathMap
const exportPathMap = async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
  return {
    // '/info.mdx': { page: '/dupa' },
    // '/about': { page: '/about' },
    // '/info': { page: '/info.mdx' },
    // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
    // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
    // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  exportPathMap,
  images: {
    loader: 'imgix',
    path: process.env.NODE_ENV == 'prod' ? 'https://blog.zentala.io/' : 'http://localhost:3000/',
  },
  experimental: {
    esmExternals: true // Prefer loading of ES Modules over CommonJS
  },

  // Support MDX files as pages:
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // plugins: [
  //   '@babel/plugin-proposal-export-default-from'
  // ]
})

export default nextConfig
