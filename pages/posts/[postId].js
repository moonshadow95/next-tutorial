import React from 'react';

const PostId = ({ post }) => (
  <>
    <h2>
      {post.id} {post.title}
    </h2>
    <p>{post.body}</p>
  </>
);

export default PostId;
// Static Paths
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: '1' },
      },
      {
        params: { postId: '2' },
      },
      {
        params: { postId: '3' },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  ).json();
  return {
    props: { post: data },
  };
}
