import React from 'react';

const ArticleListByCategory = ({articles, category}) => {
  return (<>
    <h1>Showing news for category <i>{category}</i></h1>
    {
      articles.map(article => <div key={article.id}>
        <h2>{article.id} {article.title}</h2>
        <p>{article.description}</p>
        <hr/>
      </div>)
    }
  </>)
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const {params: {category}, req, res, query} = context
  console.log(req.headers.cookie)
  console.log(query)
  res.setHeader('Set-Cookie', ['name=Nextjs'])
  const data = await (await fetch(`http://localhost:4000/news?category=${category}`)).json()
  return {
    props: {articles: data, category}
  }
}
