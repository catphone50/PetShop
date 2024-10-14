import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/slices/productSlice";
import { fetchCategory } from "../../redux/slices/categorySlice";
import Navigate from "../../components/Navigate";
import Product from "../../components/Product";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.data);
  const category = useSelector((state) => state.category.data.category);

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
      <Product product={product} />
    </div>
  );
};

export default ProductPage;
