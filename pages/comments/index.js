import React, { useState } from 'react';
import { comments } from '../../data/comments';

const CommentPage = (props) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const fetchComments = async () => {
    const data = await (await fetch('/api/comments')).json();
    setComments(data);
  };
  const submitComment = async () => {
    const data = await (
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
    console.log(data);
  };
  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.id} {comment.text}
        </div>
      ))}
    </>
  );
};

export default CommentPage;
