import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import getReadingTime from 'reading-time';

export type Post = {
  data: {
      [key: string]: any;
  };
  content: string;
  slug: string;
  readingTime: string;
}

const getPosts: Post[] | undefined[] = (limit: string) => {
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
      return { data, content, slug, readingTime }
    })
    .filter((post) => post)


  return limit ? posts.filter((post, index) => {
    return index + 1 <= limit
  }) : posts
}

export default getPosts

