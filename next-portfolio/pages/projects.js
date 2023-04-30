import Layout from '@/components/layout';
import Head from 'next/head';

export default function projects() {
  return (
    <Layout>
      <Head>
        <h1>프로젝트</h1>
        <meta name='description' content='오늘도 빡코딩!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </Layout>
  );
}
