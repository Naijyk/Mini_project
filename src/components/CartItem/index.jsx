import React from 'react';
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import s from './index.module.css';
import { decrCartItemAction, deleteCartItemAction, incrCartItemAction } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';

export default function CartItem({ id, image, title, price, count }) {

  const dispatch = useDispatch();

  return (
    <div className={s.cart_item}>
      <img src={image} alt={title} />
      <p>{ title }</p>
      <p>{ (price * count).toFixed(2) } $</p>
      <div>
        <p>{ count }</p>
        <CiSquarePlus className={s.incr_item}
                      onClick={() => dispatch(incrCartItemAction(id))} />
        <CiSquareMinus className={s.decr_item}
                       onClick={() => dispatch(decrCartItemAction(id))} />
      </div>
      <IoMdClose className={s.delete_item}
                 onClick={() => dispatch(deleteCartItemAction(id))} />
    </div>
  )
}
