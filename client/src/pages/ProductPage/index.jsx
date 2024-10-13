import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../redux/slices/productSlice";
import { fetchCategory } from "../../redux/slices/categorySlice";
import Navigate from "../../components/Navigate";
import Title from "../../components/Tittle";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.data);
  const category = useSelector((state) => state.category.data.category);
  const [count, setCount] = useState(1);
  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const imageUrl = `http://localhost:3333`;

  const countDiscount = (price, discountPrice) => {
    return Math.round(((price - discountPrice) / price) * 100);
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchCategory(product.categoryId));
  }, [product.categoryId]);

  return (
    <div className={styles.productContainer}>
      <Navigate
        way={[
          { title: "Main Page", link: "/" },
          { title: "Categories", link: "/categories" },
          {
            title: `${category ? category.title : ""}`,
            link: `/categories/${product.categoryId}`,
          },
          {
            title: `${product ? product.title : ""}`,
            link: `/categories/${product.title}`,
          },
        ]}
      />

      <img
        className={styles.imageProduct}
        src={`${imageUrl}${product.image}`}
        alt={`product ${product.title}`}
      />
      <h2 className={styles.titleProduct}>{product.title}</h2>
      <div className={styles.priceContainer}>
        <p className={styles.priceProduct}>{`$${product.price}`}</p>
        <h6 className={styles.discontPriceProduct}>
          {`$${product.discont_price}`}
        </h6>
        {product.discont_price && (
          <div className={styles.blueBox}>
            {`-${countDiscount(product.price, product.discont_price)}%`}
          </div>
        )}
      </div>
      <form className={styles.form}>
        <button className={styles.moreBtn}>-</button>
        <input
          name="count"
          type="number"
          defaultValue={count}
          value={count}
          onChange={handleChange}
        />
        <button className={styles.moreBtn}>+</button>
        <button type="submit" className={styles.submitBtn}>
          submit
        </button>
      </form>
      <h5>Description</h5>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
