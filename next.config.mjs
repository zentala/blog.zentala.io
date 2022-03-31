import remarkFrontmatter from 'remark-frontmatter';
import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  // https://nextjs.org/docs/api-reference/next.config.js/exportPathMap
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    console.log(defaultPathMap);
    return {
      // '/info.mdx': { page: '/dupa' },
      // '/about': { page: '/about' },
      // '/info': { page: '/info.mdx' },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },
  images: {
    loader: 'imgix',
    path: 'https://blog.zentala.io/'
  },
  // Prefer loading of ES Modules over CommonJS
  experimental: {esmExternals: true},

  // Support MDX files as pages:
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // plugins: [
  //   '@babel/plugin-proposal-export-default-from'
  // ]
})

export default nextConfig
