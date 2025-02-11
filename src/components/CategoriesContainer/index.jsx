import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../requests/categories';
import CategoryCard from '../CategoryCard';
import s from './index.module.css';


export default function CategoriesContainer() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories)
  }, []);

  const categoriesData = useSelector(store => store.categories);

  return (
    <div className={s.categories_container}>
      {
        categoriesData.map(el => <CategoryCard key={el.id} category={el} />)
      }
    </div>
  )
}
