import { GENERAL_URL } from "../../config/apiConstants";
import styles from "./styles.module.css";

const productCard = ({ product }) => {
  const countDiscount = (price, discountPrice) => {
    return Math.round(((price - discountPrice) / price) * 100);
  };

  return (
    <div className={styles.productCard}>
      {product.discont_price && (
        <div className={styles.blueBox}>
          {`-${countDiscount(product.price, product.discont_price)}%`}
        </div>
      )}

      <img
        className={styles.imageProduct}
        src={`${GENERAL_URL}${product.image}`}
        alt={`product ${product.title}`}
      />
      <h5 className={styles.titleProduct}>{product.title}</h5>
      <div className={styles.priceContainer}>
        {product.discont_price ? (
          <>
            <p className={styles.priceProduct}>{`$${product.price}`}</p>
            <h6 className={styles.discontPriceProduct}>
              {`$${product.discont_price}`}
            </h6>
          </>
        ) : (
          <h6 className={styles.discontPriceProduct}>{`$${product.price}`}</h6>
        )}
      </div>
    </div>
  );
};

export default productCard;
