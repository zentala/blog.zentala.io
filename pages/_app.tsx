import '../styles/globals.css'
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  )
}

export default MyApp
