import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import getReadingTime from 'reading-time';

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

import { serialize } from 'next-mdx-remote/serialize'
// import matter from 'gray-matter'


// import rehypeCodeTitle from 'rehype-code-title'

export type Post = {
  data: {
      [key: string]: any;
  };
  content: string;
  slug: string;
  readingTime: string;
}

export const getPost: any = async (slug: string) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')
  const { data, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content, { mdxOptions: {
    remarkPlugins: [remarkGfm, remarkDirective],
    rehypePlugins: [rehypePrism],
  }})
  const { text: readingTime } = getReadingTime(content)
  return {
    data,
    content: mdxSource,
    slug,
    readingTime
  }
}


export const getPosts: Post[] | undefined[] = (limit: number | undefined) => {
  const dirPath = path.join(process.cwd(), 'posts')
  const dirFiles = fs.readdirSync(dirPath, { withFileTypes: true })

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return
      const filePath = path.join(dirPath, file.name)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)
      const { text: readingTime } = getReadingTime(content)
      const slug = file.name.replace(/.mdx$/, '')
      return { data, content, slug, readingTime  }
    })
    .filter((post) => post)


  return limit ? posts.filter((post, index) => {
    return index + 1 <= limit
  }) : posts
}

