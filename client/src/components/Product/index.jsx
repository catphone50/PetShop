import ReadMore from "../ReadMore";
import styles from "./styles.module.css";
import { GENERAL_URL } from "../../config/apiConstants";
import ProductQuantityControl from "../ProductQuantityControl";
import PriceDisplay from "../PriceDisplay";

const Product = ({ product }) => {
  return (
    <div className={styles.productMainContainer}>
      <img
        className={styles.imageProduct}
        src={`${GENERAL_URL}${product.image}`}
        alt={`product ${product.title}`}
      />
      <div className={styles.productInfoContainer}>
        <h2 className={styles.titleProduct}>{product.title}</h2>
        <PriceDisplay
          price={product.price}
          discountPrice={product.discont_price}
          badge
        />
        <ProductQuantityControl
          className={styles.quantity}
          product={product}
          isSubmitBtn
        />
        <h5 className={styles.descriptionTitle}>Description</h5>
        <ReadMore
          className={styles.description}
          text={product.description}
          maxLength={250}
        />
      </div>
    </div>
  );
};
export default Product;
