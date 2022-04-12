import Link from 'next/link';
import { Meta, PostItem, MeetMe } from '../components';
import { getPosts } from '../scripts/fileSystem';
import styles from '../styles/Home.module.scss';

const index = ({ posts }) => {
  return (
    <div>
      <Meta title='Blog posts - PressBlog' />
      <p className={styles.desc}>All Posts</p>
      <div className='grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3' style={{}}>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
      <hr className='mt-10 mb-10'/>
      <div className=''>
        <MeetMe />
        <Link href='/about'>More about me</Link>
      </div>
    </div>
  );
};

export default index;

export const getStaticProps = () => {
  const posts = getPosts(false);

  return {
    props: {
      posts,
    },
  };
};
