import React from "react";
import styles from "./styles.module.css";

const PriceDisplay = ({
  price,
  discountPrice = null,
  badge,
  fontSizePrice = "40px",
  fontSizeDiscount = " 64px",
  className,
}) => {
  const countDiscount = (price, discountPrice) => {
    return Math.round(((price - discountPrice) / price) * 100);
  };

  return (
    <div className={className}>
      {discountPrice ? (
        <div className={styles.priceContainer}>
          <p
            className={styles.priceProduct}
            style={{ fontSize: fontSizePrice }}
          >{`$${price}`}</p>
          <p
            className={styles.discontPriceProduct}
            style={{ fontSize: fontSizeDiscount }}
          >{`$${discountPrice}`}</p>
          {badge && (
            <div className={styles.badge}>
              {`-${countDiscount(price, discountPrice)}%`}
            </div>
          )}
        </div>
      ) : (
        <p
          className={styles.discontPriceProduct}
          style={{ fontSize: fontSizeDiscount }}
        >{`$${price}`}</p>
      )}
    </div>
  );
};

export default PriceDisplay;
