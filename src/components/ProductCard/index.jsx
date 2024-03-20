import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import { addToCartAction } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';

export default function ProductCard({ id, title, price, image }) {

  const dispatch = useDispatch();

  return (
    <div className={s.product_card}>
      <Link to={`/product/${id}`} >
        <img src={image} alt={title} />
        <p>Title: { title }</p>
        <p>Price: { price }$</p>
      </Link>
      <div onClick={() => dispatch(addToCartAction({ id, title, price, image }))} >Add to cart</div>
    </div>
  )
}
