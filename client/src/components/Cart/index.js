import { GENERAL_URL } from "../../config/apiConstants";
import PriceDisplay from "../PriceDisplay";
import ProductQuantityControl from "../ProductQuantityControl";
import styles from "./styles.module.css";
import deleteItem from "../../assets/icons/x.svg";
import { removeItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Cart = ({ product }) => {
  const dispatch = useDispatch();
  const handleDelete = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className={styles.productContainer}>
      <img
        className={styles.img}
        src={`${GENERAL_URL}${product.image}`}
        alt={product.title}
      />
      <div className={styles.productInfoContainer}>
        <div className={styles.titleContainer}>
          <h5>{product.title}</h5>
          <button
            className={styles.delete}
            onClick={() => handleDelete(product)}
          >
            <img src={deleteItem} alt="del" />
          </button>
        </div>
        <div className={styles.priceContainer}>
          <ProductQuantityControl
            product={product}
            quantity={product.quantity}
          />
          <PriceDisplay
            price={product.price}
            discountPrice={product.discont_price}
            fontSizeDiscount="40px"
            fontSizePrice="20px"
            className={styles.price}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
