import { useContext } from 'react';
import { ProductContext } from '../../contexts/shop.context';
import ProductCart from '../../components/product-cart/product-cart.component';
import './shop.styles.scss';
const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className='products-container'>
      {products.map((product) => {
        return <ProductCart key={product.id} product={product}></ProductCart>;
      })}
    </div>
  );
};

export default Shop;
