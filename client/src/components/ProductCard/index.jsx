import { useEffect, useState } from "react";
import { GENERAL_URL } from "../../config/apiConstants";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const countDiscount = (price, discountPrice) => {
    return Math.round(((price - discountPrice) / price) * 100);
  };
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart);

  const [isHover, setIsHover] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const isItemInCart = () => {
    return itemsInCart.some((item) => item.id === product.id);
  };
  useEffect(() => {
    setIsAdded(isItemInCart());
  }, [itemsInCart, product.id]);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (!isAdded) {
      dispatch(addItem({ ...product, quantity: 1 }));
      setIsAdded(true);
    }
  };

  return (
    <NavLink to={`/products/${product.id}`}>
      <div
        className={styles.productCard}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
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
            <h6
              className={styles.discontPriceProduct}
            >{`$${product.price}`}</h6>
          )}
        </div>
        {isHover && (
          <button
            className={`${styles.addItemToCart} ${isAdded ? styles.added : ""}`}
            onClick={handleAddToCart}
          >
            {isAdded ? "Added" : "Add to cart"}
          </button>
        )}
      </div>
    </NavLink>
  );
};

export default ProductCard;
