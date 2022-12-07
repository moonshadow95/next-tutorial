import { comments } from '../../../data/comments';
export default function handler(req, res) {
  const { commentId } = req.query;
  if (req.method === 'GET') {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
  } else if (req.method === 'DELETE') {
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    comments.splice(index, 1);

    res.status(200).json(deletedComment);
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(comment);
  /** Don't do this 
      const data = await (await fetch(`http://localhost:3000/api/comments/${commentId}`)).json();
  */

  return { props: { comment } };
}
