import styles from '../styles/Markdown.module.css';

const MDXComponents = {
  p: (props) => <p {...props} className={styles.p} />,
  a: (props) => <a {...props} className={styles.link} />,
  h1: (props) => <h1 {...props} className={styles.postTitle} />,
  h2: (props) => <h2 {...props} className={styles.h2} />,
};

export default MDXComponents;
