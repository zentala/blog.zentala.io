import Link from 'next/link';
import { MeetMe, Meta, PostItem } from '../components';
import getPosts from '../scripts/fileSystem';
import styles from '../styles/Home.module.css';


const index = ({ posts }) => {
  return (
    <>
      <Meta title='Zentala | Blog' />
      <MeetMe />
      <Link href='/about'>More about me</Link>

      <div className={styles.articleList}>
        <p className={styles.desc}>Newly Published</p>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
};

export default index;

export const getStaticProps = () => {
  const posts = getPosts(10);

  return {
    props: {
      posts,
    },
  };
};
