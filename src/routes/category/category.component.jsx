import './category.styles.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCart from '../../components/product-cart/product-cart.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
