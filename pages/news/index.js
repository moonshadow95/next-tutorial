import React from 'react';

const NewsArticleList = ({ articles }) => {
  return (
    <>
      <h1>List of News Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          {article.id} {article.title} | {article.category}
        </div>
      ))}
    </>
  );
};

export default NewsArticleList;

export async function getServerSideProps() {
  const data = await (await fetch('http://localhost:4000/news')).json();
  return {
    props: {
      articles: data,
    },
  };
}
