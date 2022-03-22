import Head from 'next/head';

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='keywords'
        content='Paweł Żentała, R&D, Digital Transformation, innovation, modernization, refroms, blog'
      />
    </Head>
  );
};

export default Meta;

// let's set a default title
Meta.defaultProps = {
  title: 'Żentała.io - R&D & Digital Transformation',
};
