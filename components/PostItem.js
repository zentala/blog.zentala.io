import Link from 'next/link';

const PostItem = ({ post }) => {
  return (
    <div>
      <h3>
        <Link href={`/posts/${post.slug}`}>{post.data.title}</Link>
      </h3>
      <p style={{fontSize: '80%'}}>Published on {post.data.publishedOn}</p>
      <p>{post.data.excerpt}</p>
      <Link href={`/posts/${post.slug}`}>Read more</Link>
    </div>
  );
};

export default PostItem;
