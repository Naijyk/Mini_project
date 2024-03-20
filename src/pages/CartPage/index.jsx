import React from 'react';
import CartItemsContainer from '../../components/CartItemsContainer';
import { useDispatch, useSelector } from 'react-redux';
import s from './index.module.css';
import { clearCartAction } from '../../store/reducers/cartReducer';

export default function CartPage() {

  const cartState = useSelector(store => store.cart);

  const dispatch = useDispatch();

  const totalPrice = cartState.reduce((acc, el) => acc + ( el.price.toFixed(2) * el.count ), 0);

  return (
    <div className={s.cart}>
      {
        cartState.length === 0 ?
        <p>The cart is Empty</p>
        : <CartItemsContainer />
      }
      <p>Total: { totalPrice.toFixed(2) } $</p>
      <div onClick={() => dispatch(clearCartAction())} >Clear cart</div>
    </div>
  )
}
