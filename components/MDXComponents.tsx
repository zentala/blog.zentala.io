import styles from '../styles/Markdown.module.css';

const MDXComponents = {
  p: (props) => <p {...props} className={styles.p} />,
  a: (props) => <a {...props} />,
  h1: (props) => <h2 {...props} className='font-serif text-3xl text-bold mt-20' />,
  h2: (props) => <h3 {...props} className='font-serif text-2xl text-bold mt-12' />,
  h3: (props) => <h4 {...props} className='font-serif text-xl text-bold mt-8' />,
  h4: (props) => <h5 {...props} className='font-serif text-lg text-bold' />,
  ol: (props) => <ol {...props} className='list-inside list-decimal' />,
  ul: (props) => <ul {...props} className='list-inside list-disc' />,
  li: (props) => <li {...props} className='' />,
};

export default MDXComponents;
