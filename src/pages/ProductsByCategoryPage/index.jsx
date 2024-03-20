import React, { useEffect } from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import { getProductsByCategory } from '../../requests/products';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function ProductsByCategoryPage() {

  const dispatch = useDispatch();

  const { category } = useParams();

  useEffect(() => {
    dispatch(getProductsByCategory(category))
  }, []);

  const ProductsByCategoryState = useSelector(store => store.productsByCategory);

  return (
    <div>
        <ProductsContainer ProductsByCategoryState={ProductsByCategoryState} />
    </div>
  )
}
