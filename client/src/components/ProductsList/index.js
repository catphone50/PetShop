import styles from "./styles.module.css";
import ProductCard from "../ProductCard";

const ProductsList = ({ products }) => {
  return (
    <div className={styles.productsContainer}>
      {products ? (
        <div className={styles.productsContainerContent}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className={styles.emptyProducts}>No products</p>
      )}
    </div>
  );
};

export default ProductsList;
