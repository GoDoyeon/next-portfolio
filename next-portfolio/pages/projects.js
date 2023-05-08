import Layout from '@/components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../config';

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

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options,
  );

  const result = await res.json();
  console.log(result);

  return {
    props: {}, // will be passed to the page component as props
  };
}
