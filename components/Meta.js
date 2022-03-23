import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name='keywords' content={keywords} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Żentała.io - R&D & Digital Transformation',
  description: 'Paweł Żentała writing about Digital Transformation',
  keywords: 'Paweł Żentała, R&D, Digital Transformation, innovation, modernization, refroms, blog',
};

export default Meta;
