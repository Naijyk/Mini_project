import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
  return (
    <Link to={`/products/${category}`}>
      <div className={s.category_card}>
        <p>{ category }</p>
      </div>
    </Link>
  )
}
