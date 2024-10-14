import { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

const ProductQuantityControl = ({
  product,
  quantity = 1,
  isSubmitBtn = false,
  className,
}) => {
  const [count, setCount] = useState(quantity);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const value = Math.max(1, parseInt(e.target.value, 10));
    setCount(isNaN(value) ? 1 : value);
  };

  const handleClickDecrement = (e) => {
    e.preventDefault();
    setCount((prevCount) => Math.max(1, prevCount - 1));
  };
  const handleClickIncrement = (e) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ ...product, quantity: count }));
  };

  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
      <button
        onClick={handleClickDecrement}
        className={`${styles.btn} ${styles.decrement}`}
        disabled={count <= 1}
      >
        -
      </button>
      <input
        className={styles.countInput}
        name="count"
        type="number"
        value={count}
        onChange={handleChange}
        style={{
          width: `${Math.max(5, String(count).length * 2)}ch`, // Ширина на основе длины строки
        }}
      />
      <button
        onClick={handleClickIncrement}
        className={`${styles.btn} ${styles.increment}`}
      >
        +
      </button>
      {isSubmitBtn && (
        <button type="submit" className={styles.submitBtn}>
          Add to cart
        </button>
      )}
    </form>
  );
};

export default ProductQuantityControl;
