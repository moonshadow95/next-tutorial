import React from 'react';

const Post = ({post}) => (
  <>
    <h2>
      {post.id} {post.title}
    </h2>
    <p>{post.body}</p>
  </>
);

export default Post;

// Static Paths
export async function getStaticPaths() {
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
  ).json();
  const paths = data.map(post => {
    return {
      params: {postId: `${post.id}`}
    }
  })
  return {
    // paths: [
    //   {
    //     params: {postId: '1'},
    //   },
    //   {
    //     params: {postId: '2'},
    //   },
    //   {
    //     params: {postId: '3'},
    //   },
    // ],
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {params} = context;
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  ).json();
  return {
    props: {post: data},
  };
}
