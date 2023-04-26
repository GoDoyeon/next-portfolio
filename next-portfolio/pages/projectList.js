import Layout from '@/components/layout';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function projectList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
    );
    setPosts([...posts, ...response.data]);
    setPage(page + 1);
  };
  return (
    <Layout>
      <div className='bg-white py-20 px-10 grid gap-10 min-h-screen'>
        <h1 className='font-bold text-2xl '>무한스크롤 적용하기</h1>
        <InfiniteScroll
          dataLength={posts.length}
          next={loadPosts}
          hasMore={true}
          loader={
            <h4 className='font-bold text-2xl text-center'>Loading...</h4>
          }
          endMessage={
            <p className='font-bold text-2xl text-center'>
              <b>Yat! You have seen it all</b>
            </p>
          }>
          {posts.map((post) => (
            <div
              key={post.id}
              className='bg-violet-100 p-6 rounded-3xl shadow-xl mb-5'>
              <h2 className=''>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </Layout>
  );
}
