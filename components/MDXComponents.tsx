import styles from '../styles/Markdown.module.css';

const MDXComponents = {
  // The components you can overwrite use their standard HTML names.
  // Normally, in markdown, those names are: a, blockquote, br, code, em, h1, h2, h3, h4, h5, h6, hr, img, li, ol, p, pre, strong, and ul.
  // https://mdxjs.com/table-of-components/
  a: (props: any): JSX.Element => <a {...props} />,
  blockquote: (props: any): JSX.Element => <blockquote {...props} className={styles.blockquote} />,
  br: (props: any): JSX.Element => <br {...props} />,
  // code: (props: any): JSX.Element => <code {...props} className={styles.code} />,
  em: (props: any): JSX.Element => <em {...props} />,
  h1: (props: any): JSX.Element => <h2 {...props} className='font-serif text-3xl text-bold mt-20' />,
  h2: (props: any): JSX.Element => <h3 {...props} className='font-serif text-2xl text-bold mt-12' />,
  h3: (props: any): JSX.Element => <h4 {...props} className='font-serif text-xl text-bold mt-8' />,
  h4: (props: any): JSX.Element => <h5 {...props} className='font-serif text-lg text-bold' />,
  h5: (props: any): JSX.Element => <h6 {...props} className='font-serif text-md text-bold' />,
  hr: (props: any): JSX.Element => <hr {...props} className={styles.hr} />,
  img: (props: any): JSX.Element => <img {...props} className={styles.img} />,
  li: (props: any): JSX.Element => <li {...props} className='' />,
  ol: (props: any): JSX.Element => <ol {...props} className='list-outside list-decimal ml-8' />,
  p: (props: any): JSX.Element => <p {...props} className={styles.p} />,
  // pre: (props: any): JSX.Element => <pre {...props} className={styles.pre} />,
  strong: (props: any): JSX.Element => <strong {...props} />,
  ul: (props: any): JSX.Element => <ul {...props} className='list-outside list-disc  ml-8' />,

  // With remark-gfm, you can also use: del, input, section, sup, table, tbody, td, th, thead, and tr.
  // Other remark plugins that add support for new constructs and advertise that they work with rehype, will also work with MDX.
  // https://github.com/remarkjs/remark-gfm
  // table: (props: any): JSX.Element => <table {...props} className='table-auto' />,
};

export default MDXComponents;
