import Link from 'next/link';
import React from 'react';

const PostList = ({ posts }) => (
  <>
    <h1>List of Posts</h1>
    {posts.map((post) => (
      <div key={post.id}>
        <Link href={`/posts/${post.id}`} passHref>
          <h2>
            {post.id} {post.title}
          </h2>
        </Link>
        <hr />
      </div>
    ))}
  </>
);

export default PostList;

export async function getStaticProps() {
  const data = await (
    await fetch('https://jsonplaceholder.typicode.com/posts')
  ).json();
  return {
    props: { posts: data.slice(0, 3) },
  };
}
