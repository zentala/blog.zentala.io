import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Disclosure, DisclosureButton, DisclosurePanel } from "@reach/disclosure";
import { Meta, EmbedSlider, Newsletter, Tags } from '../components'

import { FacebookEmbed, InstagramEmbed, LinkedInEmbed, TikTokEmbed, TwitterEmbed, YouTubeEmbed, PlaceholderEmbed } from 'react-social-media-embed';

const allowedComponents = {
  Disclosure, DisclosureButton, DisclosurePanel,
  FacebookEmbed, InstagramEmbed, LinkedInEmbed, TikTokEmbed, TwitterEmbed, YouTubeEmbed, PlaceholderEmbed,
  Meta, EmbedSlider, Newsletter
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
  const mdxSource = await serialize(content)
  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export default PostPage
