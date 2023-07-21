import { Route, Routes } from 'react-router-dom';
import CategiriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.styles.scss';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const caregoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(caregoriesArray));
    };
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategiriesPreview />}></Route>
      <Route path=':category' element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
