import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../requests/products';
import s from './index.module.css';
import { addToCartAction } from '../../store/reducers/cartReducer';

export default function SingleProductPage() {

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, []);

  const singleProductState = useSelector(store => store.singleProduct);

  const { image, title, description, price, category } = singleProductState;

  return (
    <div className={s.product}>
      <img src={image} alt={title} />
      <div>
        <h3>{ title }</h3>
        <p>Description: { description }</p>
        <p>Category: { category }</p>
        <p>Price: { price }$</p>
        <div onClick={() => dispatch(addToCartAction(singleProductState))} >Add to cart</div>
      </div>
    </div>
  )
}
