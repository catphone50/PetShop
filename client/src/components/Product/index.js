import styles from "./styles.module.css";
import ProductCard from "../ProductCard";
import { NavLink } from "react-router-dom";

const Product = ({ products }) => {
  return (
    <div className={styles.productsContainer}>
      {products ? (
        <div className={styles.productsContainerContent}>
          {products.map((product) => (
            <NavLink key={product.id} to={`/products/${product.id}`}>
              <ProductCard product={product} />
            </NavLink>
          ))}
        </div>
      ) : (
        <p className={styles.emptyProducts}>No products</p>
      )}
    </div>
  );
};

export default Product;
