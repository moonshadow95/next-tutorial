import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.id}. {comment.text}
    </div>
  );
};

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: '1' } },
      { params: { commentId: '2' } },
      { params: { commentId: '3' } },
    ],
    fallback: false,
  };
}
