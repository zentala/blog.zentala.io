import getPosts from '../../scripts/fileSystem';
import PostItem from '../../components/PostItem';
import styles from '../../styles/Home.module.scss';
import Meta from '../../components/Meta';

const index = ({ posts }) => {
  return (
    <div>
      <Meta title='Blog posts - PressBlog' />
      <p className={styles.desc}>All Posts</p>
      <div className={styles.grid}>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
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
