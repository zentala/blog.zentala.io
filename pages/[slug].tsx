import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Disclosure, DisclosureButton, DisclosurePanel } from "@reach/disclosure";
import { Meta, EmbedSlider, Newsletter, Tags, Inset, SocialShare } from '../components'

import { FacebookEmbed, InstagramEmbed, LinkedInEmbed, TikTokEmbed, TwitterEmbed, YouTubeEmbed, PlaceholderEmbed } from 'react-social-media-embed';

// import remarkFrontmatter from 'remark-frontmatter'
/*
 * GitHub Flavored Markdown
 * (autolink literals, footnotes, strikethrough, tables, tasklists)
 * https://github.com/remarkjs/remark-gfm
 */
import remarkGfm from 'remark-gfm';

/*
 * highlight code blocks
 * https://github.com/mapbox/rehype-prism
 * https://github.com/timlrx/rehype-prism-plus
 */
// import rehypePrism from '@mapbox/rehype-prism';
import rehypePrism from 'rehype-prism-plus';

/*
 * Add support for directives: one syntax for arbitrary extensions in markdown
 * https://github.com/remarkjs/remark-directive
 * https://talk.commonmark.org/t/generic-directives-plugins-syntax/444
 */

import remarkDirective from 'remark-directive'

// https://github.com/remarkjs/remark-lint
// https://github.com/luk707/rehype-truncate
// https://github.com/rehypejs/rehype-highlight

const allowedComponents = {
  Disclosure, DisclosureButton, DisclosurePanel,
  FacebookEmbed, InstagramEmbed, LinkedInEmbed, TikTokEmbed, TwitterEmbed, YouTubeEmbed, PlaceholderEmbed,
  Meta, EmbedSlider, Newsletter, Inset
}

type FrontMatterProps = {
  title: string,
  publishedOn: string,
  excerpt: string,
  tags: string[],
  readingTime: string
}

type Props = {
  frontMatter: FrontMatterProps,
  mdxSource: any,
}





const PostPage: React.FC<Props> = ({ frontMatter: { title, publishedOn, excerpt, tags, readingTime }, mdxSource }) => {
  console.log(readingTime);

  return (
    <div className="mt-4 max-w-screen-md">
      <SocialShare />
      <Meta title={`${title} | Zentala.io`} />
      <h1 className='text-5xl font-bold text-slate-900 font-serif'>{title}</h1>
      <p className='text-sm text-slate-500'>Published {publishedOn} | Tags: <Tags tags={tags} /> | Reading time: {readingTime} </p>
      <p className='text-2xl text-slate-900 mb-10 first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left font-serif'>{excerpt}</p>
      <MDXRemote {...mdxSource} components={allowedComponents} />
    </div>
  )
}

export const getStaticPaths = async () => {

  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content, { mdxOptions: {
    remarkPlugins: [remarkGfm, remarkDirective],
    rehypePlugins: [rehypePrism],
  }})
  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export default PostPage
