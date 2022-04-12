import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'

import { Disclosure, DisclosureButton, DisclosurePanel } from "@reach/disclosure";
import { Meta, EmbedSlider, Newsletter, Tags, Inset, SocialShare, WIP } from '../components'

import { FacebookEmbed, InstagramEmbed, LinkedInEmbed, TikTokEmbed, TwitterEmbed, YouTubeEmbed, PlaceholderEmbed } from 'react-social-media-embed';

import { getPost } from '../scripts/fileSystem';

const allowedComponents = {
  Disclosure, DisclosureButton, DisclosurePanel,
  FacebookEmbed, InstagramEmbed, LinkedInEmbed, TikTokEmbed, TwitterEmbed, YouTubeEmbed, PlaceholderEmbed,
  Meta, EmbedSlider, Newsletter, Inset, WIP
}

type FrontMatterProps = {
  title: string,
  publishedOn: string,
  excerpt: string,
  tags: string[],
  readingTime: string
}

type Props = {
  data: FrontMatterProps,
  conent: any,
}

const PostPage: React.FC<Props> = (...params) => {
  const { data, content, slug, readingTime } = params[0];
  const { title, publishedOn, excerpt, tags } = data;

  const info = (
    <ul className='text-sm text-slate-400 inline-flex space-x-10'>
      {publishedOn && (<li>Published <span className='text-slate-500'>{publishedOn}</span></li>)}
      {tags && (<li>Tags: <span className='text-slate-500'><Tags tags={tags} /></span></li>)}
      {readingTime && (<li>Reading time: {readingTime}</li>)}
    </ul>
  )

  return (
    <div className="mt-4 max-w-screen-md">
      <SocialShare />
      <Meta title={`${title} | Zentala.io`} />
      <h1 className='text-5xl font-bold text-slate-900 font-serif'>{title}</h1>
      {info}
      <p className='text-2xl text-slate-900 mb-10 first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left font-serif'>{excerpt}</p>
      <MDXRemote {...content} components={allowedComponents} />
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
  const post = await getPost(slug);

  return {
    props: {
      ...post
    },
  };
}

export default PostPage
