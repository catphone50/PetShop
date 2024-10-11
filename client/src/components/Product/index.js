import { nanoid } from "nanoid";
import styles from "./styles.module.css";
import ProductCard from "../ProductCard";

const Product = ({ products }) => {
  return (
    <div className={styles.productsContainer}>
      {products ? (
        <div className={styles.productsContainerContent}>
          {products.map((product) => {
            console.log(product);
            return <ProductCard key={nanoid(5)} product={product} />;
          })}
        </div>
      ) : (
        <p className={styles.emptyProducts}>No products</p>
      )}
    </div>
  );
};

export default Product;
