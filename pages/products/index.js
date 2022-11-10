import Link from 'next/link';
import React from 'react';

const ProductList = ({ products }) => (
  <>
    <h1>List of products</h1>
    {products.map((product) => (
      <div key={product.id}>
        <Link href={`/products/${product.id}`} passHref>
          <h2>
            {product.id} {product.title} {product.price}
          </h2>
        </Link>
        <hr />
      </div>
    ))}
  </>
);

export default ProductList;

export async function getStaticProps() {
  const data = await (await fetch('http://localhost:4000/products')).json();
  return {
    props: { products: data },
  };
}
