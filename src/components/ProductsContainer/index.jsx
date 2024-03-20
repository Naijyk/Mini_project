import React from 'react';
import ProductCard from '../ProductCard';
import s from './index.module.css';

export default function ProductsContainer({ ProductsByCategoryState }) {

  return (
    <div className={s.products_container}>
      {
        ProductsByCategoryState.map(el => <ProductCard key={el.id} {...el} />)
      }
    </div>
  )
}
